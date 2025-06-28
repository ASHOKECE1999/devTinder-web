import React, { useState } from "react";
import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const [showToast, showToastSetter] = useState(false);

  return (
    <>
      {showToast && (
        <div className="toast toast-top toast-center mt-10">
          <div className="alert alert-success">
            <span>Profile saved successfully.</span>
          </div>
        </div>
      )}
      <div className="min-h-screen flex items-center  bg-base-200">
        <EditProfile showToastCall={showToastSetter} />
        <div className="card card-side bg-base-100 shadow-md border border-amber-200 p-4 max-w-xl w-1/4 flex flex-col items-center">
          <img
            src={user?.profileUrl}
            alt={`${user?.firstName} profile`}
            className="w-34 rounded-2xl object-cover"
          />

          <div className="card-body flex-grow space-y-2">
            <h2 className="card-title text-2xl font-bold text-primary">
              {user?.firstName} {user?.lastName}
            </h2>
            <p className="text-sm text-gray-600">{user?.gender}</p>
            <p className="text-base text-gray-600">{user?.about}</p>

            {user?.skills?.length > 0 && (
              <p className="text-sm text-gray-700">
                <span className="font-semibold">🤹 Skills:</span>{" "}
                {user?.skills?.join(", ")}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
