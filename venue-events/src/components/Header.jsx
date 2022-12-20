import Nav from './Nav'

export default function Header () {
    return (
        <div className="header-container">
            <div className="header">
                <h1>tick-it live events</h1>
            </div>
            <div>
                <Nav />
            </div>
        </div>
    )
}