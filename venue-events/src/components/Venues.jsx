import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Venues () {

    const [venues, setVenues] = useState([])

    const getData = async () => {
        await axios.get('http://localhost:8000/venues/')
        .then(res => {
            if (res) {
                setVenues(res.data)
                console.log(res.data)
            }
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="venues">
            {venues.map((value) => {
                return (
                    <div key={value.id}>
                        <h3>Venue Name: {value.name}</h3>
                        <p>Address: {value.address}</p>
                        <p>Description: {value.description}</p>
                        <p>Onsite Parking: {value.onsite_parking}</p>
                        <p>Capacity: {value.capacity}</p>
                        
                        <img src={value.photo_url}></img>
                        <br />
                    </div> 
                )
            })}

        </div>
    )
}