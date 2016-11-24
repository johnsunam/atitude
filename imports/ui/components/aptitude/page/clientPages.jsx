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
       currentPage:1,
       currentRows:[],
       pages:[],
       rowData:{},
       searchcolumns:[{property:'formName',header:{label:'Form Name',transforms:[sortable],
     format:sort.header({sortable,getSortingColumns})}},
     {property:'previewURL',header:{label:'Preview URL',transforms:[sortable],
   format:sort.header({sortable,getSortingColumns})}},
   {property:'publishURL',header:{label:'Publish URL',transforms:[sortable],
  format:sort.header({sortable,getSortingColumns})}}],
       columns:[{property:'formName',header:{label:'Form Name',transforms:[sortable],
     format:sort.header({sortable,getSortingColumns})}},
     {property:'previewURL',header:{label:'Preview URL',transforms:[sortable],
   format:sort.header({sortable,getSortingColumns})}},
   {property:'publishURL',header:{label:'Publish URL',transforms:[sortable],
  format:sort.header({sortable,getSortingColumns})}},
  {property:'status',header:{label:'Access'},cell:{
    props:{
      style:{
        "padding-left":20
      }
    }
  }},

  {property:'action',header:{label:'Action'},cell:{
    props:{
      style:{
        height:50
      }
    },
    format:(value,{rowData})=>(<div>
      <a href="#" className="btn btn-primary" onClick={()=>{
        this.setState({rowData:rowData})
      }}  data-toggle="modal" data-target="#myModal">Edit</a>
      <a className="btn btn-danger" href="#" id={rowData._id} onClick={(e)=>{
    let obj=new crudClass()
    obj.delete('deletePage',e.target.id)
  }}>Delete</a>&nbsp;&nbsp;

        <a className="btn btn-success" data-toggle="modal"  href="#" data-target={`#clone${rowData._id}`} onClick={(e)=>{

        }}>Clone</a>&nbsp;&nbsp;
        <div className="modal fade" id={`clone${rowData._id}`} tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="col-md-10 registration_form pad_t50">
        <div className="col-md-6 col-md-offset-3">
          <div className="card"></div>
          <div className="card">
            <h1 className="title">Page Name</h1>
            <div className="form_pad">
            <Formsy.Form ref="form" onValidSubmit={(e)=>{
              let data={clientName:rowData.clientName,formName:rowData.formName,metakeys:rowData.metakeys,
            name:e.pagename,previewURL:rowData.previewURL,publishURL:rowData.publishURL,status:rowData.status  }
            var obj= new crudClass()
            obj.create('addPage',data);

            }} id="addPage" onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>0
          <MyInput className="form-control" type="text" name="pagename" ref="pagename"/>
            <button className="btn btn-success" type="submit">save</button>
            </Formsy.Form>
            </div></div></div></div></div>

</div>)
  }}

]


  }
}

enableButton() {
  this.setState({ canSubmit: true });
}
disableButton() {
  this.setState({ canSubmit: false });
}
onChangePage(page) {
  this.setState({currentPage:page})
  let pages=this.state.pages[page-1];
  this.setState({currentRows:pages})

}
componentDidMount(){
  let data=_.where(this.props.pages,{clientName:this.props.client})
  let pages=[]
  let len=data.length/5;
  let range=Math.ceil(len)
  let a =data;
  for(i=1;i<=range;i++){
    let b=a.splice(0,5);
    pages.push(b)

}

  let page=pages[0];
  console.log(page);
  this.setState({pages:pages,currentRows:page})

}


componentWillReceiveProps(nextProps){
  let data=_.where(nextProps.pages,{clientName:nextProps.client});
  console.log(data);
  let pages=[]
  let len=data.length/5;
  let range=Math.ceil(len)
  let a =data;
  for(i=1;i<=range;i++){
    let b=a.splice(0,5);
    pages.push(b)

}
  this.setState({currentRows:pages[this.state.currentPage-1]})
}

  render(){
    console.log(this.state.currentRows);


    let {query,sortingColumns,columns,searchcolumns}=this.state;

    const searchedRows = search.multipleColumns({ columns, query })(this.state.currentRows);
    const sortedRows=sort.sorter({
      columns,sortingColumns,sort:orderBy
    })(searchedRows);

    return (<div>
    <Table.Provider
    className="pure-table pure-table-striped"
    columns={columns}
    >
    <Table.Header>
    <SearchColumns
            query={query}
            columns={searchcolumns}
            onChange={query => this.setState({ query })}
          />
    </Table.Header>

    <Table.Body rows={sortedRows} rowKey="id" />



    </Table.Provider>

      <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <AddPage edit="true" page={this.state.rowData}/>
  </div></div>)

  }
}
