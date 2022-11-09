import { useImmer, useImmerReducer } from "use-immer";
import { useMutation } from "react-query";
import React, { useEffect } from "react";
import axios from "axios";
const initialState = [
  {
    count: 1000,
    id: 1,
  },
];
const reducer = (draft, action) => {
  switch (action.type) {
    case "RESET":
      return initialState;
    case "INCREMENT":
      draft[0].count++;
      return draft;
    case "DECREMENT":
      draft[0].count--;
      return draft;
    case "addItem":
      draft.push(action.payload);

      return draft;
    default:
  }
};
var URL = "http://localhost:4000";
export const NewImmer = () => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);
  const [Server, setServer] = useImmer({
    Server: "",
  });
  const getData = () => {
    axios.get(`${URL}/api`).then((response) => {
      console.log(response.data);

      setServer((draft) => {
        draft.Server = response.data;
      });
    });
  };
  const article = { title: "this is adhil muhammed" };
  useEffect(() => {
    getData();
    axios
      .post("http://localhost:4000/posts", {
        name: "adhil",
        age: 21,
      })
      .then((response) => {
        console.log(response.data);
      });
  }, []);
  console.log(state);

  return (
    <>
      {state.map((obj, index) => (
        <div key={`${index}_${obj.id}`}>
          {obj.data}
          <div>{obj.count}</div>
        </div>
      ))}
      {Server.Server}
      <br />
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button
        onClick={() =>
          dispatch({
            type: "addItem",
            payload: {
              data: "value",
              data1: "value1",
              data2: "value2",
              data3: "value3",
            },
          })
        }
      >
        add item
      </button>
    </>
  );
};
