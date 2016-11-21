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
	res: "",
  name:'',
  dob:'',
  address:'',
  mobile:'',
  email:'',
  secQuestion:'',
  secAnswer:'',
  roleName:'',


   }
  }

   componentDidMount(){

     this.props.edit?this.setState({name:this.props.user.name,
    dob:this.props.user.dob,
    address:this.props.user.address,
    mobile:this.props.user.mobile,
    email:this.props.user.email,
    secQuestion:this.props.user.secQuestion,
    secAnswer:this.props.user.secAnswer,
    roleName:this.props.user.roleName}):this.setState({name:'',
    dob:'',
    address:'',
    mobile:'',
    email:'',
    secQuestion:'',
    secAnswer:'',
    roleName:''})
       }
  shouldComponentUpdate(nextProps, nextState){
    Tracker.autorun(function(){
      if(Session.equals('confirm',true)){
        Session.get('res')==true?Alert.success(message.saveClientSuccess, {
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

  enableButton() {
    this.setState({ canSubmit: true });
  }
  disableButton() {
    this.setState({ canSubmit: false });
  }

  // saving user to userDb
  submit(e){
    let obj= new crudClass();
	  let name=e.name,
		dob=e.dob,
		address=this.refs.address.value,
		mobile=e.mobile,
		email=e.email,
		secQuestion=e.secQuestion,
		secAnswer=e.secAnswer,
		roleName=e.roleName;
    let status=$('#checkbox:checked').val() ? "active":"inactive";
    let record=this.props.edit?{id:this.props.user._id,data:{name:name,dob:dob,status:status,address:address,mobile:mobile,email:email,secQuestion:secQuestion, secAnswer:secAnswer,roleName:roleName}}:
    {name:name,dob:dob,status:status,address:address,mobile:mobile,email:email,secQuestion:secQuestion, secAnswer:secAnswer,roleName:roleName}
    let res=this.state.edit ? obj.create('editUser',record) : obj.create('addUser',record);

    this.setState({saveResult:res})
    this.refs.form.reset()
  }

  render(){
    let user=this.props.user;
    let submitButton=<button type="submit" disabled={!this.state.canSubmit} ><span>Save</span></button>
    return(<div className="col-md-10 registration_form pad_t50">

      <div className="col-md-8 col-md-offset-2">
	   <div className="card"></div>
        <div className="card">
          <h1 className="title">{this.props.edit?"Edit User":"Add User"}</h1>
          <div className="form_pad">
          <Formsy.Form ref="form" onValidSubmit={this.submit.bind(this)} id="addUser" onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>

            <div className="row">
              <div className="col-md-6">
                <div className="input-container">
                  <MyInput type="text" name="name" value={this.props.edit?user.name:""} title="User Name"  ref="name"/>
                  <div className="bar"></div>
                </div>

                <div className="input-container">
                <div>Birth Date</div>
                  <MyInput type="date" name="dob" value={this.props.edit?user.dob:""}    ref="dob"/>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <MyInput placeholder="Address" name="address" title="Address" value={this.props.edit?user.dob:""} ref="address" />
                  <div className="bar"></div>

                </div>
              </div>
              <div className="col-md-6">

                <div className="input-container">
                  <MyInput type="number" name="mobile" title="Mobile Number" ref="mobile" value={this.props.edit?user.mobile:""}/>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <MyInput type="email" name="email" title="Email ID" value={this.props.edit?user.email:""} ref="email" />
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <select ref="secQuestion">
                    <option>Security Question</option>
                  </select>
                </div>
                <div className="input-container">
                  <MyInput type="text" name="secAnswer" title="Security Answer" value={this.props.edit?user.secAnswer:""} ref="secAnswer"/>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <MyInput type="text" name="roleName" title="Role Name" ref="roleName" value={this.props.edit?user.roleName:""}/>
                  <div className="bar"></div>
                </div>
				 <div className="input-container gender">
                  <div>Active? &nbsp;
                    <input type="checkbox" id="checkbox"  value=""/>
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
