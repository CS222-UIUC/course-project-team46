import React, { useState, useEffect } from 'react';

function RestaurantIntroduction(props) {
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    const { restaurantId } = props;

    useEffect(() => {
        async function fetchRestaurantInfo() {
            try {
                const response = await fetch(`/api/restaurant/${restaurantId}`);
                const data = await response.json();
                setRestaurantInfo(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchRestaurantInfo();
    }, [restaurantId]);

    if (!restaurantInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div className="restaurant-info">
        <h1>{restaurantInfo.name}</h1>
        <p>Address: {restaurantInfo.address}</p>
        <p>Cuisine: {restaurantInfo.cuisine}</p>
        <p>Menu: {restaurantInfo.menu}</p>
        </div>
    );
}

export default RestaurantIntroduction;
