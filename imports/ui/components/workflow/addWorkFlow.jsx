import React ,{Component} from 'react'

export default class AddWorkFlow extends Component {
  constructor(props) {
   super(props)
  }
  render(){
    return(<div className="col-md-10 registration_form pad_t50">
      <div className="col-md-6 col-md-offset-3">
        <div className="card"></div>
        <div className="card">
          <h1 className="title">Add Workflow</h1>
          <form className="form_pad">
            <div className="row">
              <div className="col-md-12">
                <div className="input-container">
                  <input type="text" required="required"/>
                  <label for="">Name</label>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <textarea placeholder=" Description"></textarea>
                </div>
                <div className="input-container gender">
                  <div>Active? &nbsp;
                    <input type="checkbox"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-container">
              <button><span>Cancel</span></button>
              <button><span>save</span></button>
            </div>
          </form>
        </div>
      </div>
    </div>)
  }
}
