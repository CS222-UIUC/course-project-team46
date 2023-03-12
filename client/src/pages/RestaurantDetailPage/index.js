import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RestaurantDetailPage() {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    return (
        <div>
          <h1>Name</h1>
          <p>ID: {id}</p>
        </div>
      );
    /*
    useEffect(() => {
      async function fetchRestaurant() {
        // Fetch the restaurant data from the backend
        const response = await fetch(`/api/restaurant/${id}`);
        const data = await response.json();
        setRestaurant(data);
      }
  
      if (!restaurant) {
        // Fetch the restaurant data if it doesn't exist
        fetchRestaurant();
      }
    }, [id, restaurant]);
  
    function handleGoBack() {
      // Navigate back to the main page
      window.history.back();
    }
  
    if (!restaurant) {
      // Render a loading spinner or message if the data is still loading
      return <div>Loading...</div>;
    }

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <p>ID: {id}</p>
      <p>Address: {restaurant.address}</p>
      <p>Rating: {restaurant.rate}</p>
      <p>Average Price: {restaurant.avg_price}</p>
      <h2>Menu:</h2>
      <ul>
        {restaurant.menu.map((menu_item) => (
          <li key={menu_item.id}>
            <p>{menu_item.name}</p>
            <p>Price: {menu_item.price}</p>
          </li>
        ))}
      </ul>
      <button onClick={handleGoBack}>Go back to the main page</button>
    </div>
  );
    */
}

export default RestaurantDetailPage;
