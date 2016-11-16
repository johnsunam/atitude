//Assigns roles to the clients
import React, {Component} from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';

export default class AssignRole extends Component {
  constructor(props) {
    super(props)
    this.state={clientRoles:null,choosedClient:null}
  }
  render(){
    let options=this.props.data.clients.map((client)=>{
      return {value:client.companyName,label:client.companyName}
    })
    return(<div className="col-md-10 registration_form pad_t50">
 <div className="col-md-8 col-md-offset-2">
   <div className="card"></div>
   <div className="card">
     <h1 className="title">Assign Roles</h1>
     <div className="form_pad">
     <div className="row">
       <div className="col-md-12">
       <select onChange={(e)=>{
         console.log(e.target.value);
         let client=_.findWhere(this.props.data.clients,{_id:e.target.value})
         console.log(client);
         this.setState({clientRoles:client.roles,choosedClient:e.target.value})

       }}>
       <option>choose client</option>
       {this.props.data.clients.map((client)=>{
         return (<option value={client._id}>{client.companyName}</option>)
       })}
       </select>
       <h2>Client Roles</h2>
       <ul>
       {this.state.clientRoles?this.state.clientRoles.map((role)=>{
         return(<li>{role}</li>)
       }):''}
       </ul>
       <a href="#" className="" data-toggle="modal" data-target="#roles"><i className="fa fa-plus-square"></i></a>
       <div className="modal fade" id="roles" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 className="modal-title" id="myModalLabel">Choose Roles</h4>
      </div>
      <div className="modal-body">
      <CheckboxGroup name="roles" value={this.state.clientRoles}   onChange={(newroles)=>{
        this.setState({clientRoles:newroles})
        let data={client:this.state.choosedClient,roles:newroles}
        Meteor.call('saveRoles',data);
      }}>
      {this.props.data.roles.map((role)=>{
      return(<div><label><Checkbox value={role.name}/>{role.name}</label></div>)
      })}
      </CheckboxGroup>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>

      </div>
    </div>
  </div>
</div>
     </div></div>
     </div>
   </div></div></div>)
  }
}
