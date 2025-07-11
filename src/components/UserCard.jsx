import React from "react";

const UserCard = (props) => {
  const { userData, reviewRequest } = props;
  console.log(userData, "for User Data");
  const { _id, firstName, lastName, age, gender, about, skills, profileUrl } =
    userData;

  const callReviewFunction = (_id, status) => {
    reviewRequest(_id, status);
  };

  return (
    <div className="card bg-base-100  shadow-sm  flex flex-row w-2/4  items-center justify-between border-1 p-4 m-2 shadow-amber-200">
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
      </div>
      <div className="card-actions justify-between items-center">
        <button
          className="btn btn-primary mr-3"
          onClick={() => callReviewFunction(_id, "rejected")}
        >
          Reject
        </button>
        <button
          className="btn btn-info"
          onClick={() => callReviewFunction(_id, "accepted")}
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default UserCard;
