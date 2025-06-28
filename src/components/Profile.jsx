import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-sm mx-3 border-amber-50 border-2 p-2 mt-4">
        <img src={user.profileUrl} alt="Movie" className="w-1/4 rounded-4xl" />

        <div className="card-body">
          <h2 className="card-title font-extrabold">{user.firstName}</h2>
          <p>{user.lastName}</p>
          <p>{user.gender}</p>
          <p>{user.about}</p>
          <p>🤹{user?.skills?.map((each) => each + " ")}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
