//class for crud operation of form ,client,user,roles,pages
import {Session} from 'meteor/session'
class crudClass {
  constructor(){
    this.failure=true;
    this.sur=true;
  }
   create(methodName,data){
     let self= this;
      Meteor.call(methodName,data,function(err,result){
       if(err){
         console.log(err);
         Session.set('res',false)
         Session.set('confirm',true)
       }else{
         console.log(result);
         Session.set('res',true)
         Session.set('confirm',true)
       }
     });



     return {notify:self.sur,fail:self.failure}

}
  delete(methodName,id){
    Meteor.call(methodName,id,function(err){
      return err;
    })
  }
  edit(methodName,record){
    Meteor.call(methodName,record,function(err,result){
      if(err){
        console.log(err);
        Session.set('res',false)
        Session.set('confirm',true)
      }else{
        console.log(result);
        Session.set('res',true)
         Session.set('confirm',true)
      }
    })
  }
}


export default crudClass;
