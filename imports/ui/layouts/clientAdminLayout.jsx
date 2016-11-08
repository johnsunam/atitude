import React,{Component} from 'react'
import Header from '../components/common/clientAdminHeader.jsx';
import Footer from '../components/common/footer.jsx'
import SiderBar from '../components/common/clientAdminSidebar.jsx';
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
      <section className="content-header">
      <h1>Client Pages</h1>
    </section>
    <section className="content">
    {this.props.content}
    </section>
      </div>
    </div>
    <Footer/>
  </div>)
  }
}
