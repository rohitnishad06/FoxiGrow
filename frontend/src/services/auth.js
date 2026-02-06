import { serverURL } from "../App";

export async function telegramLogin() {
  const tg = window.Telegram?.WebApp;

  if (!tg) {
    console.error("Not running inside Telegram");
    return null;
  }

  tg.ready();

  const res = await fetch(`${serverURL}/api/auth/telegram`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      initData: tg.initData,
    }),
  });

  const data = await res.json();

  if (data.token) {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
  }

  return data;
}
