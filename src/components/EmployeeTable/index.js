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
   const foundEmployees = localEmployees.filter(user => user.name.last.toLowerCase().includes(term));
  return setFilterEmployees(foundEmployees);
  }, [term])
  useEffect(() => {
    setFilterEmployees(employees)
  }, [employees])
  return (
    <>
    <SearchBar term={term} handleChange={handleChange}/>
    <table className="table">
      <thead>
        <tr>
          <th>Name:</th>
          <th>Age:</th>
          <th>Gender:</th>
          <th>Phone Number:</th>
          <th>E-mail:</th>
        </tr>
      </thead>
      <tbody>
        {
         
        filterEmployees.map(employee => (
          <tr key={employee.email}>
            <td>{employee.name.first} {employee.name.last}</td>
            <td>{employee.dob.age}</td>
            <td>{employee.gender}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
          </tr>
        ))
        }
      </tbody>
    </table>
    </>
  )
}
// export default EmployeeTable;
