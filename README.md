# Full Stack Web App

This is a basic starter full-stack node.js app. I will keep adding to it until it has a fully working login/signup. I like how asp.net gives a fully working login/sign up starter template as one of the options in Visual Studio. I am looking to create a starter template with similar functionality using node.js as my back end.
Right now I plan on using the following libraries to do this.

*	Passport – for sign-up/ log-in and oath.
*	EJS for templating – note: I may omit EJS and just do a full REST site using angular js.
*	ExpressJS
*	Angular 1 or Angular 2

I will probably add others as I learn them.

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


Install all node dependencies
```shell
npm install
bower install
```

####Run Node and view in Browser.

On MacOS or Linux
```shell
DEBUG=myapp:* npm start
```

On Windows
```shell
set DEBUG=myapp:* & npm start
```

Then load **http://localhost:3000/** in your browser to access the app.