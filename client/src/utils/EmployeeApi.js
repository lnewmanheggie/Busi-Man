import axios from "axios";

export default {
  
  getEmployees: function() {
    return axios.get("/api/employees");
  },

  getEmployee: function(id) {
    return axios.get("/api/employees/" + id);
  },
 
  deleteEmployee: function(id) {
    return axios.delete("/api/employees/" + id);
  },
  
  saveEmployee: function(employeeData) {
    return axios.post("/api/employees", employeeData);
  }
};