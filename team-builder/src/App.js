import React, { useState } from "react";
import TeamCollection from './Team/TeamCollection';
import logo from './logo.svg';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([{'name':'jake','email':'jake@aol.com'},{'name':'igor','email':'igor@gmail.com'}]);
  

  console.log("test", teamMembers)
  return (
    <div className="App">
      <TeamCollection teamMembers={teamMembers} />
    </div>
  );
}

export default App;
