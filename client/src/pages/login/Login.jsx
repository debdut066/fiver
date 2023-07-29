import React from 'react'
import { routeConfig } from '../../config/routes';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import Loader from "../../components/loader/Loader"
import { userLogin } from '../../store/actions/userAction';
import Error from '../../components/error/Error';

import "./Login.scss"

const Login = () => {
  const { success, error, loading } = useSelector(state => state.user)
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch()

  React.useEffect(()=>{
    if(success){
      navigate(routeConfig.home)
    }
  },[success])

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(userLogin({
      username : username,
      password : password
    }));
  }

  return (
    <div className='login'>
      {error && <Error message={error}/>}
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder='username'
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          name="password"
          type="password"
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>{
          loading ? <Loader/> : "Login"
        }</button>
      </form>
    </div>
  )
}

export default Login