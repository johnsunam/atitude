import React,{Component} from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
export default class AdminLogin extends Component {
  constructor(props) {
    super(props)
    this.state={
      showMessage:false
    }
  }
  render(){
    return(<div className="admin_mid_content">

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
                    self.setState({showMessage:true})
                  }
                  else{

                    Roles.userIsInRole(Meteor.userId(), 'aptitude-admin')?FlowRouter.go('/aptitude/add-form'):FlowRouter.go('/aptitude/login')

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
