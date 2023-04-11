import React from 'react'
import "./Register.scss"
import { upload } from '../../utils/upload';

const Register = () => {
  const [file, setFile] = React.useState(null);
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
    phoneNumber: ""
  })

  const handleChange = (e) => {
    setUser(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleSeller = (e) => {
    setUser(prev => {
      return { ...prev, isSeller: e.target.checked }
    })
  }

  const handleSubmit = () => {

  }

  return (
    <div className='register'>
      <form onSubmit={handleSubmit}>
        <div className='left'>
          <h1>Create a new account</h1>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder='enter username'
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder='enter email'
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            type="password"
            name="password"
            placeholder='enter password'
            onChange={handleChange}
          />
          <label>profile Picture</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label>Country</label>
          <input
            type="text"
            name="password"
            placeholder='enter password'
            onChange={handleChange}
          />
          <button>Register</button>
        </div>
        <div className='right'>
          <h1>I want to become a seller</h1>
          <div className='toggle'>
            <label>Activate the seller account</label>
            <label className='switch'>
              <input type='checkbox' onChange={handleSeller} />
              <span className='slider round'></span>
            </label>
          </div>
          <label>Phone Number</label>
          <input
            type="number"
            name="phoneNumber"
            placeholder='enter phone Number'
            onChange={handleChange}
          />
          <label>Country</label>
          <textarea
            type="text"
            name="descp"
            placeholder='a short description of yourself'
            cols="30"
            rows="10"
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  )
}

export default Register