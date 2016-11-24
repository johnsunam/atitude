import React ,{Component} from 'react'
import AddClientUser from '../../../container/addClientUser.js'
import crudClass from '../../common/crudClass.js'
import { Table,SearchColumns, search,sort} from 'reactabular';
import orderBy from 'lodash/orderBy';
import Paginate from '../../common/paginator.jsx'

export default class ManageClientUser extends Component {
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
     selectedClientUser:null,
     query:{},
     sortingColumns: {
        0: {
          direction: 'desc',
          position: 0
        }
      },
      currentPage:1,
      pages:this.pages(),
      columns:[{property:'name',header:{label:'Name',transforms:[sortable],
    format:sort.header({sortable,getSortingColumns})}},
    {property:'email',header:{label:'Email',transforms:[sortable],
  format:sort.header({sortable,getSortingColumns})}},
  {property:'phone',header:{label:'Phone',transforms:[sortable],
  format:sort.header({sortable,getSortingColumns})}},
  {property:'address',header:{label:'Address',transforms:[sortable],
  format:sort.header({sortable,getSortingColumns})}},
  {property:'code',header:{label:'User Code',transforms:[sortable],
  format:sort.header({sortable,getSortingColumns})}},
  {property:'name',header:{label:'Action'},cell:{
    props:{
      style:{
        height:50
      }
    },
    format:(value,{rowData})=>(<div className="button-container">
    <a href="#"  data-toggle="modal" data-target={`#${rowData._id}`}>Edit</a>
    <div className="modal fade"   id={`${rowData._id}`} tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div className=" col-md-9 col-md-offset-2" style={{"backgroundColor":"white"}}>
    <AddClientUser edit="true" clientUser={rowData} />

    </div>
  </div>
    <a href="#" className="btn btn-danger" id={rowData._id} onClick={(e)=>{

      let obj=new crudClass()
      obj.delete('deleteClientUser',e.target.id)
    }}>Delete</a></div>)
}}
]
   }
  }
  pages(){
    let pages=[]
    let len=this.props.data.users.length/5;
    let range=Math.ceil(len)
    let a =this.props.data.users;
    for(i=1;i<=range;i++){
      let b=a.splice(0,5);
      pages.push(b)

  }
  return pages
}
  onChangePage(page) {
    let pages=this.state.pages[page-1];
    this.setState({currentPage:pages})

  }
  componentDidMount(){
    let page=this.state.pages[0];
    this.setState({currentPage:page})
  }

 render(){
   let {query,sortingColumns,columns}=this.state;

   const searchedRows = search.multipleColumns({ columns, query })(this.state.currentPage);
   const sortedRows=sort.sorter({
     columns,sortingColumns,sort:orderBy
   })(searchedRows);

   console.log(sortedRows);
    return(<div><section className="content-header">
    <h1>Manage Client</h1>
  </section>
  <section className="content">
  <div className="col-md-10 registration_form pad_t50">
      <div className="col-md-10 col-md-offset-1">
        <h1 className="title">Manage Client Users</h1>
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
<Paginate max={5} onChange={this.onChangePage.bind(this)}/>
      </div></div></section></div>
    )
  }
}
