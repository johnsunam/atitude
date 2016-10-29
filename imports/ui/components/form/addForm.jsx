import React ,{Component} from 'react';

import HTML5Backend from 'react-dnd-html5-backend';



export default class AddForm extends Component {
  constructor(props) {
   super(props)
   this.state={
     selectedTab:'#create-form'
   }
  }

  componentDidMount(){
  //  $('#fb-editor').formBuilder();
  let self=this;
    var buildWrap = $(document.getElementById('fb-editors')),
    renderWrap = $(document.getElementById('fb-rendered-form')),
    fbOptions = {
     dataType: 'json'
   },
     formBuilder = $(buildWrap).formBuilder(fbOptions).data('formBuilder');

    $('.form-builder-save').click(function(e) {
		  buildWrap.toggle();
		 renderWrap.toggle();
		$("#mainForm").formRender({
		  dataType: 'json',
		  formData: formBuilder.formData
		});

		 window.sessionStorage.setItem('formData', JSON.stringify(formBuilder.formData));
     let data=JSON.stringify(formBuilder.formData)
     // saving client to FormDb
     Meteor.call('addForm',{form:data},function(err){
       console.log(err);
     });
    $('#create-form').removeClass('in active');
    $('#create-form-tab').removeClass('in active');
    $('#previews').addClass('in active');
    $('#previews-tab').addClass('in active');
    self.setState({selectedTab:'#previews'})
  });
  }
  openTab(e){
    let self=this;
      $(e.target.id).addClass('in active');
      let id=e.target.id+"-tab";
      $(id).addClass('in active');
      $(self.state.selectedTab).removeClass('in active');
      let ids=self.state.selectedTab+"-tab";
      $(ids).removeClass('in active');
      this.setState({selectedTab:e.target.id})
  }
  render(){
    return(<div className="col-md-10 no_pad">
      <ul className="steps_menu nav nav-tabs">
        <li className="in active" id="create-form"><a href="#create-form" id="#create-form" data-toggle="tab" onClick={this.openTab.bind(this)} >Creat Form</a></li>
        <li className="" id="previews"><a href="#previews" id="#previews" data-toggle="tab" onClick={this.openTab.bind(this)}>Preview</a></li>
        <li className="" id="save"> <a href="#save" data-toggle="tab"  id="#save" onClick={this.openTab.bind(this)}>Save</a></li>
      </ul>
      <div className="tab-content">
      <div id="create-form-tab" className="tab-pane fade in active">
      <div  id="fb-editors">
      </div>
      </div>
      <div className="tab-pane fade" id="previews-tab">
      <div id="mainForm">
      </div>
      </div>
      <div className="tab-pane fade" id="save-tab">
      save
      </div>
      <div>

      </div>
      </div>


    </div>
      )
  }
}
