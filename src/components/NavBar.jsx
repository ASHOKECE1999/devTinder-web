import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_FETCH_URL } from "../utils/constant";
import { removeUser } from "../utils/userSlice";

const NavBar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(user);

  const logoutprofile = async () => {
    try {
      await axios.post(
        BASE_FETCH_URL + "/logout",
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeUser());
      navigate("/login");

      return;
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <div className="navbar bg-base-300 shadow-sm">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            👩‍💻 DevTinder
          </Link>
        </div>

        {user && (
          <div className="flex gap-2 justify-center items-center">
            <div>Welcome {user.firstName}</div>
            <div className="dropdown dropdown-end mx-5">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full ring-primary ring-offset-base-100  ring-2 ring-offset-2">
                  <img alt="profileURL" src={user.profileUrl} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link to="/connections">Connections</Link>
                </li>
                <li>
                  <Link to="/requests">Requestes</Link>
                </li>
                <li>
                  <a onClick={logoutprofile}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
