import React ,{Component} from 'react'
import AddClientRole from './addClientRole.jsx'
import crudClass from '../../common/crudClass.js'
export default class ManageClientRole extends Component {
  constructor(props) {
   super(props)
  }
  render(){
    return(<div className="col-md-10 registration_form pad_t50">
      <div className="col-md-10 col-md-offset-1">
        <h1 className="title">Manage ClientRole</h1>
        <table width="100%" border="0" cellspacing="0" cellpadding="0" className="table_cont">
          <tr>
            <th>ClientRole Name</th>
            <th>Status</th>

			<th>Action </th>
          </tr>
		  {this.props.data.map((clientRole)=>{
			return(<tr>
              <td>{clientRole.name}</td>
              <td>{clientRole.description}</td>

               <td><div className="button-container">
              <a href="#"  data-toggle="modal" data-target={`#${clientRole._id}`}>Edit</a>
              <div className="modal fade" id={`${clientRole._id}`} tabindex="-1" clientRole="dialog" aria-labelledby="myModalLabel">
              <AddClientRole edit="true" clientRole={clientRole}/>
            </div>
              <a href="#" id={clientRole._id} onClick={(e)=>{
                let obj=new crudClass()
                obj.delete('deleteClientRole',e.target.id)
              }}>Delete</a></div></td>

            </tr>)
          })}

        </table>
      </div>
    </div>)
  }
}
