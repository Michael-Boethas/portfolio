"use client";

import { useState, useRef } from "react";
import { useBouncingAnimation } from "@/hooks/useBouncingAnimation";
import { useTheme } from "@/context/ThemeContext";
import styles from "./WireframeCube.module.css";

interface IWireframeCubeProps {
  containerSize: { width: number; height: number };
  relativeSize: number;
  position: { horizontal: number; vertical: number };
  className?: string;
}

/**
 * Decorative wireframe cube that also serves as a theme toggle
 * Animated with the useBouncingAnimation hook after a set number of clicks
 */
export default function WireframeCube({
  containerSize, // For realtive size calculation, also required by the animation hook
  relativeSize, // Sets the size of the cube relative to the smallest dimension of the parent
  position, // {x, y} position relative to the parent's dimensions
  className,
}: IWireframeCubeProps) {
  const { theme, setTheme } = useTheme();

  const cubeRef = useRef<HTMLDivElement | null>(null);

  // Setting the cube's size relative to the smallest viewport dimension for landscape mode
  // (in pixels because CSS translateZ requires absolute lengths for 3D)
  const cubeSize =
    Math.min(containerSize.width, containerSize.height) * relativeSize;

  // Calculating absolute coordinates from relative position and container size
  const coordinates = {
    x: containerSize.width * position.horizontal - cubeSize / 2,
    y: containerSize.height * position.vertical - cubeSize / 2,
  };

  const [animate, setAnimate] = useState(0);
  const animationThreshold = useRef(Math.floor(2 + Math.random() * 3)).current;

  // Animation
  useBouncingAnimation({
    targetRef: cubeRef,
    targetSize: cubeSize,
    containerSize: containerSize,
    initialCoordinates: coordinates,
    minVel: 100,
    maxVel: 150, // pixels per second
    start: animate > animationThreshold,
  });

  return (
    <div
      ref={cubeRef}
      onClick={() => {
        setAnimate((prev) => prev + 1);
        setTheme(theme === "light" ? "dark" : "light");
      }}
      className={`${styles["cube-wrapper"]} ${className}`}
      style={
        {
          "--cube-size": theme === "light" ? `${cubeSize}px` : `${cubeSize}px`,
          "--position-left": `${coordinates.x}px`,
          "--position-top": `${coordinates.y}px`,
        } as React.CSSProperties
      }
    >
      <div
        className={styles["wireframe-cube"]}
        style={
          {
            "--glow": theme === "light" ? "0.4" : "0",
            "--color-intensity":
              theme === "light" ? "200, 200, 200, 0.3" : "175, 175, 175, 0.2",
            "--border-gap":
              theme === "light"
                ? "8px solid transparent"
                : "0px solid transparent",
          } as React.CSSProperties
        }
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
