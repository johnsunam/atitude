//edit,delete and lists user
import React ,{Component} from 'react'
import Paginate from '../../common/paginator.jsx'
import AddUser from './addUser.jsx'
import crudClass from '../../common/crudClass.js'
import orderBy from 'lodash/orderBy';
import { Table,SearchColumns, search,sort} from 'reactabular';
export default class ManageUser extends Component {
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
      rowData:{},
      currentPage:1,
      currentRows:[],
      pages:[],
      columns:[{property:'name',header:{label:'Name',transforms:[sortable],
    format:sort.header({sortable,getSortingColumns})}},
      {property:'mobile',header:{label:'Mobile',transforms:[sortable],
    format:sort.header({sortable,getSortingColumns})}},
	  {property:'email',header:{label:'EMail',transforms:[sortable],
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
          <a href="#" className="btn btn-primary" onClick={()=>{
            this.setState({rowData:rowData})
          }}  data-toggle="modal" data-target="#myModal">Edit</a>

      </div> )
      }},
      {property:'delete',header:{label:'Delete'},cell:{
        format:(value,{rowData})=>(
          <a href="#" className="btn btn-danger" onClick={()=>{
            let obj=new crudClass()
            obj.delete('deleteUser',rowData.id)
          }}>Delete</a>
        )
      }}

      ]
   }
    }
    onChangePage(page) {
      this.setState({currentPage:page})
      let pages=this.state.pages[page-1];
      this.setState({currentRows:pages})

    }
    componentDidMount(){
      let pages=[]
      let len=this.props.users.length/5;
      let range=Math.ceil(len)
      let a =this.props.users;
      for(i=1;i<=range;i++){
        let b=a.splice(0,5);
        pages.push(b)

    }

      let page=pages[0];
      console.log(pages);
      this.setState({pages:pages,currentRows:page})

    }


    componentWillReceiveProps(nextProps){
      let pages=[]
      let len=nextProps.users.length/5;
      let range=Math.ceil(len)
      let a =nextProps.users;
      for(i=1;i<=range;i++){
        let b=a.splice(0,5);
        pages.push(b)

    }
      this.setState({currentRows:pages[this.state.currentPage-1]})
    }

  render(){



  let {query,sortingColumns,columns}=this.state;

  const searchedRows = search.multipleColumns({ columns, query })(this.state.currentRows);
  const sortedRows=sort.sorter({
    columns,sortingColumns,sort:orderBy
  })(searchedRows);
      return(<div className="col-md-10 registration_form pad_t50">
      <div className="col-md-10 col-md-offset-1">
        <h1 className="title">Manage User</h1>
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
<div className="modal fade" id='myModal' tabindex="-1" user="dialog" aria-labelledby="myModalLabel">
<AddUser edit="true" user={this.state.rowData}/>
</div>
      </div>
    </div>)
  }
}
