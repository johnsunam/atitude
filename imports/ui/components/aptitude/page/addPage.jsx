//adding new pages to the pagedb


import React ,{Component} from 'react'
import crudClass from '../../common/crudClass.js'
import Alert from 'react-s-alert';
var message = require('../../common/message.json');

export default class AddPage extends Component {
  constructor(props) {
   super(props)
   this.state={
     saveResult:false,
     edit:props.edit,
	  isShowMessage: false,
    canSubmit: false
   }
  }
  componentDidMount(){
    this.refs.name.value=this.state.edit?this.props.page.name:''
    this.refs.clientName.value=this.state.edit?this.props.page.clientName:''
    this.refs.formName.value=this.state.edit?this.props.page.formName:''
	  this.refs.previewURL.value=this.state.edit?this.props.page.previewURL:''
	  this.refs.publishURL.value=this.state.edit?this.props.page.publishURL:''
	  this.refs.metakeys.value=this.state.edit?this.props.page.metakeys:''
    this.refs.status.value=this.state.edit?this.props.page.status:''
  }
  componentDidUpdate(){
    this.refs.name.value=this.state.edit?this.props.page.name:''
    this.refs.clientName.value=this.state.edit?this.props.page.clientName:''
    this.refs.formName.value=this.state.edit?this.props.page.formName:''
	  this.refs.previewURL.value=this.state.edit?this.props.page.previewURL:''
	  this.refs.publishURL.value=this.state.edit?this.props.page.publishURL:''
	  this.refs.metakeys.value=this.state.edit?this.props.page.metakeys:''
    this.refs.status.value=this.state.edit?this.props.page.status:''
  }
  enableButton() {
    this.setState({ canSubmit: true });
  }
  disableButton() {
    this.setState({ canSubmit: false });
  }

  //add page to PageDb
  submit(){
    let name=this.refs.name.value,
    clientName=this.refs.clientName.value,
	formName=this.refs.formName.value,
	previewURL=this.refs.previewURL.value,
	publishURL=this.refs.publishURL.value,
	metakeys=this.refs.metakeys.value,
    status= this.refs.status.value;
    let record=this.props.edit?{id:this.props.page._id,data:{name:name,clientName:clientName,formName:formName,previewURL:previewURL,publishURL:publishURL, metakeys:metakeys, status:status}}:
    {name:name,clientName:clientName,formName:formName,previewURL:previewURL,publishURL:publishURL, metakeys:metakeys, status:status}
    let obj= new crudClass();
    let res=this.state.edit?obj.edit('editPage',record):obj.create('addPage',record);
      this.setState({saveResult:res, isShowMessage: true})
      Alert.success(message.saveClientSuccess, {
             position: 'top-right',
             effect: 'bouncyflip',
             timeout: 'none'
         });

     this.refs.name.value='',
    //this.refs.clientName.value=''
    //this.refs.formName.value=""
    this.refs.previewURL.value=""
    this.refs.publishURL.value=""
    this.refs.metakeys.value=""
    this.refs.status.value=""
  }
  editPage(){

  }
  render(){
    let submitButton=this.state.edit?<button type="submit" disabled={!this.state.canSubmit}  data-dismiss="modal"><span>Edit</span></button>:<button  type="submit" disabled={!this.state.canSubmit}>
    <span>submit</span></button>;

      return(<div className="col-md-10 registration_form pad_t50">
      <div className="col-md-6 col-md-offset-3">
        <div className="card"></div>
        <div className="card">
          <h1 className="title">Create page for the client</h1>
          <div className="form_pad">
          <Formsy.Form onValidSubmit={this.submit.bind(this)} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>
            <div className="row">
              <div className="col-md-12">
                <div className="input-container">
                  <MyInput type="text" title="Page Name" name="name"  ref="name"/>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                 <select ref="clientName" placeholder="client">
                 <option> choose client</option>
                 {this.props.data.clients.map((client)=>{

                return(<option>{client.companyName}</option>)
                 })}
                 </select>
                </div>

                <div className="input-container" placeholder="form">
                 <select ref="formName">
                 <option> choose form</option>
                  {this.props.data.forms.map((form)=>{
                return(<option>{form.name}</option>)
                 })}
                 </select>
                </div>

				 <div className="input-container">
                  <MyInput type="text" title="Preview URL" name="previewURL" ref="previewURL"/>
                  <div className="bar"></div>
                </div>
				<div className="input-container">
                  <MyInput type="text" title="Publish URL" ref="publishURL" name="publishURL"/>
                  <div className="bar"></div>
                </div>
                 <div className="input-container">
                  <MyInput type="text" title="Meta Keywords" ref="metakeys" name="metakeys"/>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                 <select ref="status"><option> Status </option> <option> Draft </option><option> Publish </option> </select>
                </div>
              </div>
            </div>
            <div className="button-container">
            {submitButton}
            </div>
            </Formsy.Form>
          </div>
        </div>
      </div>

    </div>)
  }
}
