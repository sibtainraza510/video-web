

import { FaHeart, FaComment, FaShare } from "react-icons/fa";

export default function VideoCard({ video, onMoreInfo }) {
  return (
    <div className="relative w-full h-full">
      <video
        src={video.url}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
      />

      <div className="absolute bottom-10 left-5 text-white space-y-3">
        <p className="text-lg font-semibold">@{video.creator}</p>
        <div className="flex gap-4 text-xl">
          <button><FaHeart /> {video.likes}</button>
          <button><FaComment /> {video.comments}</button>
          <button><FaShare /></button>
        </div>
        <button
          onClick={onMoreInfo}
          className="bg-white text-black px-3 py-1 rounded mt-2"
        >
          More Info
        </button>
      </div>
    </div>
  );
}