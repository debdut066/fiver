import React from 'react'
import "./Register.scss"
import { useNavigate } from "react-router-dom"
// import { upload } from '../../utils/upload';
import newRequest from "../../utils/newRequest"

const Register = () => {
  const navigate = useNavigate();
  const [file, setFile] = React.useState('http://storage.googleapis.com/dexbros_files/7a8ffc50-ec78-11ec-b0c6-9578be74f170-blank-profile-picture-973460_640.webp');
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // let url = await upload(file);
    // console.log(url)
    try {
      await newRequest.post('/auth/register', {
        ...user,
        img: file
      })
      navigate('/')
    } catch (error) {
      console.log(error);
    }
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
          <label>Password</label>
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
            name="country"
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
          <label>Description</label>
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