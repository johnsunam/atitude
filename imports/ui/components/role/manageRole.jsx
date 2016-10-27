import React ,{Component} from 'react'

export default class ManageRole extends Component {
  constructor(props) {
   super(props)
  }
  render(){
    return(<div className="col-md-10 registration_form pad_t50">
      <div className="col-md-10 col-md-offset-1">
        <h1 className="title">Manage Role</h1>
        <table width="100%" border="0" cellspacing="0" cellpadding="0" className="table_cont">
          <tr>
            <th>Role Name</th>
            <th>Status</th>
            <th>Access</th>
            <th>Edit</th>
            
          </tr>
          <tr>
            <td>Manage</td>
            <td>Active</td>
            <td><div className="button-container"><a href="define_work_flow.html">Define</a><a href="#">Delete</a></div></td>
            <td><a href="#"><i className="fa fa-edit font20"></i></a></td>
            
          </tr>
          <tr className="lighbg">
            <td>Manage</td>
            <td>Active</td>
            <td><div className="button-container"><a href="define_work_flow.html">Define</a><a href="#">Delete</a></div></td>
            <td><a href="#"><i className="fa fa-edit font20"></i></a></td>
           
          </tr>
          <tr>
            <td>Manage</td>
            <td>Active</td>
            <td><div className="button-container"><a href="define_work_flow.html">Define</a><a href="#">Delete</a></div></td>
            <td><a href="#"><i className="fa fa-edit font20"></i></a></td>
             
          </tr>
          <tr className="lighbg">
            <td>Manage</td>
            <td>Active</td>
            <td><div className="button-container"><a href="define_work_flow.html">Define</a><a href="#">Delete</a></div></td>
            <td><a href="#"><i className="fa fa-edit font20"></i></a></td>
            
          </tr>
        </table>
      </div>
    </div>)
  }
}