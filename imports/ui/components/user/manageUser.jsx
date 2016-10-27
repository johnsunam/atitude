import React ,{Component} from 'react'

export default class ManageUser extends Component {
  constructor(props) {
   super(props)
  }
  render(){
    return(    <div className="col-md-10 registration_form pad_t50">
      <div className="col-md-10 col-md-offset-1">
        <h1 className="title">Manage User</h1>
        <div className="category">
          <label>Category</label>
          <select>
            <option>Select Category</option>
          </select>
        </div>
        <table width="100%" border="0" cellspacing="0" cellpadding="0" className="table_cont">
          <tr>
            <th>Staff Id</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Status</th>
            <th>Access</th>
            <th>Edit</th>
          </tr>
          <tr>
            <td>5</td>
            <td>Joy</td>
            <td>9885584470</td>
            <td>Active</td>
            <td><div className="button-container"><a href="define_work_flow.html">Define</a><a href="#">Delete</a></div></td>
            <td><a href="#"><i className="fa fa-edit font20"></i></a></td>
          </tr>
          <tr className="lighbg">
            <td>5</td>
            <td>Joy</td>
            <td>9885584470</td>
            <td>Active</td>
            <td><div className="button-container"><a href="define_work_flow.html">Define</a><a href="#">Delete</a></div></td>
            <td><a href="#"><i className="fa fa-edit font20"></i></a></td>
          </tr>
          <tr>
            <td>5</td>
            <td>Joy</td>
            <td>9885584470</td>
            <td>Active</td>
            <td><div className="button-container"><a href="define_work_flow.html">Define</a><a href="#">Delete</a></div></td>
            <td><a href="#"><i className="fa fa-edit font20"></i></a></td>
          </tr>
          <tr className="lighbg">
            <td>5</td>
            <td>Joy</td>
            <td>9885584470</td>
            <td>Active</td>
            <td><div className="button-container"><a href="define_work_flow.html">Define</a><a href="#">Delete</a></div></td>
            <td><a href="#"><i className="fa fa-edit font20"></i></a></td>
          </tr>
        </table>
      </div>
    </div>)
  }
}