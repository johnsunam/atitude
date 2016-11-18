import React,{Component} from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import Alert from 'react-s-alert';
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
                    Alert.warning("Not allowed to login",{
                           position: 'top-right',
                           effect: 'bouncyflip',
                           timeout: 1000
                       })
                  }
                  else{
                    console.log(  Roles.userIsInRole(Meteor.userId(), 'aptitude-admin'));
                    Roles.userIsInRole(Meteor.userId(), 'aptitude-admin')?FlowRouter.go('/aptitude/add-form'):  Alert.warning("Not allowed to login",{
                             position: 'top-right',
                             effect: 'bouncyflip',
                             timeout: 1000
                         })

                  }
                })
              }}><span>LOGIN</span></button>
            </div>

          </div>
        </div><Alert stack={{limit: 3}}/>
       </div>
)
  }
}
