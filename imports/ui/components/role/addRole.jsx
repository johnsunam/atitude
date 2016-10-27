import React ,{Component} from 'react'

export default class AddRole extends Component {
  constructor(props) {
   super(props)
  }
  render(){
    return(    <div className="col-md-10 registration_form pad_t50">
      <div className="col-md-6 col-md-offset-3">
        <div className="card"></div>
        <div className="card">
          <h1 className="title">Add Role</h1>
          <form className="form_pad">
            <div className="row">
              <div className="col-md-12">
                <div className="input-container">
                  <input type="text" required="required"/>
                  <label for="">Role Name</label>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <textarea placeholder="Role Description"></textarea>
                </div>
                <div className="input-container gender">
                  <div>Page Access &nbsp;
                    <input type="checkbox">
                  </div>
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