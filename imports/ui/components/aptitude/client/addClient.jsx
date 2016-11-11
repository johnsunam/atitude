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
  code:"",
  canSubmit: false,
  res:"",
  companyName:"",
  address:'',
  email:'',
  phone:'',
  website:'',
  city:'',
  state:'',
  country:'',
  pincode:'',
  contactName:'',
  contactNo:''


    }
  }
  enableButton() {
    this.setState({ canSubmit: true });
  }
  disableButton() {
    this.setState({ canSubmit: false });
  }

  componentDidMount(){

    let client=this.props.client;
    this.state.edit?this.setState({companyName:client.companyName}):this.setState({companyName:''})
    this.state.edit?this.setState({address:client.address}):this.setState({address:''})
    this.state.edit?this.setState({phone:client.phone}):this.setState({phone:''})
    this.state.edit?this.setState({website:client.website}):this.setState({website:''})
    this.state.edit?this.setState({city:client.city}):this.setState({city:''})
    this.state.edit?this.setState({state:client.state}):this.setState({state:''})
    this.state.edit?this.setState({pincode:client.pincode}):this.setState({pincode:''})
    this.state.edit?this.setState({contactName:client.contactName}):this.setState({contactName:''})
    this.state.edit?this.setState({contactNo:client.contactNo}):this.setState({contactNo:''})
    Session.set('showCode',false)
  }

  shouldComponentUpdate(nextProps, nextState){
    Tracker.autorun(function(){
      if(Session.equals('confirm',true)){
        Session.get('res')==true?Alert.success(message.saveClientSuccess, {
               position: 'top-right',
               effect: 'bouncyflip',
               timeout: 1000,
               onShow:function(){
                 Session.set('showCode',true)
               }
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
      }
  // saving client to ClientDb
  submit(e){

    let obj= new crudClass();
      let companyName=e.companyName,
          address=e.address,
        	email=e.email,
        	phone=e.phone,
        	website=e.website,
        	city=e.city,
        	state=e.state,
        	pincode=e.pincode,
        	contactName=e.contactName,
        	contactNo=e.contactNo;
    let status=$('#checkbox:checked').val() ? "active":"inactive";
    let ran=Random.hexString(7);
    let record=this.props.edit?{id:this.props.client._id,data:{companyName:companyName,address:address,email:email, phone:phone, website:website, city:city, state:state,pincode:pincode,contactName:contactName,contactNo:contactNo}}:
    {code:ran,companyName:companyName,address:address,email:email, phone:phone, website:website, city:city, state:state,pincode:pincode,contactName:contactName,contactNo:contactNo}
    let res=this.state.edit?obj.edit('editClient',record):obj.create('addClient',record);
    this.setState({saveResult:res,  isShowMessage: true,code:ran})
    let client=this.props.client;
    this.state.edit?this.setState({companyName:client.companyName}):this.setState({companyName:''})
    this.state.edit?this.setState({address:client.address}):this.setState({address:''})
    this.state.edit?this.setState({phone:client.phone}):this.setState({phone:''})
    this.state.edit?this.setState({website:client.website}):this.setState({website:''})
    this.state.edit?this.setState({city:client.city}):this.setState({city:''})
    this.state.edit?this.setState({state:client.state}):this.setState({state:''})
    this.state.edit?this.setState({pincode:client.pincode}):this.setState({pincode:''})
    this.state.edit?this.setState({contactName:client.contactName}):this.setState({contactName:''})
    this.state.edit?this.setState({contactNo:client.contactNo}):this.setState({contactNo:''})

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
                  <MyInput type="text" title="Company Name" name="companyName" ref="companyName" value={this.state.className} />
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <MyInput type="text"  title="Address" name="address" ref="address" value={this.state.address}/>

                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <MyInput type="text" title="Email" name="email" ref="email" value={this.state.email}/>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <MyInput type="num" title="Phone" name="phone" ref="phone" value={this.state.phone}/>

                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <MyInput type="text" title="Website" name="website" ref="website" value={this.state.website}/>

                  <div className="bar"></div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-container">
                  <MyInput type="text" title="City" name="city" ref="city" value={this.state.city}/>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <MyInput type="text" title="State" name="state" ref="state" value={this.state.state}/>
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
                  <MyInput type="num" title="Pincode" name="pincode" ref="pincode" value={this.state.pincode}/>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <MyInput type="text" title="Contact Name" name="contactName" ref="contactName" value={this.state.contactName}/>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <MyInput type="num" name="contactNo" title="Contact No" ref="contactNo" value={this.state.contactNo}/>
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
