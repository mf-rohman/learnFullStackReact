// import { useState, useEffect } from 'react'
import Home from './component/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import User from './component/User';
import ActionUpdateUser from './component/ActionUpdateUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/users" element = {<User />} />
        <Route path = "/users-update" element = {<ActionUpdateUser />} />
      </Routes>
    </Router>
  )



}

export default App
// const [message, setMessage] = useState('');

// useEffect(() => {
//   fetch ('http://localhost:3000/backend')
//   .then((res) => res.json())
//   .then((data) =>setMessage (data.message))
//   .catch((err) => console.error("Error fetching Data :", err));
// },[]);
// return (
//   <div>
//     <h1>Message From Backend :</h1>
//     <p>{message}</p>
//   </div>
// )
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }


