"use client";

import { motion } from "framer-motion";
import { X, Play } from "lucide-react";

export function DemoPlayground({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-sm">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Close button top right */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-10"
      >
        <X className="w-6 h-6" />
      </button>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-5xl aspect-video bg-[#0a0a0a] rounded-2xl shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col ring-1 ring-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Browser Chrome (macOS style) */}
        <div className="bg-[#18181b] border-b border-white/10 flex flex-col select-none relative z-10">
          <div className="h-12 flex items-center px-4">
            {/* Traffic lights */}
            <div className="flex items-center gap-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e] cursor-pointer hover:opacity-80" onClick={onClose} />
              <div className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d89f2c]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29]" />
            </div>
            
            {/* Centered Title */}
            <div className="flex-1 flex justify-center">
              <div className="bg-black/40 border border-white/5 rounded-md px-4 py-1.5 flex items-center gap-2 text-[11px] text-slate-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                TabGuru — Demo Video
              </div>
            </div>
            
            {/* Spacer to balance traffic lights */}
            <div className="w-[52px]" />
          </div>
        </div>

        {/* Video Viewport */}
        <div className="flex-1 relative bg-[#0f0f13] flex items-center justify-center">
          {/* Replace src with your actual demo video path */}
          <video 
            autoPlay 
            loop 
            muted 
            controls
            className="w-full h-full object-contain relative z-10"
          >
            {/* 
              When you record your demo, put the .mp4 file in the 'public' folder 
              and uncomment the line below.
            */}
            {/* <source src="/demo.mp4" type="video/mp4" /> */}
            Your browser does not support the video tag.
          </video>

          {/* Placeholder state when no video is loaded */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0f0f13] pointer-events-none z-0">
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
              <Play className="w-6 h-6 text-slate-400 translate-x-0.5" />
            </div>
            <p className="text-slate-400 text-sm font-medium">Drop your demo.mp4 in the public folder</p>
            <p className="text-slate-500 text-xs mt-2 text-center max-w-sm">
              Then uncomment the &lt;source&gt; tag in <br/>src/components/DemoPlayground.tsx
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
