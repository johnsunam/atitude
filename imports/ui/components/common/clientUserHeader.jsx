import React,{Component} from 'react'

export default ClientUserHeader=(props)=>{
  return(<header className="main-header"> <a href="index2.html" className="logo"> <span className="logo-lg"> APTITUDE </span> </a>
    <nav className="navbar navbar-static-top">
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          <li className="dropdown messages-menu"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"> <i className="fa fa-envelope-o"></i> <span className="label label-success">4</span> </a> </li>
          <li className="dropdown user user-menu" style={{"background":"#069"}}> <a href="#" className="dropdown-toggle" data-toggle="dropdown"> <img src="img/user.jpg" className="user-image" alt="User Image"/> <span className="hidden-xs">Srinivas Kalluri</span> </a>
            <ul className="dropdown-menu">
              <li className="user-footer">
                <div className="pull-left"> <a href="#" className="btn btn-default btn-flat">Profile</a> </div>
                <div className="pull-right"> <a href="#" className="btn btn-default btn-flat" onClick={()=>{
                  Meteor.logout()
                }}>Sign out</a> </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>)
}
