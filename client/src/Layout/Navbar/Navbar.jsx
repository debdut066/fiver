import React from 'react'
import "./Navbar.scss"
// import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbarContainer">
            <div className="fiverLogo">
                {/* <Link to="/"> */}
                  <span className="fiverText">fiverr</span>
                {/* </Link> */}
                <span className="fiverDot">.</span>
            </div>
            <div className="navLinks">
                <span>Fiverr Business</span>
                <span>Explore</span>
                <span>English</span>
                <span>Sign in</span>
                <span>Become a Seller</span>
                <button>Join</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar