import React ,{Component} from 'react'

export default class ManageUser extends Component {
  constructor(props) {
   super(props)
  }
  render(){
    return( <div className="col-md-10 registration_form pad_t50">
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
            <th>Name</th>
            <th>Mobile</th>
			<th>Email</th>
            <th>Status</th>
            <th>Access</th>
          </tr>
		  {this.props.users.map((user)=>{
			  return(<tr>
              <td>{user.name}</td>
              <td>{user.mobile}</td>
              <td>{user.email}</td>
			  <td>{user.status}</td>
              <td><div className="button-container">
              <a href="#">Edit</a><a href="#" id={user._id} onClick={(e)=>{
                Meteor.call('deleteUser',e.target.id)
              }}>Delete</a></div></td>

            </tr>)
          })}
        </table>
      </div>
    </div>)
  }
}
