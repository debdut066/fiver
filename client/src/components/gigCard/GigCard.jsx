import React from 'react'
import { AiFillStar, AiFillHeart } from "react-icons/ai"
import { Link } from 'react-router-dom'
import "./GigCard.scss"

const GigCard = ({ item }) => {
    return (
        <Link to={`/gig/${item._id}`} className="link">
            <div className="gigCard">
                <img src={item.cover} alt="" />
                <div className="info">
                    <div className="user">
                        <img src={item.userId.img || "/img/noavatar.jpg"} alt="" />
                        <span>{item.userId.username}</span>
                    </div>
                    <p>{item.desc}</p>
                    <div className="star">
                        <AiFillStar />
                        {!isNaN(item.totalStars / item.starNumber) &&
                            Math.round(item.totalStars / item.starNumber)}
                    </div>
                </div>
                <hr />
                <div className="detail">
                    <AiFillHeart />
                    <div className="price">
                        <span>STARTING AT</span>
                        <h2>
                            ${item.price}
                        </h2>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default GigCard