import React,{Component} from 'react'

export default ClientUserSidebar=(props)=>{
  return(<aside className="main-sidebar">
    <section className="sidebar">
      <ul className="sidebar-menu">
        <li className="header">MAIN NAVIGATION</li>
        <li className="treeview active"> <a href="#"><i className="fa fa-dashboard"></i> <span>Pages</span> <span className="pull-right-container"> <i className="fa fa-angle-left pull-right"></i> </span> </a>
        <ul>
        {props.data.map((page) => {
          return(<li><a href="">{page.name}</a></li>)
        })}
        </ul>
          </li>
      </ul>
    </section>

  </aside>)
}
