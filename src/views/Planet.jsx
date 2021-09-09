import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Planet = () => { 
    
    const [planet, setPlanet] = useState({})
    const {id} = useParams()

    const addCommas = (string) => {
        const num = new Number(string)
        const str = num.toLocaleString("en-US")
        return str
    }
    
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then(res => setPlanet(res.data))
        .catch(err => alert("Could not retrieve data."))
    }, [id])

    return (
        <div>
            <h1 className="display-4 my-4">{planet.name}</h1>
            <p><strong>Climate: </strong> {planet.climate} </p>
            <p><strong>Terrain: </strong> {planet.terrain} </p>
            <p><strong>Surface Water: </strong> {planet.surface_water}% </p>
            <p><strong>Population: </strong> {addCommas(planet.population)} </p>
        </div>
    )
}

export default Planet
