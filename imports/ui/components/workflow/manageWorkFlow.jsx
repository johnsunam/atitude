import React ,{Component} from 'react'

export default class ManageWorkFlow extends Component {
  constructor(props) {
   super(props)
  }
  render(){
    return( <div className="col-md-10 registration_form pad_t50">
      <div className="col-md-10 col-md-offset-1">
        <h1 className="title">Manage Work</h1>
        <table width="100%" border="0" cellspacing="0" cellpadding="0" className="table_cont">
			<tr>
				<th>Work Flow Name</th>
				<th>Status</th>
				<th>Access</th>
			</tr>
          {this.props.workflows.map((workflow)=>{
          return(<tr>
              <td>{workflow.name}</td>
              <td>{workflow.description}</td>
              <td>{workflow.status}</td>
              <td><div className="button-container">
              <a href="#">Edit</a><a href="/define-workflow">Define</a><a href="#" id={workflow._id} onClick={(e)=>{
                Meteor.call('deleteWorkFlow',e.target.id)
              }}>Delete</a></div></td>

            </tr>)
          })}
        </table>
      </div>
    </div>)
  }
}
