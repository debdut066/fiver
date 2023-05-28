import React from 'react'
import { useNavigate } from "react-router-dom"
import "./Orders.scss"
import newRequest from '../../utils/newRequest'
import { useQuery } from "@tanstack/react-query"

const Orders = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"))
  const navigate = useNavigate();

  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      newRequest
        .get(
          `/orders`
        )
        .then((res) => {
          return res.data;
        }),
  });

  const handleContact = async (order) => {
    const buyerId = order.buyerId;
    const sellerId = order.sellerId;
    const Id = sellerId + buyerId;

    try {
      const res = await newRequest.get(`/conversations/single/${Id}`);
      console.log(res,"2")
      navigate(`/message/${res.data.id}`);
    } catch (err) {
      if (err.response.status === 404) {
        const res = await newRequest.post(`/conversations/`, {
          to: currentUser.seller ? buyerId : sellerId,
        });
        console.log(res,"1")
        navigate(`/message/${res.data.id}`);
      }
    }
  }

  return (
    <div className="orders">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <div className="container">
          <div className="title">
            <h1>Orders</h1>
          </div>
          <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Contact</th>
            </tr>
            {data.map((order) => (
              <tr key={order._id}>
                <td>
                  <img className="image" src={order.img} alt="" />
                </td>
                <td>{order.title}</td>
                <td>{order.price}</td>
                <td>
                  <img
                    className="message"
                    src="./img/message.png"
                    alt=""
                    onClick={() => handleContact(order)}
                  />
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  )
}

export default Orders