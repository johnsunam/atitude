import React,{Component} from 'react'
import Header from '../components/common/header.jsx';
import Footer from '../components/common/footer.jsx'
import SiderBar from '../components/common/siderbar.jsx';
import AdminLogin from '../components/accounts/login/adminlogin.jsx'
export default MainLayout=(props)=> {
    return(<div><Header/>
    <div className="no_pad clearfix">
    <div className="clearfix overflow">
    <SiderBar/>
    {props.content}
    </div>
    </div>
    <Footer/></div>)
}
