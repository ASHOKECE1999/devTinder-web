import axios from "axios";
import React, { useEffect } from "react";
import { BASE_FETCH_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const FeedPage = () => {
  const dispatch = useDispatch();
  const feedData = useSelector((state) => state.feed);
  const getFeedData = async () => {
    try {
      const feedData = await axios.get(BASE_FETCH_URL + "/user/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(feedData.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFeedData();
  }, []);
  return (
    <div>
      {feedData && (
        <div className="flex items-center flex-row flex-wrap">
          {feedData.map((userData) => (
            <UserCard key={userData._id} userData={userData} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FeedPage;
