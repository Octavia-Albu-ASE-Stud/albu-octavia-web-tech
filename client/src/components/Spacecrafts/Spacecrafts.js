import { useState } from 'react'

function Spacecrafts(props) {
    const { member } = props;
    const [spacecraftID, setSpacecraftID] = useState(member.SpacecraftID)
    const [name, setName] = useState(member.Name);
    const [maxSpeed, setMaxSpeed] = useState(member.MaxSpeed);
    const [mass, setMass] = useState(member.Mass);

    return (<>
        <h1>Spacecraft</h1>
        <p>ID: {spacecraftID}</p>
        <p>Name: {name}</p>
        <p>MaxSpeed: {maxSpeed}</p> 
        <p>Mass: {mass}</p>       
    </>)
}

export default Spacecrafts;