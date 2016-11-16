import React from 'react';
import ReactDOM from 'react-dom'
import {FlowRouter} from 'meteor/kadira:flow-router'
import {ReactLayout} from 'meteor/kadira:react-layout'
import MainLayout from '../../ui/container/mainLayout.js';
import AddForm from '../../ui/components/aptitude/form/addForm.jsx'
import ManageForm from '../../ui/container/manageForm.js'
import AddClient from '../../ui/components/aptitude/client/addClient.jsx'
import ManageClient from '../../ui/container/manageClient.js'
import AddPage from '../../ui/container/addPage.js'
import ManagePage from '../../ui/container/managePage.js'
import AddRole from '../../ui/components/aptitude/role/addRole.jsx'
import ManageRole from '../../ui/container/manageRole.js'
import AddTask from '../../ui/components/aptitude/task/addTask.jsx'
import ManageTask from '../../ui/container/manageTask.js'
import AddWorkFlow from '../../ui/container/addWorkFlow.js'
import ManageWorkFlow from '../../ui/container/manageWorkFlow.js'
import defineWorkFlow from '../../ui/components/aptitude/workflow/defineWorkFlow.jsx'
import AddUser from '../../ui/components/aptitude/user/addUser.jsx'
import ManageUser from '../../ui/container/manageUser.js'
import ClientAdminLayout from '../../ui/container/clientAdminLayout.js'
import AdminLogin from '../../ui/components/accounts/login/adminlogin.jsx'
import ClientLogin from '../../ui/components/accounts/login/clientlogin.jsx'
import ClientAdminPages from '../../ui/container/clientAdminPages.js'
import AddDepartment from '../../ui/components/client/department/addDepartment.jsx'
import ManageDepartment from '../../ui/container/manageDepartment'
import AddClientUser from '../../ui/container/addClientUser.js';
import ManageClientUser from '../../ui/container/manageClientUser.js'
import AssignRoles from '../../ui/container/assignRoles.js'
import ClientUserLogin from '../../ui/components/app/login/login.jsx'
import AppDashboard from '../../ui/container/appDashboard.js'
import AptitudeAccountsLayout from '../../ui/container/aptitudeAccountsLayout.js'
import ClientAccountsLayout from '../../ui/container/clientAccountLayout.js'
import AppAccountsLayout  from '../../ui/container/appAccountLayout.js'
import AppLayout from '../../ui/container/appLayout.js'
import EditForm from '../../ui/container/editForm.js'
FlowRouter.route('/client/add-department',{
  name:'addDepartment',
  action:function(){
    ReactLayout.render(ClientAdminLayout,{
      content:<AddDepartment />
    })
  }
});
FlowRouter.route('/client/manage-department',{
  name:'manageDepartment',
  action:function(){
    ReactLayout.render(ClientAdminLayout,{
      content:<ManageDepartment/>
    })
  }
});

FlowRouter.route('/client/manage-role',{
  name:'manageClientRole',
  action:function(){
    ReactLayout.render(ClientAdminLayout,{
      content:<ManageClientRole/>
    })
  }
});
FlowRouter.route('/client/add-role',{
  name:'addClientRole',
  action:function(){
    ReactLayout.render(ClientAdminLayout,{
      content:<AddClientRole/>
    })
  }
});
FlowRouter.route('/client/add-user',{
  name:'addClientUser',
  action:function(){
    ReactLayout.render(ClientAdminLayout,{
      content:<AddClientUser/>
    })
  }
});
FlowRouter.route('/client/manage-user',{
  name:'manageClientUser',
  action:function(){
    ReactLayout.render(ClientAdminLayout,{
      content:<ManageClientUser/>
    })
  }
});
//route for add form
FlowRouter.route('/aptitude/assign-roles',{
  name:'assignRoles',
  action:function(){
    ReactLayout.render(MainLayout,{
      content:<AssignRoles/>
    })
  }
});

FlowRouter.route('/aptitude/add-form',{
  name:'addForm',
  action:function(){
    ReactLayout.render(MainLayout,{
      content:<AddForm/>
    })
  }
});

//route for manage form
FlowRouter.route('/aptitude/manage-form',{
  name:'manageForm',
  action:function(){
    ReactLayout.render(MainLayout,{
      content:<ManageForm/>
    })
  }
});

//route for add client
FlowRouter.route('/aptitude/add-client',{
  name:'addClient',
  action:function(){
    ReactLayout.render(MainLayout,{
      content:<AddClient/>
    })
  }
});

//route for manage client
FlowRouter.route('/aptitude/manage-client',{
  name:'manageClient',
  action:function(){
    ReactLayout.render(MainLayout,{
      content:<ManageClient/>
    })
  }
});

//route for add page
FlowRouter.route('/aptitude/add-page',{
  name:'addPage',
  action:function(){
    ReactLayout.render(MainLayout,{
      content:<AddPage/>
    })
  }
});

//route for manage page
FlowRouter.route('/aptitude/manage-page',{
  name:'managePage',
  action:function(){
    ReactLayout.render(MainLayout,{
      content:<ManagePage/>
    })
  }
});

//route for add user
FlowRouter.route('/aptitude/add-user',{
  name:'addUser',
  action:function(){
    ReactLayout.render(MainLayout,{
      content:<AddUser/>
    })
  }
});

//route for manage user
FlowRouter.route('/aptitude/manage-user',{
  name:'manageUser',
  action:function(){
    ReactLayout.render(MainLayout,{
      content:<ManageUser/>
    })
  }
});
FlowRouter.route('/aptitude/edit-form/:id',{
  name:'editForm',
  action:function(params){
    ReactLayout.render(MainLayout,{
      content:<EditForm id={params.id}/>
    })
  }
})
//route for add role
FlowRouter.route('/aptitude/add-role',{
  name:'addRole',
  action:function(){
    ReactLayout.render(MainLayout,{
      content:<AddRole/>
    })
  }
});

//route for manage role
FlowRouter.route('/aptitude/manage-role',{
  name:'manageRole',
  action:function(){
    ReactLayout.render(MainLayout,{
      content:<ManageRole/>
    })
  }
});

//route for add task
FlowRouter.route('/aptitude/add-task',{
  name:'addTask',
  action:function(){
    ReactLayout.render(MainLayout,{
      content:<AddTask/>
    })
  }
});

//route for manage task
FlowRouter.route('/aptitude/manage-task',{
  name:'manageTask',
  action:function(){
    ReactLayout.render(MainLayout,{
      content:<ManageTask/>
    })
  }
});

//route for add workflow
FlowRouter.route('/aptitude/add-workflow',{
  name:'addWorkFlow',
  action:function(){
    ReactLayout.render(MainLayout,{
      content:<AddWorkFlow/>
    })
  }
});

//route for manage workflow
FlowRouter.route('/aptitude/manage-workflow',{
  name:'manageWorkFlow',
  action:function(){
    ReactLayout.render(MainLayout,{
      content:<ManageWorkFlow/>
    })
  }
});
//route for define workflow
FlowRouter.route('/aptitude/define-workflow',{
  name:'defineWorkFlow',
  action:function(){
    ReactLayout.render(MainLayout,{
      content:<DefineWorkFlow/>
    })
  }
});

FlowRouter.route('/client/dashboard',{
  name:'client',
  action:function(){
    ReactLayout.render(ClientAdminLayout,{
      content:<ClientAdminPages/>
    })
  }
});
FlowRouter.route('/client/login',{
  name:'clientLogin',
  action:function(){
    ReactLayout.render(ClientAccountsLayout,{
      content:<ClientLogin/>
    })
  }
});
FlowRouter.route('/aptitude/login',{
  name:'aptitudeLogin',
  action:function(){
    ReactLayout.render(AptitudeAccountsLayout,{
      content:<AdminLogin/>
    })
  }
});
FlowRouter.route('/app/login',{
  name:'login',
  action:function(){
    ReactLayout.render(AppAccountsLayout,{
      content:<ClientUserLogin/>
    })
  }
});

FlowRouter.route('/app/dashboard',{
  name:'dashboard',
  action:function(){
    ReactLayout.render(AppLayout,{
      content:<AppDashboard/>
    })
  }
})
