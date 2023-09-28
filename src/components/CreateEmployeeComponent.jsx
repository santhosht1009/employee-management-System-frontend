import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            firstname:'',
            lastname:'',
            emailId:''
        }
 
        }
        
        changeFirstNameHandler=(event)=>{
            this.setState({firstname:event.target.value});
        }
        changeLastNameHandler=(event)=>{
            this.setState({lastname:event.target.value});
        }
        changeEmailIdHandler=(event)=>{
            this.setState({emailId:event.target.value});
        }

    //  reset=(e)=> {
    //         e.preventDefault();
    //         this.setState({ firstname: "", lastname: "",emailId:"" });
    //       }


          saveEmployee=(e)=>{
            e.preventDefault();
            let employee={firstname:this.state.firstname, lastname:this.state.lastname, emailId:this.state.emailId}
        console.log('employee=>',JSON.stringify(employee)); 
    
EmployeeService.createEmployees(employee).then(res=>{
window.location.assign("/")

  

})


        }

    render() {
        return (
            <div>
<div className="vh-50 gradient-custom" >
  <div className="container py-5 h-30">
    <div className="row justify-content-center align-items-center h-50">
      <div className="col-12 col-lg-9 col-xl-7">
        <div className="card shadow-2-strong card-registration" style={{borderRadius:"15px"}}>
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-0 pb-0 pb-md-0 mb-md-0">Add Employee</h3>
            <form>
                                <div className="form-group mt-1 pt-2">
                                    <label  className="">First Name</label>
                                    <input type="text" name="firstname" className="form-control"  placeholder="Enter First name"  
                                    value={this.state.firstname} onChange={this.changeFirstNameHandler}
                                    />
                                </div>
                                <div className="form-group mt-1 pt-2">
                                    <label  className="">Last Name</label>
                                    <input type="text" name="lastname" className="form-control"  placeholder="Enter Last name"  
                                    value={this.state.lastname} onChange={this.changeLastNameHandler}
                                    />

                                </div>
                                <div className="form-group mt-1 pt-2">
                                    <label  className="">Email Id</label>
                                    <input type="email" name="emailId" className="form-control"  placeholder="Enter Email Id"  
                                    value={this.state.emailId} onChange={this.changeEmailIdHandler}
                                    />

                                </div>
                                <div className="mt-2 pt-2">
                                <button className='btn btn-success' onClick={this.saveEmployee}>Save</button>
                                <Link to={"/"}><button className='btn btn-danger'  style={{marginLeft:"10px"}}>Cancel</button></Link>
              </div>


</form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;
