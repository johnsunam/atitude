import {FormDataDb} from './collection/formdata.collection.js';

Meteor.publish('getFormData',function(){
  return FormDataDb.find();
})
