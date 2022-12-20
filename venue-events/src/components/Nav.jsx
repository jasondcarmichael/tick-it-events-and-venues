import { Link } from 'react-router-dom'
import '../App.css'

export default function Nav () {
    return (
        <div className="nav">
            <div className="nav-bar">
            <Link className="nav-home"to ="/">HOME</Link>
            <Link className="nav-events"to="/events">EVENTS</Link>
            </div>
        </div>
    )
}