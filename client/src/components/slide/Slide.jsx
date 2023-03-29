import React from 'react'
import "./Slide.scss"
import Slider from "infinite-react-carousel"
import CategoryCard from '../categoryCard/CategoryCard'

const Slide = ({ cards, slidesToShow, arrowsScroll }) => {
    return (
        <div className='slide'>
            <div className="container">
                <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
                    {cards.map((card) => (
                        <CategoryCard key={card.id} item={card} />
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Slide