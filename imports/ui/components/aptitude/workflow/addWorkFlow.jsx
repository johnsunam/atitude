//add workflow to WorkflowDb

import React ,{Component} from 'react'
import crudClass from '../../common/crudClass.js'
import Messages from '../../common/submitMessage.jsx'
export default class AddWorkFlow extends Component {
  constructor(props) {
   super(props)
   this.state={
     saveResult:false,
      edit:this.props.edit,
      workflow:this.props.workflow

   }
     }

   componentDidMount(){
    $('#messages').hide();
    this.refs.name.value=this.state.edit?this.props.workflow.name:'';
    this.refs.description.value=this.state.edit?this.props.workflow.description:'';
    this.refs.status.value=this.state.edit?this.props.workflow.status:'';
   }
  componentDidUpdate(){
    this.refs.name.value=this.state.edit?this.props.workflow.name:'';
    this.refs.description.value=this.state.edit?this.props.workflow.description:'';
    this.refs.status.value=this.state.edit?this.props.workflow.status:'';
  }
  editWorkFlow(){

  }
  // saving WorkFlow to WorkFlowDb
  addWorkFlow(){
    let obj= new crudClass();
    let name=this.refs.name.value,
        description=this.refs.description.value;

    let status=$('#checkbox:checked').val() ? "active":"inactive";
    let record=this.props.edit?{id:this.props.workflow._id,data:{name:name,description:description}}:
    {name:name,description:description}
    let res=this.state.edit?obj.create('editWorkFlow',record):obj.create('addWorkFlow',record);

    this.setState({saveResult:res})
      $('#messages').show()
   this.refs.name.value="";
   this.refs.description.value="";
  }


  render(){
	 console.log(this.props.workflow);
    let submitButton=this.state.edit?<button onClick={this.addWorkFlow.bind(this)} data-dismiss="modal"><span>Edit</span></button>:<button
    onClick={this.addWorkFlow.bind(this)}><span>submit</span></button>;
    let message=this.state.edit?'':<Messages saveResult={this.state.saveResult}/>
    return(<div className="col-md-10 registration_form pad_t50">
        {message}
      <div className="col-md-6 col-md-offset-3">
        <div className="card"></div>
        <div className="card">
          <h1 className="title">Add Workflow</h1>
          <div className="form_pad">
            <div className="row">
              <div className="col-md-12">
                <div className="input-container">
                  <input type="text" required="required" ref="name"/>
                  <label for="">Name</label>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <textarea placeholder="Description" ref="description"></textarea>
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
