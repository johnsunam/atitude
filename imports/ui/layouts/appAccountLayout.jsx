import React ,{Component} from 'react'
import Login from '../components/app/login/login.jsx'
import UserCode from '../container/userCode.js';
import commonImports from '../components/common/commonImports.jsx'

export default class AppLogin extends Component {
  constructor(props) {
    super(props)
    this.state={
      verify:null
        }
  }
  render(){
    return(<div className="app_login">
    <div className="app_login_inner">
  <span className="mid_container">
    <div className="logoin">User Login</div>
  </span>
  {this.state.verify?<Login verify={this}/>:<UserCode verify={this}/>}
</div>

    </div>)
  }
}
