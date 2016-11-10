import React,{Component} from 'react'
import Header from '../components/common/header.jsx';
import Footer from '../components/common/footer.jsx'
import SiderBar from '../components/common/siderbar.jsx';
import AdminLogin from '../components/accounts/login/adminlogin.jsx'
import commonImports from '../components/common/commonImports.jsx'
import Alert from 'react-s-alert';

export default MainLayout=(props)=> {
    return(<div><Header/>
    <div className="no_pad clearfix">
    <div className="clearfix overflow">
    <SiderBar/>
    {props.content}
    </div>
    </div>
    <Footer/> /><Alert stack={{limit: 3}}/></div>)
}
