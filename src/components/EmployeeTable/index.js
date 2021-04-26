import React, { useState, useEffect } from "react";
import SearchBar from "../Search";

export default function EmployeeTable({employees}) {
  const localEmployees = employees
  const [term, setTerm] = useState(null);
  const [filterEmployees, setFilterEmployees] = useState(localEmployees);
  console.log(employees)
  function handleChange (event) {
      setTerm(event.target.value.toLowerCase());
  }
  useEffect(() => {
   const foundEmployees = localEmployees.filter(user => user.name.last.toLowerCase().includes(term, localEmployees));
  return setFilterEmployees(foundEmployees);
  }, [term, localEmployees])
  useEffect(() => {
    setFilterEmployees(employees)
  }, [employees]);

  


    
  return (
    <>
    <SearchBar term={term} handleChange={handleChange}/>
    <div class="jumbotron jumbotron-fluid">
    <table className="table">
      <thead> 
        <h1>Employees</h1>
        <tr> 
          
          <th>Picture</th>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Cell Phone</th>
          <th>E-mail</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {
         
        filterEmployees.map(employee => (
          <tr key={employee.email}>
            <img src={employee.picture.thumbnail} alt={employee.name.first}/>
            <td>{employee.name.first} {employee.name.last}</td>
            <td>{employee.dob.age}</td>
            <td>{employee.gender}</td>
            <td>{employee.cell}</td>
            <td>{employee.email}</td>
            <td>{employee.location.city}, {employee.location.state}</td>
          </tr>
        ))
        }
      </tbody>
    </table>
    </div>
    </>
  )
}
