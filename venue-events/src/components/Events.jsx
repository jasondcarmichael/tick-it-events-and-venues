import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Events () {
    let navigate = useNavigate()
    const [events, setEvents] = useState([])

    const getData = async () => {
        await axios.get('http://localhost:8000/events')
        .then(res => {
            if (res) {
                setEvents(res.data)
                console.log(res.data)
            }
        })
    }

    useEffect(() => {
        getData()
    }, [])

    const goToEvent =(x)=>{
        navigate(`${x.id}`)
    }

    return !events? null: (
        <div className="events">
            {events.map((value) => {
                return (
                    <div className="event-card" key={value.id} onClick={()=>goToEvent(value)}>
                        <h2>{value.name}</h2>
                        <img src={value.photo_url}></img>
                        <p>{value.description}</p>
                        <p><b>Date of Event:</b> {value.date}</p>
                        <p><b>Venue:</b> {value.venue.name}</p>
                        <p><b>Event Type:</b> {value.type}</p>
                        
                        <p><b>ASL Interpreter:</b> {value.asl_interpreter?"yes":"no"}</p>
                       
                        <p><b>Alcohol Served:</b> {value.alcohol_served?"yes":"no"}</p>
                        
                        <br />
                    </div>
                )
            })}

        </div>
    )
}