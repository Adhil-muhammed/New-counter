import React from "react";
import { useImmer } from "use-immer";
import Counter from "./Counter";
import Counter2 from "./Counter2";

export const Immer = () => {
  const [screen2, setscreen2] = useImmer(false);
  const [screen1, setScreen1] = useImmer(false);
  const [counter, setCounter] = useImmer({
    display1: 0,
    display2: 0,
  });
  console.log(screen2);
  console.log(screen1);

  function add() {
    setCounter((draft) => {
      if (screen1 && screen2) {
        draft.display2++;
        draft.display1++;
      } else if (screen1) {
        setscreen2(); 
        // if  setscreen2 is comes to false then display 2 is trun of
        draft.display1++;
      }
    });
  }
  const minus = () => {
    setCounter((draft) => {
      if (screen2 && screen1) {
        draft.display1--;
        draft.display2--;
      } else if (screen1) {
        setscreen2(false);
        draft.display1--;
      }
    });
  };
  const Reset = () => {
    setCounter((draft) => {
      if (screen1) {
        draft.display1 = 0;
        draft.display2 = 0;
      }
    });
  };
  // const Selectall = () => {
  //   setscreen2(true);
  //   setScreen1(true);
  // };

  return (
    <React.Fragment>
      <div className="App">
        <Counter counter={counter} />
        <Counter2 counter={counter} />

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
        <label htmlFor="">select all</label>
          <input type="checkbox"
          //  onChange={Selectall}
          onChange={() => {
            setscreen2((draft) => {
              draft = !draft;
              return draft;
            });
            setScreen1((draft) => {
              draft = !draft;
              return draft;
            });

          }}
            />

          <label htmlFor="">select Display1</label>
          <input
            type="checkbox"
            onChange={() => {
              setscreen2((draft) => {
                draft = !draft;
                return draft;
              });
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
