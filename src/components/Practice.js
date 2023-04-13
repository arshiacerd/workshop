import React, { useEffect, useState } from "react"
import PrimaryBtn from "./PrimaryBtn"
import Card from "./Card"
function Workshop() {

    const name = "arshia"
    var [val, setVal] = useState("React")
    const [profile, setProfile] = useState({
        name: " Arshia ",
        theme: {
            backgroundColor: "black",
            color: "white"
        }
    })
    // const hello = <p>this is tag </p>
    // const sum = 3+57;
    // const name = "Arshia"
    // const imagSrc = "https://cdn.pixabay.com/photo/2018/08/23/07/35/thunderstorm-3625405__480.jpg"
    // var num = 23;
    const handleClick = () => {
        val = val + 1 //0
        setVal("Angular")
        console.log(val)
    }
    // const person = {
    //     name: " Arshia ",
    //     theme: {
    //         backgroundColor: "black",
    //         color: "white"
    //     }
    // }
    const headStyle = {
        backgroundColor: "red", color: "white"
    }
    const changeName = () => {
        setProfile(old => ({
            ...old,
            name: "Ali"
        }))
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            {/* <h1>Hello this is my first component {5 + 5}</h1>
            <p>hello this is {name} {sum}</p>
            <img src={imagSrc} alt="" /> */}
            <h1 style={headStyle}>{val}</h1>
            <h3 >{profile.name}</h3>
            <PrimaryBtn val="clickMe" func={handleClick} />
            <PrimaryBtn val="second" func={changeName} />
            <Card />
            {/* <button onClick={handleClick}>Click me</button> */}
        </>

    )
}
export default Workshop