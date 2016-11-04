import React ,{Component} from 'react';
import crudClass from '../common/crudClass.js'
import HTML5Backend from 'react-dnd-html5-backend';



export default class AddForm extends Component {
  constructor(props) {
   super(props)
   this.state={
     selectedTab:'#create-form',
     formTitle:""
   }
  }

  componentDidMount(){
  //  $('#fb-editor').formBuilder();
  $('h4').hide();
  let self=this;
    var buildWrap = $(document.getElementById('fb-editors')),
    renderWrap = $(document.getElementById('fb-rendered-form')),
    fbOptions = {
     dataType: 'json'
   },
     formBuilder = $(buildWrap).formBuilder(fbOptions).data('formBuilder');

    $('.form-builder-save').click(function(e) {
      let obj=new crudClass();
     var formName=$('#formName').val();
     var description=$('#formdescription').val()
     self.setState({formTitle:formName})
     if(formName!=""){
       buildWrap.toggle();
     renderWrap.toggle();
       $("#mainForm").formRender({
         dataType: 'json',
         formData: formBuilder.formData
       });

        window.sessionStorage.setItem('formData', JSON.stringify(formBuilder.formData));
         let data=JSON.stringify(formBuilder.formData);
        let result=obj.create('addForm',{name:formName,description:description,form:data});


       $('#create-form').removeClass('in active');
       $('#create-form-tab').removeClass('in active');
       $('#previews').addClass('in active');
       $('#previews-tab').addClass('in active');
       self.setState({selectedTab:'#previews'})
     }
     else{
      $('h4').show();
     }

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
      <div className="row" style={{"marginTop":30,"marginBottom":20,"marginLeft":10}}>
      <div className="col-md-5 input-container">
      <input type="text" className="form-control" placeholder="Form Name" id="formName" style={{height: 50,width: 400}} required=""/>
      <h4 className="" style={{color:"red"}}>Please insert form Name</h4>
      </div>
      <div className="col-md-6 input-container">
      <textarea  id="formdescription" cols="8" rows="3" className="form-control" defaultValue="describe your form" required=""></textarea>
      </div>

      </div>
      <div  id="fb-editors">
      </div>
      </div>
      <div className="tab-pane fade" id="previews-tab">
      <h2 className="col-md-offset-5">{this.state.formTitle}</h2>
      <div className="col-md-12">
      <div  id="mainForm">
      </div>
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

let alertMessage = (props)=>{
  if(props){
    let messages="message stored sucessfully"
  }
  else{
    let messages="message stored unsucessfull"
  }
  return(<div style={{color:"red"}}>{messages}</div>)
}
