import React from 'react';
import ReactDOM from 'react-dom'
import {FlowRouter} from 'meteor/kadira:flow-router'
import {ReactLayout} from 'meteor/kadira:react-layout'
import MainLayout from '../../ui/layouts/mainLayout.jsx';
import AddForm from '../../ui/components/form/addForm.jsx'
import ManageForm from '../../ui/components/form/manageForm.jsx'
import AddClient from '../../ui/components/clients/addClient.jsx'
import ManageClient from '../../ui/container/manageClient.js'
import AddPage from '../../ui/container/addPage.js'
import ManagePage from '../../ui/container/managePage.js'
import AddRole from '../../ui/components/role/addRole.jsx'
import ManageRole from '../../ui/container/manageRole.js'
import AddTask from '../../ui/components/task/addTask.jsx'
import ManageTask from '../../ui/container/manageTask.js'
import AddWorkFlow from '../../ui/components/workflow/addWorkFlow.jsx'
import ManageWorkFlow from '../../ui/container/manageWorkFlow.js'
import defineWorkFlow from '../../ui/components/workflow/defineWorkFlow.jsx'
import AddUser from '../../ui/components/user/addUser.jsx'
import ManageUser from '../../ui/container/manageUser.js'



//route for add form
FlowRouter.route('/',{
  name:'addForm',
  action:function(){
    ReactLayout.render(MainLayout,{
      content:<AddForm/>
    })
  }
});

//route for manage form
FlowRouter.route('/manage-form',{
  name:'manageForm',
  action:function(){
    ReactLayout.render(MainLayout,{
      content:<ManageForm/>
    })
  }
});

//route for add client
FlowRouter.route('/add-client',{
  name:'addClient',
  action:function(){
    ReactLayout.render(MainLayout,{
      content:<AddClient/>
    })
  }
});

//route for manage client
FlowRouter.route('/manage-client',{
  name:'manageClient',
  action:function(){
    ReactLayout.render(MainLayout,{
      content:<ManageClient/>
    })
  }
});

//route for add page
FlowRouter.route('/add-page',{
  name:'addPage',
  action:function(){
    ReactLayout.render(MainLayout,{
      content:<AddPage/>
    })
  }
});

//route for manage page
FlowRouter.route('/manage-page',{
  name:'managePage',
  action:function(){
    ReactLayout.render(MainLayout,{
      content:<ManagePage/>
    })
  }
});

//route for add user
FlowRouter.route('/add-user',{
  name:'addUser',
  action:function(){
    ReactLayout.render(MainLayout,{
      content:<AddUser/>
    })
  }
});

//route for manage user
FlowRouter.route('/manage-user',{
  name:'manageUser',
  action:function(){
    ReactLayout.render(MainLayout,{
      content:<ManageUser/>
    })
  }
});

//route for add role
FlowRouter.route('/add-role',{
  name:'addRole',
  action:function(){
    ReactLayout.render(MainLayout,{
      content:<AddRole/>
    })
  }
});

//route for manage role
FlowRouter.route('/manage-role',{
  name:'manageRole',
  action:function(){
    ReactLayout.render(MainLayout,{
      content:<ManageRole/>
    })
  }
});

//route for add task
FlowRouter.route('/add-task',{
  name:'addTask',
  action:function(){
    ReactLayout.render(MainLayout,{
      content:<AddTask/>
    })
  }
});

//route for manage task
FlowRouter.route('/manage-task',{
  name:'manageTask',
  action:function(){
    ReactLayout.render(MainLayout,{
      content:<ManageTask/>
    })
  }
});

//route for add workflow
FlowRouter.route('/add-workflow',{
  name:'addWorkFlow',
  action:function(){
    ReactLayout.render(MainLayout,{
      content:<AddWorkFlow/>
    })
  }
});

//route for manage workflow
FlowRouter.route('/manage-workflow',{
  name:'manageWorkFlow',
  action:function(){
    ReactLayout.render(MainLayout,{
      content:<ManageWorkFlow/>
    })
  }
});
//route for define workflow
FlowRouter.route('/define-workflow',{
  name:'defineWorkFlow',
  action:function(){
    ReactLayout.render(MainLayout,{
      content:<DefineWorkFlow/>
    })
  }
});
