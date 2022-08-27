import dayjs from "dayjs";
import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(() => dayjs().format("HH:mm"));

  useEffect(() => {
    setInterval(() => {
      setTime(dayjs().format("HH:mm"));
    }, 1000);
  }, []);

  return <p className="text-[15rem] text-white/80 text">{time}</p>;
}
