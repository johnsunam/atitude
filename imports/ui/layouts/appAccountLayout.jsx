import React ,{Component} from 'react'

export default class AppLogin extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(<div>
      <div className="hed_top">
  <div className="mid_container">
    <div className="logoin">User Login</div>
  </div>
</div>
{this.props.content}
    </div>)
  }
}
