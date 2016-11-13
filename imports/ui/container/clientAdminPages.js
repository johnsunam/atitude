import { composeWithTracker } from 'react-komposer';
import {PageDb} from '../../api/page/collection/page.collection.js'
import {ClientDb} from '../../api/clients/collection/client.collection.js'
import ClientAdminPages from '../components/client/clientPage/clientPage.jsx'
const composer = ( props, onData ) => {
  let email=Meteor.user()

    var subcription=Meteor.subscribe('getPage');
    var subcription=Meteor.subscribe('getClient');
    var subcription=Meteor.subscribe('getAccount');
    if(subcription.ready()){
      let user=Meteor.users.findOne({_id:Meteor.userId()})
      console.log(user);
      let email=user?user.emails[0].address:null;

      let client=ClientDb.findOne({email:email});

      let pages=client?PageDb.find({clientName:client.companyName}).fetch():[];
      console.log(pages);
      onData( null, {pages} )
      }

  };


export default composeWithTracker(composer)(ClientAdminPages);
