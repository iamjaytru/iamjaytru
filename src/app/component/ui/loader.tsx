"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface LoaderProps {
  className?: string;
  duration?: number;
}

export default function Loader({ className, duration = 2000 }: LoaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show text after hexagon animation completes (1.5s)
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 2000);

    // Hide entire loader after specified duration
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(hideTimer);
    };
  }, [duration]);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 bg-[#0a192f] flex items-center justify-center z-99",
        "transition-opacity duration-500",
        !isVisible && "opacity-0 pointer-events-none",
        className
      )}
    >
      <div className="relative">
        {/* Hexagon with draw animation */}
        <svg
          width="110"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-[#64ffda]"
        >
          <path
            d="M60 10L105 40V80L60 110L15 80V40L60 10Z"
            strokeWidth="4"
            fill="transparent"
            strokeDasharray="300"
            strokeDashoffset="300"
            className="animate-drawHexagon"
            style={{
              animation: "drawHexagon 2s linear forwards",
            }}
          />
        </svg>

        {/* Text that appears after hexagon is drawn */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            showText ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-[#64ffda] text-4xl font-bold">CJ</span>
        </div>
      </div>

      {/* Add the keyframes for the animation */}
      <style jsx>{`
        @keyframes drawHexagon {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
}
