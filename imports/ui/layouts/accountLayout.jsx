import React ,{Component} from 'react'

export default class Login extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(<div>
      <div className="hed_top">
  <div className="mid_container">
    <div className="logoin">CLIENT 1</div>
  </div>
</div>
{this.props.content}
    </div>)
  }
}
