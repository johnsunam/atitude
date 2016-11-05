import React,{Component} from 'react'

export default ClientAdminSidebar=()=>{
  return(<aside className="main-sidebar">
    <section className="sidebar">
      <ul className="sidebar-menu">
        <li className="header">MAIN NAVIGATION</li>
        <li className="active treeview"> <a href="#"> <i className="fa fa-dashboard"></i> <span>Dashboard</span> <span className="pull-right-container"> <i className="fa fa-angle-left pull-right"></i> </span> </a>
          <ul className="treeview-menu">
            <li className="active"><a href="index.html"><i className="fa fa-circle-o"></i> Menu One </a></li>
            <li><a href="index2.html"><i className="fa fa-circle-o"></i> Menu Two </a></li>
          </ul>
        </li>
        <li className="treeview"> <a href="#"> <i className="fa fa-pie-chart"></i> <span>Client</span> <span className="pull-right-container"> <i className="fa fa-angle-left pull-right"></i> </span> </a> </li>
        <li className="treeview"> <a href="#"> <i className="fa fa-laptop"></i> <span>User</span> <span className="pull-right-container"> <i className="fa fa-angle-left pull-right"></i> </span> </a> </li>
        <li className="treeview"> <a href="#"> <i className="fa fa-edit"></i> <span>Forms</span> <span className="pull-right-container"> <i className="fa fa-angle-left pull-right"></i> </span> </a> </li>
      </ul>
    </section>

  </aside>)
}
