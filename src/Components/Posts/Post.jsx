import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    const {id, title} = post;
    
    return (
        <div className='mb-2 rounded-md border border-green-500'>
            <h5>{title}</h5>
            <Link to={`/posts/${id}`}>
            <button>Show Details</button>
            </Link>
        </div>
    );
};

export default Post;