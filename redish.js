// Importing the required Redis library
const Redis = require("ioredis");


// Defining the Redis connection URL
const url = "rediss://default:4778bfba84aa41ae89c24d586e36942b@usw1-amusing-hog-33119.upstash.io:33119";

// Creating a Redis client function
const createRedisClient = () => {
    // Creating a new Redis instance with the specified connection URL
    const client = new Redis(url);

    // Adding error handling for the connection
    client.on("error", (err) => {
        console.error("Redis connection error:", err);
    });

    // Returning the Redis client
    return client;
};

// Exporting the Redis client
module.exports = createRedisClient();
