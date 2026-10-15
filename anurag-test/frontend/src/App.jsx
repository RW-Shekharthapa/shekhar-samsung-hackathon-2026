import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [user, setUser] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim() || !password) {
      setError('Please enter both email and password.')
      return
    }
    setError('')
    // Preview only: no real authentication.
    setUser(email.trim())
  }

  if (user) {
    return (
      <main className="login-page">
        <div className="login-card">
          <h1>Welcome</h1>
          <p className="login-sub">Signed in as {user} (preview only)</p>
          <button type="button" className="login-btn" onClick={() => setUser(null)}>
            Sign out
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="login-page">
      <form className="login-card" onSubmit={handleSubmit} noValidate>
        <h1>Sign in</h1>
        <p className="login-sub">Welcome back! Please enter your details.</p>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="login-error" role="alert">{error}</p>}

        <button type="submit" className="login-btn">Sign in</button>
      </form>
    </main>
  )
}

export default App
