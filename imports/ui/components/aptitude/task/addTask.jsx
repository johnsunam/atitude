//add tasks to TaskDb

import React ,{Component} from 'react'
import {Random } from 'meteor/random'
import crudClass from '../../common/crudClass.js'
var message = require('../../common/message.json');
import Alert from 'react-s-alert';
import {Session} from 'meteor/session';

export default class AddTask extends Component {
  constructor(props) {
   super(props)
   this.state={saveResult:false,
   edit:this.props.edit,
   task:this.props.task,
   canSubmit: false,
	confirm:Session.get('confirm'),
	res:""
   }

  }


  componentDidMount(){
	Tracker.autorun(function(){
      if(!Session.equals('confirm',true)){
        console.log('helo');
      }
    })
    this.refs.name.value=this.state.edit?this.props.task.name:'';
    this.refs.description.value=this.state.edit?this.props.task.description:'';
    //this.refs.status.value=this.state.edit?this.props.task.status:'';
   }
  componentDidUpdate(){
    this.refs.name.value=this.state.edit?this.props.task.name:'';
    this.refs.description.value=this.state.edit?this.props.task.description:'';
  //  this.refs.status.value=this.state.edit?this.props.task.status:'';
  }
  enableButton() {
    this.setState({ canSubmit: true });
  }
  disableButton() {
    this.setState({ canSubmit: false });
  }

  // saving WorkFlow to WorkFlowDb
  submit(){
    let obj= new crudClass();
    let name=this.refs.name.value,
        description=this.refs.description.value;

    let status=$('#checkbox:checked').val() ? "active":"inactive";
    let record=this.props.edit?{id:this.props.task._id,data:{name:name,description:description}}:
    {name:name,description:description}
    let res=this.state.edit?obj.create('editTask',record):obj.create('addTask',record);
    if(Session.get('confirm')){
			Session.get('res')==true?Alert.success(message.saveTaskSuccess, {
             position: 'top-right',
             effect: 'bouncyflip',
             timeout: 1000
         }):Alert.warning("message.saveTaskFailure",{
                position: 'top-right',
                effect: 'bouncyflip',
                timeout: 1000
            })
		}
    this.setState({saveResult:res})

   this.refs.name.value="";
   this.refs.description.value="";
  }

  render(){
    let submitButton=this.state.edit?<button type="submit" disabled={!this.state.canSubmit}  data-dismiss="modal"><span>Edit</span></button>:<button  type="submit" disabled={!this.state.canSubmit}>
    <span>submit</span></button>;
    return(  <div className="col-md-10 registration_form pad_t50">

      <div className="col-md-6 col-md-offset-3">
        <div className="card"></div>
        <div className="card">
          <h1 className="title">Add Task</h1>
          <div className="form_pad">
          <Formsy.Form onValidSubmit={this.submit.bind(this)} id="addTask" onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>

            <div className="row">
              <div className="col-md-12">
                <div className="input-container">
                  <MyInput type="text" name="name" title="Task Name" ref="name"/>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <textarea placeholder=" Description" ref="description"></textarea>
                </div>
                <div className="input-container gender">
                  <div>Active? &nbsp;
                    <input type="checkbox" id="checkbox" name="status" value=""/>
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
