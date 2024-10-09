const { Worker } = require("bullmq");

const sendEmail = () => new Promise((res, rej) => setTimeout(() => res(), 5 * 1000));

const worker = new Worker(
  "email-queue", 
  async (job) => {
    console.log(`message received id: ${job.id}`);
    console.log("Processing Message");
    console.log(`sending email to ${job.data.email}`);
    await sendEmail();
    console.log('Email sent');
  },
  {
    connection: {
      host: '127.0.0.1',
      port: 6379
    }
  }
);
