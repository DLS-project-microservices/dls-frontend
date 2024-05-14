# Use the official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Define build arguments
ARG REACT_APP_AUTH_URL
ARG REACT_APP_CUSTOMER_INVENTORY_URL

# Set environment variables
ENV REACT_APP_AUTH_URL=$REACT_APP_AUTH_URL
ENV REACT_APP_CUSTOMER_INVENTORY_URL=$REACT_APP_CUSTOMER_INVENTORY_URL

# Build the React application
RUN npm run build

# Install 'serve' to serve the static files
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Command to serve the app
CMD ["serve", "-s", "build", "-l", "3000"]
