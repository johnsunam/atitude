import React, {Component} from 'react'
import Alert from 'react-s-alert';
import commonImports from '../../common/commonImports.jsx'

export default class ClientCode extends Component  {
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
    let clientCode=e.clientcode;

    var client=_.findWhere(this.props.clients,{code:clientCode});

    client?this.props.verify.setState({verify:true}):Alert.warning("Not allowed to login",{
             position: 'top-right',
             effect: 'bouncyflip',
             timeout: 1000
         })

  }
  render(){
    return(<div className="client_mid_content">

      <div className="login_col">


       <div className="client_card">
          <h1 className="title">Enter Code</h1>
          <Formsy.Form ref="form" onValidSubmit={this.submit.bind(this)} id="addPage" onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>
            <div className="input-container">
            <MyInput type="text" title="Client Code" name="clientcode"   ref="username"/>

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
