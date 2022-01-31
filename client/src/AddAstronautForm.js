import { useState } from 'react'

function AddAstronautForm (props) {
    const { onAdd } = props
    // const [astronautID, setAstronautID] = useState('')
    const [spacecraftID, setSpacecraftID] = useState('')
    const [name, setName] = useState('');
    const [role, setRole] = useState('');

    const add = (evt) => {
        onAdd({
            // astronautID,
            spacecraftID,
            name,
            role
        })
        // setAstronautID('')
        setSpacecraftID('')
        setName('')
        setRole('')
    }

    return (
        <div>
            <div>
                <input type='text' placeholder='spacecraftID' value={spacecraftID} onChange={(evt) => setSpacecraftID(evt.target.value)} />
            </div>
            <div>
                <input type='text' placeholder='name' value={name} onChange={(evt) => setName(evt.target.value)} />
            </div>
            <div>
                <input type='text' placeholder='role' value={role} onChange={(evt) => setRole(evt.target.value)} />
            </div>
            <div>
                <input type='button' value='add astronaut' onClick={add} />
            </div>
        </div>
    )
}

export default AddAstronautForm