import React, { useReducer } from "react";
import { SET_ALERT, REMOVE_ALERT } from "../types";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";

const AlertState = (props) => {
  const initialState = {
    alert: null,
  };

  const setAlert = (msg, type) => {
    dispatch({ type: SET_ALERT, payload: { msg, type } });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  return (
    <AlertContext.Provider value={{ alert: state.alert, setAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
