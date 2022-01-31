// import DBstore from './components/Spacecrafts/DBstore'
// import Astronaut from './components/Spacecrafts/Astronaut'
import { useSelector } from 'react-redux'
import AstronautItem from './AstronautItem'

function AllAstronaut(props) {

    const astronauts = useSelector((state) => 
        state.astronauts.astronauts
    )
        return (<>
            
            <ul>
                {astronauts.map((astronaut) => (
                <AstronautItem
                    key={astronaut.SpacecraftID}
                    spacecraftID={astronaut.SpacecraftID}
                    name={astronaut.Name}
                    role={astronaut.Role}
                />
                ))}
            </ul>
        </>)
        }

export default AllAstronaut;