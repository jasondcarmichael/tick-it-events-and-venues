import Nav from './Nav'

export default function Header () {
    return (
        <div className="header-container">
            <div className="header">
                <h1><em>tick-it live events</em></h1>
            </div>
            <div>
                <Nav />
            </div>
        </div>
    )
}