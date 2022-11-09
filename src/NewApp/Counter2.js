import React from "react";
function Counter2({ counter }) {
  return (
    <h1>
      <div
        className="display"
        style={{ display: "flex", justifyContent: "center" }}
      >
      <div
            style={{
              marginRight: "5rem",
              width: "100px",
              height: "100px",
              backgroundColor: "black",
              color: "white",
              textAlign: "center",
            }}
          >
         {counter.display2}
          </div>
      </div>
    </h1>
  );
}

export default Counter2;
