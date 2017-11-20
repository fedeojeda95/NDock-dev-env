FROM node:carbon

# Set our workdir
WORKDIR /app

# Install and cache app dependencies
COPY package*.json /app/
RUN npm install 

# Add project files
COPY . /app

# start app
CMD [ "npm", "start" ]