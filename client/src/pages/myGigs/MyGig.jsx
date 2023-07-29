import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import Loaders from '../../components/loader/Loaders'
import newRequest from '../../utils/newRequest'
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import "./MyGig.scss"

const MyGig = () => {
  const currentUser = useSelector(state => state.user.user)
  const queryClient = useQueryClient()

  const { isLoading, error, data } = useQuery({
    queryKey: ["myGigs"],
    queryFn: () =>
      newRequest.get(`/gigs?userId=${currentUser.id}`).then((res) => {
        return res.data;
      }),
  });

  console.log(data)

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/gigs/${id}`, id);
    },
    onSuccess:()=>{
      queryClient.invalidateQueries(["myGigs"])
    }
  });

  const handleDelete = (id) => {
    mutation.mutate(id)
  }

  return (
    <div className='myGigs'>
      {isLoading ? 
        <Loaders/>
        : error ? 
        "something went wrong"
        : 
        <div className="container">
        <div className="title">
          <h1>{currentUser.isSeller ? "Gigs" : "Orders"}</h1>
          {currentUser.isSeller && (
            <Link to="/add">
              <button>Add new Gig</button>
            </Link>
          )}
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Orders</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Stunning concept art</td>
            <td>59.<sup>99</sup></td>
            <td>13</td>
            <td>
              <img className="delete" src="./img/delete.png" alt="" onClick={handleDelete}/>
            </td>
          </tr>
        </table>
      </div>
      }
    </div>
  )
}

export default MyGig