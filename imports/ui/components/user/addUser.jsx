import React ,{Component} from 'react'

export default class AddUser extends Component {
  constructor(props) {
   super(props)
  }
  addUser(){
    let name=this.refs.name.value,
    dob=this.refs.dob.value,
	address=this.refs.address.value,
	mobile=this.refs.mobile.value,
	email=this.refs.email.value,
	secQuestion=this.refs.secQuestion.value,
	secAnswer=this.refs.secAnswer.value,
	roleName=this.refs.roleName.value;
    let status=$('#checkbox:checked').val() ? "active":"inactive";
    let record={name:name,dob:dob,status:status,address:address,mobile:mobile,email:email,secQuestion:secQuestion, secAnswer:secAnswer,roleName:roleName}
    console.log(record);
    //storing user data to UserDb
    Meteor.call('addUser',record,function(){
      if(!err){
        alert('stored sucess');

      }
    });
    this.refs.name.value=""
    this.refs.dob.value=""
    this.refs.address.value=""
    this.refs.mobile.value=""
    this.refs.email.value=""
    this.refs.secQuestion.value=""
    this.refs.secAnswer.value=""
    this.refs.roleName.value=""
  }
  render(){
    return(<div className="col-md-10 registration_form pad_t50">
      <div className="col-md-8 col-md-offset-2">
        <div className="card">
          <h1 className="title">Add User</h1>
          <div className="form_pad">
            <div className="row">
              <div className="col-md-6">
                <div className="input-container">
                  <input type="text" required="required" ref="name"/>
                  <label for="">Name</label>
                  <div className="bar"></div>
                </div>

                <div className="input-container">
                  <input type="text" required="required" ref="dob"/>
                  <label for=" ">Date of Birth</label>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <textarea placeholder="Address" ref="address"></textarea>
                </div>
              </div>
              <div className="col-md-6">

                <div className="input-container">
                  <input type="num" required="required" ref="mobile"/>
                  <label for="">Mobile Number</label>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <input type="email" required="required" ref="email"/>
                  <label for="">Email ID</label>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <select ref="secQuestion">
                    <option>Security Question</option>
                  </select>
                </div>
                <div className="input-container">
                  <input type="text" required="required" ref="secAnswer"/>
                  <label for=" ">Security Answer</label>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <input type="text" required="required" ref="roleName"/>
                  <label for=" ">Role Name</label>
                  <div className="bar"></div>
                </div>
				 <div className="input-container gender">
                  <div>Active? &nbsp;
                    <input type="checkbox" id="checkbox" value="active"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-container">
             <button
              onClick={this.addUser.bind(this)}><span>submit</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
}
