import React from "react";
import TeamMemberCard from './TeamMemberCard';


const TeamCollection = props => {

    console.log("team collection", props.teamMembers)

    return (
        <div className="people-collection">
            {props.teamMembers.map(person => ( 
                
                <TeamMemberCard person={person} />
            ))}
        </div>
    );
  }

export default TeamCollection;
