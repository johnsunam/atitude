import React ,{Component} from 'react'
import Login from '../components/app/login/login.jsx'
import UserCode from '../container/userCode.js';
export default class AppLogin extends Component {
  constructor(props) {
    super(props)
    this.state={
      verify:null
        }
  }
  render(){
    return(<div>
      <div className="hed_top">
  <div className="mid_container">
    <div className="logoin">User Login</div>
  </div>
</div>
{this.state.verify?<Login verify={this}/>:<UserCode verify={this}/>}
    </div>)
  }
}
