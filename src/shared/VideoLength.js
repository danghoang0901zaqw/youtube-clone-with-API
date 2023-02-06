import React from "react";
import moment from "moment";

const VideoLength = ({ time }) => {
  const videoLengthInSeconds = moment()
    .startOf("day")
    .seconds(time)
    .format("mm:ss");
  return (
    <div className="absolute bottom-2 right-2 bg-[#0f0f0f] text-white py-1 px-2 text-xs rounded-md ">
      {videoLengthInSeconds}
    </div>
  );
};

export default VideoLength;
