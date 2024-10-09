const {Queue} = require('bullmq');

const notificationQueue = new Queue('email-queue', {
    connection: {
        host: '127.0.0.1',
        port: 6379
    }
});

async function init() {
    const res = await notificationQueue.add("email to nitin", {
        email: "nnn@gmail.com",
        subject: "Welcome from redis",
        body: "Hey Nitin"
    });
    console.log("Job added to the queue", res.id)
}

init();
