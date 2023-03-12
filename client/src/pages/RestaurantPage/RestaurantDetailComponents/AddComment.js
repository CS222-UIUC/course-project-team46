import axios from 'axios';
import React, { useState } from 'react';

function AddComment(props) {
    const [comment, setComment] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Sending a POST request
        axios.post('/api/comments', { comment })
            .then((response) => {
                console.log(response);
                setComment('');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Add Comment:
                <textarea value={comment} onChange={handleCommentChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default AddComment;
