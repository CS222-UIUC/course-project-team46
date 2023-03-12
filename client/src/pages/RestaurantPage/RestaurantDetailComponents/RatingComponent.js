import React, { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";

function RatingComponent(props) {
    const [rating, setRating] = useState(props.initialRating);

    useEffect(() => {
        // Update back-end rating information
        submitRating(rating);
    }, [rating]);

    const onChange = (event, newRating) => {
        setRating(newRating);
    };

    const submitRating = (newRating) => {
        // Sending new scores to the back end
        // ...
    };

    return (
        <Box
            sx={{
                "& > legend": { fontSize: "14px", fontWeight: "bold", mb: 0 },
                "& > .MuiRating-root": { fontSize: "24px" },
            }}
        >
        <Rating
            name="rating"
            value={rating}
            onChange={onChange}
            precision={0.5}
        />
        </Box>
    );
}

export default RatingComponent;
