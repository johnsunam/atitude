import React,{Component} from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';

export default class Permission extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){

  }

  render(){
   //Checking if user is admin,clientAdmin,clientUser then showing lists of particular lists of page. 
   let page;
   if(this.props.data[0]){
     page=<h5>Dashboard <small><a href="/aptitude/add-form">Click Here</a></small></h5>
   }
   else if(this.props.data[1]){
     page=<strong>Client Admin</strong>;
   }
   else if(this.props.data[2]){
     page=<strong>Client User</strong>
   }

   return(
    <div className="admin_mid_content">

      <div className="login_col">
        <div className="card"></div>
        <div className="card">
          <h1 className="title">Lists Of Permission</h1>
            {page}
        </div>
     </div>

  </div>
)
  }
}
