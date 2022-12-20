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
        <div>
        <div className="venue-events-wrapper">
            <div className="venue-events-header">

                <h1>{venue.name}</h1>

                <img src={venue.photo_url}></img>
            </div>
            <div className="venue-details">
                <h3>Venue Details</h3>
                
                <p className="venue-description">{venue.description}</p>
                <h5>ADDRESS</h5>
                <p>{venue.address}</p>
                <h5>ONSITE PARKING?</h5>
                <p>{venue.onsite_parking?"Yes":"No"}</p>
                <h5>CAPACITY</h5>
                <p>{venue.capacity} Seats</p>
            </div>
        </div>

            <div>
                <h2>Upcoming Events</h2>
                <p>Event details to come...</p>

                {venue.events.map((event) => {
                    <h5>{event.name}</h5>
                })}



            </div>

       
        </div>

    ) : null
}