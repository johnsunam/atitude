import React, {Component} from 'react'
import Alert from 'react-s-alert';
var message = require('../../common/message.json');
import commonImports from '../../common/commonImports.jsx'

export default class UserCode extends Component  {
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
    let userCode=e.usercode;
    var user=_.findWhere(this.props.users,{code:userCode});

    user?this.props.verify.setState({verify:true}):Alert.warning("Not allowed to login",{
             position: 'top-right',
             effect: 'bouncyflip',
             timeout: 1000
         })
  }
  render(){
    return(<div className="mid_content">

      <div className=" ">


        <div className=" ">
          <h1 className=" ">Enter Code</h1>
          <Formsy.Form ref="form" onValidSubmit={this.submit.bind(this)} id="addPage" onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>

            <div className="input-container">
            <MyInput type="text" title="User Code" name="usercode"   ref="username"/>
              <div className="bar"></div>
            </div>
            <div className="button-container">
              <button type="submit"><span>submit</span></button>
            </div>
            </Formsy.Form>
          </div>
        </div><Alert stack={{limit: 3}}/>
       </div>)
  }
}
