import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Events from './Events'
import Venues from './Venues'



export default function Main () {
    return (
        <div>
            <Routes>
                <Route path = "/" element = {<Home />} />
                <Route path = "/venues" element = {<Venues />} />
                <Route path = "/events" element = {<Events />} />
            </Routes>
        </div>
    )
}