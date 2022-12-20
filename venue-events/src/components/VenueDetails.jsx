import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


export default function VenueDetails (props) {
    let { id } = useParams()
    console.log(id)

    const [venue, setVenue] = useState('')

    const getData = async () => {
        await axios.get(`http://localhost:8000/venues/${id}`)
        .then(res => {
            if (res) {
                setVenue(res.data)
                console.log(res.data)
            }
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return venue ?(
        <div className="events-wrapper">
            <div className="venue-events-header">
                <h2>Upcoming Events at {venue.name}</h2>
            </div>
                <p>Address: {venue.address}</p>
                <p>Description: {venue.description}</p>
                <p>Onsite Parking: {venue.onsite_parking?"yes":"no"}</p>
                <p>Capacity: {venue.capacity}</p>
                <img src={venue.photo_url}></img>
                <br />

        </div>

    ) : null
}