import React, { use } from 'react';

const Users2 = ({userPromise}) => {
    const users = use(userPromise);
    console.log( 'users-2', users);
    
    return (
        <div>
            <h1>Users 2</h1>
        </div>
    );
};

export default Users2;