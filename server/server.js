import express from "express";
import dotenv from "dotenv";
import db from "./database.js";
import cors from "cors";
import userRoute from "./routes/user.routes.js";
import authRoute from "./routes/auth.routes.js"
import cookieParser from "cookie-parser";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
dotenv.config();

//Importing user routes
app.use("/api/user", userRoute);

//Importing auth routes
app.use("/api/auth", authRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";

  return res.status(errorStatus).send(errorMessage);
});

app.listen(process.env.PORT, () => {
  db();
  console.log("backend server running");
});
