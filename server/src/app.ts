import express from "express";
import { createDbConnection } from "./db";
import bodyParser = require("body-parser");
import { getAuthController } from "./controller/auth_controller";
import { getUserController } from "./controller/user_controller";
import { getLinkController } from "./controller/link_controller";
import { getCommentController } from "./controller/comment_controller";

export async function application() {
  // Create db connection
  await createDbConnection();

  // Creates app
  const app = await express();

  // Server config to be able to send JSON
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // Declare main path
  app.get("/api/v1", (req, res) => {
    res.send("This is the home page!");
  });

  // Declare controllers
  const usersController = getUserController();
  const authController = getAuthController();
  const linksController = getLinkController();
  const commentsController = getCommentController();
  app.use("/api/v1/auth", authController);
  app.use("/api/v1/users", usersController);
  app.use("/api/v1/links", linksController);
  app.use("/api/v1/comments", commentsController);

  return app;
}
