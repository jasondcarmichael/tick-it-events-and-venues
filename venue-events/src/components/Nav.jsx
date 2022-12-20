import { Link } from 'react-router-dom'
import '../App.css'

export default function Nav () {
    return (
        <div className="nav">
            <div className="nav-bar">
            <Link className="nav-home"to ="/">Home</Link>
            {/* <Link className="nav-venues"to="/venues">Venues</Link> */}
            <Link className="nav-events"to="/events">Events</Link>
            </div>
        </div>
    )
}