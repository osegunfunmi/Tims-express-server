# Full Stack Web App

This is a basic starter full-stack node.js app. I will keep adding to it until it has a fully working login/signup. I like how asp.net gives a fully working login/sign up starter template as one of the options in Visual Studio. I am looking to create a starter template with similar functionality using node.js as my back end.
Right now I plan on using the following libraries to do this.

*	Passport – for sign-up/ log-in and oath.
*	EJS for templating – note: I may omit EJS and just do a full REST site using angular js.
*	ExpressJS
*	Angular 1 or Angular 2

I will probably add others as I learn them.

## How to Run App

make sure node.js is installed on your system then run the following commands


Install all node dependencies
```shell
npm install
bower install
```

####Run Node In The Browser.

On MacOS or Linux
```shell
DEBUG=myapp:* npm start
```

On Windows
```shell
set DEBUG=myapp:* & npm start
```

Then load **http://localhost:3000/** in your browser to access the app.