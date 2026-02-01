import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [time, setTime] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("timer"));
    return saved?.time || 10000;
  });

  const [status, setStatus] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("timer"));
    return saved?.status || "idle";
  });

  useEffect(() => {
    localStorage.setItem(
      "timer",
      JSON.stringify({ time, status })
    );
  }, [time, status]);

  useEffect(() => {
    if (status !== "running") return;

    const interval = setInterval(() => {
      setTime(prev => {
        if (prev <= 10) {
          clearInterval(interval);
          setStatus("completed");
          return 0;
        }
        return prev - 10;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [status]);

  const start = () => setStatus("running");
  const pause = () => setStatus("paused");
  const reset = () => {
    setTime(10000);
    setStatus("idle"); 
  };

  return (
    <div>
      <h2>Countdown Timer</h2>

      <h3>{(time / 1000).toFixed(2)} seconds</h3>

      <button onClick={start} disabled={status === "running"}>
        Start
      </button>{" "}
      <button onClick={pause} disabled={status !== "running"}>
        Pause
      </button>{" "}
      <button onClick={reset}>
        Reset
      </button>

      <p>Status: {status}</p>
    </div>
  );
}
