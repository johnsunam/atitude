//add tasks to TaskDb

import React ,{Component} from 'react'
import crudClass from '../../common/crudClass.js'
import Alert from 'react-s-alert';
var message = require('../../common/message.json');

export default class AddTask extends Component {
  constructor(props) {
   super(props)
   this.state={saveResult:false,
   edit:this.props.edit,
   task:this.props.task,
   isShowMessage: false,
   canSubmit: false
   }

  }


  componentDidMount(){
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
    Alert.success(message.saveClientSuccess, {
           position: 'top-right',
           effect: 'bouncyflip',
           timeout: 'none'
       });
    this.setState({saveResult:res, isShowMessage: true})

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
          <Formsy.Form onValidSubmit={this.submit.bind(this)} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>

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
