import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import VideoLength from '../shared/VideoLength'

const SuggestionVideo = ({video}) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
    <div className="flex mt-3">
      <div className="relative h-24  lg:h-20 xl:h-24  w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:min-w-[168px rounded-xl bg-] overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={video?.thumbnails[0].url}
          alt=""
        />
        {video.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
      </div>
      <div className="flex flex-col ml-3 overflow-hidden text-white/[0.5]">
          <span className="text-sm font-bold text-white line-clamp-2">
            {video?.title}
          </span>
          <span className="text-[12px]  font-semibold mt-2 text-white/[0.7] flex items-center">
            {video?.author?.title}
            {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
              <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-2" />
            )}
          </span>
          <div className="flex  text-[12px]  font-semibold mt-2 truncate overflow-hidden text-white/[0.7]">
            <span>{video?.stats?.views} views</span>
            <span className="mx-1">•</span>
            <span >{video?.publishedTimeText}</span>
          </div>
        </div>
    </div>
  </Link>
  )
}

export default SuggestionVideo