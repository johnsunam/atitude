import React ,{Component} from 'react'
import AddDepartment from '../department/addDepartment.jsx'
import crudClass from '../../common/crudClass.js'
export default class ManageDepartment extends Component {
  constructor(props) {
   super(props)
  }
  render(){
    return(<div className="col-md-10 registration_form pad_t50">
      <div className="col-md-10 col-md-offset-1">
        <h1 className="title">Manage Department</h1>
        <table width="100%" border="0" cellspacing="0" cellpadding="0" className="table_cont">
          <tr>
            <th>Department Name</th>
            <th>Status</th>
            <th>Access</th>
			<th>Action </th>
          </tr>
		  {this.props.data.map((department)=>{
			return(<tr>
              <td>{department.name}</td>
              <td>{department.description}</td>
              <td>{department.status}</td>
               <td><div className="button-container">
              <a href="#"  data-toggle="modal" data-target={`#${department._id}`}>Edit</a>
              <div className="modal fade" id={`${department._id}`} tabindex="-1" department="dialog" aria-labelledby="myModalLabel">
              <div className="col-md-9 card">
              <AddDepartment edit="true" department={department}/></div>

            </div>
              <a href="#" id={department._id} onClick={(e)=>{
                let obj=new crudClass()
                obj.delete('deleteDepartment',e.target.id)
              }}>Delete</a></div></td>

            </tr>)
          })}

        </table>
      </div>
    </div>)
  }
}
