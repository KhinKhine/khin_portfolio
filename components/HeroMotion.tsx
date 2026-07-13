"use client";

import { useEffect, useRef } from "react";

interface Dot {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  radius: number;
  color: string;
}

export default function HeroMotion() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const context = canvas.getContext("2d");

    if (!context) return;

    let animationId = 0;
    let dots: Dot[] = [];

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 150,
    };

    const colors = [
      "rgba(236, 72, 153, 0.95)",
      "rgba(217, 70, 239, 0.95)",
      "rgba(168, 85, 247, 0.95)",
    ];

    const createDots = () => {
      dots = [];

      const gap = 48;
      const startX = gap / 2;
      const startY = gap / 2;

      for (let y = startY; y < canvas.height; y += gap) {
        for (let x = startX; x < canvas.width; x += gap) {
          dots.push({
            baseX: x,
            baseY: y,
            x,
            y,
            radius: Math.random() * 5 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
          });
        }
      }
    };

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const pixelRatio = window.devicePixelRatio || 1;

      canvas.width = rect.width * pixelRatio;
      canvas.height = rect.height * pixelRatio;

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      createDots();
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();

      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const drawBackground = () => {
      const gradient = context.createRadialGradient(
        canvas.clientWidth * 0.72,
        canvas.clientHeight * 0.3,
        10,
        canvas.clientWidth * 0.72,
        canvas.clientHeight * 0.3,
        canvas.clientWidth
      );

      gradient.addColorStop(0, "rgba(78, 65, 12, 0.42)");
      gradient.addColorStop(0.45, "rgba(28, 28, 30, 0.85)");
      gradient.addColorStop(1, "rgba(20, 20, 23, 1)");

      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    };

    const drawLines = () => {
      context.lineWidth = 0.5;
      context.strokeStyle = "rgba(255, 255, 255, 0.035)";

      for (let firstIndex = 0; firstIndex < dots.length; firstIndex++) {
        const firstDot = dots[firstIndex];

        for (
          let secondIndex = firstIndex + 1;
          secondIndex < dots.length;
          secondIndex++
        ) {
          const secondDot = dots[secondIndex];

          const distanceX = firstDot.x - secondDot.x;
          const distanceY = firstDot.y - secondDot.y;
          const distance = Math.sqrt(
            distanceX * distanceX + distanceY * distanceY
          );

          if (distance < 72) {
            context.beginPath();
            context.moveTo(firstDot.x, firstDot.y);
            context.lineTo(secondDot.x, secondDot.y);
            context.stroke();
          }
        }
      }
    };

    const updateDot = (dot: Dot) => {
      const distanceX = dot.x - mouse.x;
      const distanceY = dot.y - mouse.y;
      const distance = Math.sqrt(
        distanceX * distanceX + distanceY * distanceY
      );

      if (distance < mouse.radius) {
        const force = (mouse.radius - distance) / mouse.radius;
        const angle = Math.atan2(distanceY, distanceX);

        const targetX = dot.baseX + Math.cos(angle) * force * 90;
        const targetY = dot.baseY + Math.sin(angle) * force * 90;

        dot.x += (targetX - dot.x) * 0.16;
        dot.y += (targetY - dot.y) * 0.16;
      } else {
        dot.x += (dot.baseX - dot.x) * 0.08;
        dot.y += (dot.baseY - dot.y) * 0.08;
      }
    };

    const drawDot = (dot: Dot) => {
      context.beginPath();
      context.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
      context.fillStyle = dot.color;
      context.fill();
    };

    const drawMouseCircle = () => {
      if (mouse.x < 0 || mouse.y < 0) return;

      const gradient = context.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        55
      );

      gradient.addColorStop(0, "rgba(255, 255, 255, 0.26)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

      context.beginPath();
      context.arc(mouse.x, mouse.y, 55, 0, Math.PI * 2);
      context.fillStyle = gradient;
      context.fill();
    };

    const animate = () => {
      context.clearRect(
        0,
        0,
        canvas.clientWidth,
        canvas.clientHeight
      );

      drawBackground();

      dots.forEach(updateDot);
      drawLines();
      dots.forEach(drawDot);
      drawMouseCircle();

      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="relative h-[520px] w-full overflow-hidden rounded-3xl border-white/10 shadow-2xl">
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        aria-label="Interactive dot grid animation"
      />
    </div>
  );
}