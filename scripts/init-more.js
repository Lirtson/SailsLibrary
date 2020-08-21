module.exports = {

  description: 'init something',
  friendlyName: 'initThing',

  fn: async function (inputs, exits) {
    //group
    await Group.createEach([{name:"ANIMAL"},{name:"NATURE"}]);



    //init-book
    var book3=new Object();
    book3.Author="ABC";
    book3.Name="boo1";
    book3.Price=11;

    var book4=new Object();
    book4.Author="ABC";
    book4.Name="boo2";
    book4.Price=46;

    console.log(book3);
    console.log(book4);

    var r1=await Book.create(book3).fetch();
    var r2=await Book.create(book4).fetch();

    //update book
    var updatedBook1 =await Book.updateOne({ id:r1.id})
      .set({
        Type:1
      });
    var updatedBook2 =await Book.updateOne({ id:r2.id})
      .set({
        Type:2
      });
    console.log("update ok");


    return exits.success();
  }

};
