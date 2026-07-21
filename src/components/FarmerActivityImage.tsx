import React from 'react';
// @ts-expect-error - Vite handles png asset resolution dynamically
import farmerImage from '../assets/images/regenerated_image_1784624174332.jpg';

interface FarmerActivityImageProps {
  className?: string;
  alt?: string;
}

export default function FarmerActivityImage({ className, alt = '小農夫生存挑戰' }: FarmerActivityImageProps) {
  return (
    <img
      src={farmerImage}
      alt={alt}
      referrerPolicy="no-referrer"
      className={className}
      id="farmer-activity-image-comp"
    />
  );
}
