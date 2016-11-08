//class for crud operation of form ,client,user,roles,pages
class crudClass {
  constructor(){

  }
   create(methodName,data){

      var code=Meteor.call(methodName,data,function(err,res){
       if(err){
         console.log(err);
        return err;
       }
       else {
                console.log(res);
       }
     });

}
  delete(methodName,id){
    Meteor.call(methodName,id,function(err){
      return err;
    })
  }
  edit(methodName,record){
    Meteor.call(methodName,record,function(err){
      return err;
    })
  }
}


export default crudClass;
