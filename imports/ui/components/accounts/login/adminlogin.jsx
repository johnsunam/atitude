import React,{Component} from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import Alert from 'react-s-alert';
import commonImports from '../../common/commonImports.jsx'
export default class AdminLogin extends Component {
  constructor(props) {
    super(props)
    this.state={
      showMessage:false
    }

  }
  enableButton() {
    this.setState({ canSubmit: true });
  }
  disableButton() {
    this.setState({ canSubmit: false });
  }
  submit(e){
    let user=e.username
    let password=e.password
    let self=this;
    console.log(user,password);
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
}

  render(){
    return(<div className="admin_mid_content">

      <div className="login_col">
        <div className="card"></div>
        <div className="card">
          <h1 className="title">Login</h1>
          <Formsy.Form ref="form" onValidSubmit={this.submit.bind(this)} id="addPage" onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>
            <div className="input-container">
            <MyInput type="text" title="Email and username" name="username"   ref="username"/>
              <div className="bar"></div>
            </div>
            <div className="input-container">
              <MyInput type="password" id="password" title="Password" name="password"   ref="password"/>
              <div className="bar"></div>
            </div>
            <div className="button-container">
            <button type="submit"><span>LOGIN</span></button>

            </div>
            </Formsy.Form>
          </div>
        </div><Alert stack={{limit: 3}}/>
       </div>
)
  }
}
