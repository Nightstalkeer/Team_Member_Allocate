import Teams from './Teams';
import TeamMembers from './TeamMembers';

const Employees = (props/*{employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange}*/) => {


  // We can do both by destructuring or by props and after that props dot operator.....


  const employees = props.employees, selectedTeam = props.selectedTeam, handleEmployeeCardClick = props.handleEmployeeCardClick, handleTeamSelectionChange = props.handleTeamSelectionChange, teamMemberCount = props.teamMemberCount;

  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h3>{selectedTeam} has {teamMemberCount} {teamMemberCount === 1 ? "member" : "members"}</h3>
        </div>
      </div>

      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <Teams selectedTeam={selectedTeam} handleTeamSelectionChange={handleTeamSelectionChange} />
        </div>
      </div>



      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            <TeamMembers employees = {employees} selectedTeam = {selectedTeam} handleEmployeeCardClick = {handleEmployeeCardClick}/>
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