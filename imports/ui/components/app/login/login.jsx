import React,{Component} from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import Alert from 'react-s-alert';
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
                    Alert.warning("Not allowed to login",{
                           position: 'top-right',
                           effect: 'bouncyflip',
                           timeout: 1000
                       })
                  }
                  else{

                    Roles.userIsInRole(Meteor.userId(),'App User')?FlowRouter.go('/app/dashboard/'):  Alert.warning("Not allowed to login",{
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
