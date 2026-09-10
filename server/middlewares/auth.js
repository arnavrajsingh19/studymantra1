const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");

// Middleware: Auth
exports.auth = async (req, res, next) => {
    try {
        console.log("BEFORE TOKEN EXTRACTION");

        // Safe token extraction
        let token = null;
        if (req.cookies && req.cookies.token) {
            token = req.cookies.token;
        } else if (req.body && req.body.token) {
            token = req.body.token;
        } else if (
            req.header("Authorization") &&
            req.header("Authorization").startsWith("Bearer ")
        ) {
            token = req.header("Authorization").replace("Bearer ", "");
        }

        console.log("AFTER TOKEN EXTRACTION");

        // If token missing
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token is missing",
            });
        }

        // Verify token
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log("DECODED TOKEN:", decode);
            req.user = decode; // Attach user info to req
        } catch (err) {
            return res.status(401).json({
                success: false,
                message: "Token is invalid",
            });
        }

        next(); // Pass control
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong while validating the token",
            error: error.message,
        });
    }
};

// Middleware: Student check
exports.isStudent = async (req, res, next) => {
    try {
        if (req.user.accountType !== "Student") {
            return res.status(401).json({
                success: false,
                message: "This is a protected route for Students only",
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User role cannot be verified, please try again",
        });
    }
};

// Middleware: Instructor check
exports.isInstructor = async (req, res, next) => {
    try {
        if (req.user.accountType !== "Instructor") {
            return res.status(401).json({
                success: false,
                message: "This is a protected route for Instructors only",
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User role cannot be verified, please try again",
        });
    }
};

// Middleware: Admin check
exports.isAdmin = async (req, res, next) => {
    try {
        console.log("Account Type:", req.user.accountType);
        if (req.user.accountType !== "Admin") {
            return res.status(401).json({
                success: false,
                message: "This is a protected route for Admins only",
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User role cannot be verified, please try again",
        });
    }
};
