## These are APIs that Node.js Express App will export:

| Methods  |	Urls	              |      Actions                               |
| :------- |:------------------------:| ------------:|
| GET	   |  api/clients	          |  get all Clients						   |
| GET	   |  api/clients/:id	      |  get Client by id                          |
| POST	   |  api/clients	          |  add new Client                            |
| PUT	   |  api/clients/:id	      |  update Client by id                       |
| DELETE   |  api/clients/:id	      |  remove Client by id                       |
| DELETE   |  api/clients	          |  remove all Clients                        |
| GET	   |  api/clients?name=[sa]   |	 find all Clients which name contains 'sa' |
| GET      |  api/providers           |  get all providers                         |
| POST     |  api/providers           |  add new provider                          |
| PUT      |  api/providers/:id       |  update provider by id                     |
| DELETE   |  api/providers           |  remove all providers                      |
| DELETE   |  api/providers/:id       |  remove Provider by id                     |


### Files and its functionalities:
- db.config.js exports configuring parameters for MongoDB connection & Mongoose.
- Express web server in server.js where we configure CORS, initialize & run Express REST APIs.
- Next, we add configuration for MongoDB database in models/index.js, create Mongoose data model in models/client.model.js and models/provider.model.js.
- Client and Provider controllers in controllers.
- Routes for handling all CRUD operations (including custom finder) in client.routes.js and provider.routes.js.

### We need to install necessary modules: express, mongoose, body-parser and cors.
Run the command:
* npm install

#### Roles of modules:
    - Express is for building the Rest apis
    - body-parser helps to parse the request and create the req.body object
    - cors provides Express middleware to enable CORS with various options.

#### Start a new terminal and run the command:
	- mongod: to start the mongodb localhost

### Run the app with command: node server.js