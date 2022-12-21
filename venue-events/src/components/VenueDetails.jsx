import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function VenueDetails () {
    let { id } = useParams()
    console.log(id)
    const navigate = useNavigate();
    const [venue, setVenue] = useState('')
    const [event, setEvent] = useState('')

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

    const getEvent = async () => {
        await axios.get(`http://localhost:8000/events/`)
        .then(res => {
            if (res) {
                setEvent(res.data)
                console.log(res.data)
            }
        })
    }

    useEffect(() => {
        getEvent()
    }, [])

const goToEvent=(x)=>{
    navigate(`/events/${x.id}`)
}
    return !venue? null: !event? null:(
        <div>
        <div className="venue-events-wrapper">
            <div className="venue-events-header">

                <h1 className="venue-name">{venue.name}</h1>

                <img src={venue.photo_url}></img>
            </div>
            <div className="venue-details">
                <h3>VENUE DETAILS</h3>
                
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
            <h1 id="upcoming-events-header">Upcoming Events</h1>

            <div className="upcoming-events">
                
                {(!event)?
                <p>Event details to come...</p>:
                <div>
                    
                {event.map((event) => ( 
                    (venue.id !== event.venue_id)?
                    null
                    : 
                    <div className="upcoming-events-card" onClick={()=>goToEvent(event)}>
                    <h3>{event.name} on {event.date}</h3>
                    <img src={event.photo_url}></img>
                    <p id="more-info"> More Info >>> </p>
                   </div>
                    
                ))}
                </div>}
            </div>
        </div>

       
        </div>


    )
}
