//edit,delete and lists task
import React ,{Component} from 'react'
import AddTask from './addTask.jsx'
import crudClass from '../../common/crudClass.js'
import orderBy from 'lodash/orderBy';
import { Table,SearchColumns, search,sort} from 'reactabular';
export default class ManageTask extends Component {
  constructor(props) {
   super(props)
   const getSortingColumns = () => this.state.sortingColumns || {};
   const sortable = sort.sort({
      // Point the transform to your rows. React state can work for this purpose
      // but you can use a state manager as well.
      getSortingColumns,

      // The user requested sorting, adjust the sorting state accordingly.
      // This is a good chance to pass the request through a sorter.
      onSort: selectedColumn => {
        this.setState({
          sortingColumns: sort.byColumns({ // sort.byColumn would work too
            sortingColumns: this.state.sortingColumns,
            selectedColumn
          })
        });
      }
    });
    const resetable = sort.reset({
      event: 'onDoubleClick',
      getSortingColumns,
      onReset: ({ sortingColumns }) => this.setState({ sortingColumns })
    });

   this.state={

     query:{},
     sortingColumns: {
        0: {
          direction: 'desc',
          position: 0
        }
      },
      columns:[{property:'name',header:{label:'Name',transforms:[sortable],
    format:sort.header({sortable,getSortingColumns})}},
      {property:'description',header:{label:'Description',transforms:[sortable],
    format:sort.header({sortable,getSortingColumns})}},
      {property:'status',header:{label:'Access'}},
      {property:'edit',header:{label:'Edit'},cell:{
        props:{
          style:{
            width:100,
            height:50
          }
        },
        format:(value,{rowData})=>(<div>
          <a href="#" className="btn btn-primary"  data-toggle="modal" data-target={`#${rowData.id}`}>Edit</a>
          <div className="modal fade" id={`${rowData.id}`} tabindex="-1" task="dialog" aria-labelledby="myModalLabel">
          <AddTask edit="true" task={rowData}/>
        </div>
      </div> )
      }},
      {property:'delete',header:{label:'Delete'},cell:{
        format:(value,{rowData})=>(
          <a href="#" className="btn btn-danger" onClick={()=>{
            let obj=new crudClass()
            obj.delete('deleteTask',rowData.id)
          }}>Delete</a>
        )
      }}

      ]
   }
    }

  render(){

    let data=this.props.tasks.map((task)=>{
      return {id:task._id,name:task.name,description:task.description,status:task.status,delete:'delete',edit:'edit'}
    })

  let {query,sortingColumns,columns}=this.state;

  const searchedRows = search.multipleColumns({ columns, query })(data);
  const sortedRows=sort.sorter({
    columns,sortingColumns,sort:orderBy
  })(searchedRows);
      return(<div className="col-md-10 registration_form pad_t50">
      <div className="col-md-10 col-md-offset-1">
        <h1 className="title">Manage Task</h1>
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

  <Table.Body rows={sortedRows} rowKey="id" />



</Table.Provider>

      </div>
    </div>)
  }
}
