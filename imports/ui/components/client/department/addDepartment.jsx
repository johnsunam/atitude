import React ,{Component} from 'react'
import crudClass from '../../common/crudClass.js'
var message = require('../../common/message.json');
import Alert from 'react-s-alert';
import {Session} from 'meteor/session';
import MyInput from '../../common/validator.js'

export default class AddRole extends Component {
  constructor(props) {
	super(props)
  this.state={
    saveResult:false,
      edit:this.props.edit,
      department:this.props.department,
	   isShowMessage: false,
     name:'',
     description:'',
     status:''
  }
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
   componentDidMount(){
    this.refs.name.value=this.state.edit?this.props.department.name:'';
    this.refs.description.value=this.state.edit?this.props.department.description:'';
    //this.refs.status.value=this.state.edit?this.props.department.status:'';
   }
  componentDidUpdate(){
    this.refs.name.value=this.state.edit?this.props.department.name:'';
    this.refs.description.value=this.state.edit?this.props.department.description:'';
  //  this.refs.status.value=this.state.edit?this.props.department.status:'';
  }
  editDepartment(){

  }
  // saving WorkFlow to WorkFlowDb
  submit(e){
    console.log('helo');
    let obj= new crudClass();
    let name=e.name,
        description=e.description;

    let status=$('#checkbox:checked').val() ? "active":"inactive";
    let record=this.props.edit?{id:this.props.department._id,data:{name:name,description:description,status:status}}:
    {name:name,description:description}
    let res=this.state.edit?obj.create('editDepartment',record):obj.create('addDepartment',record);

    this.setState({saveResult:res, isShowMessage: true})
   this.refs.name.value="";
   this.refs.description.value="";
  }

 render(){

   let submitButton=this.state.edit?<button type="submit"  disabled={!this.state.canSubmit} ><span>Edit</span></button>:<button  type="submit" disabled={!this.state.canSubmit}>
   <span>submit</span></button>;
      return(<div><div className="box-body">
      <Formsy.Form onValidSubmit={this.submit.bind(this)} id="addClient" onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>

        <div className="form-group">
                <label for="name"> Name</label>
                <MyInput type="text" className="form-control" id="name" placeholder="Name" ref="name" name="name"/>
              </div>
              <div className="form-group">
                <label for="description">Description</label>
                <MyInput type="text" className="form-control" id="description" placeholder="Description" name="description"  ref="description"/>
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
