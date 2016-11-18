import React ,{Component} from 'react'
import {Random } from 'meteor/random'
import crudClass from '../../common/crudClass.js'
var message = require('../../common/message.json');
import Alert from 'react-s-alert'
import {Session} from 'meteor/session'
export default class AddRole extends Component {
  constructor(props) {
	super(props)
  this.state={
    saveResult:false,
      edit:this.props.edit,
      clientRole:this.props.clientRole,
	   canSubmit: false,
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

   componentDidMount(){
     this.props.edit?this.setState({name:this.props.name,description:this.props.description}):this.setState({name:'',description:''})
        //this.refs.status.value=this.state.edit?this.props.clientRole.status:'';
   }

  shouldComponentUpdate(nextProps, nextState){

    Tracker.autorun(function(){
      if(Session.equals('confirm',true)){
        console.log('helo');
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

  // saving WorkFlow to WorkFlowDb
  submit(e){
    let obj= new crudClass();
    let   name =e.name,
          description=e.description
          console.log(this.props.edit);
    let status=$('#checkbox:checked').val() ? "active":"inactive";
    let record=this.props.edit?{id:this.props.clientRole._id,data:{name:name,description:description,status:status}}:
    {name:name,description:description,status:status}
    let res=this.state.edit?obj.edit('editClientRole',record):obj.create('addClientRole',record);

      this.setState({saveResult:res})

  }

 render(){
   let submitButton=<button type="submit" disabled={!this.state.canSubmit} ><span>save</span></button>
     return(<div>
       <section className="content-header">
       <h1>{this.props.edit?"Edit Role":"Add Role"} </h1>
     </section>
     <section className="content">
		<div className="box-body">
			<Formsy.Form onValidSubmit={this.submit.bind(this)} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>
              <div className="form-group">
              <label>Name</label>
                <MyInput type="text" className="form-control"  name="name" id="name" placeholder="Name" ref="name"/>
              </div>
              <div className="form-group">

                <MyInput type="text" className="form-control" id="description" title="Description" ref="description"/>
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
