
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import EmployeeTable from './components/EmployeeTable';

export default function App() {
  const [employees, setEmployees] = useState([])
  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=300&nat=us').then((response) => {
      // console.log(response.data);
      setEmployees([...response.data.results]);
    })
  }, [])
  // console.log(employees)
  return (
    <>
    <div className="container">
      <EmployeeTable employees={employees}/>
    </div>
    </>
  );
}

