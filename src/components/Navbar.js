import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Navbar() {

    let location = useLocation();
    const navigate = useNavigate()

    React.useEffect(() => {
        //   console.log(location.pathname)
    }, [location]);

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-dar navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/notes">iNotebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/notes">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} aria-current="page" to="/about">About</Link>
                            </li>
                        </ul>
                        {!localStorage.getItem('token') ? <form className="d-flex" role="search">
                            <Link className="btn btn-success" type="button" to='/'>Log In</Link>
                            <Link className="btn btn-primary mx-2" type="button" to={'/signup'}>Sign Up</Link>
                        </form> : <button className="btn btn-success" type="button" to='/' onClick={handleLogout}>Log Out</button>
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}
