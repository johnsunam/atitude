import React, {Component} from 'react'
import Alert from 'react-s-alert';
export default class ClientCode extends Component  {
  constructor(props) {
    super(props)
    this.state={
      showMessage:false
    }
  }
  render(){
    return(<div className="client_mid_content">

      <div className="login_col">


       <div className="client_card">
          <h1 className="title">Enter Code</h1>

            <div className="input-container">
              <input type="text" id="clientCode" required="required" ref="clientCode"/>
              <div className="bar"></div>
            </div>
            <div className="button-container">
              <button onClick={()=>{
                let clientCode=$('#clientCode').val();
                console.log(clientCode);
                var client=_.findWhere(this.props.clients,{code:clientCode});

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
