
import React from "react";

interface MlompLogoProps {
  className?: string;
}

const MlompLogo: React.FC<MlompLogoProps> = ({ className = "h-12 w-auto" }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center">
        <div className="relative">
          <div className="w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="1" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              {/* Empty logo as requested */}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MlompLogo;
