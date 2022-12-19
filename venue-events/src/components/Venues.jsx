import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Venues () {

    const [venues, setVenues] = useState([])

    const getData = async () => {
        await axios.get('http://localhost:3001/api/venues')
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
                        <p>Photo: {value.photo_url}</p>
                        <br />
                    </div> 
                )
            })}

        </div>
    )
}