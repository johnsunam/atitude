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
     messages:null,
     formData:props.form?props.form.form:null,
     formBuilder:null,
     selects:[],
     checkboxes:[],
     textboxes:[],
     rules:[],
     currentSelects:[],
     currentoptions:[]
   }
  }

  componentDidMount(){
    let self=this;
    $('#mainForm').click(function(e){
    let element=_.where(self.state.rules,{checkbox:e.target.name});
    let select=_.where(self.state.rules,{select:e.target.name});
      if(select.length>0){
          let opt=$(`#${e.target.name}`).val()
          let rules=_.where(select,{select:e.target.name,option:opt})
          _.map(rules,function(obj){
            let box=document.getElementsByName(obj.textbox);
              $(box).parent().removeClass('hidden');
          })
          _.map(select,function(obj){
            console.log(obj.option,opt);
            if(obj.option!=opt){
              let box=document.getElementsByName(obj.textbox);
                $(box).parent().addClass('hidden');
            }
          })


      }
    _.map(element,function(obj){
      let checkbox=document.getElementsByName(obj.checkbox);
      let box=document.getElementsByName(obj.textbox);
      if($(checkbox).prop('checked') == true){

        $(box).parent().removeClass('hidden')
      }
      else{
          $(box).parent().addClass('hidden')
      }

    })
    })
  $('h4').hide();
  $('#save-alert').hide();
    var buildWrap = $(document.getElementById('fb-editors')),

    renderWrap = $(document.getElementById('fb-rendered-form')),
    fbOptions = {
     dataType: 'json',
     inputSets: [
                {
         label: 'Rating',
         fields: [
         {
           type: 'number',
           subtype: 'h2',
           label: 'Rating',
           className:'rating'
         }
       ]
     },
     {
       label:'toggle button',
       fields:[
         {
           label:"choose toggle",
           type:"checkbox",
           "data-toggle":"toggle",
           "data-on":"yes",
           "data-off":"no"
         }
       ]
     },
     {
       label:"Hidden Input",
       fields:[
         {
          type:"text",
          className:"hidden-input",

         }
       ]
     },
     {
        label:"Take Picture",
        fields:[
                {
                type:'button',
                label:'Camera',
                className:'take-picture',
                id:'take-picture'
                }
               ]
      },

    ],
    typeUserEvents:{
       text:{
         onadd:function(fld){
           $('.btn',fld).click(function(){
             $(".className-wrap").hide();
             $(".name-wrap").hide();
           });
         }
       },

       autocomplete:{
         onadd:function(fld){
           $('.btn',fld).click(function(){
             console.log("Done");
             $(".className-wrap").hide();
             $(".name-wrap").hide();
           });
         }
       },

       button:{
         onadd:function(fld){
           $('.btn',fld).click(function(){
             $(".className-wrap").hide();
             $(".name-wrap").hide();
           });
         }
       },

       checkbox:{
         onadd:function(fld){
           $('.btn',fld).click(function(){
             $(".className-wrap").hide();
             $(".name-wrap").hide();
           });
         }
       },

       'checkbox-group':{
         onadd:function(fld){
           $('.btn',fld).click(function(){
             $(".className-wrap").hide();
             $(".name-wrap").hide();
           });
         }
       },

       date:{
         onadd:function(fld){
           $('.btn',fld).click(function(){
             $(".className-wrap").hide();
             $(".name-wrap").hide();
           });
         }
       },

       file:{
         onadd:function(fld){
           $('.btn',fld).click(function(){
             $(".className-wrap").hide();
             $(".name-wrap").hide();
           });
         }
       },

       header:{
         onadd:function(fld){
           $('.btn',fld).click(function(){
             $(".className-wrap").hide();
             $(".name-wrap").hide();
           });
         }
       },

       hidden:{
         onadd:function(fld){
           $('.btn',fld).click(function(){
             $(".className-wrap").hide();
             $(".name-wrap").hide();
           });
         }
       },

       paragraph:{
         onadd:function(fld){
           $('.btn',fld).click(function(){
             $(".className-wrap").hide();
             $(".name-wrap").hide();
           });
         }
       },

       number:{
         onadd:function(fld){
           $('.btn',fld).click(function(){
             $(".className-wrap").hide();
             $(".name-wrap").hide();
           });
         }
       },

       'radio-group':{
         onadd:function(fld){
           $('.btn',fld).click(function(){
             $(".className-wrap").hide();
             $(".name-wrap").hide();
           });
         }
       },

       select:{
         onadd:function(fld){
           $('.btn',fld).click(function(){
             $(".className-wrap").hide();
             $(".name-wrap").hide();
           });
         }
       },

       textarea:{
         onadd:function(fld){
           $('.btn',fld).click(function(){
             $(".className-wrap").hide();
             $(".name-wrap").hide();
           });
         }
       },

     },
   formData:JSON.parse(this.state.formData)
   },
     formBuilder = $(buildWrap).formBuilder(fbOptions).data('formBuilder');
     this.setState({formBuilder:formBuilder})
     this.refs.formName.value=this.props.edit?this.props.form.name:""
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

       // getting form data for implementing Logic
       let checkboxes=[],
       textboxes=[],
       selects=[];
       let checkbox=$("#mainForm input:checkbox");
       let textbox=$("#mainForm input:text");
       let select=$("#mainForm select");
       let count=0,b=0,a=0
       _.map(checkbox,function(single){

         checkboxes.push(checkbox[count].name)
         count++;
       })
       _.map(textbox,function(single){
         textboxes.push(textbox[b].name)
         b++;
     })
       _.map(select,function(single){
         selects.push(select[a].name)
         a++
       })

      self.setState({checkboxes:checkboxes,textboxes:textboxes,selects:selects})

         $('#save-alert').show()
        window.sessionStorage.setItem('formData', JSON.stringify(formBuilder.formData));
         let data=JSON.stringify(formBuilder.formData);
         console.log(self.props);
        self.props.edit?self.setState({result:{id:self.props.form._id,data:{name:formName,description:description,form:data,rules:self.state.rules}}}):self.setState({result:{name:formName,description:description,form:data,rules:self.state.rules}})
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

    console.log(this.state.rules);
    return(<div className="col-md-10 no_pad">
      <ul className="steps_menu nav nav-tabs">
        <li className="in active" id="create-form"><a href="#create-form" id="#create-form" data-toggle="tab" onClick={this.openTab.bind(this)} >{this.props.edit?"Create Form":"Edit "}</a></li>
        <li className="" id="previews"><a className="form-builder-save" href="#" id="#previews" >Preview</a></li>
      </ul>
      <div className="tab-content">
      <div id="create-form-tab" className="tab-pane fade in active">
      <div className="row" style={{"marginTop":30,"marginBottom":20,"marginLeft":10}}>
      <div className="col-md-5 input-container">
      <input type="text" className="form-control" placeholder="Form Name" ref="formName"
      id="formName" style={{height: 50,width: 400}} required=""/>
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
      <div>
      <a href="#" onClick={()=>{}} data-toggle="modal" data-target="#myModal">Add Logic</a>
      <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 className="modal-title" id="myModalLabel">Modal title</h4>
        </div>
        <div className="modal-body">
        <div>
          <select id="checkbox" onChange={(e)=>{
          }}><option>choose checkbox</option>
          {this.state.checkboxes.map((single)=>{
          let label=  $("label[for='"+single+"']").text();
          return(<option value={single}>{label}</option>)
          })}
          </select>

          <select id="first-textboxes" onChange={(e)=>{
          }}><option>choose textbox</option>
          {this.state.textboxes.map((single)=>{
          let label=  $("label[for='"+single+"']").text();
          return(<option value={single}>{label}</option>)
          })}
          </select>
          <a href="#" className="btn btn-primary" onClick={()=>{
            let checkbox=$("#checkbox").val();
            let textbox=$("#first-textboxes").val();
          let  lefttext=_.without(this.state.textboxes,textbox);
            this.setState({textboxes:lefttext})
            let rules=this.state.rules;
            rules.push({checkbox:checkbox,textbox:textbox})
            let box= document.getElementsByName(textbox);
            $(box).parent().addClass('hidden');
            this.setState({rules:rules})
          }}>Add rule</a>
          </div>
          <div>
               <select id="selectbox" onChange={(e)=>{
                 let options=$(document.getElementsByName(e.target.value)).children();

              let currentoptions= _.map(options,function(single){
                return single.value
                 })
                 this.setState({currentoptions:currentoptions,currentSelects:e.target.value})
               }}>
                <option>Choose select box</option>
               {this.state.selects.map((single)=>{
                 let label=  $("label[for='"+single+"']").text();
                 return(<option value={single}>{label}</option>)
               })}
               </select>
               <select id="option">
               <option>choose options</option>
               {this.state.currentoptions.map((single)=>{
                 let select=document.getElementsByName(this.state.currentSelects);
                let option=$(`#${this.state.currentSelects} option[value=${single}]`)
                      console.log(option);
                return (<option value={option.val()}>{option.text()}</option>)
               })}
               </select>
               <select id="second-textboxes" onChange={(e)=>{
               }}><option>choose textbox</option>
               {this.state.textboxes.map((single)=>{
               let label=  $("label[for='"+single+"']").text();
               return(<option value={single}>{label}</option>)
               })}
               </select>
               <a href="#" onClick={()=>{
                 let option= $('#option').val();
                 console.log(option);
                 let textbox=$('#second-textboxes').val();
                 let  lefttext=_.without(this.state.textboxes,textbox);
                   this.setState({textboxes:lefttext})
                   let rules=this.state.rules;
                   rules.push({select:this.state.currentSelects,option:option,textbox:textbox})
                   let box= document.getElementsByName(textbox);
                   $(box).parent().addClass('hidden');
                   this.setState({rules:rules})
               }}>add logic</a>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
      </div>
      <div className="col-md-12">
      <a href="#" className="btn btn-primary formsubmit" onClick={()=>{
        let obj= new crudClass()
        this.props.edit?obj.edit('editForm',this.state.result):obj.create('addForm',this.state.result);
        this.setState({message:true})
        $('.formsubmit').hide()
      }}>{this.props.edit?"Save Changes":"Save Form"}</a>
      <div  id="mainForm">
      </div>
      <video className="hidden"></video>
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
