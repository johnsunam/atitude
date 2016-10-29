import React ,{Component} from 'react'

export default class AddClient extends Component {
  constructor(props) {
   super(props)
  }
  addClient(){
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
    let record={companyName:companyName,address:address,email:email, phone:phone, website:website, city:city, state:state,pincode:pincode,contactName:contactName,contactNo:contactNo}
    console.log(record);
   Meteor.call('addClient',record);
  }
  render(){
    return(<div className="col-md-10 registration_form pad_t50">
      <div className="col-md-8 col-md-offset-2">
        <div className="card"></div>
        <div className="card">
          <h1 className="title">Add Client</h1>
          <div className="form_pad">
            <div className="row">
              <div className="col-md-6">
                <div className="input-container">
                  <input type="text" required="required" ref="companyName" />
                  <label for="">Company Name</label>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <input type="text" required="required" ref="address"/>
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
                  <select>
                    <option>Country</option>
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
             <button
              onClick={this.addClient.bind(this)}><span>submit</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
}
