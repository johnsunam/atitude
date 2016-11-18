import React, {Component} from 'react'
import Alert from 'react-s-alert';
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

      <div className=" ">


        <div className=" ">
          <h1 className=" ">Enter Code</h1>

            <div className="input-container">
              <input type="text" id="userCode" required="required" ref="clientCode"/>
              <div className="bar"></div>
            </div>
            <div className="button-container">
              <button onClick={()=>{
                let userCode=$('#userCode').val();
                var client=_.findWhere(this.props.users,{code:userCode});
                console.log(client);
                client?this.props.verify.setState({verify:true}):Alert.warning("Not allowed to login",{
                         position: 'top-right',
                         effect: 'bouncyflip',
                         timeout: 1000
                     })
              }}><span>submit</span></button>
            </div>

          </div>
        </div><Alert stack={{limit: 3}}/>
       </div>)
  }
}
