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
                <img src={event.photo_url}></img>
            </div>

                <div className="event-details" key={event.id} onClick={()=>goToVenue(event)}>
                    <h2>{event.name}</h2>
                        <p>{event.description}</p>
                    
                        <p><b>VENUE:</b> {event.venue.name}</p>
                      
                        <p><b>EVENT TYPE:</b> {event.type}</p>
                        
                        <p><b>ASL Interpreter:</b> {event.asl_interpreter?"yes":"no"}</p>
               
                        <p><b>DATE:</b> {event.date}</p>
                       
                        <p><b>ALCOHOL SERVED:</b> {event.alcohol_served?"yes":"no"}</p>
                </div>
        </div>
        </div>

    )
}