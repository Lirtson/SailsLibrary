/**
 * BookController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var jwt = require('jsonwebtoken');

module.exports = {

  uploadCover: async function (req, res) {

    req.file('cover').upload({
      // don't allow the total upload size to exceed ~10MB
      //maxBytes: 10000000
      dirname: require('path').resolve(sails.config.appPath, 'assets/images/covers')
    },async function whenDone(err, uploadedFiles) {
      if (err) {

        return res.status(500).json({'code':500,'message':'err','data':null});
      }
      // If no files were uploaded, respond with an error.
      if (uploadedFiles.length === 0){
        return res.status(400).json({'code':400,'message':'No file was uploaded','data':null});
      }

      // Get the base URL for our deployed application from our custom config
      // (e.g. this might be "http://foobar.example.com:1339" or "https://example.com")
      var baseUrl = sails.config.custom.baseUrl;

      // Save the "fd" and the url where the avatar for a user can be accessed
      await Book.updateOne({ id:req.params.bookId}).set({
        // Generate a unique URL where the avatar can be downloaded.
        coverUrl: require('util').format('/book/%s/cover', req.params.bookId),
        // Grab the first file and use it's `fd` (file descriptor)
        coverFd: uploadedFiles[0].fd
      })
        .exec((err) => {
          if (err){

            return res.status(500).json({'code':500,'message':'err','data':null});
          }
          return res.status(200).json({'code':200,'message':'ok','data':null});
        });
    });
  },

  cover:async function (req, res){

    await Book.findOne(req.params.bookId).exec((err, book) => {
      if (err) {return res.status(500).json({'code':500,'message':'err','data':null});}
      if (!book) {return res.status(404).json({'code':404,'message':'not found','data':null});}

      // (should have never have hit this endpoint and used the default image)
      if (!book.coverFd) {
        return res.status(404).json({'code':404,'message':'no cover','data':null});
      }

      var SkipperDisk = require('skipper-disk');
      var fileAdapter = SkipperDisk(/* optional opts */);

      // set the filename to the same file as the book uploaded
      res.set('Content-type', 'image/png');

      // Stream the file down
      fileAdapter.read(book.coverFd)
        .on('error', (err) => {
          return res.status(500).json({'code':500,'message':'err','data':err});
          //return res.serverError(err);
        })
        .pipe(res);
    });
  },

  borrow:async function(req,res){
    var ownerId = req.user.id;
    var updatedBook =await Book.updateOne({ id:req.params.bookId })
      .set({
        owner:ownerId
      });

    var createdRecord=await Record.create({ownerId:ownerId, bookId: req.params.bookId}).fetch();//添加记录

    return res.status(200).json({'code':200,'message':'borrow a book successfully','data':createdRecord});
  },


  add1:async function (req,res) {

    /*验证name在2-200，价格只能是数字*/
    if(req.body.Name.length<2||req.body.Name.length>200)
    {return res.status(403).json({'code':403,'message':'wrong name,add a book failed','data':null});}



    if( !_.isNumber(req.body.Price))
    {return res.status(403).json({'code':403,'message':'price should be a number,add a book failed','data':null});}

    var createdBook=await Book.create({Author:req.body.Author.toString(), Name: req.body.Name.toString(),Price:req.body.Price,Type:req.body.Type}).fetch();
    if(createdBook)
    {return res.status(200).json({'code':200,'message':'add a book successfully','data':createdBook});}
    else
    {return res.status(500).json({'code':500,'message':'add a book failed','data':null});}
  },
  delete1:async function(req,res){

    var destroyedRecords=await Book.destroyOne({id:req.params.bookId});

    if(destroyedRecords)
    {return res.status(200).json({'code':200,'message':'delete a book successfully','data':destroyedRecords});}
    else
    {return res.status(400).json({'code':400,'message':'delete a book failed','data':null});}
  },
  update1:function(req,res){
    /*验证name在2-200，价格只能是数字*/
    if(req.body.Name.length<2||req.body.Name.length>200)
    {return res.status(403).json({'code':403,'message':'wrong name,add a book failed','data':null});}

    if(!_.isNumber(req.body.Price))
    {return res.status(403).json({'code':403,'message':'price should be a number,add a book failed','data':null});}

    var updatedBook = Book.updateOne({ id:req.params.bookId})
      .set({
        Author:req.body.Author,
        Name: req.body.Name,
        Price:req.body.Price,
        Type:req.body.Type
      });

    if (updatedBook) {
      sails.log('Updated Success');
      return res.status(200).json({'code':200,'message':'update a book successfully','data':updatedBook});
    }
    else {
      sails.log('Fail');
      return res.status(400).json({'code':400,'message':'update a book failed','data':null});
    }
  },
  get1:async function (req,res) {
    var finn = await Book.findOne({
      id:req.params.bookId
    });

    if (!finn) {
      sails.log('Could not find Finn, sorry.');
      return res.status(400).json({'code':400,'message':'fail','data':null});
    }
    else {
      return res.status(200).json({'code':200,'message':'success','data':finn});
    }
  },
  getAll:function(req,res) {
    var search_key = req.param('search_key');// Name or Author
    var search_value = req.param('search_value');//查询的词
    var sort_by = req.param('sort_by', ['Name']);//sort_by可以是Name、Author或Price，默认为Name
    var order = req.param('order', ['asc']);//可以取asc和desc,默认asc
    var limit = req.param('limit',9007199254740990);//默认为最大值
    var offset = req.param('offset',0);//默认为0
    //limit和offset就是数字，看从第几个数据开始，每页多少数据
    if(search_key==='Name'){

      Book.find({
        where:{Name:search_value.toString()},
        sort:sort_by.toString()+' '+order.toString(),
        limit:limit
      })
        .then((result)=> {
          if (!result) {
            return res.status(404).json({'code': 404, 'message': 'not found', 'data': null});
          }
          return res.status(200).json({'code': 200, 'message': 'success', 'data': result});
        })
        .catch( (err)=>{return res.serverError(err);});
    }
    else if(search_key==='Author'){

      Book.find({
        where: {Author: search_value.toString()},
        sort: sort_by.toString() + ' ' + order.toString(),
        limit: limit,
        skip:offset
      })
          .then((result)=> {
            if (!result) {
              return res.status(404).json({'code': 404, 'message': 'not found', 'data': null});
            }
            return res.status(200).json({'code': 200, 'message': 'success', 'data': result});
          })
          .catch( (err)=>{return res.serverError(err);});
    }
    else{
      /*
      var finn = await Book.find();
      return res.status(200).json({"code":200,"message":"success","data":finn});
      */
      Book.find({
        sort: sort_by.toString() + ' ' + order.toString(),
        limit: limit,
        skip:offset
      })
        .then((result)=> {
          if (!result) {
            return res.status(404).json({'code': 404, 'message': 'not found', 'data': null});
          }
          return res.status(200).json({'code': 200, 'message': 'success', 'data': result});
        })
        .catch( (err)=>{return res.serverError(err);});
    }
  },


};

