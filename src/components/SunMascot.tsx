import { motion } from 'motion/react';

interface SunMascotProps {
  variant: 'hero' | 'guide' | 'reading' | 'teaching' | 'waving';
  className?: string;
}

export function SunMascot({ variant, className = '' }: SunMascotProps) {
  const baseClass = `w-32 h-32 ${className}`;

  const sunVariants = {
    hero: {
      scale: [1, 1.05, 1],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    guide: {
      y: [0, -5, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    reading: {
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    teaching: {
      scale: [1, 1.02, 1],
      x: [0, 2, -2, 0],
      transition: {
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    waving: {
      rotate: [0, 15, -15, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const getSunContent = () => {
    switch (variant) {
      case 'hero':
        return (
          <svg viewBox="0 0 200 200" className={baseClass}>
            {/* Sun rays */}
            <g fill="#ff9f7a">
              <circle cx="30" cy="50" r="3" opacity="0.8" />
              <circle cx="170" cy="50" r="3" opacity="0.8" />
              <circle cx="30" cy="150" r="3" opacity="0.8" />
              <circle cx="170" cy="150" r="3" opacity="0.8" />
              <circle cx="100" cy="20" r="3" opacity="0.8" />
              <circle cx="100" cy="180" r="3" opacity="0.8" />
              <circle cx="20" cy="100" r="3" opacity="0.8" />
              <circle cx="180" cy="100" r="3" opacity="0.8" />
            </g>
            {/* Main sun body */}
            <circle cx="100" cy="100" r="60" fill="#ffb394" />
            <circle cx="100" cy="100" r="50" fill="#ff9f7a" />
            {/* Happy face */}
            <circle cx="85" cy="85" r="5" fill="#0a0512" />
            <circle cx="115" cy="85" r="5" fill="#0a0512" />
            <path d="M 75 115 Q 100 135 125 115" stroke="#0a0512" strokeWidth="4" fill="none" strokeLinecap="round" />
          </svg>
        );
      
      case 'guide':
        return (
          <svg viewBox="0 0 200 200" className={baseClass}>
            {/* Smaller sun for guide */}
            <circle cx="100" cy="100" r="45" fill="#ffb394" />
            <circle cx="100" cy="100" r="38" fill="#ff9f7a" />
            {/* Focused eyes */}
            <circle cx="88" cy="88" r="4" fill="#0a0512" />
            <circle cx="112" cy="88" r="4" fill="#0a0512" />
            <path d="M 82 110 Q 100 125 118 110" stroke="#0a0512" strokeWidth="3" fill="none" strokeLinecap="round" />
            {/* Guide pointer */}
            <path d="M 140 85 L 155 75 L 150 90 Z" fill="#ff9f7a" />
          </svg>
        );
      
      case 'reading':
        return (
          <svg viewBox="0 0 200 200" className={baseClass}>
            {/* Sun with book */}
            <circle cx="100" cy="100" r="50" fill="#ffb394" />
            <circle cx="100" cy="100" r="42" fill="#ff9f7a" />
            {/* Reading glasses */}
            <circle cx="88" cy="88" r="8" fill="none" stroke="#0a0512" strokeWidth="2" />
            <circle cx="112" cy="88" r="8" fill="none" stroke="#0a0512" strokeWidth="2" />
            <line x1="96" y1="88" x2="104" y2="88" stroke="#0a0512" strokeWidth="2" />
            {/* Eyes behind glasses */}
            <circle cx="88" cy="88" r="3" fill="#0a0512" />
            <circle cx="112" cy="88" r="3" fill="#0a0512" />
            <path d="M 85 115 Q 100 125 115 115" stroke="#0a0512" strokeWidth="3" fill="none" strokeLinecap="round" />
            {/* Book */}
            <rect x="70" y="130" width="60" height="35" fill="#f8f8f2" stroke="#0a0512" strokeWidth="2" />
            <line x1="100" y1="130" x2="100" y2="165" stroke="#0a0512" strokeWidth="2" />
          </svg>
        );
      
      case 'teaching':
        return (
          <svg viewBox="0 0 200 200" className={baseClass}>
            {/* Teaching sun */}
            <circle cx="100" cy="100" r="48" fill="#ffb394" />
            <circle cx="100" cy="100" r="40" fill="#ff9f7a" />
            {/* Enthusiastic eyes */}
            <circle cx="88" cy="88" r="4" fill="#0a0512" />
            <circle cx="112" cy="88" r="4" fill="#0a0512" />
            <path d="M 80 112 Q 100 130 120 112" stroke="#0a0512" strokeWidth="4" fill="none" strokeLinecap="round" />
            {/* Teaching hand gesture */}
            <path d="M 140 90 L 160 85 L 155 95 L 150 100 L 145 95 Z" fill="#ff9f7a" />
            {/* Knowledge sparkles */}
            <circle cx="170" cy="70" r="2" fill="#ff9f7a" />
            <circle cx="165" cy="55" r="2" fill="#ff9f7a" />
            <circle cx="180" cy="85" r="2" fill="#ff9f7a" />
          </svg>
        );
      
      case 'waving':
        return (
          <svg viewBox="0 0 200 200" className={baseClass}>
            {/* Waving sun */}
            <circle cx="100" cy="100" r="50" fill="#ffb394" />
            <circle cx="100" cy="100" r="42" fill="#ff9f7a" />
            {/* Happy waving eyes */}
            <path d="M 80 85 Q 88 78 96 85" stroke="#0a0512" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 104 85 Q 112 78 120 85" stroke="#0a0512" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 82 118 Q 100 135 118 118" stroke="#0a0512" strokeWidth="4" fill="none" strokeLinecap="round" />
            {/* Waving hand */}
            <motion.g
              animate={{
                rotate: [0, 20, -20, 0],
                transition: {
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              style={{ transformOrigin: "145px 95px" }}
            >
              <path d="M 140 95 L 160 85 L 165 100 L 150 110 L 145 100 Z" fill="#ff9f7a" />
            </motion.g>
          </svg>
        );
      
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="flex items-center justify-center"
      animate={sunVariants[variant]}
    >
      {getSunContent()}
    </motion.div>
  );
}