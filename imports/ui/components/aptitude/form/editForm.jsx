import React,{Component} from 'react'

export default class EditForm extends Component{
  constructor(props) {
    super(props)
    this.state={
      form:JSON.parse(this.props.form.form)
    }
  }
  componentDidMount(){
    var buildWrap = $(document.getElementById('form-edit'))
    console.log(this.state.form);
    var options={
      defaultFields:this.state.form
    }
      console.log(options);
    $(buildWrap).formBuilder(options)
  }
  render(){

    return(<div>
      <div id="form-edit"></div>
    </div>)
  }
}
