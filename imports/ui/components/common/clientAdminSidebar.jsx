import React,{Component} from 'react'

export default ClientAdminSidebar=()=>{
  return(<aside className="main-sidebar">
    <section className="sidebar">
      <ul className="sidebar-menu">
        <li className="header">MAIN NAVIGATION</li>
        <li className="treeview active"> <a href="/client/dashboard"><i className="fa fa-dashboard"></i> <span>Dashboard</span> <span className="pull-right-container"> <i className="fa fa-angle-left pull-right"></i> </span> </a>
        </li>
        <li className="treeview active"> <a href="#"> <i className="fa fa-pie-chart"></i> <span>User</span> <span className="pull-right-container"> <i className="fa fa-angle-left pull-right"></i> </span> </a>
        <ul className="treeview-menu">
          <li className=""><a href="/client/add-user"><i className="fa fa-circle-o"></i>Add User</a></li>
          <li><a href="/client/manage-user"><i className="fa fa-circle-o"></i>Manage User</a></li>
        </ul>
         </li>
        <li className="treeview active"> <a href="#"> <i className="fa fa-laptop"></i> <span>Department</span> <span className="pull-right-container"> <i className="fa fa-angle-left pull-right"></i> </span> </a>
        <ul className="treeview-menu">
          <li className="active"><a href="/client/add-department"><i className="fa fa-circle-o"></i> Add Department </a></li>
          <li><a href="/client/manage-department"><i className="fa fa-circle-o"></i>Manage Department</a></li>
        </ul>
         </li>
        <li className="treeview active"> <a href="#"> <i className="fa fa-edit"></i> <span>Role</span> <span className="pull-right-container"> <i className="fa fa-angle-left pull-right"></i> </span> </a>
        <ul className="treeview-menu">
          <li className="active"><a href="/client/add-role"><i className="fa fa-circle-o"></i> Add Role</a></li>
          <li><a href="/client/manage-role"><i className="fa fa-circle-o"></i>Manage Role</a></li>
        </ul></li>
      </ul>
    </section>

  </aside>)
}
