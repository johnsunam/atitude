import React ,{Component} from 'react'
import crudClass from '../../common/crudClass.js'

export default class FormDataList extends Component {
  constructor(props) {
    super(props)
    this.state={
      fields:[]
    }
  }
  componentDidMount(){
    let data=this.props.formdatas[0]?this.props.formdatas[0].formdata:[];
    let keys=_.keys(data)
    this.setState({fields:keys})

    ;
  }
  componentWillReceiveProps(nextProps){
    let data=nextProps.formdatas[0]?nextProps.formdatas[0].formdata:[];
    let keys=_.keys(data)
    this.setState({fields:keys})

  }
  render(){
    console.log(this.props.formdatas);
    let list=this.props.formdatas.map((data)=>{
      console.log(data.formdata);
             let val=_.map(data.formdata,(vl)=>{
               return(<td>{vl}</td>)
             })
             return(<tr>{val}</tr>)
    })
    return(<div>
        <table width="100%" border="0" cellspacing="0" cellpadding="0" className="table_cont">
      <tr>{this.state.fields.map((field)=>{
        return(<th>{field}</th>)
      })}</tr>
      {list}
      </table>
    </div>)
  }
}
