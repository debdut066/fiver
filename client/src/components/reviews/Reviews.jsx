import React from 'react'
import "./Reviews.scss"
import newRequest from '../../utils/newRequest'
import { useQuery } from "@tanstack/react-query"
import Review from '../review/Review'

const Reviews = ({ gigId }) => {

    const { loading , error , data } = useQuery({
        queryKey : ["reviews"],
        queryFn : () => {
            newRequest.get(`/reviews/${gigId}`.then(res => {
                return res.data;
            }))
        }
    })    


  return (
    <div className="reviews">
        <h2>Reviews</h2>
        {loading 
            ? "loading"
            : error 
            ? "Something went wrong" 
            : data.map((review) => <Review key={review._id} review={review}/>)
        }
    </div>
  )
}

export default Reviews