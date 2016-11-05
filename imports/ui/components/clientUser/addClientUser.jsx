import React ,{Component} from 'react'
import crudClass from '../common/crudClass.js'
import Messages from '../common/submitMessage.jsx'

export default class AddClientUser extends Component {
  constructor(props) {
   super(props)
   this.state={saveResult:false,
  edit:this.props.edit,
  clientUser:this.props.clientUser}

  }

   componentDidMount(){

    $('#messages').hide();
    this.refs.name.value=this.state.edit?this.props.clientUser.name:'';
    this.refs.dob.value=this.state.edit?this.props.clientUser.dob:'';
    this.refs.address.value=this.state.edit?this.props.clientUser.address:'';
	this.refs.mobile.value=this.state.edit?this.props.clientUser.mobile:'';
    this.refs.email.value=this.state.edit?this.props.clientUser.email:'';
    this.refs.secQuestion.value=this.state.edit?this.props.clientUser.secQuestion:'';
	this.refs.secAnswer.value=this.state.edit?this.props.clientUser.secAnswer:'';
    this.refs.roleName.value=this.state.edit?this.props.clientUser.roleName:'';
	this.refs.userType.value=this.state.edit?this.props.clientUser.userType:'';
   }
  componentDidUpdate(){
	this.refs.name.value=this.state.edit?this.props.clientUser.name:'';
    this.refs.dob.value=this.state.edit?this.props.clientUser.dob:'';
    this.refs.address.value=this.state.edit?this.props.clientUser.address:'';
	this.refs.mobile.value=this.state.edit?this.props.clientUser.mobile:'';
    this.refs.email.value=this.state.edit?this.props.clientUser.email:'';
    this.refs.secQuestion.value=this.state.edit?this.props.clientUser.secQuestion:'';
	this.refs.secAnswer.value=this.state.edit?this.props.clientUser.secAnswer:'';
    this.refs.roleName.value=this.state.edit?this.props.clientUser.roleName:'';
	this.refs.userType.value=this.state.edit?this.props.clientUser.userType:'';

  }
  editClientUser(){

  }
  // saving clientUser to clientUserDb
  addClientUser(){
    let obj= new crudClass();
	let name=this.refs.name.value,
		dob=this.refs.dob.value,
		address=this.refs.address.value,
		mobile=this.refs.mobile.value,
		email=this.refs.email.value,
		secQuestion=this.refs.secQuestion.value,
		secAnswer=this.refs.secAnswer.value,
		roleName=this.refs.roleName.value,
		userType = this.refs.userType.value;
    let status=$('#checkbox:checked').val() ? "active":"inactive";
    let record=this.props.edit?{id:this.props.clientUser._id,data:{name:name,dob:dob,status:status,address:address,mobile:mobile,email:email,secQuestion:secQuestion, secAnswer:secAnswer,roleName:roleName, userType:userType}}:
    {name:name,dob:dob,status:status,address:address,mobile:mobile,email:email,secQuestion:secQuestion, secAnswer:secAnswer,roleName:roleName, userType:userType}
    let res=this.state.edit?obj.create('editClientUser',record):obj.create('addClientUser',record);

    this.setState({saveResult:res})
      $('#messages').show()
		this.refs.name.value="";
		this.refs.dob.value="";
		this.refs.address.value="";
		this.refs.mobile.value="";
		this.refs.email.value="";
		this.refs.secQuestion.value="";
		this.refs.secAnswer.value="";
		this.refs.roleName.value="Choose your roll name";
		this.refs.userType.value="";
  }

  render(){
	console.log(this.props);
    let submitButton=this.state.edit?<button onClick={this.addClientUser.bind(this)} data-dismiss="modal"><span>Edit</span></button>:<button
    onClick={this.addClientUser.bind(this)}><span>Submit</span></button>;
    let message=this.state.edit?'':<Messages saveResult={this.state.saveResult}/>
    return(<div>
      <div className="box-body">

              <div className="form-group">
                <label for="name"> Name</label>
                <input type="text" className="form-control" id="name" placeholder="Name" ref="name"/>
              </div>
              <div className="form-group">
                <label for="dob">Date of Birth</label>
                <input type="text" className="form-control" id="dob" placeholder="DOB" ref="dob"/>
              </div>
              <div className="form-group">
                <label for="address">Address</label>
                <input type="text" className="form-control" id="address" placeholder="Mobile Number" ref="address"/>
              </div>
              <div className="form-group">
                <label for="mobile">Contact #</label>
                <input type="text" className="form-control" id="contactNo" placeholder="Contact Number" ref="mobile"/>
              </div>
			  <div className="form-group">
                <label for="email">E-Mail</label>
                <input type="text" className="form-control" id="email" placeholder="E-Mail" ref="email"/>
              </div>
              <div className="form-group">
                <label for="secQuestion">Security Question</label>
                <select type="text" className="form-control" ref="secQuestion">
                  <option>Question 1</option>
                </select>
              </div>
              <div className="form-group">
                <label for="secAnswer">Security Answer</label>
                <input type="text" className="form-control" id="secAnswer" placeholder="Security Answer" ref="secAnswer"/>
              </div>

             <div className="form-group">
                <label for="userType">User Type</label>
                <select type="text" className="form-control" ref="userType">
                  <option>App User</option>
				  <option>Admin</option>
                </select>
              </div>
              <div className="form-group">
                <label for="roleName">Role</label>
                <select type="text" className="form-control" ref="roleName">
                  <option>Role to be filled in</option>
                  {this.props.roles.map((role)=>{
                    return(<option>{role.name}</option>)
                  })}
                </select>
              </div>
            </div>

            <div className="box-footer">
              {submitButton}
             {this.state.edit?<button data-dismiss="modal">cancel</button>:''}
            </div>
          </div>)
  }
}
