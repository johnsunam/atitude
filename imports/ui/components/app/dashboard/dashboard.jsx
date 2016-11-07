import React ,{Component} from 'react';

export default class ClientUserDashboard extends Component {
  constructor(props) {
    super(props)
    this.state={
      selectedTab:'#form',
      formData:{},
      keys:[],
      id:props.page,
      message:""
    }
  }
  componentDidMount(){

    let self=this;
    let form=JSON.parse(this.props.form.form)
    let id="#"+self.state.id
    $("#showform").formRender({
      dataType: 'json',
      formData: form
    })
    if($(":submit").length==0){
      $("#showform").append('<button type="submit">submit<button/>');
    }
    var json = "";
    let ids=id+" "+"button";
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
    self.setState({selectedTab:'#preview'})
    console.log(self.state.formData);
    })

  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps.form);
  let self=this;
    let form=JSON.parse(nextProps.form.form)
    let id="#"+nextProps.page
    $("#showform").formRender({
      dataType: 'json',
      formData: form
    })

    if($(":submit").length==0){
    $("#showform").append('<button type="submit">submit');
    }
    var json = "";
    let ids=id+" "+"button";
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
    })
      }




  render(){
    console.log(this.props);
    let self=this;
    return(<div className="">
    <div className="well">
    <form id="showform"></form>
    </div>
    </div>
    )
  }
}
