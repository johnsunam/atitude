import {FormDataDb} from './collection/formdata.collection.js';
Meteor.methods({
  'addFormData':function(data){

    FormDataDb.insert({page:data.page,formdata:data.data,user:this.userId})
  }

})
