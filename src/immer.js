import React, { useState } from "react";
import { useImmer } from "use-immer";

export const Immer = () => {
  const [isLoding, setisLoding] = useState(false);
  const [isLoding2, setisLoding2] = useState(false);
  const [counter, setCounter] = useImmer({
   
    display1: 0,
    display2: 0,
  });


  function add() {
    setCounter((draft) => {
      if (isLoding2) {
        draft.display1++;
      }
      if (isLoding) {
        draft.display2++;
      }
    });
  }
  const minus = () => {
    setCounter((draft) => {
      if (isLoding2) {
        draft.display1--;
      }
      if (isLoding) {
        draft.display2--;
      }
    });
  };
  const Reset = () => {
    setCounter((draft) => {
      if (isLoding2) {
        draft.display1 = 0;
      }
      if (isLoding) {
        draft.display2 = 0;
      }
    });
  };
  const Selectall = () => {
    setisLoding(true);
  };

  return (
    <div className="App">
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

      <br />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <button
          onClick={add}
          style={{
            width: "80px",
            height: "30px",
            backgroundColor: "green",
            color: "white",
            textAlign: "center",
            borderRadius: "15px",
          }}
        >
          add 
        </button>
        <button
          onClick={minus}
          style={{
            width: "80px",
            height: "30px",
            backgroundColor: "red",
            color: "white",
            textAlign: "center",
            borderRadius: "15px",
          }}
        >
          minus
        </button>
        <button
          onClick={Reset}
          style={{
            width: "80px",
            height: "30px",
            backgroundColor: "black",
            color: "white",
            textAlign: "center",
            borderRadius: "15px",
          }}
        >
          Reset
        </button>
      </div>
      <div className="btn">
        <button
          onClick={Selectall}
          onDoubleClick={() => {
            setisLoding(false);
          }}
        >
          Select All Display
        </button>
        <button
          onClick={() => {
            setisLoding2(true);
          }}
          onDoubleClick={() => {
            setisLoding2(false);
          }}
        >
          First Counter Display
        </button>
        <label htmlFor="">Click the 'Select All' button</label>
        <input type="checkbox" checked={isLoding} />
      </div>
    </div>
  );
};
