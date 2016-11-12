import React ,{Component} from 'react'
import {Session} from 'meteor/session'
import ClientCode from '../container/clientCode.js';
import Login from '../components/accounts/login/clientlogin.jsx'
import commonImports from '../components/common/commonImports.jsx'

export default class ClientLogin extends Component {
  constructor(props) {
    super(props)
    this.state={
      verify:false
    }
  }
  render(){

    return(<div className="client_login">
	<div className="client_login_mid">
     <div className="left_client_login">
  <div className="mid_container">
    <div className="logoin">Client Login</div>
  </div>
</div>
{this.state.verify?<Login verify={this}/>:<ClientCode verify={this}/>}

    </div> </div>)
  }
}
