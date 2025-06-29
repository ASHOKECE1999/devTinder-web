import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BASE_FETCH_URL } from "../utils/constant";

import { addRequests, removeRequests } from "../utils/requestSlice";
import Profile from "./Profile";
import UserCard from "./UserCard";
import { removeConnection } from "../utils/connectionSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const userRequsts = useSelector((state) => state.requests);
  const [showToast, showToastSetter] = useState(false);
  console.log(userRequsts, "userRequsts");

  const fetchRequests = async () => {
    try {
      const request = await axios.get(
        BASE_FETCH_URL + "/user/request/received",
        {
          withCredentials: true,
        }
      );
      dispatch(addRequests(request.data));
      console.log(request.data, "connectionsData");
    } catch (error) {
      console.log(error.message);
    }
  };

  const reviewRequest = async (_id, status) => {
    try {
      const reviewConnnectionRequest = await axios.post(
        BASE_FETCH_URL + "/request/review/" + status + "/" + _id,
        {},
        {
          withCredentials: true,
        }
      );
      console.log("areyentraidi");
      showToastSetter(true);
      dispatch(removeRequests(_id));
      const timer = setTimeout(() => {
        showToastSetter(false);
      }, 3000);
      console.log("herererer");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (userRequsts?.length <= 0)
    return (
      <div className="text-center mt-10 font-bold text-3xl">
        No Connection For the Day
      </div>
    );

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-3xl text-900 font-bold mt-4">
          Your Review Requests
        </h1>
        {userRequsts?.map((eachItem) => (
          <UserCard
            key={eachItem._id}
            userData={eachItem.fromUserId}
            reviewRequest={reviewRequest}
          />
        ))}
      </div>
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Message sent successfully.</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Requests;
