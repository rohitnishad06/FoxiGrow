import crypto from "crypto";

export const verifyTelegramWebApp = (req, res, next) => {
  try {
    const { initData } = req.body;

    if (!initData) {
      return res.status(400).json({ message: "Missing initData" });
    }

    const params = new URLSearchParams(initData);
    const hash = params.get("hash");
    params.delete("hash");

    const dataCheckString = [...params.entries()]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([k, v]) => `${k}=${v}`)
      .join("\n");

    const secretKey = crypto
      .createHmac("sha256", "WebAppData")
      .update(process.env.BOT_TOKEN)
      .digest();

    const calculatedHash = crypto
      .createHmac("sha256", secretKey)
      .update(dataCheckString)
      .digest("hex");

    if (calculatedHash !== hash) {
      return res
        .status(401)
        .json({ message: "Invalid Telegram Mini App Auth" });
    }

    const user = JSON.parse(params.get("user"));
    req.telegramUser = user;

    next();
  } catch (error) {
    return res.status(400).json({ message: `teleAuth Error ${error}` });
  }
};
