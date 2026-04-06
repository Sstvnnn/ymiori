"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Palette,
  Image as ImageIcon,
  HeartHandshake,
} from "lucide-react";

import HomeTab from "@/components/HomeTab";
import CommissionsTab from "@/components/CommissionsTab";
import GalleryTab from "@/components/GalleryTab";

type Tab = "home" | "commissions" | "gallery";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<Tab>("home");

  const tabs = [
    { id: "home", label: "Profile", icon: <Sparkles className="w-4 h-4" /> },
    {
      id: "commissions",
      label: "Comms",
      icon: <HeartHandshake className="w-4 h-4" />,
    },
    {
      id: "gallery",
      label: "Gallery",
      icon: <ImageIcon className="w-4 h-4" />,
    },
  ] as const;

  return (
    <main className="min-h-screen w-full bg-[#fdfafb] flex flex-col items-center justify-center p-4 md:p-8 font-sans selection:bg-[#ffb6c1] selection:text-white overflow-hidden relative">
      {/* Animated Background Elements (Sylveon Colors) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-[#ffd1dc] to-[#ffb6c1] blur-[100px] opacity-50 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tl from-[#c1e7f8] to-[#9de0ff] blur-[120px] opacity-40"></div>

      {/* FLOATING NAVIGATION DOCK */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        className="mb-6 bg-white/70 backdrop-blur-xl p-2 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white flex gap-2 z-10"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as Tab)}
            className={`relative flex items-center gap-2 px-5 py-2.5 text-sm font-bold font-mono rounded-full transition-all duration-300 z-10
              ${activeTab === tab.id ? "text-white" : "text-[#89a1c5] hover:text-[#ff8ba7]"}`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="nav-bubble"
                className="absolute inset-0 bg-gradient-to-r from-[#ff8ba7] to-[#ffb6c1] rounded-full -z-10 shadow-md"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
            {tab.icon}
            <span className="capitalize">{tab.label}</span>
          </button>
        ))}
      </motion.nav>

      {/* MAIN CONTENT CARD (Glassmorphism Trainer Card) */}
      <motion.div
        layout
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
        className="w-full max-w-3xl bg-white/60 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(255,182,193,0.4)] border border-white/80 rounded-[2rem] overflow-hidden flex flex-col max-h-[85vh] relative z-10"
      >
        <motion.div
          layout
          className="p-6 md:p-8 overflow-y-auto scrollbar-hide flex-1"
        >
          <AnimatePresence mode="wait">
            {activeTab === "home" && <HomeTab key="home" />}
            {activeTab === "commissions" && (
              <CommissionsTab key="commissions" />
            )}
            {activeTab === "gallery" && <GalleryTab key="gallery" />}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </main>
  );
}
