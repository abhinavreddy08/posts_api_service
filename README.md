# posts_api_service
This is a simple API service perform basic operations likE create a post , delete a post ,update a post , get a post.

Tech stack used – Node js , Express and MongoDB.

## Table of contents
* [Instructions to setup locally](#instructions-to-setup-locally)
    * [Installing modules](#installing-modules)
    * [Mongodb connection](#mongodb-connection)
* [APIs and their behavior](#apis-and-their-behavior)


## Instructions to setup locally
### Installing modules
- Run the following commands in your terminal to run this project :
```bash
$git clone https://github.com/abhinavreddy08/posts_api_service.git
$ cd posts_api_service
$ npm install
```

### Mongodb connection
- create a MongodbAtlas cluster and create a .env file in posts_api_service and add the below line in .env
```bash
$ DB_CONNECTION = "mongodb conection URI"
```
### starting the server
- start the server
```bash
$ nodemon index.js
```

## APIs and their behaviour
For api behaviour look into ```post apis.postman_collection.json```, or import the https://www.getpostman.com/collections/a633520092e27a7f11df link in postman.

