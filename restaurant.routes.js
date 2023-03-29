module.exports = app => {
    const rest = require("../controllers/restaurant.controller.js");
    var router = require("express").Router();


    // main page, search for restaurants which name contains "restaurant_name"
    router.get("/search", rest.FindByName);

    // main page, default display the imformation of restaurants (10 for each page)
    // using Page for (Page-1)*10- Page*10 items
    router.get("/", rest.DisplayRest);

    // main page, using for sorting restaurants
    // using SortBy (name | type | price )
    // multi SortBy is permitted
    // using SortOrder to change (ASC | DESC)
    router.get("/sort", rest.FindBy);

    
    router.put("/rt",rest.Restrating);

    router.put("/dr",rest.DishRec);

    //new APIs

    // return restaurtInfo base on ID

    router.get("/:id" , rest.RestInfo);

    // sort dishes list of a restaurant by Name or Recommand Number
    // using SortBy (name | recommand) to change 
    // using SortOrder to change (ASC | DESC)
    router.get("/:id/menu" , rest.RestDishSort);

    
    

    app.use('/api/rest', router);
};