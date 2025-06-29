import axios from "axios";
import React, { useEffect } from "react";
import { BASE_FETCH_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addFeed, removeFeed } from "../utils/feedSlice";
import FeedCard from "./FeedCard";
import { Link } from "react-router-dom";

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

  const reviewRequest = async (_id, status) => {
    try {
      const reviewConnnectionRequest = await axios.post(
        BASE_FETCH_URL + "/request/send/" + status + "/" + _id,
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeFeed(_id));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFeedData();
  }, []);

  if (feedData?.length <= 0)
    return (
      <div className="font-bold text-3xl text-center text-green-700">
        No Feed Items There !!! Wait a While !!!
      </div>
    );
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 self-end mr-28 mt-3">
        {/* Blinking dot */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
        </span>

        {/* Gemini Label or Icon */}
        <Link to="chatwithai">
          <span className="text-sm font-medium text-red-700">
            Chat Gemini AI
          </span>
        </Link>
      </div>

      {feedData[0] && (
        <div className="flex items-center flex-row flex-wrap justify-center">
          <FeedCard
            key={feedData[0]._id}
            userData={feedData[0]}
            reviewRequest={reviewRequest}
          />
        </div>
      )}
    </div>
  );
};

export default FeedPage;
