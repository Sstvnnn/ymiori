import { motion } from "framer-motion";
import { MapPin, Globe, Sparkles } from "lucide-react";

export default function HomeTab() {
  return (
    <motion.div
      key="home"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col w-full h-full gap-6"
    >
      {/* MAIN TRAINER CARD */}
      <div className="bg-white border-4 border-[#ffb6c1] rounded-2xl shadow-[8px_8px_0px_#ffd1dc] overflow-hidden flex flex-col md:flex-row relative">
        {/* Retro Header Bar (Mobile only, hidden on desktop for layout) */}
        <div className="bg-[#ffb6c1] text-white font-mono font-bold px-4 py-1.5 flex justify-between items-center text-xs tracking-widest uppercase md:hidden border-b-4 border-[#ffb6c1]">
          <span>★ PROFILE.EXE</span>
          <span>{">__<"}</span>
        </div>

        {/* LEFT: Avatar & Base Info */}
        <div className="bg-[#fff0f3] p-6 flex flex-col items-center justify-center border-b-4 md:border-b-0 md:border-r-4 border-[#ffb6c1] shrink-0 relative overflow-hidden">
          {/* Decorative background grid */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(#ff8ba7 2px, transparent 2px)",
              backgroundSize: "16px 16px",
            }}
          ></div>

          <motion.div
            whileHover={{ scale: 1.05, rotate: -3 }}
            className="w-32 h-32 md:w-40 md:h-40 bg-white border-4 border-[#ff8ba7] shadow-[6px_6px_0px_#ffd1dc] overflow-hidden mb-4 relative z-10"
          >
            <img
              src="/ymiori_pfp.jpeg"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <h1 className="text-3xl font-black text-[#ff8ba7] tracking-tight mb-1 relative z-10">
            ymiori
          </h1>
          <div className="bg-white text-[#ff8ba7] px-3 py-1 text-xs font-mono font-bold border-2 border-[#ff8ba7] shadow-[2px_2px_0px_#ffd1dc] relative z-10">
            DIGITAL ARTIST
          </div>
        </div>

        {/* RIGHT: Stats & Bio */}
        <div className="p-6 flex-1 flex flex-col bg-white">
          <div className="hidden md:flex justify-between items-center border-b-4 border-dashed border-[#ffd1dc] pb-3 mb-4 text-[#ff8ba7] font-mono font-bold text-sm tracking-widest">
            <span>★ PROFILE</span>
            <span>{":p"}</span>
          </div>

          <div className="text-sm text-gray-500 font-mono mb-4 flex flex-wrap gap-4">
            <span className="flex items-center gap-1 bg-[#f0f7ff] border-2 border-[#c1e7f8] px-2 py-1 shadow-[2px_2px_0px_#c1e7f8]">
              <Globe className="w-3 h-3" /> ENG/INDO/中文
            </span>
            <span className="flex items-center gap-1 bg-[#f0f7ff] border-2 border-[#c1e7f8] px-2 py-1 shadow-[2px_2px_0px_#c1e7f8]">
              <MapPin className="w-3 h-3" /> MY-ID
            </span>
          </div>

          <p className="text-gray-600 leading-relaxed text-sm font-mono bg-gray-50 border-2 border-gray-200 p-3 shadow-[4px_4px_0px_#e5e7eb] mb-6">
            {"> "} Hello! I&apos;m a self-taught digital illustrator. I
            specialize in cute, pastel aesthetics and soft character designs.
          </p>

          {/* Socials Block */}
          <div className="mt-auto flex gap-3">
            <SocialIcon icon={<TwitterIcon />} link="#" color="text-sky-400" />
            <SocialIcon
              icon={<DiscordIcon />}
              link="#"
              color="text-indigo-400"
            />
            <SocialIcon
              icon={<InstagramIcon />}
              link="#"
              color="text-pink-500"
            />
          </div>
        </div>
      </div>

      {/* BOTTOM STATUS TABS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Likes Tab */}
        <div className="bg-white border-4 border-[#c1e7f8] rounded-xl shadow-[6px_6px_0px_#9de0ff] p-4">
          <h3 className="text-xs font-black text-[#6fb9de] uppercase tracking-widest mb-3 border-b-2 border-dashed border-[#c1e7f8] pb-1">
            ► LIKES
          </h3>
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            <span className="bg-[#f0f7ff] text-[#6fb9de] border-2 border-[#c1e7f8] px-2 py-1">
              pink & blue
            </span>
            <span className="bg-[#f0f7ff] text-[#6fb9de] border-2 border-[#c1e7f8] px-2 py-1">
              coffee
            </span>
            <span className="bg-[#f0f7ff] text-[#6fb9de] border-2 border-[#c1e7f8] px-2 py-1">
              pokemon
            </span>
          </div>
        </div>

        {/* Status Tab */}
        <div className="bg-white border-4 border-[#ffb6c1] rounded-xl shadow-[6px_6px_0px_#ffd1dc] p-4">
          <h3 className="text-xs font-black text-[#ff8ba7] uppercase tracking-widest mb-3 border-b-2 border-dashed border-[#ffb6c1] pb-1">
            ► STATUS
          </h3>
          <div className="space-y-2 font-mono text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">COMMS</span>
              <span className="text-[#4ade80] font-bold flex items-center gap-2">
                <div className="w-2 h-2 bg-[#4ade80] shadow-[0_0_8px_#4ade80] animate-pulse"></div>{" "}
                OPEN
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">WAITLIST</span>
              <span className="text-[#ff8ba7] font-bold">2 SLOTS</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SocialIcon({
  icon,
  link,
  color,
}: {
  icon: React.ReactNode;
  link: string;
  color: string;
}) {
  return (
    <a
      href={link}
      className={`p-2 bg-white border-2 border-gray-200 shadow-[2px_2px_0px_#e5e7eb] hover:-translate-y-1 hover:shadow-[4px_4px_0px_#e5e7eb] transition-all duration-200 ${color}`}
    >
      {icon}
    </a>
  );
}

// Custom SVGs
function TwitterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function DiscordIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
    </svg>
  );
}
