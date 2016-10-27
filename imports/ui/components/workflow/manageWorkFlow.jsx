import React ,{Component} from 'react'

export default class ManageWorkFlow extends Component {
  constructor(props) {
   super(props)
  }
  render(){
    return( <div className="col-md-10 registration_form pad_t50">
      <div className="col-md-10 col-md-offset-1">
        <h1 className="title">Manage Work</h1>
        <table width="100%" border="0" cellspacing="0" cellpadding="0" className="table_cont">
          <tbody><tr>
            <th>Form Name</th>
            <th>Status</th>
            <th>Access</th>
          </tr>
          <tr>
            <td>Feedback for client</td>
            <td>Active</td>
            
            <td><div className="button-container">
                 <a href="define_work_flow.html">Define</a>  <a href="#">Delete</a> 
              </div></td> 
          </tr>
           <tr className="lighbg">
            <td>Feedback for client</td>
            <td>Active</td>
            
            <td><div className="button-container">
               <a href="define_work_flow.html">Define</a>  <a href="#">Delete</a> 
              </div></td> 
           </tr>
           
          <tr>
             <td>Feedback for client</td>
            <td>Active</td>
            
            <td><div className="button-container">
               <a href="define_work_flow.html">Define</a>  <a href="#">Delete</a> 
              </div></td> 
             
            
          </tr>
           <tr className="lighbg">
            <td>Feedback for client</td>
            <td>Active</td>
            
            <td><div className="button-container">
                <a href="define_work_flow">Define</a>  <a href="#">Delete</a> 
              </div></td> 
             
            
          </tr>
          
        </tbody></table>
      </div>
    </div>)
  }
}