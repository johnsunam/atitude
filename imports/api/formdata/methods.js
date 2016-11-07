import {FormDataDb} from './collection/formdata.collection.js';
Meteor.methods({
  'addFormData':function(data){
    console.log(data);
    FormDataDb.insert({page:data.page,formdata:data.page,user:this.userId})
  }

})
