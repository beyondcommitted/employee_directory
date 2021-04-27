import React, { useState, useEffect } from "react";
import SearchBar from "../Search";

export default function EmployeeTable({employees}) {
  const localEmployees = employees
  const [term, setTerm] = useState(null);
  const [sortTerm, setSortTerm] = useState("asc");
  const [filterEmployees, setFilterEmployees] = useState(localEmployees);
  console.log(employees)
  function handleChange (event) {
      setTerm(event.target.value.toLowerCase());
  }
  function sortHandleChange () {
       sortTerm === "asc" ? setSortTerm("dsc"): setSortTerm("asc")
  }
  useEffect(() => {
   const foundEmployees = localEmployees.filter(user => user.name.last.toLowerCase().includes(term, localEmployees));
  return setFilterEmployees(foundEmployees);
  }, [term, localEmployees])
  useEffect(() => {
    setFilterEmployees(employees)
  }, [employees]);
  useEffect(() => {
  sortTerm === "dsc" ? setFilterEmployees([...filterEmployees].sort((a, b) => a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1 : -1
  ))
  : setFilterEmployees([...filterEmployees].sort((b, a) => b.name.last.toLowerCase > a.name.last.toLowerCase ? 1 : -1))
  // eslint-disable-next-line
  }, [sortTerm])
  

  


    
  return (
    <>
    <SearchBar term={term} handleChange={handleChange}/>
    <div className="jumbotron jumbotron-fluid">
      <h1>[Company Name] Employee Directory</h1>
    <table className="table">
      <thead> 
        
        <tr> 
          
          <th>Picture</th>
          <th onClick={sortHandleChange} style={{cursor:"pointer"}} className="bg-info">Name</th>
          <th >Age</th>
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
            <td><img src={employee.picture.thumbnail} alt={employee.name.first}/></td>
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
