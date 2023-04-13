import React , {useState} from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState("")
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to="/"> <h3 className="navbar-brand"> E-commerce</h3></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/"> <p className="nav-link active" aria-current="page">Home</p> </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about"> <p className="nav-link active" aria-current="page">About</p> </Link>
                            </li>
                           
                        </ul>
                        <form className="d-flex " role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setSearch(e.target.value)} />
                            <button className="btn btn-outline-success me-2" type="submit" >Search</button>
                            <button className="btn btn-outline-success " type="submit" onClick={()=>navigate("/login")}>Login</button>

                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar