const express = require("express");
const app = express();

const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profile");
const paymentRoutes = require("./routes/Payments");
const courseRoutes = require("./routes/Course");
const contactUsRoute = require("./routes/Contact");
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
<<<<<<< HEAD
const {cloudinaryConnect } = require("./config/cloudinary");
=======
const { cloudinaryConnect } = require("./config/cloudinary");
>>>>>>> 2c363010b3869a01acc60909afe21dcfcbb6e5e8
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4000;

<<<<<<< HEAD
//database connect
database.connect();
//middlewares
=======
// Database connect
database.connect();

// Middlewares
>>>>>>> 2c363010b3869a01acc60909afe21dcfcbb6e5e8
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
<<<<<<< HEAD
    origin: ["http://localhost:3000"],
=======
    origin: [            
      "https://studymantra.vercel.app"    
    ],
>>>>>>> 2c363010b3869a01acc60909afe21dcfcbb6e5e8
    credentials: true,
  })
);
app.use(
<<<<<<< HEAD
	fileUpload({
		useTempFiles:true,
		tempFileDir:"/tmp",
	})
)
//cloudinary connection
cloudinaryConnect();

//routes
=======
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

// Cloudinary connection
cloudinaryConnect();

// Routes
>>>>>>> 2c363010b3869a01acc60909afe21dcfcbb6e5e8
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/reach", contactUsRoute);

<<<<<<< HEAD
//def route

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})

=======
// Default route
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running....",
  });
});

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
>>>>>>> 2c363010b3869a01acc60909afe21dcfcbb6e5e8
