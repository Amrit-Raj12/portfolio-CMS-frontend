# Portfolify App

This repository contains a Portfolify App. Follow the instructions below to build and run the app using Docker.

## Prerequisites

Before you begin, ensure you have Docker installed on your machine. You can download and install Docker from [here](https://www.docker.com/get-started).

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Amrit-Raj12/portfolio-CMS-frontend.git
   cd portfolio-CMS-frontend
   ```

# 2.Build the Docker image:

    ```bash
    docker build -t your-image-name .
    ```

# 3.Run the Docker container:

    ```bash
    docker run -it --name your-container-name -p 3000:3000 your-image-name
    ```

# 4. Access the application:

http://localhost:3000
