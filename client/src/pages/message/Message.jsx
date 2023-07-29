import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import newRequest from '../../utils/newRequest'
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { Link } from "react-router-dom"
import Loaders from '../../components/loader/Loaders'
import Error from "../../components/error/Error"
import "./Message.scss"

const Message = () => {
  const { id } = useParams()
  const currentUser = useSelector(state => state.user.user)
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      newRequest
        .get(
          `/messages/${id}`
        )
        .then((res) => {
          return res.data;
        }),
  });

  const mutation = useMutation({
    mutationFn : (message) => {
      return newRequest.post(`/messages`,message);
    },
    onSuccess : () => {
      queryClient.invalidateQueries(["messages"])
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      conversationId : id,
      desc : e.target[0].value
    });
    e.target[0].value = "";
  }

  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages">Messages</Link> {'/'} John Doe {'/'}
        </span>
        { isLoading ? (
          <Loaders/> ) : error ? (
            <Error/>
          ) : (
            <div className="messages">
              {data.map((m) => (
                <div className={m.userId === currentUser._id ? "owner item" : "item"} key={m._id}>
                  <img
                    src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <p>{m.desc}</p>
                </div>
              ))}
            </div>
          )}
        <hr />
        <form className="write" onSubmit={handleSubmit}>
          <textarea type="text" placeholder="write a message" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Message