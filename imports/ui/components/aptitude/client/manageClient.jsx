//edit,delete and lists client
import React ,{Component} from 'react'
import Paginate from '../../common/paginator.jsx'
import AddClient from '../../../container/editAddedClient.js'
import crudClass from '../../common/crudClass.js'
import orderBy from 'lodash/orderBy';
import { Table,SearchColumns, search,sort} from 'reactabular';
export default class ManageClient extends Component {
  constructor(props) {
   super(props)
   const getSortingColumns = () => this.state.sortingColumns || {};
   const sortable = sort.sort({
      // Point the transform to your rows. React state can work for this purpose
      // but you can use a state manager as well.
      getSortingColumns,

      // The client requested sorting, adjust the sorting state accordingly.
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
      currentPage:1,
      currentRows:[],
      pages:[],
      rowData:{},
      columns:[{property:'companyName',header:{label:'Name',transforms:[sortable],
    format:sort.header({sortable,getSortingColumns})}},
      {property:'email',header:{label:'Email',transforms:[sortable],
    format:sort.header({sortable,getSortingColumns})}},
	  {property:'phone',header:{label:'Mobile',transforms:[sortable],
    format:sort.header({sortable,getSortingColumns})}},
	{property:'website',header:{label:'Website',transforms:[sortable],
    format:sort.header({sortable,getSortingColumns})}},
	{property:'code',header:{label:'Client Code',transforms:[sortable],
    format:sort.header({sortable,getSortingColumns})}},
      {property:'edit',header:{label:'Edit'},cell:{
        props:{
          style:{

            height:50
          }
        },
        format:(value,{rowData})=>(<div>
          <a href="#" className="btn btn-primary" onClick={()=>{
            console.log(rowData);
            this.setState({rowData:rowData})
          }}  data-toggle="modal" data-target="#myModal">Edit</a>
      </div> )
      }},
      {property:'delete',header:{label:'Delete'},cell:{
        format:(value,{rowData})=>(
          <a href="#" className="btn btn-danger" onClick={()=>{
            let obj=new crudClass()
            console.log(rowData);
            obj.delete('deleteClient',rowData.id)
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
      let len=this.props.clients.length/5;
      let range=Math.ceil(len)
      let a =this.props.clients;
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
      let len=nextProps.clients.length/5;
      let range=Math.ceil(len)
      let a =nextProps.clients;
      for(i=1;i<=range;i++){
        let b=a.splice(0,5);
        pages.push(b)

    }
      this.setState({currentRows:pages[this.state.currentPage-1]})
    }

  render(){
console.log(this.props);
  let {query,sortingColumns,columns,currentPage}=this.state;

  const searchedRows = search.multipleColumns({ columns, query })(this.state.currentRows);
  const sortedRows=sort.sorter({
    columns,sortingColumns,sort:orderBy
  })(searchedRows);

      return(<div className="col-md-10 registration_form pad_t50">
      <div className="col-md-10 col-md-offset-1">
        <h1 className="title">Manage Client</h1>
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
<div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
<div className="modal-header">
<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
</div>
<AddClient edit="true" client={this.state.rowData}/>
</div>

      </div>
    </div>)
  }
}
