import React ,{Component} from 'react'

export default class AddWorkFlow extends Component {
  constructor(props) {
   super(props)
  }
  addWorkFlow(){
    let name=this.refs.name.value,
    description=this.refs.description.value;
    let status=$('#checkbox:checked').val() ? "active":"inactive";
    let record={name:name,description:description,status:status}
    console.log(record);

    //storing WorkFlow data to WorkFlowDb
    Meteor.call('addWorkFlow',record,function(err,res){
      if(!err){
        alert('stored sucess');

      }
    });
    this.refs.name.value=""
    this.refs.description.value=""
  }
  render(){
    return(<div className="col-md-10 registration_form pad_t50">
      <div className="col-md-6 col-md-offset-3">
        <div className="card"></div>
        <div className="card">
          <h1 className="title">Add Workflow</h1>
          <div className="form_pad">
            <div className="row">
              <div className="col-md-12">
                <div className="input-container">
                  <input type="text" required="required" ref="name"/>
                  <label for="">Name</label>
                  <div className="bar"></div>
                </div>
                <div className="input-container">
                  <textarea placeholder="Description" ref="description"></textarea>
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
              onClick={this.addWorkFlow.bind(this)}><span>submit</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
}
