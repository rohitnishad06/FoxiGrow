import express from "express";
import { telegramLogin } from "../controllers/authController.js";
import { verifyTelegramWebApp } from "../middleware/teleAuth.js";

const authRouter = express.Router();

/**
 * @route   POST /api/auth/telegram
 * @desc    Telegram Mini App Login/Register
 * @access  Public (Telegram verified)
 */
authRouter.post("/telegram", verifyTelegramWebApp, telegramLogin);
authRouter.post("/test", (req, res) => {
  res.send("Auth route working ✅");
});

export default authRouter;
