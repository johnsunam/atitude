
import React ,{Component} from 'react'
import crudClass from '../../common/crudClass.js'
var message = require('../../common/message.json');
import Alert from 'react-s-alert';
import {Session} from 'meteor/session';
import MyInput from '../../common/validator.js'
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';

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
  userType:'',
  roles:[]
  }

  }

   componentDidMount(){
     console.log(this.props);
      this.state.edit?this.setState({name:this.props.clientUser.name,
      dob:this.props.clientUser.dob,
      address:this.props.clientUser.address,
      contact:this.props.clientUser.contact,
      email:this.props.clientUser.email,
      secQuestion:this.props.clientUser.secQuestion,
      secAnswer:this.props.clientUser.secAnswer,
      roles:this.props.clientUser.roles,
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
		contact=e.contact,
		email=e.email,
		secQuestion=this.refs.secQuestion.value,
		secAnswer=e.secAnswer,
		roles=this.state.roles,
		userType = this.refs.userType.value;
    let userCode=Random.hexString(7);
    let status=$('#checkbox:checked').val() ? "active":"inactive";
    let record=this.props.edit?{id:this.props.clientUser._id,data:{name:name,dob:dob,status:status,address:address,contact:contact,email:email,secQuestion:secQuestion, secAnswer:secAnswer,roles:roles, userType:userType}}:
    {code:userCode,name:name,dob:dob,status:status,address:address,contact:contact,email:email,secQuestion:secQuestion, secAnswer:secAnswer,userType:userType,roles:roles}
    if(roles.length!=0){
        let res=this.state.edit?obj.create('editClientUser',record):obj.create('addClientUser',record);
    }
    else {
      Alert.warning('Add atleast one role', {
             position: 'top-right',
             effect: 'bouncyflip',
             timeout: 1000
         })
    }

    
  //  this.setState({saveResult:res, isShowMessage: true ,userCode:userCode})
    this.setState({roles:[]})
    this.refs.form.reset();
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

    let submitButton=<button type="submit" disabled={!this.state.canSubmit} ><span>Save</span></button>
   return(<div>
     <section className="content-header">
     <h1>{this.props.edit?"Edit Client":"Add Client"} </h1>
   </section>
   <section className="content">
   <div className="box-body">
   <Formsy.Form ref="form" onValidSubmit={this.submit.bind(this)} id="addClient" onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>
           <div className="form-group">
             <label for="name"> Name</label>
             <MyInput type="text" className="form-control" value={this.state.name} id="name" name="name" placeholder="Name" ref="name"/>
           </div>
           <div className="form-group">
             <label for="dob">Date of Birth</label>
             <MyInput type="date" name="dob" className="form-control" value={this.state.dob} id="dob" placeholder="DOB" ref="dob"/>
           </div>
           <div className="form-group">
             <label for="address">Address</label>
             <MyInput type="text" name="address" className="form-control" value={this.state.address} id="address" placeholder="Mobile Number" ref="address"/>
           </div>
           <div className="form-group">
             <label for="mobile">Contact #</label>
             <MyInput name="contact" type="number" className="form-control" id="contactNo" value={this.state.contactNo} placeholder="Contact Number" ref="mobile"/>
           </div>
     <div className="form-group">
             <label for="email">E-Mail</label>
             <MyInput name="email" type="email" className="form-control" id="email" value={this.state.email} placeholder="E-Mail" ref="email"/>
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
             <label>Assign Roles</label>
             <CheckboxGroup name="roles" value={this.state.roles} onChange={(newroles)=>{
               this.setState({roles:newroles})
             }}>
             {this.props.data.roles.map((role)=>{
               console.log(role);
             return(<div><label><Checkbox value={role}/>{role}</label></div>)
             })}
             </CheckboxGroup>
             <h4>Added Roles</h4>
             <ul  style={{"listStyleType": "none"}}>
             {this.state.roles.map((role)=>{
               return(<li>{role} <a href="#" id={role} onClick={(e)=>{
                 let roles=this.state.roles
                 let addedRoles=_.without(roles,e.target.id)
                 this.setState({roles:addedRoles})
               }}><i className="fa fa-times" id={role}></i></a></li>)
             })}
             </ul>
           </div>
           <div className="box-footer">
             {submitButton}
            {this.state.edit?<button data-dismiss="modal">cancel</button>:''}
           </div>

           </Formsy.Form>
         </div>
   </section>
          </div>)
  }
}
