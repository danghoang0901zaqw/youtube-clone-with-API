import React, { useContext, useEffect } from "react";
import LeftNav from "./LeftNav";
import { Context } from "../context/contextApi";
import VideoCard from "./VideoCard";

const Feed = () => {
  const { loading, searchResult } = useContext(Context);

  useEffect(()=>{
    document.getElementById('root').classList.remove('custom-h')
  },[])
    return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow overflow-y-auto h-[100vh] bg-[#0f0f0f]  w-[calc(100%-300px] w-full ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!loading && searchResult &&
            searchResult?.map((item) => {
              if (item?.type !== "video") return false;
              return (
                <VideoCard key={item?.video?.videoId} video={item?.video} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
