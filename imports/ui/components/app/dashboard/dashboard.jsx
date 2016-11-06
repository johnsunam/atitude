import React ,{Component} from 'react';

export default class ClientUserDashboard extends Component {
  constructor(props) {
    super(props)
    this.state={
      selectedTab:'#form',
      formData:{},
      keys:[],
      id:props.page,
      message:''
    }
  }
  componentDidMount(){

    let self=this;
    let form=JSON.parse(this.props.form.form)
    let id="#"+self.state.id;
    $(id).formRender({
      dataType: 'json',
      formData: form
    })
    var json = "";
    let ids=id+" "+"button";
    console.log(ids);
    $(ids).click(function(e){

      e.preventDefault()

      let arr=$(id).serializeArray()

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
   console.log(self.props.page);
   Meteor.call('addFormData',{page:self.props.page,data:json},function(err){
     if(!err){
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
    $('#form').removeClass('in active');
    $('#form-tab').removeClass('in active');
    $('#preview').addClass('in active');
    $('#preview-tab').addClass('in active');
    self.setState({selectedTab:'#preview'})
    console.log(self.state.formData);
    })

  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps.form);
//    this.setState({formData:{},keys:[]})
  let self=this;
    let form=JSON.parse(nextProps.form.form)
    let id="#"+nextProps.page
    console.log(id);
    $(id).formRender({
      dataType: 'json',
      formData: form
    })
    var json = "";
    let ids=id+" "+"button";
    $(ids).click(function(e){

      e.preventDefault()

      let arr=$(id).serializeArray()

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
   Meteor.call('addFormData',{page:self.props.page,data:json},function(err){
     if(!err){
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
    $('#form').removeClass('in active');
    $('#form-tab').removeClass('in active');
    $('#preview').addClass('in active');
    $('#preview-tab').addClass('in active');
    self.setState({selectedTab:'#preview'})
    console.log(self.state.formData);
    })
    $('#preview').removeClass('in active');
    $('#preview').removeClass('in active');
    $('#form').addClass('in active');
    $('#form-tab').addClass('in active');
  }

  openTab(e){
    let self=this;
      $(e.target.id).addClass('in active');
      let id=e.target.id+"-tab";
      console.log(id);
      $(id).addClass('in active');
      $(self.state.selectedTab).removeClass('in active');
      let ids=self.state.selectedTab+"-tab";
      $(ids).removeClass('in active');
      this.setState({selectedTab:e.target.id})
  }



  render(){
    console.log(this.props.form);
    let self=this;
    var form=this.state.keys.map((key)=>{
      console.log();

      return(<tr><td>{key}</td><td>{self.state.formData[key]}</td></tr>)
    })
    return(<div className="">
    <ul className="steps_menu nav nav-tabs">
      <li className="in active" id="form"><a href="#form" id="#form" data-toggle="tab" onClick={this.openTab.bind(this)}>Form</a></li>
      <li className="" id="preview"><a href="#previews" id="#preview" data-toggle="tab" onClick={this.openTab.bind(this)}>Preview</a></li>
    </ul>
    <div className="tab-content">
    <div id="form-tab" className="tab-pane fade in active">
    <div className="well">
    <form id={this.props.page}></form>
    </div>
    </div>
    <div id="preview-tab" className="tab-pane fade">
    <div>{this.state.message}</div>
    <table>
    <tr><td>field</td><td>value</td></tr>
    {form}
    </table>

    </div>

    </div>

    </div>)
  }
}
