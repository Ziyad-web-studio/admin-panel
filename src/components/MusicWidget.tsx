'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, Heart, Share2 } from 'lucide-react';
import clsx from 'clsx';

const SONGS = [
  {
    title: "Runaway",
    artist: "Kanye West",
    duration: "9:08",
    color: "from-amber-700 to-yellow-900"
  },
  {
    title: "Middle of the Night",
    artist: "Elley Duhé",
    duration: "3:04",
    color: "from-indigo-900 to-purple-900"
  },
  {
    title: "Another Love",
    artist: "Tom Odell",
    duration: "4:04",
    color: "from-blue-900 to-slate-900"
  }
];

export default function MusicWidget() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const currentSong = SONGS[currentSongIndex];

  const handleNext = () => {
    setCurrentSongIndex((prev) => (prev + 1) % SONGS.length);
  };

  const handlePrev = () => {
    setCurrentSongIndex((prev) => (prev - 1 + SONGS.length) % SONGS.length);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-80 h-80 bg-black/80 backdrop-blur-2xl rounded-[2.5rem] p-6 shadow-2xl flex flex-col justify-between overflow-hidden group hover:scale-[1.02] transition-transform duration-500"
    >
      {/* Background Ambience */}
      <div className={clsx("absolute inset-0 opacity-40 bg-gradient-to-br transition-colors duration-1000", currentSong.color)} />

      {/* Header */}
      <div className="relative z-10 flex justify-between items-start text-white/80">
        <div className="flex items-center gap-3 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
           <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-[10px] font-bold text-white shadow-inner">
             {currentSong.artist[0]}
           </div>
           <div className="flex flex-col">
             <span className="text-[10px] uppercase tracking-wider font-bold opacity-70">Now Playing</span>
             <span className="text-xs font-semibold leading-none">{currentSong.artist}</span>
           </div>
        </div>
        <div className="flex gap-3">
          <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors backdrop-blur-md">
            <Share2 size={16} />
          </button>
          <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors backdrop-blur-md">
            <Heart size={16} />
          </button>
        </div>
      </div>

      {/* Album Art / Center Visual */}
      <div className="relative z-10 flex-grow flex items-center justify-center py-4">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentSong.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className={clsx(
              "w-40 h-40 rounded-2xl shadow-2xl bg-gradient-to-br flex items-center justify-center text-center p-4",
              currentSong.color
            )}
          >
            <span className="text-white font-bold text-xl drop-shadow-md">{currentSong.title}</span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="relative z-10 space-y-4">
        {/* Progress */}
        <div className="space-y-1">
          <div className="relative h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-white rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: isPlaying ? "100%" : "30%" }}
              transition={{ duration: isPlaying ? 30 : 0, ease: "linear" }}
            />
          </div>
          <div className="flex justify-between text-[10px] font-medium text-white/60 font-mono">
            <span>0:52</span>
            <span>-{currentSong.duration}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center px-2">
          <button onClick={handlePrev} className="text-white/80 hover:text-white transition-colors hover:scale-110 active:scale-95">
            <SkipBack size={24} fill="currentColor" />
          </button>

          <button
            onClick={handlePlayPause}
            className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg shadow-white/10"
          >
            {isPlaying ? (
              <Pause size={24} fill="currentColor" />
            ) : (
              <Play size={24} fill="currentColor" className="ml-1" />
            )}
          </button>

          <button onClick={handleNext} className="text-white/80 hover:text-white transition-colors hover:scale-110 active:scale-95">
            <SkipForward size={24} fill="currentColor" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
