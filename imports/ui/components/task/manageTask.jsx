import React ,{Component} from 'react'

export default class ManageTask extends Component {
  constructor(props) {
   super(props)
  }
  render(){
    return( <div className="col-md-10 registration_form pad_t50">
      <div className="col-md-10 col-md-offset-1">
        <h1 className="title">Manage Task</h1>
        <table width="100%" border="0" cellspacing="0" cellpadding="0" className="table_cont">
          <tr>
            <th>Task Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {this.props.tasks.map((task)=>{
          return(<tr>
              <td>{task.name}</td>
              <td>{task.description}</td>
              <td>{task.status}</td>
              <td><div className="button-container">
              <a href="#">Define</a><a href="#" id={task._id} onClick={(e)=>{
                Meteor.call('deleteTask',e.target.id)
              }}>Delete</a></div></td>
              <td><a href="#"><i className="fa fa-edit font20"></i></a></td>
            </tr>)
          })}
        </table>
      </div>
    </div>)
  }
}
