"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface BackgroundRippleProps {
  className?: string;
  containerClassName?: string;
}

export const BackgroundRipple = ({
  className,
  containerClassName,
}: BackgroundRippleProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setDimensions({ width, height });
      canvas.width = width;
      canvas.height = height;
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    const width = dimensions.width || window.innerWidth;
    const height = dimensions.height || window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const ripples: Array<{
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      speed: number;
    }> = [];

    const createRipple = (x: number, y: number) => {
      ripples.push({
        x,
        y,
        radius: 0,
        maxRadius: Math.random() * 200 + 100,
        speed: Math.random() * 2 + 1,
      });
    };

    // Initial ripples
    for (let i = 0; i < 3; i++) {
      createRipple(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      );
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ripples.forEach((ripple, index) => {
        ripple.radius += ripple.speed;

        if (ripple.radius > ripple.maxRadius) {
          ripples.splice(index, 1);
          return;
        }

        const gradient = ctx.createRadialGradient(
          ripple.x,
          ripple.y,
          0,
          ripple.x,
          ripple.y,
          ripple.radius
        );
        gradient.addColorStop(0, "rgba(59, 130, 246, 0.1)");
        gradient.addColorStop(0.5, "rgba(59, 130, 246, 0.05)");
        gradient.addColorStop(1, "rgba(59, 130, 246, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Add new ripples occasionally
      if (Math.random() < 0.02) {
        createRipple(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        );
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [dimensions]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${containerClassName}`}>
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 ${className}`}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};
