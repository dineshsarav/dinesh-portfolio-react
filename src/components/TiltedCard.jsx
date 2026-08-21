import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  imageSrc,
  altText = 'Tilted card image',
  captionText = '',
  containerHeight,
  containerWidth,
  imageHeight,
  imageWidth,
  rotateAmplitude = 12,
  scaleOnHover = 1.05,
  showMobileWarning = false,
  showTooltip = false,
  displayOverlayContent = false,
  overlayContent = null,
  children,
  className = '',
}) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [rotateAmplitude, -rotateAmplitude]), springValues);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-rotateAmplitude, rotateAmplitude]), springValues);

  const scale = useSpring(1, springValues);
  const opacity = useSpring(0, springValues);

  const [isHovered, setIsHovered] = useState(false);

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;

    x.set(xPct);
    y.set(yPct);
    mouseX.set(mouseXPos);
    mouseY.set(mouseYPos);
  }

  function handleMouseEnter() {
    setIsHovered(true);
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    opacity.set(0);
    scale.set(1);
    x.set(0);
    y.set(0);
  }

  const containerStyle = {
    height: containerHeight || 'auto',
    width: containerWidth || '100%',
  };

  const imageStyle = {
    height: imageHeight || '100%',
    width: imageWidth || '100%',
  };

  return (
    <figure
      ref={ref}
      className={`relative flex flex-col items-center justify-center [perspective:1000px] cursor-pointer ${className}`}
      style={containerStyle}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="absolute top-2 right-2 z-20 rounded-full bg-slate-900/80 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono text-indigo-300 border border-indigo-500/30 sm:hidden">
          Tilt active
        </div>
      )}

      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d] transition-shadow duration-300"
        style={{
          rotateX,
          rotateY,
          scale,
        }}
      >
        {/* If imageSrc is provided */}
        {imageSrc && (
          <motion.img
            src={imageSrc}
            alt={altText}
            className="w-full h-full object-cover rounded-[15px] will-change-transform"
            style={imageStyle}
          />
        )}

        {/* If children exist (wrapping portfolio elements) */}
        {children && (
          <div className="w-full h-full rounded-[15px] [transform-style:preserve-3d]">
            {children}
          </div>
        )}

        {/* Spotlight / Glare reflection overlay */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[15px] bg-gradient-to-tr from-transparent via-white/10 to-indigo-500/20"
          style={{
            opacity,
          }}
        />

        {/* Overlay Content */}
        {displayOverlayContent && overlayContent && (
          <motion.div
            className="absolute inset-0 z-10 flex flex-col justify-end p-4 rounded-[15px] bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent text-white [transform:translateZ(30px)]"
          >
            {overlayContent}
          </motion.div>
        )}
      </motion.div>

      {/* Floating Tooltip */}
      {showTooltip && (captionText || overlayContent) && (
        <motion.figcaption
          className="pointer-events-none absolute z-30 hidden sm:block rounded-lg bg-slate-900/90 backdrop-blur-md px-3 py-1.5 text-xs font-semibold text-white border border-indigo-500/40 shadow-xl"
          style={{
            x: mouseX,
            y: mouseY,
            opacity,
            transform: 'translate(-50%, -130%)',
          }}
        >
          {captionText || altText}
        </motion.figcaption>
      )}
    </figure>
  );
}
