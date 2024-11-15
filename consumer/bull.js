// bull.js
const Queue = require('bull');
const Redis = require('ioredis');

// Create a Redis connection for Bull
const redis = new Redis("redis://default:nad3foSIi1GZSrJnM39VxE4EyYFhJODu@redis-17689.c277.us-east-1-3.ec2.redns.redis-cloud.com:17689");

// Create a Bull queue for task scheduling
const taskQueue = new Queue('taskQueue', {
  redis: {
    host: 'redis-17689.c277.us-east-1-3.ec2.redns.redis-cloud.com',
    port: 17689,
    password: 'nad3foSIi1GZSrJnM39VxE4EyYFhJODu',
    db: 0,
  }
});

module.exports = taskQueue;
