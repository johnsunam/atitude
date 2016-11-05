import React,{Component} from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
export default class ClientLogin extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(<div className="mid_content">
      <div className="login_col">
        <div className="card"></div>
        <div className="card">
          <h1 className="title">Client Login</h1>

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
                    FlowRouter.go('/client');
                  }
                })
              }}><span>LOGIN</span></button>
            </div>
            <div className="sign"><a href="register.html">Sign Up</a></div>
          </div>
        </div>
       </div>
)
  }
}
