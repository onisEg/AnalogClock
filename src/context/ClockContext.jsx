import { createContext, useContext, useEffect, useState } from "react";

let ClockContext = createContext(0);

export default function ClockContextProvider({ children }) {
  const [date, setDate] = useState(new Date());

  function tick() {
    setDate(new Date());
  }

  let sec = date.getSeconds();
  let mins = date.getMinutes();
  let hours = date.getHours();

  let secDeg = (sec / 60) * 360 + 90;
  let minsDeg = (mins / 60) * 360 + 90;
  let hoursDeg = (hours / 12) * 360 + 90;

  useEffect(() => {
    let intervalID = setInterval(() => {
      tick();
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  return (
    <ClockContext.Provider value={{ secDeg, minsDeg, hoursDeg }}>
      {children}
    </ClockContext.Provider>
  );
}

export function useClock() {
  return useContext(ClockContext);
}
