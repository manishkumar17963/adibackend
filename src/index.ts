require("dotenv").config();
import express from "express";
import morgan from "morgan";
import BlogRouter from "./api/v1/routes/blog";
import connect from "./config/databaseConfig";

const port = parseInt(process.env.PORT as string);

const start = async () => {
  try {
    await connect();
    let app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(morgan("dev"));
    app.use(function (req, res, next) {
      res.header("Access-Control-Allow-Credentials", "true");
      res.header("Access-Control-Allow-Origin", req.headers.origin);
      res.header(
        "Access-Control-Allow-Methods",
        "GET,PUT,POST,DELETE,UPDATE,OPTIONS"
      );
      res.header(
        "Access-Control-Allow-Headers",
        "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept,Authorization"
      );
      next();
    });
    app.use("/blog", BlogRouter);
    app.listen(port, "0.0.0.0");
  } catch (err) {
    console.log(err);
  }
};
start();
