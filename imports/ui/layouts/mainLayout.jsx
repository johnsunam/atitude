import React,{Component} from 'react'
import Header from '../components/common/header.jsx';
import Footer from '../components/common/footer.jsx'
import SiderBar from '../components/common/siderbar.jsx';
export default class MainLayout extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(<div>
      <Header/>
      <div className="no_pad clearfix">
      <div className="clearfix overflow">
      <SiderBar/>
      {this.props.content}
      </div>
      </div>


      <Footer/>
    </div>)
  }
}
