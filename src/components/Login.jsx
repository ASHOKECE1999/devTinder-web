import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BASE_FETCH_URL } from "../utils/constant";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [emailId, emailIdSetter] = useState("AshokKumar@dev.com");
  const [password, passwordSetter] = useState("Ashok@123");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logTheUser = async () => {
    try {
      const res = await axios.post(
        BASE_FETCH_URL + "/login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );
      // console.log(res);
      dispatch(addUser(res.data));
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error?.response?.data || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center my-30 h-3/4">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email Id</legend>
            <input
              type="text"
              className="input"
              placeholder="Enter Your EmailId"
              value={emailId}
              onChange={(e) => emailIdSetter(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              className="input"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => passwordSetter(e.target.value)}
            />
          </fieldset>
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary mr-5" onClick={logTheUser}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
