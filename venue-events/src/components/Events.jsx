import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Events () {

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

    return !events? null: (
        <div className="events">
            {events.map((value) => {
                return (
                    <div key={value.id}>
                        <h3>Venue: {value.venue.name}</h3>
                        <h3>Event Name: {value.name}</h3>
                        <h3>Event Type: {value.type}</h3>
                        <p>Event Description: {value.description}</p>
                        <p>ASL Interpreter: {value.asl_interpreter?"yes":"no"}</p>
                        <p>Date of Event: {value.date}</p>
                        <p>Alcohol Served: {value.alcohol_served?"yes":"no"}</p>
                        <img src={value.photo_url}></img>
                        <br />
                    </div>
                )
            })}

        </div>
    )
}