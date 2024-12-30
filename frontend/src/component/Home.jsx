import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
// import './home.css';

function Home () {
    const [homeData, setHomeData] = useState('');

    useEffect(() => {
        fetch('http://localhost:8080/')
        .then((res) => res.json())
        .then((data) =>setHomeData(data.homeData))
        .catch((err) => console.error("Error fetching data: " + err));
    },[]);

    return (
        <>
        <div className="bg-image"></div>
        <div className="Home-Container">
            <nav>
                <ul>
                  <li> <Link to ="/users">User Data</Link>  </li>
                </ul>
            </nav>
            <input className="Search-Bar" placeholder="Search"></input>
            <h3> This Home Data From Backend : {homeData}</h3>
            <div className="Home-Content">
                <div className="Content-News">
                    <img src="" alt="" />
                    <div className="Content-Title"></div>
                    <div className="Content-Description"></div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Home;