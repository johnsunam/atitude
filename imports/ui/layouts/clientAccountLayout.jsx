import React ,{Component} from 'react'
import {Session} from 'meteor/session'
import ClientCode from '../container/clientCode.js';
import Login from '../components/accounts/login/clientlogin.jsx'

export default class ClientLogin extends Component {
  constructor(props) {
    super(props)
    this.state={
      verify:false
    }
  }
  render(){
    
    return(<div>
      <div className="hed_top">
  <div className="mid_container">
    <div className="logoin">Client Login</div>
  </div>
</div>
{this.state.verify?<Login verify={this}/>:<ClientCode verify={this}/>}

    </div>)
  }
}
