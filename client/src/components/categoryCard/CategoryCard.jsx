import React from 'react'
import "./CategoryCard.scss"
import { Link } from 'react-router-dom'

const CategoryCard = ({ item }) => {
    return (
        <Link to="/gigs ">
            <div className='CategoryCard'>
                <img src={item.img} alt="" />
                <span className='desc'>{item.desc}</span>
                <span className='title'>{item.title}</span>
            </div>
        </Link>
    )
}

export default CategoryCard