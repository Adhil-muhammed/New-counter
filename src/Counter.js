import React from "react";

function Counter({ counter }) {
  return (
    <React.Fragment>
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
            {counter.display1}
          </div>
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
          {/* <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "black",
              color: "white",
              textAlign: "center",
            }}
          >

          </div> */}
        </div>
      </h1>
    </React.Fragment>
  );
}

export default Counter;
