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
      <div className="indicator self-end  mr-20 mt-4">
        <span className="indicator-item indicator-center badge badge-secondary"></span>
        <div className="bg-base-300 grid h-20 w-20 place-items-center rounded-full ">
          <Link to="chatwithai">💬Ai</Link>
        </div>
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
