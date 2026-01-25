"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface GlareCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlareCard = ({ children, className = "" }: GlareCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseenter", () => setIsHovered(true));
      card.addEventListener("mouseleave", () => setIsHovered(false));
    }

    return () => {
      if (card) {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseenter", () => setIsHovered(true));
        card.removeEventListener("mouseleave", () => setIsHovered(false));
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden rounded-lg ${className}`}
    >
      {children}
      {isHovered && (
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.1), transparent 40%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
      )}
    </div>
  );
};
