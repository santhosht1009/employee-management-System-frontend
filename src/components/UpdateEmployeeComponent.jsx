import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate ,useParams} from 'react-router-dom'; // Assuming you're using react-router-dom for routing
import EmployeeService from '../services/EmployeeService'; // Assuming you have a separate service file


const UpdateEmployeeComponent = () => {

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [ emailId, setEmailId] = useState('');
  
const history=useNavigate();
  
  const {id}=useParams();

  

  const updateEmployee = (e) => {
    e.preventDefault();
   const employee={firstname,lastname,emailId};
    console.log('employee =>', JSON.stringify(employee));

    EmployeeService.updateEmployeeById(id,employee).then((res) => {
      history('/')
    });
  };

 
  useEffect(() => {
   
    EmployeeService.getEmployeeById(id).then((res) => {
      setFirstName(res.data.firstname)
      setLastName(res.data.lastname)
      setEmailId(res.data.emailId)
    });
  }, []);





  return (

    <div>
    <div className="vh-50 gradient-custom">
      <div className="container py-5 h-30">
        <div className="row justify-content-center align-items-center h-50">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card shadow-2-strong card-registration" style={{ borderRadius: '15px' }}>
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-0 pb-0 pb-md-0 mb-md-0">Add Employee</h3>
                <form>
                  <div className="form-group mt-1 pt-2">
                    <label className="">First Name</label>
                    <input
                      type="text"
                      name="firstname"
                      className="form-control"
                      placeholder="Enter First name"
                      value={firstname}
                      onChange={(e)=>setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-1 pt-2">
                    <label className="">Last Name</label>
                    <input
                      type="text"
                      name="lastname"
                      className="form-control"
                      placeholder="Enter Last name"
                      value={lastname}
                      onChange={(e)=>setLastName(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-1 pt-2">
                    <label className="">Email Id</label>
                    <input
                      type="email"
                      name="emailId"
                      className="form-control"
                      placeholder="Enter Email Id"
                      value={emailId}
                      onChange={(e)=>setEmailId(e.target.value)}
                    />
                  </div>
                  <div className="mt-2 pt-2">
                    <button className='btn btn-success' onClick={updateEmployee}>Save</button>
                    <Link to={"/"}>
                      <button className='btn btn-danger' style={{ marginLeft: "10px" }}>Cancel</button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UpdateEmployeeComponent