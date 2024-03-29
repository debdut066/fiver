import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Featured.scss"

const Featured = () => {
    const navigate = useNavigate();
    const [search, setSearch] = React.useState('');

    const handleSearch = () => {
        navigate(`gigs?search=${search}`)
    }

    return (
        <div className='featured'>
            <div className='container'>
                <div className='left'>
                    <h1>Find the perfect <span> freelance </span> services for your business</h1>
                    <div className='search'>
                        <div className='searchInput'>
                            <img src="./img/search.png" alt="" />
                            <input 
                                type="text" 
                                placeholder='Try "building mobile app"' 
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        <button onClick={handleSearch}>Search</button>
                    </div>
                    <div className='popular'>
                        <span>Popular:</span>
                        <button>Web Desgin</button>
                        <button>Wordpress</button>
                        <button>Logo Design</button>
                        <button>AI Services</button>
                    </div>
                </div>
                <div className='right'>
                    <img src="./img/man.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Featured