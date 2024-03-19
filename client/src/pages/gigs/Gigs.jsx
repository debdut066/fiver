import React from 'react'
import { useLocation } from 'react-router-dom'
import GigCard from '../../components/gigCard'
import "./Gigs.scss"
import newRequest from '../../utils/newRequest'
import { useQuery } from "@tanstack/react-query"
import HomeLoader from "../../components/homeLoader/homeLoader"

const Gigs = () => {
  const [sort, setSort] = React.useState("sales")
  const [open, setOpen] = React.useState(false);
  const minRef = React.useRef(null);
  const maxRef = React.useRef(null);

  const { search } = useLocation();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
      newRequest
        .get(
          `/gigs?${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
        )
        .then((res) => {
          return res.data;
        }),
  });

  // React.useEffect(() => {
  //   refetch();
  // }, [sort])

  const reSort = (type) => {
    setSort(type)
    setOpen(false)
  }

  const apply = () => {
    refetch();
  };

  return (
    <div className='gigs'>
      <div className='container'>
        <span className='breadcrumbs'>
          fiverr / Graphics & Design
        </span>
        <h1>AI Artists</h1>
        <p>Explore the boundaries of art and technology with fiverrs AI artists</p>
        <div className="menu">
          <div className='left'>
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder='min' />
            <input ref={maxRef} type="number" placeholder='max' />
            <button onClick={apply}>Apply</button>
          </div>
          <div className='right'>
            <span className='sortBy'>Sort by</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
                <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {isLoading
            ? <HomeLoader />
            : error
              ? "Something went wrong!"
              : data.map((gig) => <GigCard key={gig._id} item={gig} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Gigs