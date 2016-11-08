
Meteor.publish('getAccount',function(){
  return Meteor.users.find();
})
