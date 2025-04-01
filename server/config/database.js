const mongoose = require("mongoose");

exports.connect = () => {
    const DATABASE_URL = process.env.DATABASE_URL;

    if (!DATABASE_URL) {
        console.error("Database connection string is missing.");
        process.exit(1); // Exit the process with failure
    }

    mongoose.connect(DATABASE_URL)
        .then(() => {
            console.log("DB Connected Successfully");
        })
        .catch((error) => {
            console.error("DB Connection Failed");
            console.error(error);
            process.exit(1); // Exit the process with failure
        });
};