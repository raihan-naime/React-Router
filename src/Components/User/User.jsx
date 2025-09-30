import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const {id, name, email, phone} = user
    return (
        <div className=' border mb-2 rounded-md'>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p><small>Phone: {phone}</small></p>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;