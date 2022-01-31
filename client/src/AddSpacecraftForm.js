import { useState } from 'react'

function AddSpacecraftForm (props) {
    const { onAdd } = props
    // const [astronautID, setAstronautID] = useState('')
    const [name, setName] = useState('');
    const [maxSpeed, setMaxSpeed] = useState('');
    const [mass, setMass] = useState('');

    const add = (evt) => {
        onAdd({
            name, 
            maxSpeed,
            mass
        })
        // setAstronautID('')
        setName('')
        setMaxSpeed('')
        setMass('')
    }

    return (
        <div>
            <div>
                <input type='text' placeholder='name' value={name} onChange={(evt) => setName(evt.target.value)} />
            </div>
            <div>
                <input type='text' placeholder='MaxSpeed' value={maxSpeed} onChange={(evt) => setMaxSpeed(evt.target.value)} />
            </div>
            <div>
                <input type='text' placeholder='Mass' value={maxSpeed} onChange={(evt) => setMass(evt.target.value)} />
            </div>
            <div>
                <input type='button' value='add spacecraft' onClick={add} />
            </div>
        </div>
    )
}

export default AddSpacecraftForm