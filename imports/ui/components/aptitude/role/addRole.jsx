import React ,{Component} from 'react'
import {Random } from 'meteor/random'
import crudClass from '../../common/crudClass.js'
var message = require('../../common/message.json');
import Alert from 'react-s-alert';
import {Session} from 'meteor/session';


export default class AddRole extends Component {
  constructor(props) {
	super(props)
  this.state={
    saveResult:false,
      edit:this.props.edit,
      role:this.props.role,
    canSubmit: false,
	confirm:Session.get('confirm'),
	res:""

  }
  }

   componentDidMount(){
	    Tracker.autorun(function(){
      if(!Session.equals('confirm',true)){
        console.log('helo');
      }
    })
    this.refs.name.value=this.state.edit?this.props.role.name:'';
    this.refs.description.value=this.state.edit?this.props.role.description:'';
    this.refs.status.value=this.state.edit?this.props.role.status:'';
   }
  componentDidUpdate(){
    this.refs.name.value=this.state.edit?this.props.role.name:'';
    this.refs.description.value=this.state.edit?this.props.role.description:'';
    this.refs.status.value=this.state.edit?this.props.role.status:'';
  }

 enableButton() {
   this.setState({ canSubmit: true });
 }
 disableButton() {
   this.setState({ canSubmit: false });
 }
  // saving WorkFlow to WorkFlowDb
  submit(){
    let obj= new crudClass();
    let name=this.refs.name.value,
        description=this.refs.description.value;


    let status=$('#checkbox:checked').val() ? "active":"inactive";
    let record=this.props.edit?{id:this.props.role._id,data:{name:name,description:description,status:status}}:
    {name:name,description:description,status:status}
    console.log(record);
    let res=this.state.edit?obj.create('editRole',record):obj.create('addRole',record);

    if(Session.get('confirm')){
			Session.get('res')==true?Alert.success(message.saveRoleSuccess, {
             position: 'top-right',
             effect: 'bouncyflip',
             timeout: 1000
         }):Alert.warning("message.saveRoleFailure",{
                position: 'top-right',
                effect: 'bouncyflip',
                timeout: 1000
            })
		}
    this.setState({saveResult:res})
   this.refs.name.value="";
   this.refs.description.value="";
  }



 render(){

     let submitButton=this.state.edit?<button type="submit" disabled={!this.state.canSubmit}  data-dismiss="modal"><span>Edit</span></button>:<button  type="submit" disabled={!this.state.canSubmit}>
    <span>submit</span></button>;

    return(<div className="col-md-10 registration_form pad_t50">
      <div className="col-md-6 col-md-offset-3">
       <div className="card"></div>
        <div className="card">
          <h1 className="title">Add Role</h1>
          <div className="form_pad">
          <Formsy.Form onValidSubmit={this.submit.bind(this)} id="addRole" onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>
            <div className="row">
              <div className="col-md-12">
                <div className="input-container">
                  <MyInput type="text" name="name" title="Role Name" ref="name" />
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <textarea placeholder="Role Description" ref="description"></textarea>
                </div>
                <div className="input-container gender">
                  <div>Page Access &nbsp;
                    <input type="checkbox" id="checkbox" value="active" ref="status" />
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
