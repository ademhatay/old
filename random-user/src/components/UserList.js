import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SingleUser from './SingleUser';

const UserList = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await axios.get('https://randomuser.me/api/?results=10');
        setUsers(response.data.results);
    }
    useEffect(() => {
        getUsers();
    }, [])
  return (
    <div>
        <ul className='container flex flex-col space-y-5'>
            {users.map(user => (
                <li className='w-ful'>
                    <SingleUser user={user} />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default UserList