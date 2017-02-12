This is a back-end node express web application. It has a fully working login/signup, password hashing, persistent storage, and 5 views. I created this while learning to build node.js server applications.

I used the following to create a node server with full authentication capabilities and persistent storage.
*	Passport - for sign-up/ log-in and oath.
*	EJS – templating language for rendering view to html.
*	ExpressJS - as the server framework.
* MongoDB - This is the data base used for persistent storage and currently stores login credentials.

## Prerequisites

### Prerequisites Program installation

#####**Linux**
* **_Node.js_** - [Download](http://nodejs.org/download/) and Install Node.js, [NodeSchool has free node tutorials](http://nodeschool.io/#workshoppers) to get you started.
* **_MongoDB_** - [Download](https://www.mongodb.com/download-center) and Install mongodb - Checkout their [manual](https://docs.mongodb.com/manual/) if you’re just starting.
* **_Git_** - [Linux install](https://git-scm.com/download/linux) or general [download](https://git-scm.com/downloads)

#####**Windows**
* **_Node.js_** - [Download](http://nodejs.org/download/) and Install Node.js, [NodeSchool has free node tutorials](http://nodeschool.io/#workshoppers) to get you started.
* **_MongoDB_** - [Download](https://www.mongodb.com/download-center) and Install mongodb - Install on [Windows](https://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/) step by step walk through.
* **_Git_** - [Win install download](https://git-scm.com/download/win)

#####**Mac OSX**
* **_Node.js_** - [Download](http://nodejs.org/download/) and Install Node.js, [NodeSchool has free node tutorials](http://nodeschool.io/#workshoppers) to get you started.
* **_MongoDB_** - [Download](https://www.mongodb.com/download-center) and Install mongodb - Install on [Mac](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/) step by step walk through.
* **_Git_** - [Mac install download](http://git-scm.com/download/mac)

### Prerequisites Packages
```shell
npm install -g bower
```

If any prerequisites where missed please add it to the GitHub issues...

## How to Run App

make sure node.js is installed on your system then run the following commands


Install all local node dependencies
```shell
npm install
bower install
```

#### Start MongoDB
MongoDB needs to be running before you start the node server.

Do the following in the command line interface to **Run MongoDB**
```shell
<MONGO_INSTALL_DIRECTORY>/bin/mongod --dbpath <PATH_TO_DB_DIRECTORY>
```

For example, if you installed your MongoDB in the following location: _C:\Program Files\MongoDB\Server\3.2\bin_ and you want your data base information stored in this location: _C:\data\db_  then you would enter the following into the command line.
```shell
C:/Program Files/MongoDB/Server/3.2/bin/mongod --dbpath C:/data/db
```

####Start the Node Server and view in Web Page in Browser.

On **_MacOS_** or **_Linux_**
```shell
DEBUG=myapp:* npm start
```

On **_Windows_**
```shell
set DEBUG=myapp:* & npm start
```

Then load **http://localhost:3000/** in your browser to access the app.
