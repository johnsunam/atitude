//pages listed according to the client

import React,{Component} from 'react';
import AddPage from '../../../container/addPage.js'
import crudClass from '../../common/crudClass.js'
import orderBy from 'lodash/orderBy';
import { Table,SearchColumns, search,sort} from 'reactabular';

export default class ClientPages extends Component {
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
       columns:[{property:'formName',header:{label:'Form Name',transforms:[sortable],
     format:sort.header({sortable,getSortingColumns})}},
     {property:'previewURL',header:{label:'Preview URL',transforms:[sortable],
   format:sort.header({sortable,getSortingColumns})}},
   {property:'publishURL',header:{label:'Publish URL',transforms:[sortable],
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
    <a href="#" className="btn btn-primary" data-toggle="modal" data-target={`#${rowData._id}`}>Edit</a>
    <div className="modal fade" id={`${rowData._id}`} tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <AddPage edit="true" page={rowData}/>
  </div>
</div>)
  }},
  {property:'delete',header:{label:'Delete'},cell:{
    format:(value,{rowData})=>(
      <a className="btn btn-danger" href="#" id={rowData._id} onClick={(e)=>{
    let obj=new crudClass()
    obj.delete('deletePage',e.target.id)
  }}>Delete</a>
    )
  }}

]


  }
}

  render(){

    let pages=_.where(this.props.pages,{clientName:this.props.client})
    let data=pages.map((page)=>{
      return page
    })
    let {query,sortingColumns,columns}=this.state;

    const searchedRows = search.multipleColumns({ columns, query })(data);
    const sortedRows=sort.sorter({
      columns,sortingColumns,sort:orderBy
    })(searchedRows);

    return (<Table.Provider
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
)

  }
}
