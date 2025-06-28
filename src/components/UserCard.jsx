import React from "react";

const UserCard = (props) => {
  const { userData } = props;
  const { firstName, lastName, age, gender, about, skills, profileUrl } =
    userData;
  return (
    <div className="card bg-base-100 max-w-96 min-w-96 shadow-sm w-96 h-96 flex items-center border-1 p-4 m-2 shadow-amber-200">
      <img
        src={profileUrl}
        alt="ProfileUrl"
        className="h-40 w-40 rounded-4xl"
      />

      <div className="card-body">
        <h2 className="card-title">
          {firstName} {lastName}
        </h2>
        <p>{about}</p>
        <h2>Gender :{gender}</h2>

        <div className="card-actions justify-center">
          <button className="btn btn-primary">Reject</button>
          <button className="btn btn-info">Accept</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
