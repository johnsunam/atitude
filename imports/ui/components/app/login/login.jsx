import React,{Component} from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
export default class ClientUserLogin extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(<div className="mid_content">
      <div className=" ">

        <div className=" ">
          <h1 className=" ">Login</h1>

            <div className="input-container">
              <input type="text" id="Username" required="required" ref="username"/>
              <div className="bar"></div>
            </div>
            <div className="input-container">
              <input type="password" id="Password" required="required" ref="password"/>
              <label for="Password">Password</label>
              <div className="bar"></div>
            </div>
            <div className="button-container">
              <button onClick={()=>{
                let user=this.refs.username.value
                let password=this.refs.password.value
                Meteor.loginWithPassword(user,password,function(err){
                  if(err){
                    console.log(err);
                  }
                  else{

                    Roles.userIsInRole(Meteor.userId(),'App User')?FlowRouter.go('/app/dashboard/'):FlowRouter.go('/app/login')
}
                })
              }}><span>LOGIN</span></button>
            </div>

          </div>
        </div>
       </div>
)
  }
}
