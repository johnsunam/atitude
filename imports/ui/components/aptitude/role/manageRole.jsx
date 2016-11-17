//edit,delete and lists role
import React ,{Component} from 'react'
import AddRole from './addRole.jsx'
import crudClass from '../../common/crudClass.js'
import { Table,SearchColumns, search,sort} from 'reactabular';
export default class ManageRole extends Component {
  constructor(props) {
   super(props)
   this.state={
     query:{},
     searchColumn: 'all',
     sortingColumns: null, // reference to the sorting columns
     pagination: { // initial pagination settings
       page: 1,
       perPage: 10
     }
   }
  }

  render(){
    let {query}=this.state;
    let data=this.props.roles.map((role)=>{
      return {id:role._id,name:role.name,description:role.description,status:role.status,delete:'delete',edit:'edit'}
    })

    let columns=[{property:'name',header:{label:'Name'}},
    {property:'description',header:{label:'Description'}},
    {property:'status',header:{label:'Access'}},
    {property:'edit',header:{label:'Edit'},cell:{
      format:(value,{rowData})=>(<div>
        <a href="#" className="btn btn-primary"  data-toggle="modal" data-target={`#${rowData.id}`}>Edit</a>
        <div className="modal fade" id={`${rowData.id}`} tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <AddRole edit="true" role={rowData}/>
      </div>
    </div> )
    }},
    {property:'delete',header:{label:'Delete'},cell:{
      format:(value,{rowData})=>(
        <a href="#" className="btn btn-danger" onClick={()=>{
          let obj=new crudClass()
          obj.delete('deleteRole',rowData.id)
        }}>Delete</a>
      )
    }}
  ]

  const searchedRows = search.multipleColumns({ columns, query })(data);
      return(<div className="col-md-10 registration_form pad_t50">
      <div className="col-md-10 col-md-offset-1">
        <h1 className="title">Manage Role</h1>
        <Table.Provider
  className="pure-table pure-table-striped"
  columns={columns}
>
  <Table.Header>
  <SearchColumns
            query={query}
            columns={columns}
            onChange={query => this.setState({ query })}
          />
  </Table.Header>
  <Table.Body rows={searchedRows} rowKey="id" />



</Table.Provider>

      </div>
    </div>)
  }
}
