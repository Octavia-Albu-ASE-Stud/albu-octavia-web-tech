import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { StaticRouter } from 'react-router'
import { useEffect, useState } from 'react';
import DBstore from './components/Spacecrafts/DBstore'
import Astronaut from './components/Spacecrafts/Astronaut'
import AddAstronautForm from './AddAstronautForm'
import AllAstronaut from './components/AllAstronauts';
import AddSpacecraftForm from './AddSpacecraftForm';

function App() {

  const [ids, setIds] = useState([])

  const [astronauts, setAstronauts] = useState([])
  const [space, setSpace] = useState([])

  useEffect(() => {
    DBstore.getAstronauts();
    DBstore.emitter.addListener('GET_ASTRONAUTS_SUCCESS', () => {
      setIds(DBstore.data)
    })
  }, [])

  const addAstronaut = (astronaut) => {
    DBstore.addAstronaut(astronaut)
}

const addSpace = (space) => {
  DBstore.addSpacecraft(space)
}

  return (
    <>
      <h1>Exam Web Tech</h1>
      <a href = "/2">2</a>
      
        <Routes>
          {ids.map((astronaut) => {
            let id = astronaut.AstronautID
            return <Route path={"/" + id} element={<Astronaut key={astronaut.AstronautID} member={astronaut} />} />
          })}
        </Routes>

        


        <Routes>
          <Route path="/" exact={true} element={AllAstronaut}/>
            
        </Routes>


        <h3>Add an astronaut </h3>
        <AddAstronautForm onAdd={addAstronaut} />

        <h3>Add a spacecraft </h3>
        <AddSpacecraftForm onAdd={addSpace} />
    </>
  );

}

export default App;
