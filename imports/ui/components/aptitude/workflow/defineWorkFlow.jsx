import React ,{Component} from 'react'
import crudClass from '../../common/crudClass.js'

export default class DefineWorkFlow extends Component {
  constructor(props) {
   super(props)
  }
  render(){
    return(<div className="col-md-10 registration_form pad_t50">
      <div className="row">
        <div className="col-md-3">
          <ul className="work_flow_menu">
            <li><strong>PAGES</strong></li>
            <li><a href="#" className="active">Page 1</a></li>
            <li><a href="#">Page 2</a></li>
            <li><a href="#">Page 3</a></li>
            <li><strong>TASK</strong></li>
            <li><a href="#">Task 1</a></li>
            <li><a href="#">Task 2</a></li>
            <li><a href="#">Task 3</a></li>
            <li><strong>CONDITION</strong></li>
            <li className="text-center"><br />
              <b>IF<br />
              IF ELSE<br />
              SWITCH<br />
              AND<br />
              <br /></b>
            </li>
          </ul>
        </div>
        <div className="col-md-9">
        <div className="workflow_cont">

   <h1 className="title">define work flow</h1><br />
<br />


        <img src="images/flowchat.png" /><br />
<br /><br />
<br />


        </div>


        </div>
      </div>
    </div>)
  }
}
