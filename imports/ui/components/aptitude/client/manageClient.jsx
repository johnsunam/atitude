//lists,delete and edit the client details
import React ,{Component} from 'react'
import AddClient from '../client/addClient.jsx'
import crudClass from '../../common/crudClass.js'

export default class ManageClient extends Component {
  constructor(props) {
   super(props)
   this.state={
     selectedClient:null
   }
  }
 render(){
console.log(this.props.clients);
    return( <div className="col-md-10 registration_form pad_t50">
      <div className="col-md-10 col-md-offset-1">
        <h1 className="title">Manage Clients</h1>
        <table width="100%" border="0" cellspacing="0" cellpadding="0" className="table_cont">
          <tr>
            <th>Name</th>
            <th>Email</th>
			<th>Phone</th>
			<th>Website</th>
            <th>Action</th>
          </tr>
          {this.props.clients.map((client)=>{
          return(<tr>
              <td>{client.companyName}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
			  <td>{client.website}</td>
              <td><div className="button-container">
              <a href="#"  data-toggle="modal" data-target={`#${client._id}`}>Edit</a>
              <div className="modal fade" id={`${client._id}`} tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
              <AddClient edit="true" client={client}/>
            </div>
              <a href="#" id={client._id} onClick={(e)=>{
                let obj=new crudClass()
                obj.delete('deleteClient',e.target.id)
              }}>Delete</a></div></td>

            </tr>)
          })}
        </table>
      </div>
    </div>)
  }
}
