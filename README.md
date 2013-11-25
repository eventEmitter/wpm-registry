# wpm-registry

ATTENTION: WIP, dont us this, it won't work


Web Package Manager Registry - Javascript / CSS & Web Component Registry

This is a package manager for js, css and web components based on a certain rule set so they can be automatically loaded, compiled and processed. Its like npmjs for the web, but unlike bower it has a stricter rules on how components must be published. This makes it suitable for creating sets of packages which are compatible with each other so that we can create great applications with far less effort!

The wpm server support the newest stable Ubuntu version, the client supports linux, mac & windows

The WPM client has direct support for the following platforms:

- node.js
	- express.js
	- ee-components
	

whats great too:

- You can host your own private registry proxying other private or the public registries
- there is support for organizations and roles
- there is a [nice website](https://wpmjs.org) for the public registry



## installation

first you nedd to install the postgres development libraries

	sudo apt-get install libpq-dev

if you're using node & npm you may install the registry using the following command

	npm install wpm-registry

if you are using ubuntu you may add the [PPA]() and install the registry using apt

	sudo apt-add-repository ppa:
	sudo apt-get update
	sudo apt-get install wpm-registry

## build status

[![Build Status](https://travis-ci.org/eventEmitter/wpm-registry.png?branch=master)](https://travis-ci.org/eventEmitter/wpm-registry)



## usage

### when installed with npm

1. install the registry on your server using npm
2. copy & edit the configuration file
3. install the updstart config
4. start the service
5. have fun!

### when installed with apt

1. install the registry on your server using apt
2. edit the configuration file
4. start the service
5. have fun!


## replication

you may replicate any other wpm repository which you are allowed to access. Only packages will replicated. 


## API

### /user

- POST: create a new user

### /user/:id

- PATCH: update user
- DELETE: delete user ( soft delete )
- GET: get user

### /user/:id/passwordResetToken

- POST: create a password reset token

### /user/:id/passwordResetToken/:token

- GET: get the token
- DELETE: delte token ( soft delete )
- PATCH: set to validated

### /user/:id/organization

- GET: list groups  of user

### /user/:id/organization/:id

- PUT: create mapping between user and organization
- DELETE: delete mapping


### /user/:id/role

- GET: list groups  of user

### /user/:id/role/:id

- PUT: create mapping between user and role
- DELETE: delete mapping


### /user/:id/counter

- GET: get counters for the user



### /session

- POST: sign in

### /session/:id

- DELETE: sign out




### /organization

- GET: list groups
- POST: create organization

### /organization/:id

- GET: get organization
- DELETE: delte organization
- PATCH: updtae organization



### /organization/:id/counter

- GET: get counters for the organization



### /role

- GET: list roles
- POST: create reole

### /role/:id

- GET: get role
- PATCH: modify role
- DELETE: remove role






### /package

- GET: list packages
- POST: create a new package

### /package/:name

- GET: get the package
- PATCH: update package info
- DELETE: remove package and all versions ( soft delete )

### /package/:name/version

- GET: list package versions
- POST: create new version

### /package/:name/version/:version

- GET: get package
- DELETE: remove version ( soft delete )

### /package/:id/counter

- GET: get counters for the package

### /package/:name/version/:version/counter

- GET: get counters for the package version




### /replication

- GET: list my replications
- POST: register replication client

### /replication/:id

- GET: get replication config
- PATCH: updtae replication config
- DELETE: remove replication




### /permissions

- GET: get permissions
- POST: create new permission

### /permissions/:id

- GET: permission
- PATCH: update permission
- DELETE: remove permission




### /counter

- GET: lsit counters
- POST: create counter

### /counter/:id

- GET: get counter
- PATCH: modify counter
- DELETE: remove counter