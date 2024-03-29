import React from 'react'
import { FaTwitter, FaFacebookSquare, FaLinkedin, FaRupeeSign } from "react-icons/fa"
import { FaSquarePinterest, FaSquareInstagram } from "react-icons/fa6"
import { RiEnglishInput } from "react-icons/ri"
import "./Footer.scss"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='top'>
                    <div className="item">
                        <h2>Categories</h2>
                        <span>Graphics & Design</span>
                        <span>Digital Marketing</span>
                        <span>Writing & Translation</span>
                        <span>Video & Animation</span>
                        <span>Music & Audio</span>
                        <span>Programming & Tech</span>
                        <span>Data</span>
                        <span>Business</span>
                        <span>Lifestyle</span>
                        <span>Photography</span>
                        <span>Sitemap</span>
                    </div>
                    <div className="item">
                        <h2>About</h2>
                        <span>Press & News</span>
                        <span>Partnerships</span>
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                        <span>Intellectual Property Claims</span>
                        <span>Investor Relations</span>
                    </div>
                    <div className="item">
                        <h2>Support</h2>
                        <span>Help & Support</span>
                        <span>Trust & Safety</span>
                        <span>Selling on Fiverr</span>
                        <span>Buying on Fiverr</span>
                    </div>
                    <div className="item">
                        <h2>Community</h2>
                        <span>Customer Success Stories</span>
                        <span>Community Hub</span>
                        <span>Forum</span>
                        <span>Events</span>
                        <span>Blog</span>
                        <span>Influencers</span>
                        <span>Affiliates</span>
                        <span>Podcast</span>
                        <span>Invite a Friend</span>
                        <span>Become a Seller</span>
                        <span>Community Standards</span>
                    </div>
                    <div className="item">
                        <h2>More From Fiverr</h2>
                        <span>Fiverr Business</span>
                        <span>Fiverr Pro</span>
                        <span>Fiverr Logo Maker</span>
                        <span>Fiverr Guides</span>
                        <span>Get Inspired</span>
                        <span>ClearVoice</span>
                        <span>Fiverr Workspace</span>
                        <span>Learn</span>
                        <span>Working Not Working</span>
                    </div>
                </div>
                <hr />
                <div className="bottom">
                    <div className="left">
                        <h1>fiverr</h1>
                        <span>© fiverr International Ltd. 2023</span>
                    </div>
                    <div className="right">
                        <div className="social">
                            <FaTwitter />
                            <FaFacebookSquare/>
                            <FaLinkedin/>
                            <FaSquarePinterest/>
                            <FaSquareInstagram />
                        </div>
                        <div className="link">
                            <RiEnglishInput />
                            <span>English</span>
                        </div>
                        <div className="link">
                            <FaRupeeSign/>
                            <span>INR</span>
                        </div>
                        <img src="/img/accessibility.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer