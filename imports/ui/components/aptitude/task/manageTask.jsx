//lists,delete and edit tasks

import React ,{Component} from 'react'
import AddTask from './addTask.jsx'
import crudClass from '../../common/crudClass.js'

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
            <th>Action</th>

          </tr>
          {this.props.tasks.map((task)=>{
            console.log(task);
          return(<tr>
              <td>{task.name}</td>
              <td>{task.description}</td>
              <td>{task.status}</td>
              <td><div className="button-container">
              <a href="#"  data-toggle="modal" data-target={`#${task._id}`}>Edit</a>
              <div className="modal fade" id={`${task._id}`} tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
              <AddTask edit="true" task={task}/>
            </div>
              <a href="#" id={task._id} onClick={(e)=>{
                let obj=new crudClass()
                obj.delete('deleteTask',e.target.id)
              }}>Delete</a></div></td>
            </tr>)
          })}
        </table>
      </div>
    </div>)
  }
}
