import React,{Component} from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import Alert from 'react-s-alert';
import commonImports from '../../common/commonImports.jsx'

export default class AdminLogin extends Component {
  constructor(props) {
<<<<<<< HEAD
    super(props)
    this.state={
      showMessage:false,
      canSubmit:false
=======
    super(props)
    this.state={
      showMessage:false
>>>>>>> 729c222c8edb8a01ebfc632d3dc77345643ddca1
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
    //  Code for error check if then alert them.
      if(err){
        Alert.warning(err.reason,{
               position: 'top-right',
               effect: 'bouncyflip',
               timeout: 1000
           });
      }
      else{
        FlowRouter.go('/page/permission');
        // Roles.userIsInRole(Meteor.userId(), 'aptitude-admin') ? FlowRouter.go('/aptitude/add-form'):  Alert.warning("Not allowed to login",{
        //          position: 'top-right',
        //          effect: 'bouncyflip',
        //          timeout: 1000
        //      });

      }

  })
}

  render(){
    return(
      <div className="admin_mid_content">

      <div className="login_col">
        <div className="card"></div>
        <div className="card">
          <h1 className="title"><strong>Login</strong></h1>

          {/*Use of the formsy package for user input creation by calling the MyInput component passing the props */}
          <Formsy.Form ref="form" onValidSubmit={this.submit.bind(this)} id="addPage" onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>
            <div className="input-container">
<<<<<<< HEAD
              <MyInput type="text" help="Please enter the valid email or username" title="Email or username" name="username"   ref="username"/>
=======
            <MyInput type="text" title="Email and username" help="User Name" name="username"   ref="username"/>
>>>>>>> 729c222c8edb8a01ebfc632d3dc77345643ddca1
              <div className="bar"></div>
            </div>

            <div className="input-container">
<<<<<<< HEAD
              <MyInput type="password" help="Enter the password" id="password" title="Password" name="password"   ref="password"/>
=======
              <MyInput type="password" id="password" title="Password" help="Password" name="password"   ref="password"/>
>>>>>>> 729c222c8edb8a01ebfc632d3dc77345643ddca1
              <div className="bar"></div>
            </div>

            <div className="button-container">
              <button type="submit" disabled={!this.state.canSubmit}><span><i className="fa fa-sign-in"></i> LOGIN</span></button>
            </div>
          </Formsy.Form>

          </div>
        </div>
        <Alert stack={{limit: 3}}/>

       </div>
)
  }
}
