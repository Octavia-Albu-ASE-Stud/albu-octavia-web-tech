import { useState } from 'react'

function Astronaut(props) {
    const { member } = props;
    const [astronautID, setAstronautID] = useState(member.AstronautID);
    const [spacecraftID, setSpacecraftID] = useState(member.SpacecraftID)
    const [name, setName] = useState(member.Name);
    const [role, setRole] = useState(member.Role);

    return (<>
        <h1>Astronaut</h1>
        <p>ID: {astronautID}</p>
        <p>SpacecraftID: {spacecraftID}</p>
        <p>Name: {name}</p>
        <p>Role: {role}</p>        
    </>)
}

export default Astronaut;