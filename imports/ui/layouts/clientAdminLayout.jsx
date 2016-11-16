import React,{Component} from 'react'
import Header from '../components/common/clientAdminHeader.jsx';
import Footer from '../components/common/footer.jsx'
import SiderBar from '../components/common/clientAdminSidebar.jsx';
import commonImports from '../components/common/commonImports.jsx'
import Alert from 'react-s-alert';

export default class ClientAdminLayout extends Component {
  constructor(props) {
    super(props)
  }
  render(){


    return(<div className="hold-transition skin-blue sidebar-mini">
      <div className="wrapper">
      <Header/>
      <SiderBar/>
      <div className="content-wrapper ">
    {this.props.content}
      </div>
    </div>
    <Footer/>
    <Alert stack={{limit: 3}}/>
  </div>)
  }
}
