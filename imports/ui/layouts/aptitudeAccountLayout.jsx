import React ,{Component} from 'react'
import AdminLogin from '../components/accounts/login/adminlogin.jsx'
import commonImports from '../components/common/commonImports.jsx'
import Alert from 'react-s-alert';

export default class AptitudeLogin extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
    <section className="aptitude-login-layout">
      <div className="admin_hed_top">
        <div className="mid_container">
         <div className="logoin">Aptitude Login</div>
       </div>
      </div>
       {
         this.props.content?this.props.content:
         <div>
           <div className="col-md-offset-5">Yout are not permission to access</div>
           <AdminLogin/>

           {/* Placing sAlert component in the main layout with the display limit of 3 alerts */}
           <Alert stack={{limit: 3}}/>
         </div>
        }
    </section>

  );
  }
}
