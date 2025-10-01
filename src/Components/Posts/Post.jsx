import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    const {id, title} = post;

    const navigate = useNavigate()

    const handleNavigate = () =>{
        navigate(`/posts/${id}`)
    }
    
    return (
        <div className='mb-2 rounded-md border border-green-500'>
            <h5>{title}</h5>
            <Link to={`/posts/${id}`}>
            <button>Show Details</button>
            </Link>
            <button onClick={handleNavigate}>Details of: {id}</button>
        </div>
    );
};

export default Post;