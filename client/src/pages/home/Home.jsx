import React from 'react'
import "./Home.scss"
import TrustedBy from '../../components/trustedBy'
import Featured from '../../components/featured'
import Slide from '../../components/slide'
import Feature from '../../components/feature'
import Explore from '../../components/Explore'
import CategoryCard from '../../components/categoryCard/CategoryCard'
import ProjectCard from "../../components/projectCard/ProjectCard"
import { cards, projects } from "../../data"

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <Slide
        slidesToShow={5}
        arrowsScroll={5}
      >
        {cards.map((card) => (
          <CategoryCard key={card.id} card={card} />
        ))}
      </Slide>
      <Feature />
      <Explore />
      <Slide
        slidesToShow={4}
        arrowsScroll={4}
      >
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  )
}

export default Home