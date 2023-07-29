import React from 'react'
import { useSelector } from "react-redux"
import "./Navbar.scss"
import useScrollActive from '../../hooks/useScrollActive';
import { routeConfig } from '../../config/routes';
import { Link, useLocation, useNavigate } from "react-router-dom"
import newRequest from '../../utils/newRequest';

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useSelector(state => state.user);
  const [active, setActive] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  }

  useScrollActive(active, isActive);

  const { pathname } = useLocation();

  const handleLogout = async () => {
    try {
      await newRequest.post('/auth/logout')
      localStorage.setItem('user', null)
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }

  const navigateToRegister = () => {
    navigate(routeConfig.register)
  }

  const navigateToLogin = () => {
    navigate(routeConfig.login)
  }

  return (
    <div className={active || pathname !== '/' ? "navbar active" : "navbar"}>
      <div className="navbarContainer">
        <div className="fiverLogo">
          <Link to="/" className='link'>
            <span className="fiverText">fiverr</span>
          </Link>
          <span className="fiverDot">.</span>
        </div>
        <div className="navLinks">
          {/* <span>Fiverr Business</span> */}
          <span>Explore</span>
          <span>English</span>
          {!user && <span onClick={navigateToLogin}>Sign in</span>}
          {/* {!user?.isSeller && <span>Become a Seller</span>} */}
          {!user && <button onClick={navigateToRegister}>Join</button>}
          {user && (
            <div className='user' onClick={() => setOpen(!open)}>
              <img src={user.img} alt="" />
              <span>{user?.username}</span>
              {open && (
                <div className='options'>
                  {user.isSeller && (
                    <>
                      <Link className='link' to={routeConfig.myGigs}>Gigs</Link>
                      <Link className='link' to={routeConfig.add}>Add New Gig</Link>
                    </>
                  )}
                  <Link className='link' to={routeConfig.orders}>Orders</Link>
                  <Link className='link' to={routeConfig.messages}>Messages</Link>
                  <Link className='link' onClick={handleLogout}>Logout</Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {
        (active || pathname !== '/') && (
          <>
            <hr />
            <div className="menu">
              <Link className="link menuLink" to="/">
                Graphics & Design
              </Link>
              <Link className="link menuLink" to="/">
                Video & Animation
              </Link>
              <Link className="link menuLink" to="/">
                Writing & Translation
              </Link>
              <Link className="link menuLink" to="/">
                AI Services
              </Link>
              <Link className="link menuLink" to="/">
                Digital Marketing
              </Link>
              <Link className="link menuLink" to="/">
                Music & Audio
              </Link>
              <Link className="link menuLink" to="/">
                Programming & Tech
              </Link>
              <Link className="link menuLink" to="/">
                Business
              </Link>
              <Link className="link menuLink" to="/">
                Lifestyle
              </Link>
            </div>
            <hr />
          </>
        )
      }
    </div>
  )
}

export default Navbar
