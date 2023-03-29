import React from 'react'
import "./Home.scss"
import TrustedBy from '../../components/trustedBy'
import Featured from '../../components/featured'
import Slide from '../../components/slide'
import { cards } from "../../data"

const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
      <Slide cards={cards} slidesToShow={5} arrowsScroll={5} />
    </div>
  )
}

export default Home