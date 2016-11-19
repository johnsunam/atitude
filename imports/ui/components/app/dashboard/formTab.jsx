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
      message:"",
      image:null
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
    $('.take-picture').click(function(){
      console.log('first');
      navigator.getUserMedia = navigator.getUserMedia ||
                 navigator.webkitGetUserMedia ||
                 navigator.mozGetUserMedia;
      console.log(navigator.getUserMedia);

      var canvas = document.getElementById("c");
      var button = document.getElementById("b");
      if (navigator.getUserMedia) {
         navigator.getUserMedia({ video: { width: 1280, height: 720 } },
            function(stream) {

              button.disabled = false;
              button.className = "show btn btn-default";
              var video = document.querySelector('video');
               button.onclick = function() {
                 console.log('helo');
                 video.className="show"
                 canvas.getContext("2d").drawImage(video, 0, 0, 300, 300, 0, 0, 300, 300);
                 var img = canvas.toDataURL("image/png");
                 self.setState({image:img})
                 alert("done");
                 $('.videos').addClass('hidden');
               };

               video.className="show"
               video.src = window.URL.createObjectURL(stream);
               video.onloadedmetadata = function(e) {
                 video.play();
               };
            },
            function(err) {
               console.log("The following error occurred: " + err.name);
            }
         );

      } else {
         console.log("getUserMedia not supported");
      }

    })


      if($(":submit").length==0){
        $("#showform").append('<button type="submit">submit<button/>');
      }


    var json = "";

    $("#showform").submit(function(e){
      e.preventDefault()
      console.log('gogl');
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
   data.image=self.state.image
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
    console.log('second');
  }

  componentDidUpdate(prevProps, prevState){
      $('.take-picture').click(function(){
        $('video').removeClass('hidden')
        $('#b').removeClass("hidden")
      })
    }

  componentWillReceiveProps(nextProps){

    this.setState({message:""})
  let self=this;
    let data=nextProps.form?nextProps.form.form:''
    let form=JSON.parse(nextProps.form.form)
    let id="#"+nextProps.page


    //event to diplay Camera
    $('.take-picture').click(function(){

      navigator.getUserMedia = navigator.getUserMedia ||
                 navigator.webkitGetUserMedia ||
                 navigator.mozGetUserMedia;
      console.log(navigator.getUserMedia);

      var canvas = document.getElementById("c");
      var button = document.getElementById("b");
      if (navigator.getUserMedia) {
         navigator.getUserMedia({ video: { width: 1280, height: 720 } },
            function(stream) {

              button.disabled = false;
              button.className = "show btn btn-default";
               button.onclick = function() {
                 canvas.getContext("2d").drawImage(video, 0, 0, 300, 300, 0, 0, 300, 300);
                 var img = canvas.toDataURL("image/png");
                 console.log(img);
                 self.setState({image:img})
                 alert("done");

               };
               var video = document.querySelector('video');
               video.className="show"
               video.src = window.URL.createObjectURL(stream);
               video.onloadedmetadata = function(e) {
                 video.play();
               };
            },
            function(err) {
               console.log("The following error occurred: " + err.name);
            }
         );

      } else {
         console.log("getUserMedia not supported");
      }
    });

    //renders form to the tab
    $("#showform").formRender({
      dataType: 'json',
      formData: form
    })

    if($(":submit").length==0 ){
    $("#showform").append('<button type="submit">submit</button>');
    }
    var json = "";

    $("#showform"). submit(function(e){
      e.preventDefault();

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
   data.image=this.state.image
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
        console.log(e.target.id);
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

    let self=this;
    return(<div className="">
    <ul className="steps_menu nav nav-tabs">
      <li className="in active" id="fill-form"><a href="#fill-form" id="#fill-form" data-toggle="tab"
      onClick={this.openTab.bind(this)} >Fill Up Form</a></li>
      <li className="" id="show-form"><a className="" href="#" id="#show-form"
      onClick={this.openTab.bind(this)} >Filled Up Form List</a></li>
    </ul>
    <div className="tab-content">
    <div id="fill-form-tab"  className="tab-pane fade in active">
    <div className="well" style={{"margin":10}}>
    <form id="showform">
    </form>
    <video className="hidden col-md-offset-4" style={{'height':200 ,'weight':200}}></video>
  <input className="hidden" id="b" type="button" disabled="true" value="Take Picture"></input><br/>
	<canvas id="c" style={{display:'none'}} width="300" height="300"></canvas>
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
