# NDock-dev-env

Small, almost minimal, boilerplate for local Node.js development inside a container. It uses [Docker](https://www.docker.com) to create a container in the local machine with Node Carbon. 

## Why? 

Every developer has had awful experiences with differing enviroments in different systems (staging and prod, one machine and another). Working with docker in your local machine looks to minimize this. Setting up your enviroment from an existing project using Docker and Docker-Compose works like charm, it may even be a matter of minutes!

By using docker-compose and taking advantage of docker's [volumes](https://docs.docker.com/engine/admin/volumes/volumes/), development can be almost identical to local development but with much more benefits.  

## Usage

Just run `docker-compose up --build` and the container will be up and running.

## Configuration

The `docker-compose.yml` and `Dockerfile` expose the port 8080 and create a volume of the root folder, as they are. If any of this needs to be changed, the following lines need to be changed:

* `XXXX: 8080` below ports in `docker-compose.yml`. XXXX is the local machine port number that you want to use
* ./:/app to change which folder will be set as a volume. `./` represents the root folder in your machine and `/app` represents the folder inside the container that will be set as a volume.
