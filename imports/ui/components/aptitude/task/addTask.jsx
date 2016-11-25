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
	res:"",
  name:"",
  description:'',
  status:''
   }

  }


  componentDidMount(){
  console.log(this.props);
    this.state.edit?this.setState({name:this.props.task.name,
    description:this.props.task.description}):this.setState({name:"",description:''})
//    this.refs.description.value=this.state.edit?this.props.task.description:'';
    //this.refs.status.value=this.state.edit?this.props.task.status:'';
   }

  shouldComponentUpdate(nextProps, nextState){

    Tracker.autorun(function(){
      if(Session.equals('confirm',true)){
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
    let name=e.name,
        description=e.description;
    let status=$('#checkbox:checked').val() ? "active":"inactive";
    let record=this.props.edit?{id:this.props.task._id,data:{name:name,description:description,status:status}}:
    {name:name,description:description,status:status}
    console.log(record);
    let res=this.state.edit?obj.create('editTask',record):obj.create('addTask',record);
    this.refs.form.reset()
    this.setState({saveResult:res})
      }

  render(){


        let submitButton=<button type="submit" disabled={!this.state.canSubmit} ><span>Save</span></button>
    return(  <div className="col-md-10 registration_form pad_t50">

      <div className="col-md-6 col-md-offset-3">
        <div className="card"></div>
        <div className="card">
          <h1 className="title">Add Task</h1>
          <div className="form_pad">
          <Formsy.Form ref="form" onValidSubmit={this.submit.bind(this)} id="addTask" onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>

            <div className="row">
              <div className="col-md-12">
                <div className="input-container">
                  <MyInput type="text" help="Enter the name of the task" name="name" value={this.props.edit?this.props.task.name:''} title="Task Name" ref="name" required/>
                  <div className="bar"></div>
                </div>

                <div className="input-container">
                  <MyInput title="Description" help="Enter the description of task" name="description" value={this.props.edit?this.props.task.description:''} ref="description" required/>
                    <div className="bar"></div>
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
            </div>

            </Formsy.Form>

          </div>
        </div>
      </div>
    </div>)
  }
}
