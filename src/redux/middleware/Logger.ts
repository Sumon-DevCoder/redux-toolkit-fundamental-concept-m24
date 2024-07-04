import { Middleware } from "@reduxjs/toolkit";

const Logger: Middleware = (state) => (next) => (action) => {
  console.log("current state =>", state.getState());
  console.log("Action => ", action);

  next(action);
  console.log("current state =>", state.getState());
};

export default Logger;
