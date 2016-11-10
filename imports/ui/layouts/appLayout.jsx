import React,{Component} from 'react';
import Header from '../components/common/clientUserHeader.jsx'
import commonImports from '../components/common/commonImports.jsx'
import Alert from 'react-s-alert';

export default AppLayout=(props)=> {
    return(<div className="hold-transition skin-blue sidebar-mini">
  <div className="wrapper">
  <Header/>
{props.content}
</div>
</div>)
}
