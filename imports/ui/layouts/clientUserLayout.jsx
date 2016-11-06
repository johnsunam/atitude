
import React , {Component} from 'react'
//import Header from '../components/common/clientUserHeader.jsx ';
import Dashboard from '../container/clientUserDashboard.js'
export default class ClientUserLayout extends Component {
  constructor(props) {
    super(props)
    this.state={
      choosedform:props.data[0]?props.data[0].formName:'',
      choosedPage:props.data[0]?props.data[0]._id:''
    }
  }
  render(){
    return(<div className="hold-transition skin-blue sidebar-mini">
      <div className="wrapper">
      <Header/>
      <aside className="main-sidebar">
        <section className="sidebar">
          <ul className="sidebar-menu">
            <li className="header">MAIN NAVIGATION</li>
            <li className="treeview active"> <a href="#"><i className="fa fa-dashboard"></i> <span>Pages</span> <span className="pull-right-container"> <i className="fa fa-angle-left pull-right"></i> </span> </a>
            <ul>
            {this.props.data.map((page) => {
              return(<li><a href=""  onClick={()=>{
                console.log(page._id);

                this.setState({choosedform:page.formName,choosedPage:page._id})
              }}>{page.name}</a></li>)
            })}
            </ul>
              </li>
          </ul>
        </section>

      </aside>
      <div className="content-wrapper ">
      <section className="content-header">
      <h1>Client Pages</h1>
    </section>
    <section className="content">
    <Dashboard form={this.state.choosedform} page={this.state.choosedPage}/>
    </section>
      </div>
    </div>
  </div>)
  }
}
