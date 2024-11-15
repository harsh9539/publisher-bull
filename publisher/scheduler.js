// // scheduler.js
// const taskQueue = require("./bull.js");

// // This function will process the jobs added to the Bull queue
// taskQueue.process("sendReminder", async (job) => {
//   console.log(`job info: ${JSON.stringify(job,null,2)}`);
//     console.log(`Processing task: ${job.name}`);

//     // if (job.name === "sendReminder") {
//     //     await sendReminder(job.data);
//     // }
//     await sendReminder(job.data);
//     // Example function for processing the job (sending reminders)
//     async function sendReminder(data) {
//         console.log(`Reminder for user ${data.userId}: ${data.message}`);
//         // You can integrate your email or notification service here.
//     }
// });

// taskQueue.on("completed", (job) => {
//     console.log(`Task completed: ${job.id}`);
// });

// taskQueue.on("failed", (job, err) => {
//     console.log(`Task failed: ${job.id} - ${err.message}`);
// });
