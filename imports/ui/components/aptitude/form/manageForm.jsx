//edits,deletes and lists the forms

import React,{Component} from 'react'
import crudClass from '../../common/crudClass.js'

export default class ManageForm extends Component {
  constructor(props) {
    super(props)
    this.state={
      forms:props.forms?props.forms:[]
    }
  }
  componentDidMount(){
    let renderWrap = $(document.getElementById('fb-rendered-form'))

  }
  render(){
    return(<div className="col-md-10 no_pad">
    <div className="creat_form min_h500">
      <div className="form_list">
      {this.state.forms.map((form)=>{
        let path='/aptitude/edit-form/'+form._id;
        let modal='#'+form._id;
        let showform="#"+form._id+"form";
        return(<div className="col-md-4"><span><strong>{form.name}</strong><i>
        <a href="#" data-toggle="modal"
        onClick={()=>{
          let data=JSON.parse(form.form)

          $(showform).formRender({
            dataType: 'json',
            formData:data
          })
        }}
        data-target={modal}><img src="../images/view.png" style={{width:20}}/></a>
        <div className="modal fade" id={form._id} tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="myModalLabel">Form View</h4>
              </div>
              <div className="modal-body">
                <div id={`${form._id}form`}></div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <a href={path}><img src="../images/edit.png"/></a><a id={form._id} href="#" onClick={(e)=>{
          let forms=this.state.forms;
          let newForms=_.reject(forms,function(form){
            console.log(form._id,e.target.id);
            if(form._id == e.target.id){
              return form;
            }

          })
          Meteor.call('deleteForm',e.target.id)
      this.setState({forms:newForms});

    }}><img id={form._id} src="../images/close.png"/></a></i></span>
          <div className="form_list_img"><img src="../images/form.png"/></div>
        </div>)
      })}

      </div>
    </div>
  </div>)
  }
}
