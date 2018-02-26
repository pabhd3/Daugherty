# DBS SA&E Angular Exercises

## Table of Contents

* [Dependencies](#dependencies)
* [Installing](#installing)
* [Running the app](#running-the-app)

## Dependencies

What you need to run this app:
* `node` and `npm` - [Download](https://nodejs.org/en/)
* Ensure you're running Node (`v8.x.x`+) and NPM (`5.x.x`+)

## Installing

* Install all dependencies
```
cd Exercises
npm install
```

## Developing

### Running the API server
A NodeJS API has been created for you to run AJAX HTTP requests from your angular app. To prep the server, install its dependencies:
```
cd Server
npm install
```

To run the server from the Server directory:
```
npm start
```
This starts the NodeJS API at localhost:8888

NOTE: If you stop the server, all modified data will be lost and will be reset to the default seed data upon restart. It is recommended that you start
the server at the beginning of your exercises and leave it running while working through all of the exercises.

### Running the app w/ dev server

After you have installed all dependencies you can now run the app for a particular exercise from the Exercises folder:
```
npm run exercise0
```
```
npm run exercise1
```
etc.

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:4200`. 

## Build files for distribution

* `npm run build` (will always build the "complete" folder)
* Outputs to `/dist` folder. Copy these contents into whichever web server you would like to host the app
