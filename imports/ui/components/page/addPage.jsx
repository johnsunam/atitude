import React ,{Component} from 'react'

export default class AddPage extends Component {
  constructor(props) {
   super(props)
  }
  render(){
    return(<div className="col-md-10 registration_form pad_t50">
      <div className="col-md-6 col-md-offset-3">
        <div className="card"></div>
        <div className="card">
          <h1 className="title">Create page for the client</h1>
          <form className="form_pad">
            <div className="row">
              <div className="col-md-12">
                <div className="input-container">
                  <input type="text" required="required"/>
                  <label for="">Page Name</label>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                 <select> <option> Client </option> </select>
                </div>
                                
                <div className="input-container">
                 <select> <option> Form Name </option> </select>
                </div>
				 <div className="input-container">
                  <input type="text" required="required"/>
                  <label for="">Preview URL</label>
                  <div className="bar"></div>
                </div>
				<div className="input-container">
                  <input type="text" required="required"/>
                  <label for="">Publish URL</label>
                  <div className="bar"></div>
                </div>
                 <div className="input-container">
                  <input type="text" required="required"/>
                  <label for="">Meta Keywords</label>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                 <select><option> Status </option><option> <option> Draft </option><option> Publish </option> </select>
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