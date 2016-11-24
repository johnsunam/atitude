//add workflow to WorkflowDb

import React ,{Component} from 'react'
import {Random } from 'meteor/random'
import crudClass from '../../common/crudClass.js'
var message = require('../../common/message.json');
import Alert from 'react-s-alert';
import {Session} from 'meteor/session';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';

export default class AddWorkFlow extends Component {
  constructor(props) {
   super(props)
   this.state={
		saveResult:false,
		edit:this.props.edit,
		workflow:this.props.workflow,
		canSubmit: false,
		res: "",
    name:'',
    description:'',
    status:'',
    roles:[],
    selectedClient:[],
    selectedRoles:[]

	}
  }

   componentDidMount(){

  this.props.edit?this.setState({name:this.props.workflow.name,
    description:this.props.workflow.description}):this.setState({name:'',
  description:''});
    this.refs.description.value=this.state.edit?this.props.workflow.description:'';
    //this.refs.status.value=this.state.edit?this.props.workflow.status:'';
   }
  shouldComponentUpdate(nextProps, nextState){

    Tracker.autorun(function(){

      if(Session.equals('confirm',true)){
        console.log();
        Session.get('res')==true?Alert.success(message.saveClientSuccess, {
               position: 'top-right',
               effect: 'bouncyflip',
               timeout: 1000
           }):Alert.warning("message.saveClientError",{
                  position: 'top-right',
                  effect: 'bouncyflip',
                  timeout: 1000
              })
              Session.set('confirm',false)
      }
    })

    return true;
}

  enableButton() {
    this.setState({ canSubmit: true });
  }
  disableButton() {
    this.setState({ canSubmit: false });
  }

  // saving WorkFlow to WorkFlowDb
  submit(e){
    let obj= new crudClass();
    let name=e.name
        description=e.description;
        console.log(this.state.selectedClient,this.state.selectedRoles);
    let status=$('#checkbox:checked').val()?"active":"inactive";
    let record=this.props.edit?{id:this.props.workflow._id,data:{name:name,description:description,status:status,client:this.state.selectedClient,roles:this.state.selectedRoles}}:
    {name:name,description:description,status:status,client:this.state.selectedClient,roles:this.state.selectedRoles}
    if(this.state.selectedRoles.length!=0){
      let res=this.state.edit?obj.create('editWorkFlow',record):obj.create('addWorkFlow',record);
    }
    else {
      Alert.warning("Select atleast one role", {
             position: 'top-right',
             effect: 'bouncyflip',
             timeout: 1000
         })
    }

    //this.setState({saveResult:res})
    this.setState({roles:[]})
    this.refs.form.reset()
  }


  render(){

	   let submitButton=<button type="submit" disabled={!this.state.canSubmit} ><span>Save</span></button>
    return(<div className="col-md-10 registration_form pad_t50">

      <div className="col-md-6 col-md-offset-3">
        <div className="card"></div>
        <div className="card">
          <h1 className="title">{this.props.edit?'Edit Workflow':'Add Workflow'}</h1>
          <div className="form_pad">
          <Formsy.Form ref="form" onValidSubmit={this.submit.bind(this)} id="addWorkflow" onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>

            <div className="row">
              <div className="col-md-12">
                <div className="input-container">
                  <MyInput type="text" name="name" title="Name" help="Enter the name of the workflow" ref="name" value={this.props.edit?this.props.workflow.name:''} required/>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <MyInput type="text"   title="Description" help="Enter the name fo description" ref="description" name="description"value={this.props.edit?this.props.workflow.description:''} required/>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                <select onChange={(e)=>{
                  console.log(e.target.value);
                  let client=_.findWhere(this.props.data.clients,{_id:e.target.value});
                  this.setState({roles:client.roles})
                  this.setState({selectedClient:e.target.value})
                }}>
                <option>Choose client</option>
                {this.props.data.clients.map((client)=>{
                  return(<option value={client._id}>{client.companyName}</option>)
                })}
                </select>
                </div>
                <div className=''>
                <label>Client Roles</label>
                <CheckboxGroup name="roles" value={this.WorkFlow} onChange={(newroles)=>{
                  this.setState({selectedRoles:newroles})
                }}>
                <ul>
                {this.state.roles.map((role)=>{

                return(<li><Checkbox id="checkbox" value={role}/>{role}</li>)
                })}
                </ul>
                </CheckboxGroup>
                </div>

                <div className="input-container gender">
                  <div>Active? &nbsp;
                     <input type="checkbox" id="checkbox" value=""/>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-container">
			{submitButton}
             {this.state.edit?<button data-dismiss="modal">cancel</button>:''}
            </div>
            </Formsy.Form>
          </div>
        </div>
      </div>
    </div>)
  }
}
