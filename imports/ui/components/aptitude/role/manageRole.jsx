//edit,delete and lists roles

import React ,{Component} from 'react'
import AddRole from './addRole.jsx'
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
			<th>Action </th>
          </tr>
		  {this.props.roles.map((role)=>{
			return(<tr>
              <td>{role.name}</td>
              <td>{role.description}</td>
              <td>{role.status}</td>
               <td><div className="button-container">
              <a href="#"  data-toggle="modal" data-target={`#${role._id}`}>Edit</a>
              <div className="modal fade" id={`${role._id}`} tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
              <AddRole edit="true" role={role}/>
            </div>
              <a href="#" id={role._id} onClick={(e)=>{
                let obj=new crudClass()
                obj.delete('deleteRole',e.target.id)
              }}>Delete</a></div></td>

            </tr>)
          })}

        </table>
      </div>
    </div>)
  }
}
