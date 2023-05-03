const sql = require("../module/db.js");


                

exports.FindByName= (req,res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
    }

    console.log(req.body);

    sql.query(`SELECT * From restaurant.restaurant_list as rest 
            WHERE rest.restaurant_name LIKE "%${req.query.restaurant_name}%"`,
            (err, result) =>{  if(err){
                                if(err.kind == "not_found"){
                                    res.status(404).send({
                                    message: `Not found Restaurant with name ${req.query.restaurant_name}.`
                                    });
                                }
                                else{
                                    res.status(500).send({
                                    message: `Error retrieving Restaurant with name ${req.query.restaurant_name}.`
                                    });
                                }
                            }
                            else{
                                res.send(result);
                            }
                          });
};

exports.DisplayRest = (req,res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Page can not be empty!"
        });
    }
    var total_page;

    sql.query(`SELECT COUNT(*) AS pages
                FROM restaurant.restaurant_list as rest`,
                (err, result) => {
                    
                     total_page = result;
                }
                );
                
    sql.query(`SELECT *
             From restaurant.restaurant_list as rest 
             ORDER BY rest.restaurant_name
             LIMIT ${(req.query.Page)*10} OFFSET ${(req.query.Page - 1)*10};`,
            function (err, result) 
             {
                                if(err){
                                    res.status(500).send({
                                        message: `Error retrieving Restaurants sorted by name.`
                                        });
                                }
                                else{
                                   
                                    res.send({result :result,current_page: `${(req.query.Page)}`, total_page:total_page});
                                   
                                }

                                });
    

};

exports.FindBy= (req,res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
      console.log(req.body);

    var total_page;

    sql.query(`SELECT COUNT(*) AS pages
                FROM restaurant.restaurant_list as rest
                WHERE rest.restaurant_type = "${req.query.FoodType_1}" or rest.restaurant_type = "${req.query.FoodType_2}" or rest.restaurant_type = "${req.query.FoodType_3}" 
                or rest.restaurant_type = "${req.query.FoodType_4}" or rest.restaurant_type = "${req.query.FoodType_5}" or rest.restaurant_type = "${req.query.FoodType_6}" 
                or rest.restaurant_type = "${req.query.FoodType_7}" or rest.restaurant_type = "${req.query.FoodType_8}" or rest.restaurant_type = "${req.query.FoodType_9}";`,
                (err, result) => {
                    
                     total_page = result;
                }
                );
                console.log("page",total_page);
      if(req.query.SortType == "Price") {
        sql.query(`SELECT * 
        FROM (SELECT   lis.restaurant_id, avg(lis.dish_price) as avg_price FROM restaurant.restaurant_dishes_list as lis   
        Group by lis.restaurant_id  )as A NATURAL JOIN restaurant.restaurant_list as rest 
        WHERE rest.restaurant_type = "${req.query.FoodType_1}" or rest.restaurant_type = "${req.query.FoodType_2}" or rest.restaurant_type = "${req.query.FoodType_3}" 
        or rest.restaurant_type = "${req.query.FoodType_4}" or rest.restaurant_type = "${req.query.FoodType_5}" or rest.restaurant_type = "${req.query.FoodType_6}" 
        or rest.restaurant_type = "${req.query.FoodType_7}" or rest.restaurant_type = "${req.query.FoodType_8}" or rest.restaurant_type = "${req.query.FoodType_9}"
        ORDER BY A.avg_price ${req.query.SortOrder};`,
        (err, result) => {  if(err){
                             if(err.kind == "not_found"){
                                res.status(404).send({
                                    message: `Failed to sort restaurant by price.`
                                });
                            }
                             else{
                                res.status(500).send({
                                     message: `Can not sort restaurant by price due to error.`
                                });
                            }
                            }
                            else{
                                res.send({result:result, total_page:total_page});
                            }
                        });

      }
      else if(req.query.SortType == "Name") {

        sql.query(`SELECT *
                FROM restaurant.restaurant_list as rest
                WHERE rest.restaurant_type = "${req.query.FoodType_1}" or rest.restaurant_type = "${req.query.FoodType_2}" or rest.restaurant_type = "${req.query.FoodType_3}" 
                or rest.restaurant_type = "${req.query.FoodType_4}" or rest.restaurant_type = "${req.query.FoodType_5}" or rest.restaurant_type = "${req.query.FoodType_6}" 
                or rest.restaurant_type = "${req.query.FoodType_7}" or rest.restaurant_type = "${req.query.FoodType_8}" or rest.restaurant_type = "${req.query.FoodType_9}"
                ORDER BY rest.restaurant_name ${req.query.SortOrder};`,
                 (err, result) =>{  if(err){
                    if(err.kind == "not_found"){
                        res.status(404).send({
                            message: `Failed to sort restaurant by name.`
                        });
                    }
                    else{
                        res.status(500).send({
                        message: `Can not sort restaurant by name due to error.`
                        });
                    }
                }
                else{
                    res.send({result:result, total_page:total_page});
                }
        });
      }
      else if(req.query.SortType == "Rating") {
        sql.query(`SELECT *
                FROM restaurant.restaurant_list as rest
                WHERE rest.restaurant_type = "${req.query.FoodType_1}" or rest.restaurant_type = "${req.query.FoodType_2}" or rest.restaurant_type = "${req.query.FoodType_3}" 
                or rest.restaurant_type = "${req.query.FoodType_4}" or rest.restaurant_type = "${req.query.FoodType_5}" or rest.restaurant_type = "${req.query.FoodType_6}" 
                or rest.restaurant_type = "${req.query.FoodType_7}" or rest.restaurant_type = "${req.query.FoodType_8}" or rest.restaurant_type = "${req.query.FoodType_9}"
                ORDER BY rest.restaurant_rating ${req.query.SortOrder};`,
                 (err, result) =>{  if(err){
                    if(err.kind == "not_found"){
                        res.status(404).send({
                            message: `Failed to sort restaurant by name.`
                        });
                    }
                    else{
                        res.status(500).send({
                        message: `Can not sort restaurant by name due to error.`
                        });
                    }
                }
                else{
                    res.send({result:result, total_page:total_page});
                }
        });
      }else {
        res.status(500).send({
            message: `cannot sort by either name or price due to request error.`
            });
      }
      
    
};



exports.findByFood= (req,res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    console.log(req.body);

    sql.query(`SELECT lis.dish_name, lis.dish_price,lis.recommand_number, rest.restaurant_name
                FROM  restaurant.restaurant_dishes_list as lis  		
                NATURAL JOIN restaurant.restaurant_list as rest
                WHERE lis.dish_name LIKE "%${req.query.food}%"
                ORDER BY lis.recommand_number, lis.dish_name, lis.dish_price;`,
            (err, result) =>{  if(err){
                                    if(err.kind == "not_found"){
                                        res.status(404).send({
                                            message: `Not found Food with name ${req.query.food}.`
                                        });
                                    }
                                    else{
                                        res.status(500).send({
                                        message: `Error retrieving Food with name ${req.query.food}.`
                                        });
                                    }
                                }
                                else{
                                    res.send(result);
                                }
                        });
};

exports.Restrating= (req,res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
      console.log(req.body);
    
      sql.query(`
                UPDATE restaurant.restaurant_list as rest
                SET rest.restaurant_rating = rest.restaurant_rating + 0.01
                WHERE rest.restaurant_name = "${req.query.restaurant_name}";
                `,
                (err, result) =>{  if(err){
                                        if(err.kind == "not_found"){
                                            res.status(404).send({
                                                message: `Cannot change the rating of restaurant with name ${req.query.restaurant_name}.`
                                            });
                                        }
                                        else{
                                            res.status(500).send({
                                                message: `Cannot change the rating of restaurant with name ${req.query.restaurant_name}.`
                                            });
                                        }
                                    }
                                    else{
                                        res.send("Change Rating successfully!");
                                    }
    });
};

exports.DishRec= (req,res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
      console.log(req.body);

      sql.query(`
                UPDATE restaurant.restaurant_dishes_list as lis
                SET lis.recommand_number = lis.recommand_number + 1
                WHERE lis.dish_name = "${req.query.dish_name}";
                `,
                 (err, result) =>{  if(err){
                    if(err.kind == "not_found"){
                        res.status(404).send({
                            message: `Cannot change the recommand number of dish with name ${req.query.dish_name}.`
                        });
                    }
                    else{
                        res.status(500).send({
                        message: `Cannot change the recommand number of dish with name ${req.query.dish_name}.`
                        });
                    }
                }
                else{
                    res.send("Change Recommand number successfully!");
                }
        });

};

// New Controlers

exports.RestInfo = (req,res) => {
    if (!req.body) {
        res.status(400).send({
          message: "id can not be empty!"
        });
    }
    console.log(req.body);
    
    sql.query(`SELECT * 
                FROM  restaurant.restaurant_dishes_list as lis  		
                NATURAL JOIN restaurant.restaurant_list as rest
                WHERE rest.restaurant_id = ${req.params.id};`,
                (err, result) =>{  if(err){
                    if(err.kind == "not_found"){
                        res.status(404).send({
                            message: `Their has no restaurt found with id ${req.params.id}.`
                        });
                    }
                    else{
                        res.status(500).send({
                        message: `Their has no restaurt with id  ${req.params.id}.`
                        });
                    }
                }
                else{
                    res.send(result);
                }
            });

};

exports.RestDishSort = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Please enter sortOrder"
        });
    }
    if(req.query.SortBy == "name") {
        sql.query(`SELECT lis.dish_name, lis.dish_price, lis.recommand_number
                FROM  restaurant.restaurant_dishes_list as lis  		
                NATURAL JOIN restaurant.restaurant_list as rest
                WHERE rest.restaurant_id = ${req.params.id}
                ORDER BY lis.dish_name ${req.query.sortOrder};`,
                (err, result) =>{  if(err){
                    if(err.kind == "not_found"){
                        res.status(404).send({
                            message: `no dishes data found ${req.params.id}.`
                        });
                    }
                    else{
                        res.status(500).send({
                        message: `failed to return dishes infomation ${req.params.id}.`
                        });
                    }
                }
                else{
                    res.send(result);
                }
            });
    }
    if (req.query.SortBy == "recommand"){
        sql.query(`SELECT lis.dish_name, lis.dish_price, lis.recommand_number
        FROM  restaurant.restaurant_dishes_list as lis  		
        NATURAL JOIN restaurant.restaurant_list as rest
        WHERE rest.restaurant_id = ${req.params.id}
        ORDER BY lis.recommand_number ${req.query.sortOrder};`,
        (err, result) =>{  if(err){
            if(err.kind == "not_found"){
                res.status(404).send({
                    message: `no dishes data found ${req.params.id}.`
                });
            }
            else{
                res.status(500).send({
                message: `failed to return dishes infomation ${req.params.id}.`
                });
            }
        }
        else{
            res.send(result);
        }
    });
    }
    

};
