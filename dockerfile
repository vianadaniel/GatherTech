# Use the official Node.js image as a base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the necessary files (package.json, package-lock.json) to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm ci

# Copy the rest of the files to the working directory
COPY . .

ENV MONGODB_HOST=mongodb:27017

# Expose the port on which the NestJS server is running (optional)
EXPOSE 3000

# Command to start the application when the container is started
CMD ["npm", "run", "start:prod"]

