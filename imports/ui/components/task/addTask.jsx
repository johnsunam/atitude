import React ,{Component} from 'react'

export default class AddTask extends Component {
  constructor(props) {
   super(props)
  }
  addTask(){
    let name=this.refs.name.value,
    description=this.refs.description.value;
    let status=$('#checkbox:checked').val() ? "active":"inactive";
    let record={name:name,description:description,status:status}
    console.log(record);
    Meteor.call('addTask',record);
  }
  render(){
    return(  <div className="col-md-10 registration_form pad_t50">
      <div className="col-md-6 col-md-offset-3">
        <div className="card"></div>
        <div className="card">
          <h1 className="title">Add Task</h1>
          <div className="form_pad">
            <div className="row">
              <div className="col-md-12">
                <div className="input-container">
                  <input type="text" required="required" ref="name"/>
                  <label for=""> Name</label>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <textarea placeholder=" Description" ref="description"></textarea>
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
              onClick={this.addTask.bind(this)}><span>submit</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
}
