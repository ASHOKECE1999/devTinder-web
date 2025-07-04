import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { BASE_FETCH_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  // console.log(user);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    if (user) return null;
    try {
      const user = await axios.get(BASE_FETCH_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(user.data));
      // console.log(user.data);
    } catch (error) {
      if (error.status === 401) {
        navigate("/login");
      }
      console.error(err);
    }
  };

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
