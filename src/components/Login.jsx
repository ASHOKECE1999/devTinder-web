import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BASE_FETCH_URL } from "../utils/constant";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [emailId, emailIdSetter] = useState("");
  const [password, passwordSetter] = useState("");
  const [firstName, firstNameSetter] = useState("");
  const [lastName, lastNameSetter] = useState("");
  const [error, setError] = useState("");
  const [isLogin, logginSetter] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  console.log(user);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

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
      return navigate("/");
    } catch (error) {
      console.log(error);
      setError(error?.response?.data || "Something went wrong");
    }
  };

  const signUpUser = async () => {
    try {
      const signedUp = await axios.post(
        BASE_FETCH_URL + "/signup",
        {
          firstName,
          lastName,
          password,
          emailId,
        },
        {
          withCredentials: true,
        }
      );

      dispatch(addUser(signedUp.data.data));
      return navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center my-30 h-3/4">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{isLogin ? "Login" : "Sign Up"}</h2>
          <div>
            {!isLogin && (
              <>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">First Name</legend>
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter Your First Name"
                    value={firstName}
                    onChange={(e) => firstNameSetter(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">LastName</legend>
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter Your LastName"
                    value={lastName}
                    onChange={(e) => lastNameSetter(e.target.value)}
                  />
                </fieldset>
              </>
            )}
          </div>
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
            <button
              className="btn btn-primary mr-5"
              onClick={isLogin ? logTheUser : signUpUser}
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </div>
          <h1
            onClick={() => logginSetter(!isLogin)}
            className="decoration-solid underline"
          >
            {isLogin
              ? "FirstTime User ? SignUp Here "
              : "Exising User? Login Here"}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
