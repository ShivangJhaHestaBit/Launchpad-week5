# Service Architecture

## 1. Overview of Services

    The application consists of three main services:

    Client
        React (Vite) frontend
        Runs in its own container
        Connects to the server using the internal Docker hostname

    Server
        Node.js + Express backend API
        Connects to MongoDB using Docker’s internal networking system
        Exposes API endpoints to the client

    MongoDB
        Runs as an isolated container
        Stores data using a persistent volume
        Accessible to the server using the service name

                   +-----------------------+
                   |       CLIENT          |
                   |  React + Vite         |
                   |  Port: 5173           |
                   |  Communicates with    |
                   |  server at http://server:5000
                   +-----------+-----------+
                               |
                               |
                   +-----------v-----------+
                   |       SERVER          |
                   | Node.js + Express     |
                   | Port: 5000            |
                   | Connects to MongoDB   |
                   | using mongodb://mongo:27017/mydb
                   +-----------+-----------+
                               |
                               |
                   +-----------v-----------+
                   |        MONGO          |
                   | MongoDB Database      |
                   | Port: 27017           |
                   | Persistent Volume     |
                   |   day2_mongo-data     |
                   +-----------------------+

## 2. Steps to Build the Architecture
    Step 1 — Create the MERN App
        Set up the client using React + Vite.
        Set up the server using Node.js + Express.
        Test both locally to ensure they run without errors.

    Step 2 — Prepare the Project for Docker
        Ensure both client and server have separate folders.
        Remove existing node_modules.
        Remove old lock files if Node version was updated.
        Structure the project so Dockerfiles and docker-compose.yml can access both services cleanly.

    Step 3 — Create Dockerfiles
        For both client and server:
        Define a base Node.js image that matches the required version.
        Set a working directory.
        Copy dependency definition files.
        Install dependencies inside the container.
        Copy the remaining project files.
        Expose the correct application port.
        Set the start command that runs inside the container.

    Step 4 — Create the Docker Compose File
        Define three services: client, server, and mongo.
        Configure the client so it builds using its Dockerfile.
        Configure the server so it builds using its Dockerfile.
        Add environment variables required for server → MongoDB connection.
        Add MongoDB service using the official database image.
        Map the local ports to container ports.
        Create a persistent volume for Mongo data.

    Step 5 — Understanding Docker Networking
        Docker Compose automatically creates an isolated internal network.
        All services can reach each other using their service names.
        No local IP addresses or localhost references are required.
        The server connects to MongoDB using the internal hostname, not 127.0.0.1.

    Step 6 — Build the Containers
        Use Docker Compose to build all service images.
        Rebuild images completely if any configuration has changed.
        Ensure the build completes without dependency errors.

    Step 7 — Run the Application
        Start all services in detached mode.
        Docker Compose automatically:
        Creates images
        Starts containers
        Sets up networking
        Mounts volumes
        Exposes the required ports

    Step 8 — Verify All Services
        Check running containers through Docker.
        Confirm each service is active.
        Review logs for client, server, and MongoDB.
        Ensure the client can reach the server.
        Ensure the server can successfully connect to MongoDB.

    Step 9 — Use the Application
        Access the client in the browser through the exposed port.
        Test the API routes through the server.
        Confirm data is saved in MongoDB via container networking.

Docker Screenshot:

![alt text](<image.png>)