module.exports = {
  friendlyName: 'Help 1',
  description: 'count book group',
  exits: {
    success: {
      description: 'All done.',
    },
  },
  fn: async function (inputs,exits) {
    /*通过sql*/
    //select Type, count(*) from book group by Type;
    var sqls = "select a.Type as group_type, b.name as group_name, count(*) as num from book a join `group` b on a.Type=b.id group by Type;";
    var rawResult = await sails.sendNativeQuery(sqls, []);
    var myresult=rawResult.rows;
    var count_g=await Group.count();
    var myarr=new Array();
    myarr.push({'count_g':count_g});
    myarr.push(myresult);
    console.log(myarr);
    return exits.success(myarr);
    /*结束*/
  }


/*使用orm
    var count_g=await Group.count();
    var groups=await Group.find(
      {select: ['id']}
    );
    var map1 = new Map();
    //初始化map,每个种类的书都为0
    for (var v1 of groups) {
      map1.set(v1.id,0);
    }
    for(var v2 of groups){
      var total = await Book.count({Type:v2.id});
      map1.set(v2.id,total);
    }
    //分组总数（0，分组数）
    map1.set(0,count_g);
    return exits.success(map1);
*/

};

