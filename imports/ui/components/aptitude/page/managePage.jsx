//edits,lists and deletes pages

import React ,{Component} from 'react'
import ClientPages from '../page/clientPages.jsx'
import crudClass from '../../common/crudClass.js'



export default class ManagePage extends Component {
  constructor(props) {
   super(props)
   this.state={
     choosedClient:props.data.clients[0]?props.data.clients[0].companyName:null
   }
  }

  render(){
    return( <div className="col-md-10 registration_form pad_t50">
      <div className="col-md-10 col-md-offset-1">
        <h1 className="title">Manage Page</h1>
        <div className="category">
          <label>Client ID</label>
          <select onChange={(e)=>{
            this.setState({choosedClient:e.target.value})
          }}>
          {this.props.data.clients.map((client)=>{
            return(<option>{client.companyName}</option>)
          })}

          </select>
        </div>
        <ClientPages pages={this.props.data.pages} client={this.state.choosedClient}/>

      </div>
    </div>)
  }
}
