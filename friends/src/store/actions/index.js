import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";

// Login Actions
const baseURL = "http://localhost:5000/api/friends";
export const login = creds => dispatch => {
  dispatch({
    type: LOGIN_START
  });
  return axios
    .post(`${baseURL}/login`, creds)
    .then(res => {
      console.log(res.data);
      localStorage.setItem("token", res.data.payload);
    })
    .catch(err => {
      console.log(err);
    });
};

// Getting Friend Data Actions
export const getFriends = () => dispatch => {
  dispatch({
    type: FETCH_DATA_START
  });
  axios
    .get(`${baseURL}/data`, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
    .then(res => {
      console.log(res.data);
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};