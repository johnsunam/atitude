//new client is added and existing client record is edited
import React ,{Component} from 'react'
import {Random } from 'meteor/random'
import crudClass from '../../common/crudClass.js'
var message = require('../../common/message.json');
import Alert from 'react-s-alert';
import {Session} from 'meteor/session';
import MyInput from '../../common/validator.js'
import ToolTip from 'react-portal-tooltip'

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
  contactNo:'',
  roles:[],
  tooltip:'',
  tooltipMessage:''
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
    client=client?client:[]
    this.state.edit?this.setState({companyName:client.companyName,
       isTooltipActive: false,
      email:client.email,
      address:client.address,
      phone:client.phone,
      website:client.website,
      city:client.city,
      state:client.state,
      pincode:client.pincode,
      contactName:client.contactName,
      contactNo:client.contactNo,country:client.country,roles:client.roles}):this.setState({companyName:'',
      address:'',
      phone:'',
      website:'',
      city:'',
      state:'',
      pincode:'',
      contactName:'',
      contactNo:'',
      country:'',
      tooltip:""
      })
    Session.set('showCode',false)
  }


    showTooltip(e) {
      console.log(e.target.name);
      this.setState({tooltip:e.target.name})
        this.setState({isTooltipActive: true})
        this.setState({tooltipMessage:message[`${e.target.name}`]})
    }
    hideTooltip(e) {
      this.setState({tooltip:e.target.id})
        this.setState({isTooltipActive: false})
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
        	contactNo=e.contactNo,
          country=this.refs.country.value
          console.log(country);
    let ran=Random.hexString(7);
    console.log(this.state.roles);
    let record=this.props.edit?{id:this.props.client._id,data:{companyName:companyName,address:address,email:email, phone:phone, website:website, city:city, state:state,pincode:pincode,contactName:contactName,contactNo:contactNo,country:country,roles:this.state.roles}}:
      {code:ran,companyName:companyName,address:address,email:email, phone:phone, website:website, city:city, state:state,pincode:pincode,contactName:contactName,contactNo:contactNo,country:country,roles:this.state.roles}

    let res=this.state.edit? obj.edit('editClient',record) : obj.create('addClient',record);
    this.setState({saveResult:res,  isShowMessage: true,code:ran})
    this.refs.form.reset();
    this.setState({roles:[]})

  }

  render(){
    console.log(this.props);
    let submitButton=<button type="submit"  disabled={!this.state.canSubmit} ><span>Save</span></button>
         return(<div className="col-md-10 registration_form pad_t50">
      <div className="col-md-8 col-md-offset-2">
        <div className="card"></div>
        <div className="card">
          <h1 className="title">{this.props.edit?"Edit Client":"Add Client"}</h1>
          <div className="form_pad">

          <Formsy.Form ref="form" onValidSubmit={this.submit.bind(this)} id="addClient" onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>
            <div className="row">
              <div className="col-md-6">

                <div className="input-container">
                  <MyInput type="text" help="Enter you company name" title="Company Name" name="companyName" ref="companyName" value={this.props.edit?this.props.client.companyName:''} required />
                  <div className="bar"></div>
                </div>

                <div className="input-container">
                  <MyInput type="text" help="Enter your valid address" title="Address" name="address" ref="address" value={this.props.edit?this.props.client.address:''} required />
                  <div className="bar"></div>
                </div>

                <div className="input-container">
                  <MyInput type="email" help="Please enter valid email address." title="Email" name="email" validations="isEmail" validationError="This is not a valid email address" ref="email" value={this.props.edit?this.props.client.email:''} required />
                  <div className="bar"></div>
                </div>

                <div className="input-container">
                  <MyInput type="number" help="Enter your contact number" title="Phone" name="phone" ref="phone" value={this.props.edit?this.props.client.phone:''}/>
                  <div className="bar"></div>
                </div>

                <div className="input-container">
                  <MyInput type="text" help="Enter your website" title="Website" name="website" ref="website" value={this.props.edit?this.props.client.website:''}/>
                  <div className="bar"></div>
                </div>
                <label>Add Roles</label>
              <div className="input-group">
                <span style={{color:'red'}}> *</span>
              <input type="text" className="form-control" ref="roles" placeholder="Roles...."/>
                <span className="input-group-btn">
                 <button className="btn btn-default" type="button" onClick={()=>{
                   let pre=this.state.roles
                   this.refs.roles.value!=''?pre.push(this.refs.roles.value):Alert.warning("role is empty",{
                     position: 'top-right',
                     effect: 'bouncyflip',
                     timeout: 1000
                    })
                     this.setState({roles:pre})
                     this.refs.roles.value=''
                  }}>Add</button>
                </span>
              </div>

        <div>
            <ul>
                {this.state.roles.map((role)=>{
                return(<li>{role}<a href="#" id={role} onClick={(e)=>{
                  let pre=_.without(this.state.roles,e.target.id)
                  this.setState({roles:pre})
                }}><i id={role} className="fa fa-times"></i></a></li>)
                })}
            </ul>
              </div>
              </div>

              <div className="col-md-6">

                <div className="input-container">
                  <MyInput type="text" help="Enter your city name" title="City" name="city" ref="city" value={this.props.edit?this.props.client.city:''}/>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <MyInput type="text" help="Enter your state" title="State" name="state" ref="state" value={this.props.edit?this.props.client.state:''}/>
                  <div className="bar"></div>
                </div>

                <div className="input-container">
                <span style={{color:'red'}}> *</span>
                  <select id="countries" ref="country">
                    <option>{this.props.edit?this.state.country:"Country"}</option>
                      {this.state.countries.map((country)=>{
                      return(<option>{country.name}</option>)
                     })}
                  </select>
                </div>

                <div className="input-container">
                  <MyInput type="text" help="Enter the pincode" title="Pincode" name="pincode" ref="pincode" value={this.props.edit?this.props.client.pincode:''}/>
                  <div className="bar"></div>
                </div>

                <div className="input-container">
                  <MyInput type="text" help="Pick up your contact name" title="Contact Name" name="contactName" ref="contactName" value={this.props.edit?this.props.client.contactName:''}/>
                  <div className="bar"></div>
                </div>

                <div className="input-container">
                  <MyInput type="number" help="Enter your contact number" name="contactNo" title="Contact No" ref="contactNo" value={this.props.edit?this.props.client.contactNo:''}/>
                  <div className="bar"></div>
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
      <ToolTip active={this.state.isTooltipActive} position="top" arrow="center" parent={`#${this.state.tooltip}`}>
                    <div>
                        <p>{this.state.tooltipMessage}</p>

                    </div>
                </ToolTip>

    </div>)
  }
}
