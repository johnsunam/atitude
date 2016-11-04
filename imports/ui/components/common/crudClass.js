class crudeClass {
  constructor(){

  }
   create(methodName,data){
      Meteor.call(methodName,data,function(err){
       if(err){
        return err;
       }
     });
     return true
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


export default crudeClass;
