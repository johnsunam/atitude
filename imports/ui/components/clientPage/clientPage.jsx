//pages listed according to the client
import React,{Component} from 'react';
import crudClass from '../common/crudClass.js'
import AddPage from '../../container/addPage.js'
export default class ClientAdminPages extends Component {
  constructor(props) {
    super(props)

  }

  render(){

    let pagelist=this.props.pages.map((page)=>{
      return(
        <tr>
      <td>{page.formName}</td>
      <td>{page.previewURL}</td>
      <td>{page.publishURL}</td>
      <td>{page.status}</td>
      <td><div className="button-container">
      <div className="modal fade" id={`${page._id}`} tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <AddPage edit="true" page={page}/>
    </div>
          <a href="#" id={page._id} onClick={(e)=>{
        let obj=new crudClass()
        obj.delete('deletePage',e.target.id)
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
