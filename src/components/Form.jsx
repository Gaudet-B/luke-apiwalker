import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Form = () => {

    const [category, setCategory] = useState()
    const [id, setId] = useState()

    const history = useHistory()
    
    const submitHandler = e => {
        e.preventDefault()
        history.push(`/${category}/${id}`)
    }
    
    return (

        <div className="m-4 p-2" style={{ maxWidth: "80%" }}>
            <form onSubmit={submitHandler} className="d-flex flex-row form justify-content-between align-items-center my-4">
                <label for="category" className="form-label">Search for:</label>
                <select className="form-select form-select-lg" name="category" id="" onChange={e => setCategory(e.target.value)} style={{ width: "30%", height: "30px" }} >
                    <option value="">-</option>
                    <option value="person">Person</option>
                    <option value="planet">Planet</option>
                </select>
                <label for="id" className="form-label">ID:</label>
                <input type="text" name="id" id="" onChange={e => setId(e.target.value)} style={{ maxWidth: "60px" }} />
                <button type="submit" className="btn btn-primary btn-sm" style={{ width: "80px" }}>Search</button>
            </form>
        </div>
    )
}

export default Form
