import React ,{Component} from 'react';
import FormDataList from '../../../container/formDataList.js'
import crudClass from '../../common/crudClass.js'

export default class ClientUserDashboard extends Component {
  constructor(props) {
    super(props)
    this.state={
      selectedTab:'#fill-form',
      formData:{},
      keys:[],
      id:props.page,
      message:""
    }
  }
  componentDidMount(){

    let self=this;
    let data=this.props.form?this.props.form.form:null
    let form=JSON.parse(data)
    let id="#"+self.state.id
    $("#showform").formRender({
      dataType: 'json',
      formData: form
    })
    if(data!=null){
      if($(":submit").length==0 && $(':button').length==0){
        $("#showform").append('<button type="submit">submit<button/>');
      }

    }
    var json = "";

    $("#showform button").click(function(e){
      e.preventDefault()
      let arr=$("#showform").serializeArray()
    jQuery.each(arr, function(){
    	jQuery.each(this, function(i, val){
    		if (i=="name") {
    			json += '"' + val + '":';
    		} else if (i=="value") {
    			json += '"' + val.replace(/"/g, '\\"') + '",';
    		}
    	});
    });
    json = "{" + json.substring(0, json.length - 1) + "}";
    console.log(json);
   let data=JSON.parse(json);
   console.log(data);
   Meteor.call('addFormData',{page:self.props.page,data:data,user:Meteor.userId()},function(err){
     if(!err){
       json=''
       self.setState({message:"Data saved sucessfully"})
     }
     else {
       self.setState({message:err.reason})
     }
   });
    self.setState({formData:data})
    let keys=_.keys(data);
    let values=_.values(data);
     self.setState({keys:keys});
    self.setState({selectedTab:'#preview'})
    console.log(self.state.formData);
    })

  }

  componentWillReceiveProps(nextProps){
    this.setState({message:""})
  let self=this;
    let data=nextProps.form?nextProps.form.form:''
    let form=JSON.parse(nextProps.form.form)
    let id="#"+nextProps.page
    $("#showform").formRender({
      dataType: 'json',
      formData: form
    })

    if($(":submit").length==0 && $(':button').length==0){
    $("#showform").append('<button type="submit">submit');
    }
    var json = "";

    $("#showform button").click(function(e){

      e.preventDefault()

      let arr=$("#showform").serializeArray()

    jQuery.each(arr, function(){
    	jQuery.each(this, function(i, val){
    		if (i=="name") {
    			json += '"' + val + '":';
    		} else if (i=="value") {
    			json += '"' + val.replace(/"/g, '\\"') + '",';
    		}
    	});
    });
    json = "{" + json.substring(0, json.length - 1) + "}";
   let data=JSON.parse(json);
   console.log(data);
   Meteor.call('addFormData',{page:self.props.page,data:data},function(err){
     if(!err){
       json=""
       self.setState({message:"Data saved sucessfully"})
     }
     else {
       self.setState({message:err.reason})
     }
   });
    self.setState({formData:data})
    let keys=_.keys(data);
    let values=_.values(data);
     self.setState({keys:keys});
    })
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

    let self=this;
    return(<div className="">
    <ul className="steps_menu nav nav-tabs">
      <li className="in active" id="fill-form"><a href="#fill-form" id="#fill-form" data-toggle="tab"
      onClick={this.openTab.bind(this)} >Fill Up Form</a></li>
      <li className="" id="show-form"><a className="" href="#" id="#show-form"
      onClick={this.openTab.bind(this)} >Filled Up Form List</a></li>
    </ul>
    <div className="tab-content">
    <div id="fill-form-tab" className="tab-pane fade in active">
    <div className="well" style={{"margin":10}}>
    <form id="showform"></form>
    <div>{this.state.message}</div>
    </div>

    </div>
    <div id="show-form-tab" className="tab-pane fade">
    <div className="well" style={{"margin":10}}>
    <FormDataList page={this.props.page}/>
    </div>
    </div>
    </div>
    </div>
    )
  }
}
