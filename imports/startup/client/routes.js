import React from 'react';
import ReactDOM from 'react-dom'
import {FlowRouter} from 'meteor/kadira:flow-router'
import {ReactLayout} from 'meteor/kadira:react-layout'
//import {Router, Route, browserHistory,IndexRoute} from 'react-router';
import MainLayout from '../../ui/layouts/mainLayout.jsx';
import AddForm from '../../ui/components/form/addForm.jsx'
import ManageForm from '../../ui/components/form/manageForm.jsx'




FlowRouter.route('/',{
  name:'addPage',
  action:function(){
    ReactLayout.render(MainLayout,{
      content:<AddForm/>
    })
  }
});

FlowRouter.route('/manageform',{
  name:'addPage',
  action:function(){
    ReactLayout.render(MainLayout,{
      content:<ManageForm/>
    })
  }
});
