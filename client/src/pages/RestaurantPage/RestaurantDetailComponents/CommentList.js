import React, { useState, useEffect } from 'react';

function CommentList(props) {
    const { restaurantId } = props;
    const [comments, setComments] = useState([]);

    useEffect(() => {
        // Send a request for a list of comments
        fetch(`/api/comments?restaurantId=${restaurantId}`)
        .then((response) => response.json())
        .then((data) => setComments(data.comments))
        .catch((error) => console.error(error));
    }, [restaurantId]);

    return (
        <div>
            <h2>Comments</h2>
            {comments.map((comment) => (
                <div key={comment.id}>
                <p>{comment.text}</p>
                <p>By {comment.author} at {comment.date}</p>
                </div>
            ))}
        </div>
    );
}

export default CommentList;
