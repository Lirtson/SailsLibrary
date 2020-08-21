module.exports = {
  f1:async function (req, res){
    var map1 = await sails.helpers.help1();
    var data1 = [];
    //.push
    map1.forEach((value,key) => {
      if(key!==0)
      {data1.push({'groupId':key,'num':value});}
    });
    var data2=[];
    var count_g=map1.get(0);
    data2.push({'count_g':count_g});
    data2.push(data1);
    return res.status(200).json({'code':200,'message':'ok','data':data2});
  },
  //新的
  f2:async function (req, res){
    var data1 = await sails.helpers.help1();
    return res.status(200).json({'code':200,'message':'ok','data':data1});
  },
};

