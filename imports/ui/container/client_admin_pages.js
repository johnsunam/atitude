import { composeWithTracker } from 'react-komposer';
import {PageDb} from '../../api/page/collection/page.collection.js'
import {ClientDb} from '../../api/clients/collection/client.collection.js'
import ClientAdminPages from '../components/clientPage/clientPage.jsx'
const composer = ( props, onData ) => {
  let email=Meteor.user()

    var subcription=Meteor.subscribe('getPage');
    var subcription=Meteor.subscribe('getClient');
    if(subcription.ready()){
      let client=ClientDb.findOne({email:email.emails[0].address});
      let pages=PageDb.find({companyName:client.companyName}).fetch();
      onData( null, {pages} )
      }

  };


export default composeWithTracker(composer)(ClientAdminPages);
