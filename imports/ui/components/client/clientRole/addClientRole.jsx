import React ,{Component} from 'react'
import {Random } from 'meteor/random'
import crudClass from '../../common/crudClass.js'
var message = require('../../common/message.json');
import Alert from 'react-s-alert'
export default class AddRole extends Component {
  constructor(props) {
	super(props)
  this.state={
    saveResult:false,
      edit:this.props.edit,
      clientRole:this.props.clientRole,
	   canSubmit: false

  }
  }

    enableButton() {
	this.setState({ canSubmit: true });
	}
	disableButton() {
	  this.setState({ canSubmit: false });
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
  submit(){
    let obj= new crudClass();
    let   name =$('#name').val(),
          description=$('#description').val()

    let status=$('#checkbox:checked').val() ? "active":"inactive";
    let record=this.props.edit?{id:this.props.clientRole._id,data:{name:name,description:description}}:
    {name:name,description:description}
    let res=this.state.edit?obj.create('editClientRole',record):obj.create('addClientRole',record);
    console.log(Session.get('res'));
    Session.get('res')==true?Alert.success(message.saveClientSuccess, {
           position: 'top-right',
           effect: 'bouncyflip',
           timeout: 1000
       }):Session.get('res')==false?Alert.warning("message.saveClientError",{
              position: 'top-right',
              effect: 'bouncyflip',
              timeout: 1000
          }):''
      this.setState({saveResult:res})
   this.refs.name.value="";
   this.refs.description.value="";
  }

 render(){
   let submitButton=this.state.edit?<button type="submit" disabled={!this.state.canSubmit}  data-dismiss="modal"><span>Edit</span></button>:<button  type="submit" disabled={!this.state.canSubmit}>
   <span>submit</span></button>;
     return(<div>
		<div className="box-body">
			<Formsy.Form onValidSubmit={this.submit.bind(this)} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>
              <div className="form-group">
                <MyInput type="text" className="form-control" name="name" id="name" placeholder="Name" ref="name"/>
              </div>
              <div className="form-group">
                <label for="description">Description</label>
                <input type="text" className="form-control" id="description" placeholder="Description" ref="description"/>
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
