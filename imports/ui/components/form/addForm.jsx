import React ,{Component} from 'react';
import Builder from './formbuilder.jsx';

export default class AddForm extends Component {
  constructor(props) {
   super(props)
  }
  render(){
    return(<div className="col-md-10 no_pad">
    <ul className="steps_menu">
      <li className="active">Creat Form</li>
      <li>Preview</li>
      <li>Save</li>
    </ul>
    <div className="creat_form">
      <div className="col-md-5 input_box">
        <div className="row">
        <Builder/>

        </div>
        <div className="btns"><a href="#">clear</a><a href="#" className="active">next</a></div>
      </div>
      <div className="col-md-7">
        <h6 className="drag_text">Drag a field from the right to this area</h6>
      </div>
    </div>
  </div>)
  }
}
