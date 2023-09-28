import axios from 'axios';

const  EMS_API_BASE_URL = 'http://localhost:8080/api/ems/getemployees';
const  EMS_API_BASE_URL1 = 'http://localhost:8080/api/ems/insert';
const  EMS_API_BASE_URL2='http://localhost:8080/api/ems/updateemployee'
const  EMS_API_BASE_URL3='http://localhost:8080/api/ems/deleteemployee'
class EmployeeService{

getEmployees(){

    return axios.get(EMS_API_BASE_URL);
}
createEmployees(employee){

    return axios.post(EMS_API_BASE_URL1,employee);
}

getEmployeeById(employeeId){


    return axios.get(`http://localhost:8080/api/ems/getemployees/${employeeId}`);
}

updateEmployeeById(employeeId,employee){


    return axios.put(EMS_API_BASE_URL2+'/'+employeeId,employee);
}
deleteEmployeeById(employeeId){


    return axios.delete(EMS_API_BASE_URL3+'/'+employeeId);
}

}

export default new  EmployeeService();