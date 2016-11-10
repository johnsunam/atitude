//add user to the UserDb
import React ,{Component} from 'react'
import {Random } from 'meteor/random'
import crudClass from '../../common/crudClass.js'
var message = require('../../common/message.json');
import Alert from 'react-s-alert';
import {Session} from 'meteor/session';

export default class addUser extends Component {
  constructor(props) {
   super(props)
   this.state={
     saveResult:false,
    edit:this.props.edit,
    user:this.props.user,
	canSubmit: false,
	res: ""

   }
  }

   componentDidMount(){
	   Tracker.autorun(function(){
      if(!Session.equals('confirm',true)){
        console.log('helo');
      }
    })
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
  enableButton() {
    this.setState({ canSubmit: true });
  }
  disableButton() {
    this.setState({ canSubmit: false });
  }

  // saving user to userDb
  submit(){
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
     if(Session.get('confirm')){
			Session.get('res')==true?Alert.success(message.saveUserSuccess, {
             position: 'top-right',
             effect: 'bouncyflip',
             timeout: 1000
         }):Alert.warning("message.saveUserFailure",{
                position: 'top-right',
                effect: 'bouncyflip',
                timeout: 1000
            })
		}
    this.setState({saveResult:res})
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
    let submitButton=this.state.edit?<button type="submit" disabled={!this.state.canSubmit}  data-dismiss="modal"><span>Edit</span></button>:<button  type="submit" disabled={!this.state.canSubmit}>
    <span>submit</span></button>;
    return(<div className="col-md-10 registration_form pad_t50">

      <div className="col-md-8 col-md-offset-2">
	   <div className="card"></div>
        <div className="card">
          <h1 className="title">Add User</h1>
          <div className="form_pad">
          <Formsy.Form onValidSubmit={this.submit.bind(this)} id="addUser" onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>

            <div className="row">
              <div className="col-md-6">
                <div className="input-container">
                  <MyInput type="text" name="name" title="User Name" ref="name"/>
                  <div className="bar"></div>
                </div>

                <div className="input-container">
                  <MyInput type="text" name="dob" title="Date of Birth" ref="dob"/>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <textarea placeholder="Address" ref="address"></textarea>
                </div>
              </div>
              <div className="col-md-6">

                <div className="input-container">
                  <MyInput type="num" name="mobile" title="Mobile Number" ref="mobile"/>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <MyInput type="email" name="email" title="Email ID" ref="email"/>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <select ref="secQuestion">
                    <option>Security Question</option>
                  </select>
                </div>
                <div className="input-container">
                  <MyInput type="text" name="secAnswer" title="Security Answer" ref="secAnswer"/>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <MyInput type="text" name="roleName" title="Role Name" ref="roleName"/>
                  <div className="bar"></div>
                </div>
				 <div className="input-container gender">
                  <div>Active? &nbsp;
                    <MyInput type="checkbox" id="checkbox" value=""/>
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
