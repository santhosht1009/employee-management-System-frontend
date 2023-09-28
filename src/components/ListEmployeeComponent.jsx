import React, { useState, useEffect } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next'; 
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter'; 
import paginationFactory from 'react-bootstrap-table2-paginator'; 



// export default class ListEmployeeComponent extends Component {

// constructor(props){
// super(props)
// this.state={
//     employees:[] ,
//                 columns: [{
//                   dataField: 'id',
//                   text: 'Id'
//                 },
//                 {
//                   dataField: 'firstname',
//                   text: 'First Name',
//                  sort:true
//                 }, {
//                   dataField: 'lastname',
//                   text: 'Last Name',
//                   sort: true
//                 },
//                 {
//                     dataField: 'emailId',
//                     text: 'Email Id',
//                    sort:true
//                   },
//                   {
                    
//                     text: 'Actions',
//                     formatter: this.updateFun,
//                    sort:true
//                   }
                 
//                 ],
//                 isFollow: true

// }


// this.onFollowChanged.bind(this); }
// componentDidMount(){
//     EmployeeService.getEmployees().then((res)=>{
// this.setState({employees:res.data});

//     })
// }
// onFollowChanged() {
//     this.setState({ isFollow: !this.state.isFollow });
//     console.log(this.state.isFollow);
//   }

// updateFun= (cell, row, rowIndex, formatExtraData) => {
//     return (
//       <Button
//         onClick={() => {
//           this.onFollowChanged(row);
//         }}
//       >
//        Update
//       </Button>
//     );
//   };

//   render() {
//     return (
//         <div>
//         <div className="container" style={{ marginBottom :100 }}>  
//         <div className="row" >    
//         <div className="col-sm-12 btn btn-info">    
//        Employee Details 
//          </div>    
//           </div>    
//         <div  style={{ marginTop: 20 }}>  
//         <BootstrapTable   
//         striped  
//         hover  
//         keyField='id'   
//         data={ this.state.employees }   
//         columns={ this.state.columns } 
//         filter={ filterFactory() }
//         pagination={ paginationFactory() }
//         />  
//       </div>  
//       </div>
     
//       </div>  
     

//     )
//   }
// }






// class ListEmployeeComponent extends Component {
  

// constructor(props){
// super(props)
// this.state={
//     employees:[],
// }
// }

// componentDidMount(){
//     EmployeeService.getEmployees().then((res)=>{
// this.setState({employees:res.data});

//     })
// }

// editEmployee(id){
//     window.location.assign("/update-employee/{id}")
// }

//     render() {
//         return (
//             <div>
//                 <h2 className="text-center">Employee List</h2>
//                 <div className='row col-xs-2 col-xs-offset-1 col-sm-3 col-sm-offset-6'>
//                 <Link to="/add-employee"><button className='btn btn-primary '>Add Employee</button></Link> 
//                 </div>
//                 <div className='row'>

//                 <table className="table table-hover">
//   <thead>
//     <tr>
    
//       <th scope="col">First Name</th>
//       <th scope="col">Last Name</th>
//       <th scope="col">Email Id</th>
//       <th scope="col">Action</th>
//     </tr>
//   </thead>
//   <tbody>

// {
//     this.state.employees.map(employee=>
//         <tr key={employee.id}>
//     <td>{employee.firstname}</td>
//     <td>{employee.lastname}</td>
//     <td>{employee.emailId}</td>
//     <td><button onClick={()=>this.editEmployee(employee.id)} className='btn btn-info'>Update </button></td>
//     </tr>
//     )
// }

//   </tbody>
// </table>

//                 </div>


//             </div>
//         );
//     }
// }

// export default ListEmployeeComponent;





function ListEmployeeComponent() {
    const [employees, setEmployees] = useState([]);
    const navigate=useNavigate();


    useEffect(() => {
      getAllEmployees()
    }, []);
 
    
    
const getAllEmployees=()=>{

  EmployeeService.getEmployees().then((res) => {
    setEmployees(res.data);
  }).catch(error=>{
    console.log(error);
  });

}

    // Function to handle editing an employee
    const editEmployee = (id) => {
      navigate(`/update-employee/${id}`);
    };


    //function to handle deleting an employee
    const deleteEmployee=(employeeId)=>{
EmployeeService.deleteEmployeeById(employeeId).then(() => {
  getAllEmployees();

    }).catch(error=>{
      console.log(error);
    })
  }

  
    return (
      <div>
        <h2 className="text-center">Employee List</h2>
        <div className='row col-xs-2 col-xs-offset-1 col-sm-3 col-sm-offset-6'>
          <Link to="/add-employee"><button className='btn btn-primary'>Add Employee</button></Link>
        </div>
        <div className='row'>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                 <th scope="col">Id</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email Id</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.firstname}</td>
                  <td>{employee.lastname}</td>
                  <td>{employee.emailId}</td>
                  <td>
                    <button
                      onClick={() => editEmployee(employee.id)}
                      className='btn btn-info'
                    >
                      Update
                    </button>
                    <button
                      onClick={() => deleteEmployee(employee.id)}
                      className='btn btn-danger'
                      style={{marginLeft:"10px"}}
                    >
                      Delete
                    </button>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export default ListEmployeeComponent;