const express = require("express");
const taskQueue = require("./bull.js");
const moment = require("moment");
// require("./scheduler.js");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/schedule", async (req, res) => {
    const { userId, message, scheduledTime } = req.body;
    // const targetDate = moment(scheduledTime); // Format according to your frontend format
    // console.log(`Scheduled time: ${targetDate}`);
    // const currentDate = moment(); // Get current date and time
    // console.log(`Current time: ${currentDate}`);
    // const delay = targetDate.diff(currentDate, "milliseconds");
    // console.log(`Delay in milliseconds: ${delay}`);
    // if (delay < 0) {
    //   return res.status(400).json({ error: "Scheduled time must be in the future" });
    // }
    Array.from({ length: 10 }, async (_, i) => {
        const job = await taskQueue.add(
            "sendReminder",
            { userId, message },
            {
                delay: 10000,
                attempts: 3,
                backoff: {
                    type: "exponential",
                    delay: 1000,
                },
                removeOnComplete: true,
            }
        );
    });
    res.json({ message: "scheduled" });
    // res.send("Hello World");
});

app.listen(7070, () => {
    console.log("Server is running on port 7070");
});
