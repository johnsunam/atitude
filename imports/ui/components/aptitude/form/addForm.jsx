//creates new form && previews for newly created form
import React ,{Component} from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import crudClass from '../../common/crudClass.js'
import Alert from 'react-s-alert';
var message = require('../../common/message.json');

export default class AddForm extends Component {
  constructor(props) {
   super(props)
   this.state={
     selectedTab:'#create-form',
     formTitle:"",
     result:"",
     messages:null
   }
  }

  componentDidMount(){
  $('h4').hide();
  $('#save-alert').hide();
  let self=this;
    var buildWrap = $(document.getElementById('fb-editors')),
    renderWrap = $(document.getElementById('fb-rendered-form')),
    fbOptions = {
     dataType: 'json',
     inputSets: [
     {
       label: 'Camera',
       name: 'camera', // optional - one will be generated from the label if name not supplied
       showHeader: true, // optional - Use the label as the header for this set of inputs
       fields: [
           {
             type: 'text',
             label: 'Take SnapShot',
             className: 'form-control'
           }
         ]
     },
       {
         label: 'Rating',
         fields: [
         {
           type: 'header',
           subtype: 'h2',
           label: 'Rating',
           className: 'header'
         }
       ]
       }
     ]
   },
     formBuilder = $(buildWrap).formBuilder(fbOptions).data('formBuilder');

    $('.form-builder-save').click(function(e) {
      let obj=new crudClass();
     var formName=$('#formName').val();
     var description=$('#formdescription').val()
     self.setState({formTitle:formName})
     if(formName!="" && formBuilder.formData.length>2){
       buildWrap.toggle();
     renderWrap.toggle();
       $("#mainForm").formRender({
         dataType: 'json',
         formData: formBuilder.formData
       });

         $('#save-alert').show()
        window.sessionStorage.setItem('formData', JSON.stringify(formBuilder.formData));
         let data=JSON.stringify(formBuilder.formData);

        self.setState({result:{name:formName,description:description,form:data}})
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
        <li className="in active" id="create-form"><a href="#create-form" id="#create-form" data-toggle="tab" onClick={this.openTab.bind(this)} >Create Form</a></li>
        <li className="" id="previews"><a className="form-builder-save" href="#" id="#previews" >Preview</a></li>
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
      <a href="#" className="btn btn-primary formsubmit" onClick={()=>{
        let obj= new crudClass()
        obj.create('addForm',this.state.result)
        this.setState({message:true})
        $('.formsubmit').hide()
      }}>save form</a>
      <div  id="mainForm">
      </div>
      <div className="" id="save-alert">
      <span style={{"fontSize":20,"color":"green"}}>{this.state.message?"form sucessfully saved":""}</span>
      </div>

      </div>

    </div>
      </div>
    </div>
      )
  }
}
