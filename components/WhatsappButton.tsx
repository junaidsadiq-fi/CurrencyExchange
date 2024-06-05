"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

import FamilyButton from "@/components/ui/FamilyButton";

export function WhatsappButton() {
  return (
    <div className="fixed backdrop-blur-lg sm:max-w-8 md:max-w-12 lg:max-w-16 x:max-w-20 bottom-4 right-4 z-50">
      <div className="absolute backdrop-blur-lg bottom-4 right-4">
        <FamilyButton>
          <OgImageSection />
        </FamilyButton>
      </div>
    </div>
  );
}

let tabs = [
  { id: 0, label: "Whatsapp" },
  { id: 1, label: "Phone" },
];

export function OgImageSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [ref, bounds] = useMeasure();

  const handleWhatsappClick = () => {
    const phoneNumber = "+393276688805"; 
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  const handlePhoneClick = () => {
    const phoneNumber = "+393276688805";
    window.open(`tel:${phoneNumber}`);
  };

  const content = useMemo(() => {
    switch (activeTab) {
      case 0:
        return (
          <div className="flex backdrop-blur-lg items-center justify-center">
            <FaWhatsapp className="w-16 h-16 hover:text-green-200 text-[#25D366] cursor-pointer" onClick={handleWhatsappClick} />
          </div>
        );
      case 1:
        return (
          <div className="flex items-center justify-center">
            <FiPhoneCall className="w-16 h-16 text-blue-200 hover:text-blue-600 cursor-pointer" onClick={handlePhoneClick} />
          </div>
        );
      default:
        return null;
    }
  }, [activeTab]);

  const handleTabClick = (newTabId: number) => {
    if (newTabId !== activeTab && !isAnimating) {
      const newDirection = newTabId > activeTab ? 1 : -1;
      setDirection(newDirection);
      setActiveTab(newTabId);
    }
  };

  const variants = {
    initial: (direction: number) => ({
      x: 300 * direction,
      opacity: 0,
      filter: "blur(4px)",
    }),
    active: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
    exit: (direction: number) => ({
      x: -300 * direction,
      opacity: 0,
      filter: "blur(4px)",
    }),
  };

  return (
    <div className="flex flex-col items-center pt-4 ">
        <p className="mb-1 font-bold font-sm">Contact Us</p>
      <div className="flex space-x-1 border border-none rounded-[8px] cursor-pointer bg-gradient-to-b from-blue-900 to-gray-700  px-[3px] py-[3.2px] shadow-inner-shadow">
        {tabs.map((tab, i) => (
          <button
            key={`${tab.id}-i-${i}`}
            onClick={() => handleTabClick(tab.id)}
            className={`${
              activeTab === tab.id ? "text-white " : "hover:text-neutral-50/60"
            } relative rounded-[5px] px-3 py-1.5 text-xs sm:text-sm font-medium text-white transition focus-visible:outline-1 focus-visible:ring-1 focus-visible:ring-blue-light focus-visible:outline-none`}
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="family-bubble"
                className="absolute inset-0 z-10 text-white bg-gradient-to-b from-green-200 to-blue-200  mix-blend-difference shadow-inner-shadow"
                style={{ borderRadius: 5 }}
                transition={{ type: "spring", bounce: 0.19, duration: 0.4 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>
      <MotionConfig transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}>
        <motion.div
          className="relative mx-auto my-[10px] w-[60px] md:w-[150px] overflow-hidden"
          initial={false}
          animate={{ height: bounds.height }}
        >
          <div className="md:p-6 p-2" ref={ref}>
            <AnimatePresence
              custom={direction}
              mode="popLayout"
              onExitComplete={() => setIsAnimating(false)}
            >
              <motion.div
                key={activeTab}
                variants={variants}
                initial="initial"
                animate="active"
                exit="exit"
                custom={direction}
                onAnimationStart={() => setIsAnimating(true)}
                onAnimationComplete={() => setIsAnimating(false)}
              >
                {content}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </MotionConfig>
    </div>
  );
}
