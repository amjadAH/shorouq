import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react@0.487.0';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const [isMyWorkOpen, setIsMyWorkOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'mentorship', label: 'Helping Others Shine' },
    { id: 'about', label: 'About Me' }
  ];

  const caseStudies = [
    { id: 'case-study-khazna-registration', label: 'Khazna — On-ground Registration' },
    { id: 'case-study-khazna-referral', label: 'Khazna — Referral Program' },
    { id: 'case-study-simplia-hotdesk', label: 'Simplia — Hotdesk Booking' },
    { id: 'case-study-khazna-early-repayment', label: 'Khazna — Early Repayment' },
    { id: 'case-study-service-activation', label: 'Service-Led Activation Redesign' }
  ];

  const isMyWorkActive = activeSection.startsWith('case-study');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="text-xl text-primary cursor-pointer"
            onClick={() => onSectionChange('home')}
            whileHover={{ scale: 1.05 }}
          >
            ☀️ Shorouk
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {/* Home */}
            <motion.button
              onClick={() => onSectionChange('home')}
              className={`relative px-4 py-2 transition-colors ${
                activeSection === 'home' 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              Home
              {activeSection === 'home' && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  layoutId="activeTab"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>

            {/* My Work Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsMyWorkOpen(true)}
              onMouseLeave={() => setIsMyWorkOpen(false)}
            >
              <motion.button
                className={`relative px-4 py-2 transition-colors flex items-center gap-1 ${
                  isMyWorkActive 
                    ? 'text-primary' 
                    : 'text-foreground hover:text-primary'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                My Work
                <ChevronDown className={`w-4 h-4 transition-transform ${isMyWorkOpen ? 'rotate-180' : ''}`} />
                {isMyWorkActive && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    layoutId="activeTab"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isMyWorkOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-lg overflow-hidden"
                  >
                    {caseStudies.map((study, index) => (
                      <motion.button
                        key={study.id}
                        onClick={() => {
                          onSectionChange(study.id);
                          setIsMyWorkOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left text-sm transition-colors ${
                          activeSection === study.id
                            ? 'bg-primary/10 text-primary'
                            : 'text-foreground hover:bg-primary/5 hover:text-primary'
                        }`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {study.label}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Design Systems Tab */}
            <motion.button
              onClick={() => onSectionChange('systems')}
              className={`relative px-4 py-2 transition-colors ${
                activeSection === 'systems' 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              Design Systems
              {activeSection === 'systems' && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  layoutId="activeTab"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>

            {/* Helping Others Shine */}
            <motion.button
              onClick={() => onSectionChange('mentorship')}
              className={`relative px-4 py-2 transition-colors ${
                activeSection === 'mentorship' 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              Helping Others Shine
              {activeSection === 'mentorship' && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  layoutId="activeTab"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>

            {/* About Me */}
            <motion.button
              onClick={() => onSectionChange('about')}
              className={`relative px-4 py-2 transition-colors ${
                activeSection === 'about' 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              About Me
              {activeSection === 'about' && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  layoutId="activeTab"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}