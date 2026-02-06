import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const telegramLogin = async (req, res) => {
  try {
    const tg = req.telegramUser;

    let user = await userModel.findOne({ telegramId: tg.id });

    if (!user) {
      user = await userModel.create({
        telegramId: tg.id,
        username: tg.username,
        avatar: tg.photo_url,
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({ token, user });
  } catch (error) {
    return res.status(400).json({message:`Auth Error ${error}` });
  }
};
