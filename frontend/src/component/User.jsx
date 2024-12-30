import {useState, useEffect} from 'react';
import TableUser from './TableUser';


function User() {
    const [userData, setData] = useState('');

    useEffect(() => {
        fetch ('http://localhost:8080/users')
        .then((res) => res.json())
        .then((data) =>setData(data.userData))
        .catch((err) => console.error("Error fetching Data :", err));
    }, [])
    return (
        // console.log(userData)
        <>
            {userData ? ( <TableUser userData={userData}/>) : (<p>...</p>) }
        </>
       
    )
}

export default User;