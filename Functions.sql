USE `restaurant`;


-- sort restaurants according to the restaurant_name

SELECT rest.restaurant_name
From restaurant.restaurant_list as rest
ORDER BY rest.restaurant_name;

-- sort restaurants according to the restaurant_rating , if the rating is the same, order by restaurant_name

SELECT rest.restaurant_name
From restaurant.restaurant_list as rest
ORDER BY rest.restaurant_rating ,  rest.restaurant_name;

-- select restaurant by food style

SELECT rest.restaurant_name
FROM restaurant.restaurant_list as rest
WHERE rest.restaurant_type = "fastfood"
ORDER BY rest.restaurant_name;

--------------------------------------------------------------------------------------


-- find the cheapest festfood in the database 
SELECT rest.restaurant_name, A.avg_price,rest.restaurant_type
FROM (SELECT   lis.restaurant_id, avg(lis.dish_price) as avg_price FROM restaurant.restaurant_dishes_list as lis  
Group by lis.restaurant_id 
)as A NATURAL JOIN restaurant.restaurant_list as rest
WHERE restaurant_type = "fastfood"
ORDER BY A.avg_price;

-- find specific dishes with given food (ex:chicken), return the name, price , recommand_number of the dish and the name of the restaurant.

SELECT lis.dish_name, lis.dish_price,lis.recommand_numebr, rest.restaurant_name
FROM  restaurant.restaurant_dishes_list as lis  		
NATURAL JOIN restaurant.restaurant_list as rest
WHERE lis.dish_name LIKE "%chicken%"
ORDER BY lis.recommand_numebr, lis.dish_name, lis.dish_price;