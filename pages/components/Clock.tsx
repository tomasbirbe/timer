import dayjs from "dayjs";
import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(() => dayjs().format("HH:mm:ss"));

  useEffect(() => {
    setInterval(() => {
      setTime(dayjs().format("HH:mm:ss"));
    }, 1000);
  }, []);

  return <p className="text-[15rem]">{time}</p>;
}
