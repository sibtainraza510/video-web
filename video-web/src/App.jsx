
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VideoCard from "./components/VideoCard";
import InfoDrawer from "./components/InfoDrawer";
import videoData from "./data/videos";

export default function App() {
  const [current, setCurrent] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const nextVideo = () => {
    if (current < videoData.length - 1) setCurrent(current + 1);
  };

  const prevVideo = () => {
    if (current > 0) setCurrent(current - 1);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") nextVideo();
      if (e.key === "ArrowUp") prevVideo();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [current]);

  return (
    <div className="w-screen h-screen overflow-hidden bg-black relative">
      {/* Navigation Buttons */}
      <div className="absolute top-1/2 right-4 z-50 flex flex-col gap-4">
        <button
          onClick={prevVideo}
          className="bg-white text-black px-3 py-1 rounded shadow"
        >
          ↑ Prev
        </button>
        <button
          onClick={nextVideo}
          className="bg-white text-black px-3 py-1 rounded shadow"
        >
          ↓ Next
        </button>
      </div>

      <div
        className="w-full h-full overflow-y-scroll snap-y snap-mandatory"
        onWheel={(e) => {
          if (e.deltaY > 0) nextVideo();
          else prevVideo();
        }}
      >
        {videoData.map((video, index) => (
          <div
            key={video.id}
            className="snap-start w-full h-screen"
            style={{ display: index === current ? "block" : "none" }}
          >
            <VideoCard
              video={video}
              onMoreInfo={() => setSelectedVideo(video)}
            />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <InfoDrawer
            video={selectedVideo}
            onClose={() => setSelectedVideo(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
