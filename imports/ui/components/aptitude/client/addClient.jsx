//new client is added and existing client record is edited
import React ,{Component} from 'react'
import {Random } from 'meteor/random'
import crudClass from '../../common/crudClass.js'
var message = require('../../common/message.json');
import Alert from 'react-s-alert';
import {Session} from 'meteor/session';
import MyInput from '../../common/validator.js'

export default class AddClient extends Component {
  constructor(props) {
   super(props)
   this.state={countries:[{name:"Nepal"},{name:"India"},{name:'Bhutan'}],
    saveResult:false,
    edit:this.props.edit,
    client:this.props.client,
	isShowMessage: false,
  code:"",
  canSubmit: false,
  confirm:Session.get('confirm'),
  res:""
    }
  }
  enableButton() {
    this.setState({ canSubmit: true });
  }
  disableButton() {
    this.setState({ canSubmit: false });
  }

  componentDidMount(){

    this.refs.companyName.value=this.state.edit?this.props.client.companyName:''
    this.refs.address.value=this.state.edit?this.props.client.address:''
    this.refs.phone.value=this.state.edit?this.props.client.phone:''
    this.refs.website.value=this.state.edit?this.props.client.website:''
    this.refs.city.value=this.state.edit?this.props.client.city:''
    this.refs.state.value=this.state.edit?this.props.client.state:''
    this.refs.pincode.value=this.state.edit?this.props.client.pincode:''
    this.refs.contactName.value=this.state.edit?this.props.client.contactName:''
    this.refs.contactNo.value=this.state.edit?this.props.client.contactNo:''

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
  componentDidUpdate(){
    this.state.edit?this.props.client.companyName:''
    this.state.edit?this.props.client.address:''
    this.state.edit?this.props.client.phone:''
    this.state.edit?this.props.client.website:''
    this.state.edit?this.props.client.city:''
    this.state.edit?this.props.client.state:''
    this.state.edit?this.props.client.pincode:''
    this.state.edit?this.props.client.contactName:''
    this.state.edit?this.props.client.contactNo:''
  }
  // saving client to ClientDb
  submit(){
    let obj= new crudClass();
      let companyName=$('#companyName').val(),
          address=$('#address').val(),
        	email=$('#email').val(),
        	phone=$('#phone').val(),
        	website=$('#website').val(),
        	city=$('#city').val(),
        	state=$('#state').val(),
        	pincode=$('#pincode').val(),
        	contactName=$('#contactName').val(),
        	contactNo=$('#contactNo').val();
          console.log(  $('#companyName').val('')   );

    let status=$('#checkbox:checked').val() ? "active":"inactive";
    let ran=Random.hexString(7);
    let record=this.props.edit?{id:this.props.client._id,data:{companyName:companyName,address:address,email:email, phone:phone, website:website, city:city, state:state,pincode:pincode,contactName:contactName,contactNo:contactNo}}:
    {code:ran,companyName:companyName,address:address,email:email, phone:phone, website:website, city:city, state:state,pincode:pincode,contactName:contactName,contactNo:contactNo}

    let res=this.state.edit?obj.edit('editClient',record):obj.create('addClient',record);

    if(Session.get('confirm')){

    }
    this.setState({saveResult:res,  isShowMessage: true,code:ran})

  }
  render(){

    let submitButton=this.state.edit?<button type="submit" disabled={!this.state.canSubmit}  data-dismiss="modal"><span>Edit</span></button>:<button  type="submit" disabled={!this.state.canSubmit}>
    <span>submit</span></button>;
     return(<div className="col-md-10 registration_form pad_t50">

      {this.state.edit?"":<div>{this.state.code}</div>}
      <div className="col-md-8 col-md-offset-2">
        <div className="card"></div>
        <div className="card">
          <h1 className="title">Add Client</h1>
          <div className="form_pad">
          <Formsy.Form onValidSubmit={this.submit.bind(this)} id="addClient" onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>
            <div className="row">
              <div className="col-md-6">

                <div className="input-container">
                  <MyInput type="text" title="Company Name" name="companyName" ref="companyName" value='' />
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <MyInput type="text"  title="Address" name="address" ref="address"/>

                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <MyInput type="text" title="Email" name="email" ref="email"/>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <MyInput type="num" title="Phone" name="phone" ref="phone"/>

                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <MyInput type="text" title="Website" name="website" ref="website"/>

                  <div className="bar"></div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-container">
                  <MyInput type="text" title="City" name="city" ref="city"/>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <MyInput type="text" title="State" name="state" ref="state"/>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <select id="countries">
                  <option>Country</option>
                  {this.state.countries.map((country)=>{
                    return(<option>{country.name}</option>)
                  })}
                  </select>
                </div>
                <div className="input-container">
                  <MyInput type="num" title="Pincode" name="pincode" ref="pincode"/>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <MyInput type="text" title="Contact Name" name="contactName" ref="contactName"/>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <MyInput type="num" name="contactNo" title="Contact No" ref="contactNo"/>
                  <div className="bar"></div>
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
