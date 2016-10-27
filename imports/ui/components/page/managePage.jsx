import React ,{Component} from 'react'

export default class ManagePage extends Component {
  constructor(props) {
   super(props)
  }
  render(){
    return( <div className="col-md-10 registration_form pad_t50">
      <div className="col-md-10 col-md-offset-1">
        <h1 className="title">Form Allocation Management</h1>
        <div className="category">
          <label>Client ID</label>
          <select>
            <option>Client ID 1</option>
          </select>
        </div>
        <table width="100%" border="0" cellspacing="0" cellpadding="0" className="table_cont">
          <tr>
            <th>Form Name</th>
            <th>Status</th>
            <th>Access</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>Feedback for client</td>
            <td>Active</td>
            <td><div className="button-container"> <a href="#">Delete</a></div></td>
            <td><a href="#"><i className="fa fa-edit font20"></i></a></td>
          </tr>
          <tr className="lighbg">
            <td>Feedback for client</td>
            <td>Active</td>
            <td><div className="button-container"> <a href="#">Delete</a></div></td>
            <td><a href="#"><i className="fa fa-edit font20"></i></a></td>
          </tr>
          <tr>
            <td>Feedback for client</td>
            <td>Active</td>
            <td><div className="button-container"> <a href="#">Delete</a></div></td>
            <td><a href="#"><i className="fa fa-edit font20"></i></a></td>
          </tr>
          <tr className="lighbg">
            <td>Feedback for client</td>
            <td>Active</td>
            <td><div className="button-container"> <a href="#">Delete</a></div></td>
            <td><a href="#"><i className="fa fa-edit font20"></i></a></td>
          </tr>
        </table>
      </div>
    </div>)
  }
}