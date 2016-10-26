import React,{Component} from 'react'

export default SiderBar=()=>{
  return(<div className="col-md-2 no_pad">
      <div className="collapse navbar-collapse navbar-ex1-collapse">
        <ul className="nav navbar-nav side-nav">
          <li className=" "><a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user"></i>Form Builder<b className=""><img src="images/btm_arrow.png"/></b></a>
            <ul className="">
              <li><a href="javascript:void(0)">Form</a>
                <ul>
                  <li><a href="add_form.html">Add Form</a></li>
                  <li><a href="manage_form.html">Manage Form</a></li>
                </ul>
              </li>
              <li><a href="javascript:void(0)">Client</a>
                <ul>
                  <li><a href="add_client.html">Add Client</a></li>
                  <li><a href="manage_client.html">Manage Client</a></li>
                </ul>
              </li>
              <li><a href="javascript:void(0)">Page</a>
                <ul>
                  <li><a href="add_page.html">Add Page</a></li>
                  <li><a href="manage_page.html">Manage Page</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li className=" "><a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user"></i>Work Flow Builder<b className=""><img src="images/btm_arrow.png"/></b></a>
            <ul className="">
              <li><a href="javascript:void(0)">Task</a>
               <ul>
                  <li><a href="add_task.html">Add Task</a></li>
                  <li><a href="manage_task.html">Manage Task</a></li>
                </ul>
              </li>
              <li><a href="javascript:void(0)">Work Flow</a>
                <ul>
                  <li><a href="add_workflow.html">Add Work Flow</a></li>
                  <li><a href="manage_workflow.html">Manage Work Flow</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li className=" "><a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user"></i>User and Roles<b className=""><img src="images/btm_arrow.png"/></b></a>
            <ul className="">
              <li><a href="javascript:void(0)">User</a>
                <ul>
                  <li><a href="add_user.html">Add User</a></li>
                  <li><a href="manage_user.html">Manage User</a></li>
                </ul>
              </li>
              <li><a href="javascript:void(0)">Roles</a>
                <ul>
                  <li><a href="add_role.html">Add Role</a></li>
                  <li><a href="manage_role.html">Manage Role</a></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>)
}
