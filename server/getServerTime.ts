"use server";

export async function getServerTime() {
  await new Promise((r) => setTimeout(r, 1e3));
  console.log("正在获取服务器时间");
  return new Date().toString();
}
