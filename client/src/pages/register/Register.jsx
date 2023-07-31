import React from 'react'
import { routeConfig } from '../../config/routes';
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader/Loader"
import Error from '../../components/error/Error';
import { userRegister } from '../../store/actions/userAction';
import "./Register.scss"

const Register = () => {
  const { success, error, loading } = useSelector(state => state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  })

  React.useEffect(()=>{
    if(success){
      navigate(routeConfig.home)
    }
  },[success])

  const handleChange = (e) => {
    setUser(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(userRegister(user));
  }

  return (
    <div className='register'>
      {error && <Error message={error}/>}
      <form onSubmit={handleSubmit}>
        <h1>Continue with your email</h1>
        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder='username'
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          name="email"
          type="email"
          placeholder='name@email.com'
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          name="password"
          type="password"
          placeholder='password'
          onChange={handleChange}
        />
        <button type='submit'>{
          loading ? <Loader/> : "Register"
        }</button>
      </form>
    </div>
  )
}

export default Register