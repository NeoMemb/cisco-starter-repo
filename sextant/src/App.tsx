import { useState, useEffect } from 'react'
import { Banner } from '../components/Banner.tsx'
import { Ip } from '../components/MyIP.tsx'
import './App.css'


function getAPI() {
  
}

function App() {
  const [iP, setIP] = useState("");
  // const getAPI = () => {
  //   try {
  //   fetch('https://api64.ipify.org?format=json')
  //   .then(response => response.json())
  //   .then(data => { console.log(data.ip); setIP(data.ip);})
  // }
  // catch (error) {
  //   console.error("Error fetching API:", error);
  // }
  // }
  
  // useEffect(
  //   () => { getAPI()},
  //    []
  // )
  useEffect(
    () => {
      fetch('https://api64.ipify.org?format=json')
    .then(response => response.json())
    .then(data => { setIP(data.ip); console.log(data.ip);})
    .catch(error => { setIP(error.message); });
    },
     []
  )
  return (
    <>
      <header className="App-header">
        <Banner>
          <h1>Welcome to Our App</h1>
          <h3>Your one-stop solution for all your needs.</h3>
        </Banner>
      </header>
      <Ip ipAddress={iP} className="ip-address" />
    </>
  )
}

export default App
