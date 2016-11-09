//edits,delete and lists workflow

import React ,{Component} from 'react'
import AddWorkFlow from './addWorkFlow.jsx'
import crudClass from '../../common/crudClass.js'
export default class ManageWorkFlow extends Component {
  constructor(props) {
   super(props)
   this.state={
     selectedWorkFlow:null
   }
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
        <th>Action</th>
			</tr>
          {this.props.workflows.map((workflow)=>{
          return(<tr>
              <td>{workflow.name}</td>
              <td>{workflow.description}</td>
              <td>{workflow.status}</td>
              <td><div className="button-container">
               <a href="#"  data-toggle="modal" data-target={`#${workflow._id}`}>Edit</a>
				  <div className="modal fade" id={`${workflow._id}`} tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
					<AddWorkFlow edit="true" workflow={workflow}/>
				</div>

			  <a href="/aptitude/define-workflow">Define</a> <a href="#" id={workflow._id} onClick={(e)=>{
                let obj=new crudClass()
                obj.delete('deleteWorkFlow',e.target.id)
              }}>Delete</a></div></td>

            </tr>)
          })}
        </table>
      </div>
    </div>)
  }
}