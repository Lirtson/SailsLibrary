module.exports = {

  description: 'init something',
  friendlyName: 'initThing',

  fn: async function (inputs, exits) {
    //group
    await Group.createEach([{name:"IT"},{name:"FOOD"}]);



    //init-book
    var book1=new Object();
    book1.Author="EE88";
    book1.Name="ummer";
    book1.Price=111;

    var book2=new Object();
    book2.Author="RR88";
    book2.Name="pring";
    book2.Price=46;

    console.log(book1);
    console.log(book2);

    var r1=await Book.create(book1).fetch();
    var r2=await Book.create(book2).fetch();

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

    //init-user

    var user1=new Object();
    user1.password="111";
    user1.email="111@1.com";
    console.log(user1);
    var user2=new Object();
    user2.password="222";
    user2.email="222@2.com";
    console.log(user2);



    var admin1=new Object();
    admin1.password="bor1";
    admin1.email="bor@1.com";
    admin1.isAdmin=1;
    console.log(admin1);

    var admin2=new Object();
    admin2.password="bor2";
    admin2.email="bor@2.com";
    admin2.isAdmin=1;
    console.log(admin2);


    await User.createEach([user1,user2]);
    await User.createEach([admin1,admin2]);

    /*
    var book3=new Object();
    book3.Author="ABC";
    book3.Name="boo1";
    book3.Price=11;

    var book4=new Object();
    book4.Author="ABC";
    book4.Name="boo2";
    book4.Price=46;

    await Book.create({Author:book3.Author.toString(), Name: book3.Name.toString(),Price:book3.Price})
      .set({
          Type:1
        });

    await Book.create({Author:book4.Author.toString(), Name: book4.Name.toString(),Price:book4.Price})
      .set({
        Type:2
      });
  */
    return exits.success();
  }

};
