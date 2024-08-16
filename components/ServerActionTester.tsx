"use client";
import { getServerTime } from "@/server/getServerTime";
import { useState } from "react";
import Button from "./Button";

export default function ServerActionTester() {
  const [testResult, setResult] = useState("点击获取服务器时间");
  const doTest = () => {
    setResult("等待数据");
    getServerTime().then(setResult);
  };
  return <Button onClick={doTest}>{testResult}</Button>;
}
