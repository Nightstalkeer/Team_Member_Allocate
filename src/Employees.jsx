import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';


const Employees = (props/*{employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange}*/) => {

  
  // We can do both by destructuring or by props and after that props dot operator.....

  
  const employees = props.employees, selectedTeam= props.selectedTeam, handleEmployeeCardClick = props.handleEmployeeCardClick, handleTeamSelectionChange = props.handleTeamSelectionChange;

  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
        </div>
      </div>



      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            {
              employees.map((employee) => ( // We use parentheses here because we want to return the next line through this function
                <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')} style={{ cursor: "pointer" }} onClick={handleEmployeeCardClick}>

                  {(employee.gender === 'male') ? <img src={maleProfile} className="card-img-top" /> : <img src={femaleProfile} className="card-img-top" />}


                  <div className="card-body">
                    <h5 className="card-title"> Full Name : {employee.fullName}</h5>
                    <p className="card-text"><b>Designation:</b> {employee.designation}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </main>
    // <main>
    //   {
    //     employees.map((employee) => (
    //       <p>{employee.fullName}</p>
    //     ))
    //   }
    // </main>
  )
}

export default Employees;