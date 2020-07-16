import axios from "axios";
import { GET_TOOLS } from "./types.js";

//GET TOOLS
export const getTools = () => (dispatch) => {
  axios
    .get("/api/tools/")
    .then((res) => {
      dispatch({
        type: GET_TOOLS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
