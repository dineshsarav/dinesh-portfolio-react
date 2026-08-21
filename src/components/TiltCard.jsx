import React from 'react';
import TiltedCard from './TiltedCard';

export default function TiltCard({
  children,
  className = '',
  rotateAmplitude = 12,
  scaleOnHover = 1.04,
  showTooltip = false,
  captionText = '',
  ...props
}) {
  return (
    <TiltedCard
      rotateAmplitude={rotateAmplitude}
      scaleOnHover={scaleOnHover}
      showTooltip={showTooltip}
      captionText={captionText}
      className={`b-card tilt-card spotlight-card ${className}`}
      {...props}
    >
      {children}
    </TiltedCard>
  );
}

