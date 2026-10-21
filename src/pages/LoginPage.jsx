import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO - Plan: POST email, passwd to backend endpoint
    fetch(`http://localhost:3000/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
    .then(console.log)
    .catch(console.warn)
  }
  return (
    <div className="card narrow">
      <h1>Log in</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" name="email" autoComplete="email" required
          onChange={(e)=>setEmail(e.target.value)} />
        </label>
        <label>
          Password
          <input type="password" name="password" autoComplete="current-password" required
          onChange={(e)=>setPassword(e.target.value)} />
        </label>
        <button type="submit" className="primary">Log in</button>
      </form>
      <p className="muted"><Link to="/forgot-password">Forgot your password?</Link></p>
    </div>
  )
}
