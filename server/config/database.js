const mongoose = require("mongoose");
<<<<<<< HEAD
const { MongoMemoryServer } = require("mongodb-memory-server");

const seedData = async () => {
    try {
        const Category = require("../models/Category");
        const count = await Category.countDocuments();
        if (count === 0) {
            await Category.create([
                { name: "Web Development", description: "Fullstack web development with React and Node.js" },
                { name: "Android Development", description: "Android app development with Kotlin" },
                { name: "Python & Data Science", description: "Python programming and data analytics" },
                { name: "DevOps & Cloud", description: "Docker, Kubernetes and Cloud Computing" }
            ]);
            console.log("Seeded default categories into database.");
        }
    } catch (err) {
        console.log("Seeding error:", err.message);
    }
};
=======
>>>>>>> 2c363010b3869a01acc60909afe21dcfcbb6e5e8

exports.connect = () => {
    const DATABASE_URL = process.env.DATABASE_URL;

<<<<<<< HEAD
    mongoose.connect(DATABASE_URL, {
        serverSelectionTimeoutMS: 2000,
    })
    .then(async () => {
        console.log("DB Connected Successfully");
        await seedData();
    })
    .catch(async (error) => {
        console.log("Cloud DB Connection Failed:", error.message);
        console.log("Starting in-memory MongoDB server fallback...");
        try {
            const mongoServer = await MongoMemoryServer.create();
            const mongoUri = mongoServer.getUri();
            await mongoose.connect(mongoUri);
            console.log("In-Memory MongoDB Connected Successfully at:", mongoUri);
            await seedData();
        } catch (memErr) {
            console.error("Failed to start in-memory MongoDB:", memErr.message);
        }
    });
=======
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
>>>>>>> 2c363010b3869a01acc60909afe21dcfcbb6e5e8
};