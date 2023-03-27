import React from 'react'
import "./Navbar.scss"
// import { Link } from "react-router-dom"

const Navbar = () => {

  const [active, setActive] = React.useState(false);
  
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  }

  React.useEffect(()=>{
    window.addEventListener('scroll',isActive);

    return () => {
      window.removeEventListener('scroll',isActive);
    }
  },[])

  const currentUser = {
    id : 1,
    username : "John Snow",
    isSeller : true
  }

  return (
    <div className={active ? "navbar active" : "navbar"}>
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
                {!currentUser?.isSeller && <span>Become a Seller</span>}
                {!currentUser && <button>Join</button>}
                {currentUser && (
                  <div className='user'>
                    <img src="" alt=""/>
                    <span>{currentUser?.username}</span>
                    <div className='options'>
                      {currentUser?.isSeller && (
                        <>
                          <span>Gigs</span>
                          <span>Add New Gig</span>
                        </>
                      )}
                      <span>Orders</span>
                      <span>Messages</span>
                      <span>Logout</span>
                    </div>
                  </div>
                )}
            </div>
        </div>
        {
          active && (
            <>
              <hr/>
              <div className="menu">
                <span>Test</span>
                <span>Test2</span>
              </div>
            </>
          )
        }
    </div>
  )
}

export default Navbar
