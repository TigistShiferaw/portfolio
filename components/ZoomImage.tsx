// components/ZoomImage.tsx
// use client

import React from 'react';
import Image from 'next/image';

interface ZoomImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const ZoomImage: React.FC<ZoomImageProps> = ({ src, alt, width, height }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      style={{ width, height, borderRadius: "50%", overflow: "hidden", border: "5px solid #4294E6", position: "relative" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout="responsive"
        objectFit="cover"
        style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)', transition: "transform 0.3s ease" }}
      />
    </div>
  );
};

export default ZoomImage;
