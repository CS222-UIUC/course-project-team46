const sql = require("../module/db.js");

var total_page;

sql.query(`SELECT COUNT(*) AS pages
                FROM restaurant.restaurant_list as rest`,
                (err, result) => {
                    
                     total_page = result;
                }
                );
                console.log("-------------------");


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

      sql.query(`SELECT rest.restaurant_name
                FROM restaurant.restaurant_list as rest
                WHERE rest.restaurant_type = ${req.query.type}
                ORDER BY rest.restaurant_name;`,
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

exports.findByPrice= (req,res) => {
   sql.query("SELECT rest.restaurant_name, A.avg_price,rest.restaurant_type FROM (SELECT   lis.restaurant_id, avg(lis.dish_price) as avg_price FROM restaurant.restaurant_dishes_list as lis   Group by lis.restaurant_id  )as A NATURAL JOIN restaurant.restaurant_list as rest ORDER BY A.avg_price;",
            (err, result) => {
                                 if(err){
                                    res.status(500).send({
                                    message: `Error retrieving Restaurants sorted by average price.`
                            
                                    });
                                 }
                                else{
                                    res.send(result);
                                }

                            });

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
