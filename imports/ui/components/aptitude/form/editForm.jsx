import React,{Component} from 'react'

export default class EditForm extends Component{
  constructor(props) {
    super(props)
    this.state={
      form:JSON.parse(this.props.form.form)
    }
  }
 componentDidMount(){
  var buildWrap = $(document.getElementById('form-editors'))
    console.log(this.state.form);
    var options={
      formData:this.state.form,
      dataType:'json'
    }

    $(buildWrap).formBuilder(options).data('formBuilder')
  }
  render(){

    return(<div>
      <div id="form-editors"></div>
    </div>)
  }
}
