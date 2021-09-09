import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

const People = () => {

    var planetName = ""

    const [person, setPerson] = useState({})
    const [planet, setPlanet] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(res => setPerson(res.data))
            .catch(err => alert("Could not retrieve data."))
    }, [id])

    const getHomeworld = (url) => {
        let apiCall = (url) => {
            axios.get(url)
                .then(res => setPlanet(res.data))
                .catch(err => console.log("Could not retrieve planet."))
            planetName = planet.name
            return planet.name
        }
        // console.log(planet);
        if(!planet[0]){
            setTimeout(apiCall(url), 5*1000)
            return planet.name
        } else {
            planet = {}
            setTimeout(apiCall(url), 5*1000)
            return planet.name
        }
    }

    // getHomeworld(person.homeworld)

    return (
        <div>
            <h1 className="display-4 my-4">{person.name}</h1>
            <p><strong>Homeworld: </strong> {planetName}</p>
            <p><strong>Height: </strong> {person.height} cm </p>
            <p><strong>Mass: </strong> {person.mass} kg </p>
            <p><strong>Hair Color: </strong> {person.hair_color} </p>
            <p><strong>Skin Color: </strong> {person.skin_color} </p>
        </div>
    )
}

export default People
