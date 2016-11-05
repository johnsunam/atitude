//add user to the UserDb

import React ,{Component} from 'react'
import crudClass from '../common/crudClass.js'
import Messages from '../common/submitMessage.jsx'
export default class addUser extends Component {
  constructor(props) {
   super(props)
   this.state={
     saveResult:false,
    edit:this.props.edit,
    user:this.props.user

   }
  }

   componentDidMount(){
    $('#messages').hide();
    this.refs.name.value=this.state.edit?this.props.user.name:'';
    this.refs.dob.value=this.state.edit?this.props.user.dob:'';
    this.refs.address.value=this.state.edit?this.props.user.address:'';
	this.refs.mobile.value=this.state.edit?this.props.user.mobile:'';
    this.refs.email.value=this.state.edit?this.props.user.email:'';
    this.refs.secQuestion.value=this.state.edit?this.props.user.secQuestion:'';
	this.refs.secAnswer.value=this.state.edit?this.props.user.secAnswer:'';
    this.refs.roleName.value=this.state.edit?this.props.user.roleName:'';
   }
  componentDidUpdate(){
	this.refs.name.value=this.state.edit?this.props.user.name:'';
    this.refs.dob.value=this.state.edit?this.props.user.dob:'';
    this.refs.address.value=this.state.edit?this.props.user.address:'';
	this.refs.mobile.value=this.state.edit?this.props.user.mobile:'';
    this.refs.email.value=this.state.edit?this.props.user.email:'';
    this.refs.secQuestion.value=this.state.edit?this.props.user.secQuestion:'';
	this.refs.secAnswer.value=this.state.edit?this.props.user.secAnswer:'';
    this.refs.roleName.value=this.state.edit?this.props.user.roleName:'';

  }
  editUser(){

  }
  // saving user to userDb
  addUser(){
    let obj= new crudClass();
	let name=this.refs.name.value,
		dob=this.refs.dob.value,
		address=this.refs.address.value,
		mobile=this.refs.mobile.value,
		email=this.refs.email.value,
		secQuestion=this.refs.secQuestion.value,
		secAnswer=this.refs.secAnswer.value,
		roleName=this.refs.roleName.value;
    let status=$('#checkbox:checked').val() ? "active":"inactive";
    let record=this.props.edit?{id:this.props.user._id,data:{name:name,dob:dob,status:status,address:address,mobile:mobile,email:email,secQuestion:secQuestion, secAnswer:secAnswer,roleName:roleName}}:
    {name:name,dob:dob,status:status,address:address,mobile:mobile,email:email,secQuestion:secQuestion, secAnswer:secAnswer,roleName:roleName}
    let res=this.state.edit?obj.create('editUser',record):obj.create('addUser',record);

    this.setState({saveResult:res})
      $('#messages').show()
		this.refs.name.value="";
		this.refs.dob.value="";
		this.refs.address.value="";
		this.refs.mobile.value="";
		this.refs.email.value="";
		this.refs.secQuestion.value="";
		this.refs.secAnswer.value="";
		this.refs.roleName.value="";
  }

  render(){
	console.log(this.props.user);
    let submitButton=this.state.edit?<button onClick={this.addUser.bind(this)} data-dismiss="modal"><span>Edit</span></button>:<button
    onClick={this.addUser.bind(this)}><span>submit</span></button>;
    let message=this.state.edit?'':<Messages saveResult={this.state.saveResult}/>
    return(<div className="col-md-10 registration_form pad_t50">
      <div className="col-md-8 col-md-offset-2">
	   <div className="card"></div>
        <div className="card">
          <h1 className="title">Add User</h1>
          <div className="form_pad">
            <div className="row">
              <div className="col-md-6">
                <div className="input-container">
                  <input type="text" required="required" ref="name"/>
                  <label for="">Name</label>
                  <div className="bar"></div>
                </div>

                <div className="input-container">
                  <input type="text" required="required" ref="dob"/>
                  <label for=" ">Date of Birth</label>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <textarea placeholder="Address" ref="address"></textarea>
                </div>
              </div>
              <div className="col-md-6">

                <div className="input-container">
                  <input type="num" required="required" ref="mobile"/>
                  <label for="">Mobile Number</label>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <input type="email" required="required" ref="email"/>
                  <label for="">Email ID</label>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <select ref="secQuestion">
                    <option>Security Question</option>
                  </select>
                </div>
                <div className="input-container">
                  <input type="text" required="required" ref="secAnswer"/>
                  <label for=" ">Security Answer</label>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <input type="text" required="required" ref="roleName"/>
                  <label for=" ">Role Name</label>
                  <div className="bar"></div>
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
