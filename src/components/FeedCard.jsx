import React from "react";

const FeedCard = (props) => {
  const { userData, reviewRequest } = props;
  console.log(userData, "for User Data");
  const { _id, firstName, lastName, age, gender, about, skills, profileUrl } =
    userData;

  const callReviewFunction = (_id, status) => {
    reviewRequest(_id, status);
  };

  return (
    <div className="card bg-base-100  shadow-sm  flex flex-col w-96 h-96  items-center justify-between border-1 p-4 m-2 shadow-amber-200">
      <img
        src={profileUrl}
        alt="ProfileUrl"
        className="h-40 w-40 rounded-4xl"
      />

      <div className="card-body flex items-center justify-center flex-col">
        <h2 className="card-title">
          {firstName} {lastName}
        </h2>
        <p>{about}</p>
        <h2>Gender :{gender}</h2>
        <div className="card-actions justify-center">
          <button
            className="btn btn-primary"
            onClick={() => callReviewFunction(_id, "ignored")}
          >
            Ignore
          </button>
          <button
            className="btn btn-info"
            onClick={() => callReviewFunction(_id, "interested")}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
