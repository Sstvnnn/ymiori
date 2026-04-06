import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X, ImagePlus } from "lucide-react";

// (Keep your artworks mock data array here)
const artworks = [
  { id: 1, src: "/biyoo.jpg", heightClass: "h-64", title: "Biyoo V1" },
  { id: 2, src: "/biyoo2.jpg", heightClass: "h-80", title: "Biyoo V2" },
  { id: 3, src: "/Sylveon.jpg", heightClass: "h-48", title: "Sylveon" },
  {
    id: 4,
    src: "/FullBody.jpg",
    heightClass: "h-72",
    title: "Full Body Comms",
  },
  { id: 5, src: "/ThighUp.jpg", heightClass: "h-96", title: "Comms 2" },
  {
    id: 6,
    src: "/BustUp.jpg",
    heightClass: "h-56",
    title: "Comms that i like",
  },
];

export default function GalleryTab() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <>
      <motion.div
        key="gallery"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {/* REWORKED HEADER - Clean, Retro Text */}
        <div className="flex justify-center mb-8">
          <h2 className="text-2xl md:text-3xl font-black tracking-widest text-[#ff8ba7] uppercase font-mono border-b-4 border-dashed border-[#ffd1dc] pb-2 flex items-center gap-3">
            <ImagePlus className="w-6 h-6 md:w-8 md:h-8" />
            ARTWORKS
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="columns-2 md:columns-3 gap-6 space-y-6 pb-4"
        >
          {artworks.map((art, index) => {
            const rotation = index % 2 === 0 ? 2 : -2;

            return (
              <motion.div
                key={art.id}
                variants={itemVariants}
                layoutId={`artwork-${art.id}`}
                onClick={() => setSelectedId(art.id)}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                initial={{ rotate: rotation }}
                className={`relative group bg-white p-2 md:p-3 pb-8 md:pb-12 border-4 border-gray-100 shadow-[4px_4px_0px_#e5e7eb] hover:shadow-[6px_6px_0px_#ffd1dc] hover:border-[#ffb6c1] transition-all cursor-pointer break-inside-avoid ${art.heightClass}`}
              >
                <div className="w-full h-full overflow-hidden border-2 border-gray-100 bg-gray-50">
                  <img
                    src={art.src}
                    alt={art.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="absolute bottom-2 md:bottom-3 left-0 w-full text-center">
                  <span className="text-xs md:text-sm text-gray-500 font-mono italic tracking-wide">
                    {art.title}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Lightbox Modal (unchanged, just updated close button shadow) */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#fdfafb]/80 backdrop-blur-sm p-4 md:p-8"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, transition: { delay: 0.2 } }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 md:top-8 md:right-8 p-3 bg-white text-[#ff8ba7] border-4 border-[#ffb6c1] shadow-[4px_4px_0px_#ffd1dc] hover:translate-y-1 hover:shadow-[2px_2px_0px_#ffd1dc] transition-all z-[60]"
              onClick={() => setSelectedId(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              layoutId={`artwork-${selectedId}`}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white p-4 border-4 border-[#c1e7f8] shadow-[8px_8px_0px_#9de0ff] overflow-hidden flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={artworks.find((a) => a.id === selectedId)?.src}
                alt="Expanded artwork"
                className="w-full h-auto max-h-[85vh] object-contain border-2 border-gray-100"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
