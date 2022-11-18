import React from "react";

const Loading = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="border border-dashed border-black w-16 h-9 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
