import React,{Component} from 'react';
import {Link} from 'react-router';

export default SiderBar=()=>{
  return(<div className="col-md-2 no_pad">
      <div className="collapse navbar-collapse navbar-ex1-collapse">
        <ul className="nav navbar-nav side-nav">
          <li className=" "><a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user"></i>Form Builder<b className=""><img src="images/btm_arrow.png"/></b></a>
            <ul className="">
              <li><a href="javascript:void(0)">Form</a>
                <ul>
                  <li><a href="/">Add Form</a></li>
                  <li><a href="/manage-form">Manage Form</a></li>
                </ul>
              </li>
              <li><a href="javascript:void(0)">Client</a>
                <ul>
                  <li><a href="/add-client">Add Client</a></li>
                  <li><a href="/manage-client">Manage Client</a></li>
                </ul>
              </li>
              <li><a href="javascript:void(0)">Page</a>
                <ul>
                  <li><a href="/add-page">Add Page</a></li>
                  <li><a href="/manage-page">Manage Page</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li className=" "><a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user"></i>Work Flow Builder<b className=""><img src="images/btm_arrow.png"/></b></a>
            <ul className="">
              <li><a href="javascript:void(0)">Task</a>
               <ul>
                  <li><a href="/add-task">Add Task</a></li>
                  <li><a href="/manage-task">Manage Task</a></li>
                </ul>
              </li>
              <li><a href="javascript:void(0)">Work Flow</a>
                <ul>
                  <li><a href="/add-workflow">Add Work Flow</a></li>
                  <li><a href="/manage-workflow">Manage Work Flow</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li className=" "><a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user"></i>User and Roles<b className=""><img src="images/btm_arrow.png"/></b></a>
            <ul className="">
              <li><a href="javascript:void(0)">User</a>
                <ul>
                  <li><a href="add-user">Add User</a></li>
                  <li><a href="manage-user">Manage User</a></li>
                </ul>
              </li>
              <li><a href="javascript:void(0)">Roles</a>
                <ul>
                  <li><a href="add-role">Add Role</a></li>
                  <li><a href="manage-role">Manage Role</a></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>)
}
