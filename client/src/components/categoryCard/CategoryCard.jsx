import React from 'react'
import "./CategoryCard.scss"
import { Link } from 'react-router-dom'

const CategoryCard = ({ card }) => {
    return (
        <Link to={`/categories/${card.category}/${card.subCategory}`}>
            <div className='CategoryCard'>
                <img src={card.img} alt="" />
                <span className='desc'>{card.desc}</span>
                <span className='title'>{card.title}</span>
            </div>
        </Link>
    )
}

export default CategoryCard