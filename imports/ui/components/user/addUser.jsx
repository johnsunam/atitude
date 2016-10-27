import React ,{Component} from 'react'

export default class AddUser extends Component {
  constructor(props) {
   super(props)
  }
  render(){
    return(<div className="col-md-10 registration_form pad_t50">
      <div className="col-md-8 col-md-offset-2">
        <div className="card"></div>
        <div className="card">
          <h1 className="title">Add User</h1>
          <form className="form_pad">
            <div className="row">
              <div className="col-md-6">
                <div className="input-container">
                  <input type="" required="required" disabled="disabled"/>
                  <label for="">Employee ID</label>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <input type="text" required="required"/>
                  <label for="">First Name</label>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <input type="text" required="required"/>
                  <label for=" ">Last Name</label>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <input type="text" required="required"/>
                  <label for=" ">Date of Birth</label>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <textarea placeholder="Address"></textarea>
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-container gender">
                  <div>Gender</div>
                  <span>
                  <input type="radio"/>
                  Male</span><span>
                  <input type="radio"/>
                  Female</span></div>
                <div className="input-container">
                  <input type="num" required="required"/>
                  <label for="">Mobile Number</label>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <input type="email" required="required"/>
                  <label for="">Email ID</label>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <select>
                    <option>Security Question</option>
                  </select>
                </div>
                <div className="input-container">
                  <input type="text" required="required"/>
                  <label for=" ">Security Answer</label>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <input type="text" required="required"/>
                  <label for=" ">Role Name</label>
                  <div className="bar"></div>
                </div>
              </div>
            </div>
            <div className="button-container">
              <button><span>submit</span></button>
            </div>
          </form>
        </div>
      </div>
    </div>)
  }
}
