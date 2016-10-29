import React,{Component} from 'react';

export default class ClientPages extends Component {
  constructor(props) {
    super(props)

  }

  render(){

    let pages=_.where(this.props.pages,{clientName:this.props.client})
    let pagelist=pages.map((page)=>{
      return(
        <tr>
      <td>{page.formName}</td>
      <td>{page.previewURL}</td>
      <td>{page.publishURL}</td>
      <td>{page.status}</td>
      <td><div className="button-container">
      <a href="#">Edit</a>
      <a href="#" id={page._id} onClick={(e)=>{
      Meteor.call('deletePage',e.target.id)
      }}>Delete</a></div></td>

    </tr>)
    })
    return (<table width="100%" border="0" cellspacing="0" cellpadding="0" className="table_cont">
              <tr>
                <th>Form Name</th>
    			<th> Preview URL </th>
    			<th> Publish URL </th>
    			<th>Status</th>
                <th>Access</th>
               </tr>
               {pagelist}
            </table>
)

  }
}
