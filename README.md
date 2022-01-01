# MEVN Stack CRUD APPLICATION

### Client details built using a MEVN stack (Vue.js + Node.js + Express + MongoDB) with a CRUD Application. 

The back-end server uses Node.js + Express for REST APIs, front-end side is a Vue client with Vue Router and axios.


### Node JS Express:

#### Does two types of interactions:
* ODM (Object Document Mapping) that interacts with the Mongo Database.
* Restful API that interacts with the Vue JS application.

### Vue JS:

* Has router which does the routing in single-page application
* Individual components that interacts with the backend using protocols like http.

- Node.js Express exports REST APIs & interacts with MongoDB Database using Mongoose ODM.
- Vue Client sends HTTP Requests and retrieves HTTP Responses using axios, consume data on the components. Vue Router is used for navigating to pages.


### How to run the project:

Pre-requisites: Install mongo, node, and Vue

1. Clone this repository.
2. To keep the backend running:  ([Backend Steps](https://github.com/AjayKumarR24430/Vue-Crud-Operations/blob/main/node_backend/README.md)) 
	* cd node_backend
	* npm install - to install all the node modules
	* run mongod to start the mongodb server locally
	* node server.js
3. To keep the frontend running: ([Frontend Steps](https://github.com/AjayKumarR24430/Vue-Crud-Operations/blob/main/vue_frontend/client-crud/README.md))
	* cd vue_frontend
	* npm install - to install all the node modules
	* npm run serve
