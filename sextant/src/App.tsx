// import { useState } from 'react'
import './App.css'

const Banner = () => {
  return (
    <div className="banner">
      <h1>Welcome to Our App</h1>
      <p>Your one-stop solution for all your needs.</p>
    </div>
  )
}

function App() {
  return (
    <header className="App-header">
      <Banner />
    </header>
  )
}

export default App
