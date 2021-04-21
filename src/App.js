import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
function App() {
  const [employees, setEmployees] = useState([])
  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=10&nat=us').then((response) => {
      console.log(response.data);
      setEmployees([...response.data.results]);
    })
  }, [])
  return (
    <div className="App">
      {employees.map((employee) => {
        return (
          <h1>{employee.name.first} {employee.name.last}</h1>
        )})
      }
    </div>
  );
}

export default App;
