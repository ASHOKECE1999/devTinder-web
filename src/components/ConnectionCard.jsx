import React from "react";

const ConnectionCard = (props) => {
  const { cardData } = props;
  //   console.log(cardData);
  return (
    <div className="card card-side bg-base-300 shadow-md border border-amber-200 p-4 max-w-full w-2/4 flex  items-center m-4">
      <img
        // src={cardData?.profileUrl}
        src="https://tse2.mm.bing.net/th/id/OIP.EGjTTyWUXL8QzUeUyUFcrgHaE8?pid=Api&P=0&h=180"
        alt="profileUrl"
        className="w-34 rounded-2xl object-cover"
      />

      <div className="card-body flex-grow space-y-2 flex flex-col justify-start items-start">
        <h2 className="card-title text-2xl font-bold text-primary">
          {cardData?.firstName} {cardData?.lastName}
        </h2>
        <h1>{cardData?.about}</h1>
        <h1>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum alias
          error
        </h1>
      </div>
    </div>
  );
};

export default ConnectionCard;
