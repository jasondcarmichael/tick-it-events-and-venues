import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Events () {

    const [events, setEvents] = useState([])

    const getData = async () => {
        await axios.get('http://localhost:3001/api/events')
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

    return (
        <div className="events">
            {events.map((value) => {
                return (
                    <div key={value.id}>
                        <h3>Venue: {value.venue}</h3>
                        <h3>Event Name: {value.name}</h3>
                        <h3>Event Type: {value.type}</h3>
                        <p>Event Description: {value.description}</p>
                        <p>ASL Interpreter: {value.asl_interpreter}</p>
                        <p>Date of Event: {value.date}</p>
                        <p>Alcohol Servered: {value.alcohol_served}</p>
                        <p>Photo: {value.photo_url}</p>
                        <br />
                    </div> 
                )
            })}

        </div>
    )
}