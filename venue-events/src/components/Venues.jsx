import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Venues (props) {

    let navigate = useNavigate()
    const showVenueEvents = (venue) => {
        navigate(`${venue.id}`)
    }

    return (
        <div className="venues">
            {props.venues.map((venue) => {
                return (
                    <div key={venue.id} onClick={() => showVenueEvents (venue)}>
                        <h3>Venue Name: {venue.name}</h3>
                        <p>Address: {venue.address}</p>
                        <p>Description: {venue.description}</p>
                        <p>Onsite Parking: {venue.onsite_parking?"yes":"no"}</p>
                        <p>Capacity: {venue.capacity}</p>
                        <img src={venue.photo_url}></img>
                        <br />
                    </div> 
                )
            })}
        </div>
    )
}