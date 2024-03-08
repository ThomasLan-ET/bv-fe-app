import { useEffect, useState } from 'react'
import bravoLogo from './assets/bravova.png';
import './App.css'


const API:string = import.meta.env.VITE_API || '';

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(API)
      .then((res) => res.text())
      .then((res) => setMessage(res))
      .catch((res) => setMessage(res))
  }, []);

  return (
    <>
      <div>
        <a href="https://www.superbravo.com.do/" target="_blank">
          <img src={bravoLogo} className="logo" alt="Bravo logo" />
        </a>
      </div>
      <h1>Supermercados Bravo</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Response: <code> { message } </code>
        </p>
      </div>
      <p className="read-the-docs">
        Click al logo para saber mas
      </p>
    </>
  )
}

export default App
