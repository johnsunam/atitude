//adding new pages to the pagedb
import React ,{Component} from 'react'
import {Random } from 'meteor/random'
import crudClass from '../../common/crudClass.js'
var message = require('../../common/message.json');
import Alert from 'react-s-alert';
import {Session} from 'meteor/session';

export default class AddPage extends Component {
  constructor(props) {
   super(props)
   this.state={
     saveResult:false,
     edit:props.edit,
    canSubmit: false,
	confirm:Session.get('confirm'),
	res:"",
  name:'',
  clName:'',
  formName:'',
  previewURL:'',
  publishURL:'',
  metakeys:'',
  status:''
}

  }
  componentDidMount(){
    let page=this.props.page;
    console.log(page);
    this.state.edit?this.setState({name:page.name,
      clientName:page.clientName,
      formName:page.formName,
      previewURL:page.previewURL,
      publishURL:page.publishURL,
      metakeys:page.metakeys,
      status:page.status}):this.setState({name:"",
      clientName:"",
      formName:"",
      previewURL:"",
      publishURL:"",
      metakeys:"",
      status:""})
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

  //add page to PageDb
  submit(e){
    let name=e.name,
    clientName=this.refs.clientName.value,
    	formName=this.refs.formName.value,
    	previewURL=e.previewURL,
    	publishURL=e.publishURL,
    	metakeys=e.metakeys,
      status= this.refs.status.value;
    let record=this.props.edit?{id:this.props.page._id,data:{name:name,clientName:clientName,formName:formName,previewURL:previewURL,publishURL:publishURL, metakeys:metakeys, status:status}}:
    {name:name,clientName:clientName,formName:formName,previewURL:previewURL,publishURL:publishURL, metakeys:metakeys, status:status}
    let obj= new crudClass();
    let res=this.state.edit?obj.edit('editPage',record):obj.create('addPage',record);
    this.setState({name:"",
    clientName:"",
    formName:"",
    previewURL:"",
    publishURL:"",
    metakeys:"",
    status:""})
	this.setState({saveResult:res})
  this.refs.form.reset();
  }
  editPage(){

  }
  render(){
     let submitButton=<button type="submit" disabled={!this.state.canSubmit} ><span>Save</span></button>
     let page=this.props.page;
      return(<div className="col-md-10 registration_form pad_t50">
      <div className="col-md-6 col-md-offset-3">
        <div className="card"></div>
        <div className="card">
          <h1 className="title">{this.state.edit?"Edit Page":"Create page for the client"}</h1>
          <div className="form_pad">
           <Formsy.Form ref="form" onValidSubmit={this.submit.bind(this)} id="addPage" onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>
            <div className="row">
              <div className="col-md-12">
                <div className="input-container">
                  <MyInput type="text" title="Page Name" name="name" value={this.props.edit?page.name:''}  ref="name"/>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                 <select ref="clientName" placeholder="client">
                 <option>{this.props.edit?page.clientName:'choose client'}</option>
                 {this.props.data.clients.map((client)=>{

                return(<option>{client.companyName}</option>)
                 })}
                 </select>
                </div>

                <div className="input-container" placeholder="form">
                 <select ref="formName">
                 <option>{this.props.edit?page.formName:'choose form'}</option>
                  {this.props.data.forms.map((form)=>{
                return(<option>{form.name}</option>)
                 })}
                 </select>
                </div>

				 <div className="input-container">
                  <MyInput type="text" title="Preview URL" name="previewURL" value={this.props.edit?page.previewURL:''} ref="previewURL"/>
                  <div className="bar"></div>
                </div>
				<div className="input-container">
                  <MyInput type="text" title="Publish URL" ref="publishURL" value={this.props.edit?page.publishURL:''} name="publishURL"/>
                  <div className="bar"></div>
                </div>
                 <div className="input-container">
                  <MyInput type="text" title="Meta Keywords" ref="metakeys" name="metakeys" value={this.props.edit?page.metakeys:''}/>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                 <select ref="status">
                 <option>{this.props.edit?page.status:'choose Status'}</option>
                 <option> Status </option> <option> Draft </option><option> Publish </option> </select>
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
