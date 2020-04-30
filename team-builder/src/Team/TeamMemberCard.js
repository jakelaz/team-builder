import React from "react";


const TeamMemberCard = props => {
    console.log("person", props.person)

    return (
        <TeamMemberCard className="team-member-card">
            <h2>{props.person.name}</h2>
            <h4>{props.person.email}</h4>
        </TeamMemberCard>
    );
}

export default TeamMemberCard;