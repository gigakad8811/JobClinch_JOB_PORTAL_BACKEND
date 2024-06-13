import app from "./app.js";
import cloudinary from "cloudinary";
// Import the cors package
import cors from "cors";

// Apply cors middleware to your express app
app.use(
  cors({
    origin: "https://jobclinch.netlify.app", // Replace with your frontend application's origin
    optionsSuccessStatus: 200,
    credentials: true, // Allow cookies to be sent in the request
  })
);

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API_KEY,
  api_secret: process.env.CLOUDINARY_CLIENT_API_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
