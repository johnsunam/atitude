import React from 'react';
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory,IndexRoute} from 'react-router';
import MainLayout from '../../ui/layouts/mainLayout.jsx';
import AddForm from '../../ui/components/form/addForm.jsx'
Meteor.startup(function(){
  ReactDOM.render(router,document.getElementById("root"));
})

router=(<Router history={browserHistory}>
        <Route component={MainLayout} path="/">
          <IndexRoute component={AddForm}></IndexRoute>
        </Route>
</Router>)
