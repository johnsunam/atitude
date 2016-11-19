import React , {Component} from 'react'
import FormTab from '../../../container/formTab.js'

export default class AppDashboard extends Component {
  constructor(props) {
    super(props)
    this.state={
      choosedform:props.pages[0]?props.pages[0].formName:'',
      choosedPage:props.pages[0]?props.pages[0]._id:''
    }
  }
  componentWillReceiveProps(nextProps){
    this.state({choosedform:nextProps.pages[0]?nextProps.pages[0].formName:'',
    choosedPage:nextProps.pages[0]?nextProps  .pages[0]._id:''})
  }
  render(){
    console.log(this.state.choosedform);
    console.log(this.state.choosedPage);
    return(<div>
      <aside className="main-sidebar">
        <section className="sidebar">
          <ul className="sidebar-menu">
            <li className="header">MAIN NAVIGATION</li>
            <li className="treeview active"> <a href="#"><i className="fa fa-dashboard"></i> <span>Pages</span> <span className="pull-right-container"> <i className="fa fa-angle-left pull-right"></i> </span> </a>
            <ul>
            {this.props.pages.map((page) => {
              return(<li><a href=""  onClick={()=>{
                var video = document.querySelector('video');
                video.className="hidden"
                $('#b').removeClass("show")
                $('#b').addClass("hidden")
                
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

    </section>
    <section className="content">
    <FormTab form={this.state.choosedform} page={this.state.choosedPage}/>
    </section>
      </div>

  </div>)
  }
}
