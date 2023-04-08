import React from 'react'
import "./Login.scss"

const Login = () => {
  const [error, setError] = React.useState(null)

  return (
    <div className='login'>
      <form >
        <h1>Sign in</h1>
        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder='johndoe'
          onChange={() => { }}
        />
        <label>Password</label>
        <input
          name="password"
          type="password"
          onChange={() => { }}
        />
      </form>
      <button type='submit'>Login</button>
      {error && <span>{error}</span>}
    </div>
  )
}

export default Login