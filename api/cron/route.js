// File: api/cronjob.js
export default function handler(req, res) {

    console.log("This is a log statement - route", new Date());

    console.error("This is an error statement", new Date());

    console.debug("This is an debug statement", new Date());

    console.warn("This is an warn statement", new Date());

    // Send response back
    res.status(200).json({ message: "Cron job completed"});
}

