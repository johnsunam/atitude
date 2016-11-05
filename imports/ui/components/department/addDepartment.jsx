import React ,{Component} from 'react'
import crudClass from '../common/crudClass.js'
import Messages from '../common/submitMessage.jsx'
export default class AddRole extends Component {
  constructor(props) {
	super(props)
	saveResult:false,
    edit:this.props.edit,
    department:this.props.department
  }

   componentDidMount(){
    $('#messages').hide();
    this.refs.name.value=this.state.edit?this.props.department.name:'';
    this.refs.description.value=this.state.edit?this.props.department.description:'';
    this.refs.status.value=this.state.edit?this.props.department.status:'';
   }
  componentDidUpdate(){
    this.refs.name.value=this.state.edit?this.props.department.name:'';
    this.refs.description.value=this.state.edit?this.props.department.description:'';
    this.refs.status.value=this.state.edit?this.props.department.status:'';
  }
  editDepartment(){

  }
  // saving WorkFlow to WorkFlowDb
  addDepartment(){
    let obj= new crudClass();
    let name=this.refs.name.value,
        description=this.refs.description.value;

    let status=$('#checkbox:checked').val() ? "active":"inactive";
    let record=this.props.edit?{id:this.props.department._id,data:{name:name,description:description}}:
    {name:name,description:description}
    let res=this.state.edit?obj.create('editDepartment',record):obj.create('addDepartment',record);

    this.setState({saveResult:res})
      $('#messages').show()
   this.refs.name.value="";
   this.refs.description.value="";
  }



 render(){
	 console.log(this.props.client);
    let submitButton=this.state.edit?<button onClick={this.addDepartment.bind(this)} data-dismiss="modal"><span>Edit</span></button>:<button
    onClick={this.addDepartment.bind(this)}><span>submit</span></button>;
    let message=this.state.edit?'':<Messages saveResult={this.state.saveResult}/>
    return(<div className="box-body">
              <div className="form-group">
                <label for="name"> Name</label>
                <input type="text" className="form-control" id="name" placeholder="Name" ref="name"/>
              </div>
              <div className="form-group">
                <label for="description">Description</label>
                <input type="text" className="form-control" id="description" placeholder="Description" ref="description"/>
              </div>
            </div>
            <div className="box-footer">
              {submitButton}
             {this.state.edit?<button data-dismiss="modal">cancel</button>:''}
            </div>)
  }
}
