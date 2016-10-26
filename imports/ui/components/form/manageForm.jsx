import React,{Component} from 'react'

export default class ManageForm extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(<div className="col-md-10 no_pad">
    <div className="creat_form min_h500">
      <div className="form_list">
        <div className="col-md-4"><span><strong>AMi</strong><i><a href="#"><img src="images/view.png" style={{width:20}}/></a>
        <a href="#"><img src="images/edit.png"/></a><a href="#"><img src="images/close.png"/></a></i></span>
          <div className="form_list_img"><img src="images/form.png"/></div>
        </div>


        <div className="col-md-4"><span><strong>Srinivas</strong><i>
        <a href="#"><img src="images/view.png" style={{width:20}}/></a><a href="#"><img src="images/edit.png"/></a>
        <a href="#"><img src="images/close.png"/></a></i></span>
          <div className="form_list_img"><img src="images/form.png"/></div>
        </div>



        <div className="col-md-4"><span><strong>Lakshmi</strong><i>
        <a href="#"><img src="images/view.png" style={{width:20}}/></a>
        <a href="#"><img src="images/edit.png"/></a>
        <a href="#"><img src="images/close.png"/></a></i></span>
          <div className="form_list_img"><img src="images/form.png"/></div>
        </div>


      </div>
    </div>
  </div>)
  }
}
