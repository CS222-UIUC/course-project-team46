# YumRev

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) 

## Group Name

lszz

## Group member names and NetIDs

* [Peter Zhu(bowenz12)](https://github.com/BowenZ217) created the front-end for HomePage, LoginPage, RegisterPage, and SearchPage. He also implemented the comments component on the RestaurantDetailPage, and worked on some of the APIs with Boyang Sun.

* [Xing Zhao(xingz6)](https://github.com/xingz6) created the front-end for RestaurantDetailPage, LoginPage, and RegisterPage. He also collaborated with Peter Zhu on front-end development, focusing on the overall design and user experience of the platform.

* [Boyang Sun(boyangs3)](https://github.com/FusomeSun) created the back-end for the project, focusing on API and database implementation. He ensured that the front-end components were able to interact seamlessly with the back-end services and data.

Everyone tested their code and contributed to the overall design and implementation of the project.

## Project Introduction

It’s always difficult to choose restaurants for meals if there is no recommendation. Restaurant Evaluation collects dishes, users’ ratings, comments in text format towards multiple restaurants and then saves them, providing suggestions before you make the decision.

## System Overview
Our project has a React, JavaScript as frontend, Express, MySQL as the backend.


YumRev is a full-stack web application consisting of a front-end client built using React and Material-UI and a back-end server responsible for handling data and user authentication. we used the MUI component library to make our each component concise and save us much work. 

The database has tables for data managenment in order for users to browse a list of restaurants, view details of each restaurant, rate and comment on their experiences, and get personalized recommendations based on user preferences and ratings.

## Components

### HomePage

The HomePage displays a list of restaurants and features a search bar for users to find specific restaurants. It also provides navigation options to the LoginPage and RegisterPage for user authentication.

### LoginPage

The LoginPage is the starting point for users who want to access additional features of the website, such as leaving comments or rating restaurants on the RestaurantDetailPage. It interacts with other components by redirecting to other pages if the user inputs accurate information, which the backend checks.

### RegisterPage

The RegisterPage allows new users to create an account to access additional features of the website. After successful registration, users are redirected to the LoginPage to log in next time.

### SearchPage

The SearchPage displays search results for users based on the input from the search bar on the HomePage. Users can view a list of restaurants that match their search criteria.

### RestaurantDetailPage

The RestaurantDetailPage provides more in-depth information about a specific restaurant, such as photos, ratings, and reviews. Users must log in before they can leave a comment or rate a restaurant on this page. The RestaurantDetailPage interacts with other components, such as the LoginPage, to ensure only authenticated users can leave comments or rate restaurants.

## Running Instructions

To set up and run the YumRev application, follow the instructions provided in the respective README files for the front-end client and back-end server.

Then:

1. open the website.
2. register as a user and begin to searching, rating and commenting on the website.


### images:
![image](pictures/cs222_final_pres.drawio.png)

### Front-end Client

Refer to the README.md file in the `client` directory for instructions on setting up and running the front-end client application. You can find it [here](./client/README.md).

### Back-end Server

Refer to the README.md file in the `server` directory for instructions on setting up and running the back-end server application. You can find it [here](./backend/README.md).

For a seamless experience, it is recommended to run both the front-end client and back-end server concurrently.

## Video Presentation

[Link](https://mediaspace.illinois.edu/media/t/1_zccxv1gn)

## Reference

[CS 222 Project](https://courses.grainger.illinois.edu/CS222/sp2023/)

[React](https://react.dev/)

[MUI](https://mui.com/)

[MySQL](https://www.mysql.com/)

[Express](https://expressjs.com/)

[npm](https://www.npmjs.com/)
