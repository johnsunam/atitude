import React, {Component} from 'react'
import { Alert } from 'react-bootstrap';
var message = require('../../common/message.json');
export default class UserCode extends Component  {
  constructor(props) {
    super(props)
    this.state={
      showMessage:false
    }
  }
  render(){
    return(<div className="mid_content">
    {this.state.showMessage ?
        <Alert bsStyle="success">
        {message.codeError}
        </Alert>
      : ''}
      <div className="login_col">

        <div className="card"></div>
        <div className="card">
          <h1 className="title">Enter Code</h1>

            <div className="input-container">
              <input type="text" id="userCode" required="required" ref="clientCode"/>
              <div className="bar"></div>
            </div>
            <div className="button-container">
              <button onClick={()=>{
                let userCode=$('#userCode').val();
                var client=_.findWhere(this.props.users,{code:userCode});
                console.log(client);
                client?this.props.verify.setState({verify:true}):this.setState({showMessage:true})


              }}><span>submit</span></button>
            </div>

          </div>
        </div>
       </div>)
  }
}
