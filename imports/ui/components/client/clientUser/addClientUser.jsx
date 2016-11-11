import React ,{Component} from 'react'
import crudClass from '../../common/crudClass.js'
var message = require('../../common/message.json');
import Alert from 'react-s-alert';
import {Session} from 'meteor/session';
import MyInput from '../../common/validator.js'

export default class AddClientUser extends Component {
  constructor(props) {
   super(props)
   this.state={saveResult:false,
  edit:this.props.edit,
  clientUser:this.props.clientUser,
  isShowMessage: false,
  userCode:"",
  clientUser:'',
  dob:'',
  address:'',
  mobile:'',
  email:'',
  secQuestion:'',
  secAnswer:'',
  roleName:'',
  userType:''
  }

  }

   componentDidMount(){

    this.state.edit?this.setState({name:this.props.clientUser.name,
      dob:this.props.clientUser.dob,
      address:this.props.clientUser.address,
      mobile:this.props.clientUser.mobile,
      email:this.props.clientUser.email,
      secQuestion:this.props.clientUser.secQuestion,
      secAnswer:this.props.clientUser.secAnswer,
      roleName:this.props.clientUser.roleName,
      userType:this.props.clientUser.userType
    }):'';

   }
  componentDidUpdate(){
    this.state.edit?this.setState({name:this.props.clientUser.name,
      dob:this.props.clientUser.dob,
      address:this.props.clientUser.address,
      mobile:this.props.clientUser.mobile,
      email:this.props.clientUser.email,
      secQuestion:this.props.clientUser.secQuestion,
      secAnswer:this.props.clientUser.secAnswer,
      roleName:this.props.clientUser.roleName,
      userType:this.props.clientUser.userType
    }):'';

  }
  editClientUser(){

  }
  // saving clientUser to clientUserDb
  submit(e){
    let obj= new crudClass();
    console.log(e);
	let name=e.name,
		dob=e.dob,
		address=e.address,
		mobile=e.mobile,
		email=e.email,
		secQuestion=this.refs.secQuestion.value,
		secAnswer=e.secAnswer,
		roleName=this.refs.roleName.value,
		userType = this.refs.userType.value;
    let userCode=Random.hexString(7);
    let status=$('#checkbox:checked').val() ? "active":"inactive";
    let record=this.props.edit?{id:this.props.clientUser._id,data:{name:name,dob:dob,status:status,address:address,mobile:mobile,email:email,secQuestion:secQuestion, secAnswer:secAnswer,roleName:roleName, userType:userType}}:
    {code:userCode,name:name,dob:dob,status:status,address:address,mobile:mobile,email:email,secQuestion:secQuestion, secAnswer:secAnswer,roleName:roleName, userType:userType}
    console.log(record);
    let res=this.state.edit?obj.create('editClientUser',record):obj.create('addClientUser',record);

    this.setState({saveResult:res, isShowMessage: true ,userCode:userCode})
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
  enableButton() {
    this.setState({ canSubmit: true });
  }
  disableButton() {
    this.setState({ canSubmit: false });
  }

  shouldComponentUpdate(nextProps, nextState){
    Tracker.autorun(function(){
      if(Session.equals('confirm',true)){
        Session.get('res')==true?Alert.success(message.saveUserSuccess, {
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

  render(){

  let submitButton=this.state.edit?<button type="submit" disabled={!this.state.canSubmit}  ><span>Edit</span></button>:<button  type="submit" disabled={!this.state.canSubmit}>
  <span>submit</span></button>;
   return(<div>
      <div className="box-body">

      {this.state.edit?"":<div>{this.state.userCode}</div>}
      <Formsy.Form onValidSubmit={this.submit.bind(this)} id="addClient" onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>

              <div className="form-group">
                <label for="name"> Name</label>
                <MyInput type="text" className="form-control" value={this.state.name} id="name" name="name" placeholder="Name" ref="name"/>
              </div>
              <div className="form-group">
                <label for="dob">Date of Birth</label>
                <MyInput type="text" name="dob" className="form-control" value={this.state.dob} id="dob" placeholder="DOB" ref="dob"/>
              </div>
              <div className="form-group">
                <label for="address">Address</label>
                <MyInput type="text" name="address" className="form-control" value={this.state.address} id="address" placeholder="Mobile Number" ref="address"/>
              </div>
              <div className="form-group">
                <label for="mobile">Contact #</label>
                <MyInput name="contact" type="text" className="form-control" id="contactNo" value={this.state.contactNo} placeholder="Contact Number" ref="mobile"/>
              </div>
			  <div className="form-group">
                <label for="email">E-Mail</label>
                <MyInput name="email" type="text" className="form-control" id="email" value={this.state.email} placeholder="E-Mail" ref="email"/>
              </div>
              <div className="form-group">
                <label for="secQuestion">Security Question</label>
                <select type="text" className="form-control" ref="secQuestion">
                  <option>Question 1</option>
                </select>
              </div>
              <div className="form-group">
                <label for="secAnswer">Security Answer</label>
                <MyInput name="secAnswer" type="text" className="form-control" id="secAnswer" placeholder="Security Answer" ref="secAnswer"/>
              </div>

             <div className="form-group">
                <label for="userType">User Type</label>
                <select type="text" className="form-control" name="userType" ref="userType">
                  <option>App User</option>
				  <option>client</option>
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
              <div className="box-footer">
                {submitButton}
               {this.state.edit?<button data-dismiss="modal">cancel</button>:''}
              </div>

              </Formsy.Form>
            </div>

          </div>)
  }
}
