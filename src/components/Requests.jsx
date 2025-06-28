import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BASE_FETCH_URL } from "../utils/constant";

import { addRequests } from "../utils/requestSlice";
import Profile from "./Profile";
import UserCard from "./UserCard";

const Requests = () => {
  const dispatch = useDispatch();
  const userRequsts = useSelector((state) => state.requests);
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
      console.log(request.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  useEffect(() => {}, []);

  return (
    <div>
      {userRequsts?.map((eachItem) => (
        <UserCard key={eachItem._id} userData={eachItem.fromUserId} />
      ))}
    </div>
  );
};

export default Requests;
