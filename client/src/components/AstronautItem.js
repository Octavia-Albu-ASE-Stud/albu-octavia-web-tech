const AstronautItem = (props) => {
    return (
        <li>
            <p> {props.spacecraftID} </p>
            <p> {props.name} </p>
            <p> {props.role} </p>
        </li>
    )
}

export default AstronautItem