import React ,{Component} from 'react'

export default class AddPage extends Component {
  constructor(props) {
   super(props)
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
    console.log(record);
    Meteor.call('addPage',record);
  }
  render(){
    console.log(this.props.data.forms);
    return(<div className="col-md-10 registration_form pad_t50">
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
                 {this.props.data.clients.map((client)=>{
                return(<option>{client.contactName}</option>)
                 })}
                 </select>
                </div>

                <div className="input-container" placeholder="form">
                 <select ref="formName"> {this.props.data.forms.map((form)=>{
                return(<option>{form._id}</option>)
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
              <button
              onClick={this.addPage.bind(this)}><span>submit</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
}
