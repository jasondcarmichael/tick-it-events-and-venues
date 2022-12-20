import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function EventDetails () {
    let { id } = useParams()
    console.log(id)
    const navigate = useNavigate();
    const [event, setevent] = useState('')

    const getData = async () => {
        await axios.get(`http://localhost:8000/events/${id}`)
        .then(res => {
            if (res) {
                setevent(res.data)
                console.log(res.data)
            }
        })
    }

    useEffect(() => {
        getData()
    }, [])

const goToVenue=(x)=>{
    navigate(`/venues/${x.id}`)
}
    return !event? null: (
        <div>
        <div className="events-wrapper">
            <div className="events-header">
            <div key={event.id} onClick={()=>goToVenue(event)}>
                        <h3>Venue: {event.venue.name}</h3>
                        
                        <h3>Event Name: {event.name}</h3>
                        <h3>Event Type: {event.type}</h3>
                        <p>Event Description: {event.description}</p>
                        <p>ASL Interpreter: {event.asl_interpreter?"yes":"no"}</p>
                        <p>Date of Event: {event.date}</p>
                        <p>Alcohol Served: {event.alcohol_served?"yes":"no"}</p>
                        <img src={event.photo_url}></img>
                        <br />
                    </div>
        </div>

            <div>
   


            </div>

       
        </div>
        </div>

    )
}