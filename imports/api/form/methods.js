import {FormDb} from './collection/form.collection.js'


Meteor.methods({
  'addForm':function(form){
    FormDb.insert(form)
  }

})
