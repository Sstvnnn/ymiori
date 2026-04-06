import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Terminal,
  Star,
  AlertTriangle,
  Store,
  Zap,
  DollarSign,
} from "lucide-react";

export default function CommissionsTab() {
  const [activeSubTab, setActiveSubTab] = useState<"tos" | "pricing">("tos");

  return (
    <motion.div
      key="commissions"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col w-full h-full"
    >
      {/* RETRO FOLDER TABS NAVIGATION */}
      <div className="flex gap-3 mb-6 relative z-10">
        <button
          onClick={() => setActiveSubTab("tos")}
          className={`flex-1 py-2.5 px-4 font-mono font-black tracking-widest text-sm md:text-base border-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 ${
            activeSubTab === "tos"
              ? "bg-[#ffb6c1] text-white border-[#ff8ba7] translate-y-[2px] shadow-[2px_2px_0px_#ffd1dc]"
              : "bg-white text-[#ff8ba7] border-[#ffd1dc] hover:-translate-y-1 hover:shadow-[4px_4px_0px_#ffd1dc]"
          }`}
        >
          <Terminal className="w-5 h-5" /> TOS & FEES
        </button>
        <button
          onClick={() => setActiveSubTab("pricing")}
          className={`flex-1 py-2.5 px-4 font-mono font-black tracking-widest text-sm md:text-base border-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 ${
            activeSubTab === "pricing"
              ? "bg-[#6fb9de] text-white border-[#6fb9de] translate-y-[2px] shadow-[2px_2px_0px_#c1e7f8]"
              : "bg-white text-[#6fb9de] border-[#c1e7f8] hover:-translate-y-1 hover:shadow-[4px_4px_0px_#c1e7f8]"
          }`}
        >
          <Star className="w-5 h-5" /> PRICING
        </button>
      </div>

      {/* DYNAMIC CONTENT AREA */}
      <div className="relative">
        <AnimatePresence mode="wait">
          {activeSubTab === "tos" && <TosAndFeesView key="tos" />}
          {activeSubTab === "pricing" && <PricingView key="pricing" />}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ==========================================
// VIEW 1: TOS & EXTRA FEES
// ==========================================
function TosAndFeesView() {
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <motion.div
      variants={containerVars}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, x: 20, transition: { duration: 0.2 } }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {/* Terms of Service "Alert Box" */}
      <motion.div
        variants={itemVars}
        className="bg-white border-4 border-[#ffb6c1] rounded-xl shadow-[8px_8px_0px_#ffd1dc] flex flex-col h-full overflow-hidden"
      >
        {/* Retro Caution Stripe Header */}
        <div className="relative bg-[#ffb6c1] overflow-hidden">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.2)_10px,rgba(255,255,255,0.2)_20px)]"></div>
          <div className="relative px-4 py-3 text-white font-mono font-black tracking-widest text-sm flex items-center justify-between border-b-4 border-[#ffb6c1] shadow-sm">
            <span className="flex items-center gap-2 drop-shadow-sm">
              <AlertTriangle className="w-5 h-5" /> TOS
            </span>
          </div>
        </div>

        <div className="p-4 md:p-5 flex-1 bg-white">
          <ul className="space-y-1 font-mono text-xs md:text-sm text-gray-700">
            <ToSItem text="for personal use with credits!" />
            <ToSItem text="artstyle may differ depending on character's colors and complexity" />
            <ToSItem text="you may ask for a rough estimate" />
            <ToSItem text="ill be prioritizing school, so please dont rush me, you can still ask for updates!!" />
            <ToSItem text="I don't take deadlines for now! - miori is dying from college assignments already" />
            <ToSItem text="full payment before I start" />
            <ToSItem text="half upfront and half after sketch are allowed for commissions over $200" />
            <ToSItem text="i only use paypal & kofi for usd transactions, if you don't have paypal, i can send an invoice which can be paid by a card / bank!" />
            <ToSItem text="i'm allowed to post the comm unless privated" />
            <ToSItem text="only minor changes after sketch is approved" />
            <ToSItem text="only simple backgrounds" />
            <ToSItem text="no refunds after I've started" />
          </ul>
        </div>
      </motion.div>

      {/* Extra Fees "Item Shop" */}
      <div className="flex flex-col gap-4">
        {/* Shop Header */}
        <motion.div
          variants={itemVars}
          className="bg-[#f0f7ff] border-4 border-dashed border-[#c1e7f8] p-3 rounded-lg text-center flex items-center justify-center gap-2 text-[#6fb9de] font-mono font-black tracking-widest shadow-sm"
        >
          <DollarSign className="w-5 h-5" /> EXTRA FEES
        </motion.div>

        {/* Animated Fee Cards */}
        <FeeCard
          variants={itemVars}
          title="additional char."
          price="+100%"
          color="#c1e7f8"
          textColor="text-[#6fb9de]"
        />
        <FeeCard
          variants={itemVars}
          title="custom design"
          price="x1.5"
          color="#a3b1c6"
          textColor="text-[#89a1c5]"
        />
        <FeeCard
          variants={itemVars}
          title="private comm"
          price="+15%"
          color="#ffb6c1"
          textColor="text-[#ff8ba7]"
        />
        <FeeCard
          variants={itemVars}
          title="commercial use"
          price="x2"
          color="#ff8ba7"
          textColor="text-[#ff8ba7]"
          highlight
          badge="HOT!"
        />

        <motion.div
          variants={itemVars}
          className="mt-auto bg-[#fdfafb] border-4 border-dashed border-[#ffb6c1] p-3 rounded-xl text-center font-mono text-xs text-gray-500 shadow-sm"
        >
          Commercial use includes:{" "}
          <span className="font-bold text-[#ff8ba7]">
            merch, sales, ads, branding
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ==========================================
// VIEW 2: COMMISSION TYPES (PRICING)
// ==========================================
function PricingView() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* PASSING UNIQUE IMAGES TO EACH CARD HERE */}
        <PricingTCGCard
          title="Bust up"
          price="starts at $65"
          color="#c1e7f8"
          accent="#6fb9de"
          delay={0.1}
          imgSrc="/BustUp.jpg" // Change to your actual file name
        />
        <PricingTCGCard
          title="Thigh up"
          price="starts at $85"
          color="#ffd1dc"
          accent="#ff8ba7"
          delay={0.2}
          imgSrc="/ThighUp.jpg" // Change to your actual file name
        />
        <PricingTCGCard
          title="Full body"
          price="starts at $100"
          color="#e2e8f0"
          accent="#94a3b8"
          delay={0.3}
          imgSrc="/FullBody.jpg" // Change to your actual file name
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white border-4 border-[#ffb6c1] rounded-2xl shadow-[8px_8px_0px_#ffd1dc] overflow-hidden flex flex-col md:flex-row"
      >
        <div className="flex-1 p-6 border-b-4 md:border-b-0 md:border-r-4 border-[#ffb6c1] flex flex-col justify-center">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-mono font-black text-2xl text-[#ff8ba7] uppercase tracking-widest">
              Character Sheet
            </h3>
            <span className="bg-[#fff0f3] text-[#ff8ba7] px-3 py-1 font-bold font-mono text-sm border-2 border-[#ffb6c1] rotate-2 shadow-sm">
              $100+
            </span>
          </div>

          <p className="font-mono text-xs text-gray-500 mb-4 bg-gray-50 p-2 border-l-4 border-[#ffd1dc]">
            Includes a full body and a simple/doodle background.
          </p>

          <div className="font-mono text-sm space-y-1">
            <p className="font-bold text-[#ffb6c1] mb-1 text-[10px] uppercase tracking-widest">
              Base Inclusions:
            </p>
            <AddOnItem text="+ mascot/companion" price="free" />
            <AddOnItem text="+ info box" price="free" />

            <p className="font-bold text-[#ffb6c1] mt-4 mb-1 text-[10px] uppercase tracking-widest">
              Add-ons (Choose min 2):
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
              <AddOnItem text="+ headshot" price="$45" />
              <AddOnItem text="+ bust up" price="$60" />
              <AddOnItem text="+ thigh up" price="$80" />
              <AddOnItem text="+ half chibis" price="$25" />
              <AddOnItem text="+ full chibis" price="$45" />
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/5 min-h-[250px] bg-[#f0f7ff] p-4 flex items-center justify-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "radial-gradient(#c1e7f8 2px, transparent 2px)",
              backgroundSize: "16px 16px",
            }}
          ></div>

          {/* FLOATING & ZOOMING CHARACTER SHEET ANIMATION */}
          <motion.div
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-full h-full bg-white border-4 border-[#c1e7f8] rounded-xl shadow-[4px_4px_0px_#9de0ff] overflow-hidden relative z-10 group"
          >
            <img
              src="/CharacterSheet.jpg"
              alt="Character Sheet"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" // Zooms in when hovered
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ==========================================
// HELPER COMPONENTS
// ==========================================

function ToSItem({ text }: { text: string }) {
  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, x: -10 },
        show: { opacity: 1, x: 0 },
      }}
      className="flex items-start gap-3 group p-1.5 hover:bg-[#fff0f3] rounded-lg transition-colors cursor-default"
    >
      <div className="mt-0.5 font-bold text-[#ff8ba7] group-hover:translate-x-1 transition-transform shrink-0">
        ►
      </div>
      <span className="leading-relaxed border-b border-dashed border-transparent group-hover:border-[#ffd1dc] pb-1 w-full transition-colors">
        {text}
      </span>
    </motion.li>
  );
}

function FeeCard({
  title,
  price,
  color,
  textColor,
  highlight = false,
  badge,
  variants,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.02, x: 6 }}
      className="bg-white p-4 border-4 rounded-xl flex justify-between items-center transition-all cursor-pointer relative"
      style={{
        borderColor: color,
        boxShadow: highlight ? `4px 4px 0px ${color}` : `4px 4px 0px #e5e7eb`,
      }}
    >
      {badge && (
        <div className="absolute -top-3 -right-3 bg-white text-[#ff8ba7] px-2 py-0.5 border-2 border-[#ff8ba7] font-black text-[10px] tracking-widest rotate-6 animate-pulse shadow-sm">
          <Zap className="w-3 h-3 inline-block -mt-0.5 mr-0.5" />
          {badge}
        </div>
      )}

      <span className="font-mono font-bold text-gray-700 tracking-wider text-sm md:text-base">
        {title}
      </span>
      <span className={`font-black text-lg md:text-xl ${textColor}`}>
        {price}
      </span>
    </motion.div>
  );
}

function PricingTCGCard({
  title,
  price,
  color,
  accent,
  delay,
  imgSrc, // NEW PROP ACCEPTED HERE
}: {
  title: string;
  price: string;
  color: string;
  accent: string;
  delay: number;
  imgSrc: string; // DEFINED HERE
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-white p-3 rounded-2xl flex flex-col overflow-hidden cursor-pointer border-4 shadow-[6px_6px_0px_#e5e7eb] hover:shadow-[8px_8px_0px_#e5e7eb] transition-all group"
      style={{ borderColor: color }}
    >
      <div className="flex justify-between items-center mb-2 px-1">
        <span className="font-mono font-black tracking-widest text-gray-700 uppercase">
          {title}
        </span>
        <Star className="w-4 h-4" style={{ color: accent, fill: accent }} />
      </div>
      <div
        className="w-full aspect-square bg-gray-50 border-4 rounded-xl relative overflow-hidden flex flex-col items-center justify-center"
        style={{ borderColor: color }}
      >
        <img
          src={imgSrc} // USING THE UNIQUE IMAGE PROP
          alt={`${title} example`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" // Added a nice hover zoom effect here too!
        />
      </div>
      <div className="mt-3 flex justify-center">
        <div
          className="px-4 py-1.5 rounded-full border-2 bg-white font-black text-sm tracking-wide shadow-[2px_2px_0px_rgba(0,0,0,0.1)]"
          style={{ borderColor: color, color: accent }}
        >
          {price}
        </div>
      </div>
    </motion.div>
  );
}

function AddOnItem({ text, price }: { text: string; price: string }) {
  return (
    <div className="flex justify-between items-center border-b border-dashed border-gray-200 pb-1">
      <span className="text-gray-600">{text}</span>
      <span
        className={
          price === "free"
            ? "text-[#a3b1c6] font-bold italic"
            : "font-black text-[#ff8ba7]"
        }
      >
        {price}
      </span>
    </div>
  );
}
