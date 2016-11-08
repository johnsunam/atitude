//add tasks to TaskDb

import React ,{Component} from 'react'
import crudClass from '../../common/crudClass.js'
import { Alert } from 'react-bootstrap';
var message = require('../../common/message.json');
export default class AddTask extends Component {
  constructor(props) {
   super(props)
   this.state={saveResult:false,
   edit:this.props.edit,
   task:this.props.task,
   isShowMessage: false
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
  editTask(){

  }
  // saving WorkFlow to WorkFlowDb
  addTask(){
    let obj= new crudClass();
    let name=this.refs.name.value,
        description=this.refs.description.value;

    let status=$('#checkbox:checked').val() ? "active":"inactive";
    let record=this.props.edit?{id:this.props.task._id,data:{name:name,description:description}}:
    {name:name,description:description}
    let res=this.state.edit?obj.create('editTask',record):obj.create('addTask',record);

    this.setState({saveResult:res, isShowMessage: true})

   this.refs.name.value="";
   this.refs.description.value="";
  }

  render(){
    let submitButton=this.state.edit?<button onClick={this.addTask.bind(this)} data-dismiss="modal"><span>Edit</span></button>:<button
    onClick={this.addTask.bind(this)}><span>submit</span></button>;
    return(  <div className="col-md-10 registration_form pad_t50">
       {this.state.isShowMessage ?
        <Alert bsStyle="success">
        {message.saveTaskSuccess}
        </Alert>
      : ''}
      <div className="col-md-6 col-md-offset-3">
        <div className="card"></div>
        <div className="card">
          <h1 className="title">Add Task</h1>
          <div className="form_pad">
            <div className="row">
              <div className="col-md-12">
                <div className="input-container">
                  <input type="text" required="required" ref="name"/>
                  <label for=""> Name</label>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <textarea placeholder=" Description" ref="description"></textarea>
                </div>
                <div className="input-container gender">
                  <div>Active? &nbsp;
                    <input type="checkbox" id="checkbox" value="active"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-container">
              {submitButton}
             {this.state.edit?<button data-dismiss="modal">cancel</button>:''}
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
}
