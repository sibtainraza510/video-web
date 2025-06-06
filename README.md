LIVE at netlify ::
https://video-thr-web.netlify.app/

STEPS TO RUN ::

1; Clone the repository
git clone https://github.com/your-username/vertical-video-feed.git
cd vertical-video-feed

2; Install dependencies
npm install

3; Setup Tailwind CSS
  Install Tailwind CSS
  npm install tailwindcss @tailwindcss/vite

  Configure the Vite plugin (in vite.congif.ts);
  import { defineConfig } from 'vite'
  import tailwindcss from '@tailwindcss/vite' // add this line
  export default defineConfig({
  plugins: [
    tailwindcss(), //add this line
  ],
})

  Import Tailwind CSS (in all css files)
  @import "tailwindcss";


4; Start the development server
npm run dev


## Vertical Video Feed Web App

A responsive fullscreen vertical video feed web app (like Instagram Reels or TikTok), built using React + Vite, Tailwind CSS, and Framer Motion. Users can scroll or use keyboard arrows to switch videos, with action overlays and a smooth info drawer.

 ## Features

Fullscreen video feed (one video per view)
Creator name, like/comment/share buttons
"More Info" drawer with video details
Keyboard navigation (Arrow Up/Down)
Navigation buttons for next/previous video
Smooth transitions using Framer Motion
Fully responsive across devices

## Tech Stack

React.js (via Vite)
Tailwind CSS
Framer Motion
React Icons
