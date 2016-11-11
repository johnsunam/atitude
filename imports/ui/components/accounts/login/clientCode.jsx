import React, {Component} from 'react'
export default class ClientCode extends Component  {
  constructor(props) {
    super(props)
    this.state={
      showMessage:false
    }
  }
  render(){
    return(<div className="mid_content">

      <div className="login_col">

        <div className="card"></div>
        <div className="card">
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
                console.log(client);
                client?this.props.verify.setState({verify:true}):this.setState({showMessage:true})
              }}><span>submit</span></button>
            </div>

          </div>
        </div>
       </div>)
  }
}
