import React ,{Component} from 'react'
import AdminLogin from '../components/accounts/login/adminlogin.jsx'
import commonImports from '../components/common/commonImports.jsx'

export default class AptitudeLogin extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(<div>
      <div className="admin_hed_top">
      <div className="mid_container">
        <div className="logoin">Aptitude Login</div>
      </div>
    </div>
    {this.props.content?this.props.content:<div>
      <div className="col-md-offset-5">Yout are not permission to access</div>
      <AdminLogin/><Alert stack={{limit: 3}}/></div>}
    </div>)
  }
}
