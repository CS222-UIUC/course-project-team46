module.exports = app => {
    const rest = require("../controllers/restaurant.controller.js");
    var router = require("express").Router();


    // main page, search for restaurants which name contains "restaurant_name"
    router.get("/search", rest.FindByName);

    // main page, default display the imformation of restaurants (10 for each page)
    // using Page for (Page-1)*10- Page*10 items
    //router.get("/", rest.DisplayRest);

    // main page, using for sorting restaurants
    // using SortByName, SortByPrice to change the sort order.
    //  SortByName, SortByPrice cannot occur at the same time (if ouccur, the program would return status 500)

    // using FoodType_1, FoodType_2.... to control the food fliter.
    // for example FoodType_1 == fastfood , return all food with fast food type 
    // ** FoodTypes : fastfood | Janpense food | Chinese food | Korean food | Grill | India food | Thai food | Mexican food
    // upto 9 different food type
    // *BY default, should use all 9 FoodType to show all restaurants*
    // using SortTtype to change (Name| Price | Rating)
    // using SortOrder to change (ASC | DESC)

    // return 2 things
    // result : require infomation
    // total_page: total number of items under fliter

    //Example http://localhost:8080/api/rest/?SortType=Price&SortOrder=ASC&FoodType_1=fastfood
    // It return list of festfood restaurants ordered by price with ACS order
    // The total_page is 17 which means we have 17 festfood restaurants.
    router.get("/", rest.FindBy);

    
    router.put("/rt",rest.Restrating);

    router.put("/dr",rest.DishRec);

    //new APIs

    // return restaurtInfo base on ID

    router.get("/:id" , rest.RestInfo);

    // sort dishes list of a restaurant by Name or Recommand Number
    // using SortBy (name | recommand) to change 
    // using SortOrder to change (ASC | DESC)
    router.get("/:id/menu" , rest.RestDishSort);

    
    //User API part

    router.post('/api/user/login', users.login);
    router.post('/api/user/register', users.register);
    //router.get('/api/user/:id', users.findById);

    // Comments
    router.get('/api/restaurant/:id/comments', comments.getComments);
    router.post('/api/restaurant/:id/add-comment', comments.addComment);
    router.post('/api/restaurant/:id/rate-comment/:commentsID', comments.rateComment);
    //router.delete('/api/restaurant/:id/delete-comment', comments.delete);
    
    

    app.use('/api/rest', router);
};