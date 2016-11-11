import React,{Component} from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
export default class ClientLogin extends Component {
  constructor(props) {
    super(props)
    this.state={err:""
    }
  }
  render(){
    let message=this.state.err?<span className="col-md-offset-5">{this.state.err}</span>:"";
    return(<div className="mid_content">
            {message}
      <div className="login_col">

        <div className="card"></div>
        <div className="card">
          <h1 className="title">Login</h1>

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
                let self=this;
                Meteor.loginWithPassword(user,password,function(err){
                  if(err){
                    self.setState({err:err.reason})
                  }
                  else
                  {
                    console.log(Meteor.userId());
                    Roles.userIsInRole(Meteor.userId(),'client')?FlowRouter.go('/client/dashboard'):FlowRouter.go('/client/login')

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
