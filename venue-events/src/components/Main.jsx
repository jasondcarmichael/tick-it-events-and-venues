import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Home from './Home'
import Events from './Events'
import Venues from './Venues'
import VenueDetails from './VenueDetails'

export default function Main () {

    const [venues, setVenues] = useState([])

    const getData = async () => {
        await axios.get('http://localhost:8000/venues/')
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
        <div>
            <Routes>
                <Route path = "/" element = {<Home />} />
                <Route path = "/venues/" element = {<Venues venues={venues}/>} />
                <Route path = "/venues/:id" element = {<VenueDetails venues={venues} />} />
                <Route path = "/events" element = {<Events />} />
            </Routes>
        </div>
    )
}