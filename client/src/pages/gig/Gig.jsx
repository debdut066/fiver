import React from "react";
import "./Gig.scss";
import { Link } from "react-router-dom";
import Error from "../../components/error/Error"
// import { Slider } from "infinite-react-carousel/lib";
import newRequest from "../../utils/newRequest";
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom";
import HomeLoader from "../../components/homeLoader/homeLoader";
import Reviews from "../../components/reviews/Reviews";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function Gig() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      newRequest
        .get(
          `/gigs/single/${id}`,
        )
        .then((res) => {
          return res.data;
        }),
  });

  return (
    <div className="gig">
      {isLoading ? (
        <HomeLoader />
      ) : error ? (
        <Error />
      ) : (
        <div className="container">
          <div className="left">
            <span className="breadcrumbs">Graphics & Design / AI Design</span>
            <h1>{data.title}</h1>
            <div className="user">
              <img
                className="pp"
                src={data.userId.img || "/img/noavatar.jpg"}
                alt=""
              />
              <span>{data.userId.username}</span>
              {!isNaN(data.totalStars / data.starNumber) && (
                <div className="stars">
                  {Array(Math.round(data.totalStars / data.starNumber))
                    .fill()
                    .map((item, i) => (
                      <img src="/img/star.png" alt="" key={i} />
                    ))}
                  <span>{Math.round(data.totalStars / data.starNumber)}</span>
                </div>
              )}
            </div>
            {/* <Slider slidesToShow={1} arrowsScroll={1} className="slider">
              {data.images.map(image => (
                <img
                  key={image}
                  src={image}
                  alt=""
                />
              ))}
            </Slider> */}
            <Carousel className="border border-cyan-200">
              <CarouselContent className="-ml-1">
                {data.images.map((image, idx) => (
                  <CarouselItem key={idx} className="pl-1 sm:basis-1 md:basis-1/4 lg:basis-1/5">
                    <img
                      key={image}
                      src={image}
                      alt=""
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <h2>About This Gig</h2>
            <p>{data.desc}</p>
            <div className="seller">
              <h2>About The Seller</h2>
              <div className="user">
                <img src={data.userId.img || "/img/noavatar.jpg"} alt="" />
                <div className="info">
                  <span>{data.userId.username}</span>
                  {!isNaN(data.totalStars / data.starNumber) && (
                    <div className="stars">
                      {Array(Math.round(data.totalStars / data.starNumber))
                        .fill()
                        .map((item, i) => (
                          <img src="/img/star.png" alt="" key={i} />
                        ))}
                      <span>
                        {Math.round(data.totalStars / data.starNumber)}
                      </span>
                    </div>
                  )}
                  <button>Contact Me</button>
                </div>
              </div>
              <div className="box">
                <div className="items">
                  <div className="item">
                    <span className="title">From</span>
                    <span className="desc">{data.userId.country}</span>
                  </div>
                  <div className="item">
                    <span className="title">Member since</span>
                    <span className="desc">Aug 2022</span>
                  </div>
                  <div className="item">
                    <span className="title">Avg. response time</span>
                    <span className="desc">4 hours</span>
                  </div>
                  <div className="item">
                    <span className="title">Last delivery</span>
                    <span className="desc">1 day</span>
                  </div>
                  <div className="item">
                    <span className="title">Languages</span>
                    <span className="desc">English</span>
                  </div>
                </div>
                <hr />
                <p>{data.userId.desc}</p>
              </div>
            </div>
            <Reviews gigId={id} />
          </div>
          <div className="right">
            <div className="price">
              <h3>{data.shortTitle}</h3>
              <h2>$ {data.price}</h2>
            </div>
            <p>{data.shortDesc}</p>
            <div className="details">
              <div className="item">
                <img src="/img/clock.png" alt="" />
                <span>{data.deliveryTime} Days Delivery</span>
              </div>
              <div className="item">
                <img src="/img/recycle.png" alt="" />
                <span>{data.revisionNumber} Revisions</span>
              </div>
            </div>
            <div className="features">
              {data.features.map(feature => (
                <div className="item" key={feature}>
                  <img src="/img/greencheck.png" alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Link to={`/pay/${id}`}>
              <button>Continue</button>
            </Link>
          </div>
        </div>
      )
      }
    </div>
  );
}

export default Gig;