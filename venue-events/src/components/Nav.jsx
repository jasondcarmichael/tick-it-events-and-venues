import { Link } from 'react-router-dom'
import '../App.css'

export default function Nav () {
    return (
        <div className="nav">
            <Link className="nav-home"to ="/">Home</Link>
            <br />
            <div className="nav-bar">
            <Link className="nav-venues"to="/venues">Venues</Link>
            <Link className="nav-events"to="/events">Events</Link>
            </div>
        </div>
    )
}