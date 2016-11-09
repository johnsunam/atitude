//new client is added and existing client record is edited
import React ,{Component} from 'react'
import crudClass from '../../common/crudClass.js'
import { Alert } from 'react-bootstrap';
import {Random } from 'meteor/random'
var message = require('../../common/message.json');


export default class AddClient extends Component {
  constructor(props) {
   super(props)
   this.state={countries:[{name:"Nepal"},{name:"India"},{name:'Bhutan'}],
    saveResult:false,
    edit:this.props.edit,
    client:this.props.client,
	isShowMessage: false,
  code:""
    }
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
  componentDidUpdate(){
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
  editClient(){

  }
  // saving client to ClientDb
  addClient(){
    let obj= new crudClass();
    let companyName=this.refs.companyName.value,
        address=this.refs.address.value,
      	email=this.refs.email.value,
      	phone=this.refs.phone.value,
      	website=this.refs.website.value,
      	city=this.refs.city.value,
      	state=this.refs.state.value,
      	pincode=this.refs.pincode.value,
      	contactName=this.refs.contactName.value,
      	contactNo=this.refs.contactNo.value;

    let status=$('#checkbox:checked').val() ? "active":"inactive";
    let ran=Random.hexString(7);
    console.log(ran);
    let record=this.props.edit?{id:this.props.client._id,data:{companyName:companyName,address:address,email:email, phone:phone, website:website, city:city, state:state,pincode:pincode,contactName:contactName,contactNo:contactNo}}:
    {code:ran,companyName:companyName,address:address,email:email, phone:phone, website:website, city:city, state:state,pincode:pincode,contactName:contactName,contactNo:contactNo}
    console.log(record);
    let res=this.state.edit?obj.edit('editClient',record):obj.create('addClient',record);
    this.setState({saveResult:res,  isShowMessage: true,code:ran})

   this.refs.companyName.value="";
   this.refs.address.value="";
   this.refs.email.value="";
   this.refs.phone.value="";
   this.refs.website.value="";
   this.refs.city.value="",
   this.refs.state.value="",
   this.refs.pincode.value="",
   this.refs.contactName.value=""
   this.refs.contactNo.value=""
  }
  render(){
    console.log(this.props.client);
    let submitButton=this.state.edit?<button onClick={this.addClient.bind(this)} data-dismiss="modal"><span>Edit</span></button>:<button
    onClick={this.addClient.bind(this)}><span>submit</span></button>;
     return(<div className="col-md-10 registration_form pad_t50">
    {this.state.isShowMessage ?
        <Alert bsStyle="success">
        {message.saveClientSuccess}
        </Alert>
      : ''}
      {this.state.edit?"":<div>{this.state.code}</div>}
      <div className="col-md-8 col-md-offset-2">
        <div className="card"></div>
        <div className="card">
          <h1 className="title">Add Client</h1>
          <div className="form_pad">
            <div className="row">

              <div className="col-md-6">

                <div className="input-container">
                  <input type="text" required="required" name="companyName" ref="companyName" />
                  <label for="">Company Name</label>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <input type="text" required="required" name="address" ref="address"/>
                  <label for=" ">Address</label>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <input type="text" required="required" ref="email"/>
                  <label for=" ">Email</label>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <input type="num"  required="required" ref="phone"/>
                  <label for=" ">Phone No</label>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <input type="text"  required="required" ref="website"/>
                  <label for="">Website</label>
                  <div className="bar"></div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-container">
                  <input type="text" required="required" ref="city"/>
                  <label for="">City</label>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <input type="text" required="required" ref="state"/>
                  <label for="">State</label>
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
                  <input type="num" required="required" ref="pincode"/>
                  <label for=" ">Pin Code</label>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <input type="text" required="required" ref="contactName"/>
                  <label for=" ">Contact Name</label>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <input type="num" required="required" ref="contactNo"/>
                  <label for=" ">Contact No</label>
                  <div className="bar"></div>
                </div>
              </div>
              </div>
            <div className="button-container">
             {submitButton}
             {this.state.edit?<button data-dismiss="modal">cancel</button>:''}
            </div>
          </div>
        </div>
		<div className="message">

        </div>
      </div>
    </div>)
  }
}
