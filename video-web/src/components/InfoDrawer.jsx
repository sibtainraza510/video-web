


import { motion } from "framer-motion";

export default function InfoDrawer({ video, onClose }) {
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 bg-white p-4 z-50 rounded-t-2xl shadow-xl"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-4 text-black font-bold"
      >
        X
      </button>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">{video.title}</h2>
        <p className="text-gray-600 mt-2">{video.description}</p>
        <img
          src={video.thumbnail}
          alt="Thumbnail"
          className="mt-4 w-full h-40 object-cover rounded"
        />
      </div>
    </motion.div>
  );
}
