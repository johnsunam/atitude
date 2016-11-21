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
	res:"",
  name:'',
  description:'',
  status:''
  }
  }

   componentDidMount(){
     this.props.edit?this.setState({name:this.props.role.name,
       description:this.props.role.description,status:this.props.role.status}):''
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
  // saving WorkFlow to WorkFlowDb
  submit(e){
    let obj= new crudClass();
    let name=e.name,
        description=e.description;
    let status=$('#checkbox:checked').val() ? "active":"inactive";
    let record=this.props.edit?{id:this.props.role.id,data:{name:name,description:description,status:status}}:
    {name:name,description:description,status:status}
    console.log(record);
    let res=this.state.edit?obj.create('editRole',record):obj.create('addRole',record);
    this.refs.form.reset()

    this.setState({saveResult:res})

  }



 render(){

     let submitButton=<button type="submit" disabled={!this.state.canSubmit} ><span>Save</span></button>
     let roles=this.props.role;
    return(<div className="col-md-10 registration_form pad_t50">
      <div className="col-md-6 col-md-offset-3">
       <div className="card"></div>
        <div className="card">
          <h1 className="title">{this.props.edit?'Edit Role':'Add Role'}</h1>
          <div className="form_pad">

          <Formsy.Form ref='form' onValidSubmit={this.submit.bind(this)} id="addRole" onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>
            <div className="row">
              <div className="col-md-12">
                <div className="input-container">
                  <MyInput type="text" help="Enter the role name" name="name" value={this.props.edit?roles.name:""} title="Role Name" ref="name" />
                  <div className="bar"></div>
                </div>

                <div className="input-container">
                  <MyInput type="textarea" help="Enter the description of the role" title="Description" value={this.props.edit?roles.description:''} placeholder="Role Description" name="description" ref="description" />
                  <div className="bar"></div>
                </div>

                <div className="input-container gender">
                  <div>Page Access &nbsp;
                    <input type="checkbox" id="checkbox" value="active" ref="status" value={this.props.edit?roles.status:""} />
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
