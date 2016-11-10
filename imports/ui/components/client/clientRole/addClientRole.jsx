import React ,{Component} from 'react'
import crudClass from '../../common/crudClass.js'

export default class AddRole extends Component {
  constructor(props) {
	super(props)
  this.state={
    saveResult:false,
      edit:this.props.edit,
      clientRole:this.props.clientRole,
	   isShowMessage: false

  }
  }

   componentDidMount(){
    this.refs.name.value=this.state.edit?this.props.clientRole.name:'';
    this.refs.description.value=this.state.edit?this.props.clientRole.description:'';
    //this.refs.status.value=this.state.edit?this.props.clientRole.status:'';
   }
  componentDidUpdate(){
    this.refs.name.value=this.state.edit?this.props.clientRole.name:'';
    this.refs.description.value=this.state.edit?this.props.clientRole.description:'';
    //this.refs.status.value=this.state.edit?this.props.clientRole.status:'';
  }
  editClientRole(){

  }
  // saving WorkFlow to WorkFlowDb
  addClientRole(){
    let obj= new crudClass();
    let name=this.refs.name.value,
        description=this.refs.description.value;

    let status=$('#checkbox:checked').val() ? "active":"inactive";
    let record=this.props.edit?{id:this.props.clientRole._id,data:{name:name,description:description}}:
    {name:name,description:description}
    let res=this.state.edit?obj.create('editClientRole',record):obj.create('addClientRole',record);

    this.setState({saveResult:res, isShowMessage: true})
   this.refs.name.value="";
   this.refs.description.value="";
  }



 render(){
	 console.log(this.props.client);
    let submitButton=this.state.edit?<button onClick={this.addClientRole.bind(this)} data-dismiss="modal"><span>Edit</span></button>:<button
    onClick={this.addClientRole.bind(this)}><span>submit</span></button>;
    return(<div>
      <div className="box-body">
       {this.state.isShowMessage ?
        <Alert bsStyle="success">
        {message.saveRoleSuccess}
        </Alert>
      : ''}
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
             {this.state.edit?<button data-dismiss="modal">Cancel</button>:''}
            </div>
          </div>)
  }
}
