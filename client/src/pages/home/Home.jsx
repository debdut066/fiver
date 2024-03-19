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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Home = () => {
  const [api, setApi] = React.useState()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      {/* <Slide>
        {cards.map((card) => (
          <CategoryCard key={card.id} card={card} />
        ))}
      </Slide> */}
      <div className='flex bg-slate-500 w-full justify-center items-center'>
        <Carousel setApi={setApi} className="border border-cyan-200">
          <CarouselContent className="-ml-1">
            {cards.slice(0, 5).map((card) => (
              <CarouselItem key={card.id} className="pl-1 sm:basis-1 md:basis-1/4 lg:basis-1/5">
                <CategoryCard card={card} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
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