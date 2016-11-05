import React from 'react';
import ReactDOM from 'react-dom'
import {FlowRouter} from 'meteor/kadira:flow-router'
import {ReactLayout} from 'meteor/kadira:react-layout'
import MainLayout from '../../ui/container/mainLayout.js';
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
import ClientAdminLayout from '../../ui/container/client_admin_layout.js'
import AccountLayout from '../../ui/layouts/accountLayout.jsx'
import AdminLogin from '../../ui/components/accounts/login/adminlogin.jsx'
import ClientLogin from '../../ui/components/accounts/login/clientlogin.jsx'
import ClientAdminPages from '../../ui/container/client_admin_pages.js'
import AddDepartment from '../../ui/components/department/addDepartment.jsx'
import ManageDepartment from '../../ui/container/manageDepartment'
import AddClientUser from '../../ui/container/addClientUser.js';
import ManageClientUser from '../../ui/container/manageClientUser.js'
import AddClientRole from '../../ui/components/clientRole/addClientRole.jsx'
import ManageClientRole from '../../ui/container/manageClientRole.js'

FlowRouter.route('/add-department',{
  name:'defineWorkFlow',
  action:function(){
    ReactLayout.render(ClientAdminLayout,{
      content:<AddDepartment/>
    })
  }
});
FlowRouter.route('/manage-department',{
  name:'defineWorkFlow',
  action:function(){
    ReactLayout.render(ClientAdminLayout,{
      content:<ManageDepartment/>
    })
  }
});

FlowRouter.route('/client-manage-role',{
  name:'defineWorkFlow',
  action:function(){
    ReactLayout.render(ClientAdminLayout,{
      content:<ManageClientRole/>
    })
  }
});
FlowRouter.route('/client-add-role',{
  name:'defineWorkFlow',
  action:function(){
    ReactLayout.render(ClientAdminLayout,{
      content:<AddClientRole/>
    })
  }
});
FlowRouter.route('/client-add-user',{
  name:'defineWorkFlow',
  action:function(){
    ReactLayout.render(ClientAdminLayout,{
      content:<AddClientUser/>
    })
  }
});
FlowRouter.route('/client-manage-user',{
  name:'defineWorkFlow',
  action:function(){
    ReactLayout.render(ClientAdminLayout,{
      content:<ManageClientUser/>
    })
  }
});
//route for add form

FlowRouter.route('/admin',{
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

FlowRouter.route('/client',{
  name:'defineWorkFlow',
  action:function(){
    ReactLayout.render(ClientAdminLayout,{
      content:<ClientAdminPages/>
    })
  }
});
FlowRouter.route('/client-login',{
  name:'defineWorkFlow',
  action:function(){
    ReactLayout.render(AccountLayout,{
      content:<ClientLogin/>
    })
  }
});
FlowRouter.route('/admin-login',{
  name:'defineWorkFlow',
  action:function(){
    ReactLayout.render(AccountLayout,{
      content:<AdminLogin/>
    })
  }
});
