import React from 'react'
import GigCard from '../../components/gigCard'
import "./Gigs.scss"
import { gigs } from "../../data"


const Gigs = () => {
  return (
    <div className='gigs'>
      <div className='container'>
        {/* <span className='breadcrumbs'>
          fiverr / Graphics & Design
        </span>
        <h1>AI Artists</h1>
        <p>Explore the boundaries of art and technology with fiverr's AI artists</p> */}
        <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gigs