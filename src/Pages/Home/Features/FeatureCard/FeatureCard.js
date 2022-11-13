import React from "react";

const FeatureCard = ({features}) => {
    const {name, description, icon, bgClass} = features
  return (
    <div>
      <div className={`${bgClass} rounded-md flex lg:flex-row flex-col p-4 items-center justify-center`}>
        <div className="p-7 text-white text-7xl">
          <span>
            <img src={icon} alt="" />
          </span>
        </div>
        <div className="text-start w-full">
          <div className="text-white text-xl">{ name && name}</div>
          <div className="text-white">
            {description && description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
