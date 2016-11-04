import React ,{Component} from 'react'
import crudClass from '../common/crudClass.js'
import Messages from '../common/submitMessage.jsx'
export default class AddPage extends Component {
  constructor(props) {
   super(props)
   this.state={
     saveResult:false,
     edit:props.edit
   }
  }
  componentDidMount(){
    $('#messages').hide()
  }
  //add page to PageDb
  addPage(){
    let name=this.refs.name.value,
    clientName=this.refs.clientName.value,
	formName=this.refs.formName.value,
	previewURL=this.refs.previewURL.value,
	publishURL=this.refs.publishURL.value,
	metakeys=this.refs.metakeys.value,
    status= this.refs.status.value;
    let record={name:name,clientName:clientName,formName:formName,previewURL:previewURL,publishURL:publishURL, metakeys:metakeys, status:status}
    let obj= new crudClass();
    let mesg=obj.create('addPage',record);
    this.setState({saveResult:mesg})
      $('#messages').show()
    this.refs.name.value='',
    this.refs.clientName.value=''
    this.refs.formName.value=""
    this.refs.previewURL.value=""
    this.refs.publishURL.value=""
    this.refs.metakeys.value=""
    this.refs.status.value=""
  }
  editPage(){

  }
  render(){
    let submitButton=this.state.edit?<button onClick={this.editPage.bind(this)}><span>Edit</span></button>:<button
    onClick={this.addPage.bind(this)}><span>submit</span></button>;
      return(<div className="col-md-10 registration_form pad_t50">
      <Messages saveResult={this.state.saveResult}/>
      <div className="col-md-6 col-md-offset-3">
        <div className="card"></div>
        <div className="card">
          <h1 className="title">Create page for the client</h1>
          <div className="form_pad">
            <div className="row">
              <div className="col-md-12">
                <div className="input-container">
                  <input type="text" required="required" ref="name"/>
                  <label for="">Page Name</label>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                 <select ref="clientName" placeholder="client">
                 <option> choose client</option>
                 {this.props.data.clients.map((client)=>{

                return(<option>{client.contactName}</option>)
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
                  <input type="text" required="required" ref="previewURL"/>
                  <label for="">Preview URL</label>
                  <div className="bar"></div>
                </div>
				<div className="input-container">
                  <input type="text" required="required" ref="publishURL"/>
                  <label for="">Publish URL</label>
                  <div className="bar"></div>
                </div>
                 <div className="input-container">
                  <input type="text" required="required" ref="metakeys"/>
                  <label for="">Meta Keywords</label>
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
          </div>
        </div>
        <div className="message">

        </div>
      </div>
    </div>)
  }
}
