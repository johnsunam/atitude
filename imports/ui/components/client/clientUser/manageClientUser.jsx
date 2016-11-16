import React ,{Component} from 'react'
import AddClientUser from './addClientUser.jsx'
import crudClass from '../../common/crudClass.js'

export default class ManageClientUser extends Component {
  constructor(props) {
   super(props)
   this.state={
     selectedClientUser:null
   }
  }
 render(){
    return(<div><section className="content-header">
    <h1>Manage Client</h1>
  </section>
  <section className="content">
  <div className="col-md-10 registration_form pad_t50">
      <div className="col-md-10 col-md-offset-1">
        <h1 className="title">Manage Client Users</h1>
        <table width="100%" border="0" cellspacing="0" cellpadding="0" className="table_cont">
          <tr>
            <th>Name</th>
            <th>Email</th>
			<th>Phone</th>
			<th>Address</th>
      <th>User Code</th>
            <th>Action</th>
          </tr>
          {this.props.data.users.map((clientUser)=>{
            console.log(clientUser);
          return(<tr>
              <td>{clientUser.name}</td>
              <td>{clientUser.email}</td>
              <td>{clientUser.contact}</td>
			        <td>{clientUser.address}</td>
              <td>{clientUser.code}</td>
              <td><div className="button-container">
              <a href="#"  data-toggle="modal" data-target={`#${clientUser._id}`}>Edit</a>
              <div className="modal fade"   id={`${clientUser._id}`} tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
              <div className=" col-md-9 col-md-offset-2" style={{"backgroundColor":"white"}}>
              <AddClientUser edit="true" clientUser={clientUser} roles={this.props.data.roles}/>

              </div>
            </div>
              <a href="#" id={clientUser._id} onClick={(e)=>{
                let obj=new crudClass()
                obj.delete('deleteClientUser',e.target.id)
              }}>Delete</a></div></td>

            </tr>)
          })}
        </table>
      </div></div></section></div>
    )
  }
}
