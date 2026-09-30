import React from 'react';

interface MxtLogoProps {
  className?: string;
  size?: number;
  variant?: 'badge' | 'flat';
}

/**
 * MXT Geometric Folded 'M' Logo
 * Recreated precisely from the user's brand mark:
 * - Left facet: Primary theme color (rgb(54 94 157))
 * - Right facet: High-contrast white or primary-container
 * - Bounding geometry: (0,0)->(50,50)->(0,100) and (0,100)->(100,100)->(100,0)
 */
export const MxtLogo: React.FC<MxtLogoProps> = ({ 
  className = '', 
  size = 36,
  variant = 'badge'
}) => {
  if (variant === 'badge') {
    return (
      <div
        className={`relative inline-flex items-center justify-center shrink-0 rounded-xl overflow-hidden bg-[#0d0f14] shadow-sm select-none ${className}`}
        style={{ width: size, height: size }}
        title="MXT Logo"
        aria-label="MXT Logo"
      >
        <svg
          viewBox="0 0 100 100"
          width={size * 0.8}
          height={size * 0.8}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left Facet: Theme Primary Color */}
          <polygon
            points="0,0 50,50 0,100"
            fill="var(--md-sys-color-primary, rgb(54 94 157))"
          />
          {/* Right Facet: Crisp White */}
          <polygon
            points="0,100 100,100 100,0"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    );
  }

  // Flat standalone vector (without background frame)
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 select-none ${className}`}
      style={{ width: size, height: size }}
      title="MXT Logo"
      aria-label="MXT Logo"
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Left Facet: Theme Primary Color */}
        <polygon
          points="0,0 50,50 0,100"
          fill="var(--md-sys-color-primary, rgb(54 94 157))"
        />
        {/* Right Facet: Primary Container / Secondary Color */}
        <polygon
          points="0,100 100,100 100,0"
          fill="var(--md-sys-color-primary-container, rgb(118 156 223))"
        />
      </svg>
    </div>
  );
};
