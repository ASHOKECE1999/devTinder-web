import axios from "axios";
import React, { useEffect } from "react";
import { BASE_FETCH_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addConncetion, removeConnection } from "../utils/connectionSlice";
import ConnectionCard from "./ConnectionCard";

const Connections = () => {
  const dispatch = useDispatch();
  const connection = useSelector((state) => state.connections);
  console.log(connection);
  const getConnection = async () => {
    try {
      const connection = await axios.get(BASE_FETCH_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConncetion(connection.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getConnection();
  }, []);
  if (connection?.length === 0)
    return (
      <div className="font-warning text-center mt-8 text-green-800 text-3xl font-bold">
        No Connection Found
      </div>
    );

  return (
    <div className=" flex-col items-center justify-center p-3 text-center">
      <h1 className="font-bold text-3xl text-green-700">Your Connections</h1>
      {connection?.length > 0 && (
        <div className="flex flex-col items-center w-full">
          {connection.map((eachItem) => (
            <ConnectionCard key={eachItem._id} cardData={eachItem} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Connections;
