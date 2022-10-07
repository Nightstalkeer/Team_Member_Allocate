import { useState, useEffect} from 'react'; // use state is hook
import * as React from 'react';
import './App.css';
import Header from './Header';
import Employees from './Employees';
import Footer from './Footer';

function App() {


  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem("selectedTeam")) || "TeamB");

  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem("employeeList")) || [{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD"
  }]);

  //Functions are delared here

  useEffect(() => {
    localStorage.setItem('employeeList', JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
  }, [selectedTeam]);
  
  function handleTeamSelectionChange(event) {
    let s = event.target.value;
    // console.log(typeof (event.target.value));
    setTeam(s);
  }


  function handleEmployeeCardClick(event) {
    const transformedEmployees = employees.map((employee) => employee.id ===           
    parseInt(event.currentTarget.id) ? (employee.teamName === selectedTeam) ? { ...employee,     
    teamName: '' } : { ...employee, teamName: selectedTeam } : employee);

    setEmployees(transformedEmployees);

    // console.log(transformedEmployees);
    // console.log(selectedTeam);
    // console.log(String(event.currentTarget.id));
  }

  return (
    <div>
      
      <Header selectedTeam = {selectedTeam}
        teamMemberCount = {employees.filter((employee) => employee.teamName === selectedTeam).length}/>
      
      <Employees employees = {employees}
        selectedTeam = {selectedTeam}
        handleEmployeeCardClick = {handleEmployeeCardClick}
        handleTeamSelectionChange = {handleTeamSelectionChange}/>
      
      <Footer />
    </div >
  );
}

export default App;