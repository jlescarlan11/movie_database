const { Router } = require("express");
const mdRouter = Router();
const mdController = require("../controllers/mdController");

mdRouter.get("/", mdController.index);
mdRouter.get("/signup", mdController.signUpGet);
mdRouter.post("/signup", mdController.signUpPost);
mdRouter.get("/login", mdController.logInGet);
mdRouter.post("/login", mdController.logInPost);
mdRouter.get("/logout", mdController.logOutGet);
mdRouter.get("/password-reset", mdController.passwordResetRequestGet);
mdRouter.post("/password-reset", mdController.passwordResetRequestPost);
mdRouter.get("/password-reset/:id", mdController.passwordResetConfirmGet);
mdRouter.post("/password-reset/:id", mdController.passwordResetConfirmPost);

module.exports = mdRouter;
