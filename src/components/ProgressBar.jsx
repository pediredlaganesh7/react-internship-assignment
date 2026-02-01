import { useState } from "react";

export default function ProgressBar() {
  const [values, setValues] = useState([0, 0, 0]);

  const updateValue = (index, value) => {
    let num = Math.max(0, Math.min(100, Number(value)));
    const newValues = [...values];
    newValues[index] = num;
    setValues(newValues);
  };

  const average =
    values.reduce((sum, val) => sum + val, 0) / values.length;

  return (
    <div>
      <h2>Dynamic Progress Bar</h2>

      {values.map((val, index) => (
        <div key={index}>
          <input
            type="number"
            value={val}
            onChange={(e) =>
              updateValue(index, e.target.value)
            }
          />
          <div
            style={{
              background: "#ddd",
              height: "10px",
              width: "200px",
              marginBottom: "10px"
            }}
          >
            <div
              style={{
                width: `${val}%`,
                height: "100%",
                background: val < 40 ? "red" : "green"
              }}
            />
          </div>
        </div>
      ))}

      <h3>Main Progress</h3>
      <div
        style={{
          background: "#ccc",
          height: "15px",
          width: "300px"
        }}
      >
        <div
          style={{
            width: `${average}%`,
            height: "100%",
            background: "blue"
          }}
        />
      </div>
    </div>
  );
}
