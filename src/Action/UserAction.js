import React from "react";
import { DATALOADED_SUCCESS, DATALOADING, DATALOADED_FAIL } from "./types";

export const GetUserData = () => {
  return dispatch => {
    dispatch({ type: DATALOADING });
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET"
    })
      .then(respons => respons.json())
      .then(responsJson =>
        dispatch({ type: DATALOADED_SUCCESS, payload: responsJson })
      )
      .catch(error => dispatch({ type: DATALOADED_FAIL, payload: error }));
  };
};
