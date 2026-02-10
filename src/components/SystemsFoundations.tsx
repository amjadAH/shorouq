import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react@0.487.0';
import { Footer } from './Footer';
import SystemsFoundationsSection from '../imports/SystemsFoundations';

interface SystemsFoundationsProps {
  onBack: () => void;
  onSectionChange: (section: string) => void;
}

export function SystemsFoundations({ onBack, onSectionChange }: SystemsFoundationsProps) {
  const systemsAreas = [
    {
      title: 'Visual Foundations',
      description: 'Colors, typography, spacing, and interaction patterns shaped by real product screens—not theoretical perfection. Every choice is informed by actual usage and constraints.',
      example: 'Defined a 4px spacing scale after auditing product layouts and realizing inconsistent gaps were causing visual noise and slowing implementation.',
      illustration: 'grid'
    },
    {
      title: 'Design Tokens',
      description: 'Structuring design decisions as tokens to improve handoff and implementation consistency. Naming conventions and token hierarchies bridge design intent and code.',
      example: 'Created semantic color tokens (e.g., "surface.interactive.default") tied to functional roles, not just hex values, making theming and updates predictable.',
      illustration: 'tokens'
    },
    {
      title: 'Reusable Components',
      description: 'Components designed for real usage, with states, flexibility, and accessibility in mind. Not aspirational components—practical ones that solve recurring patterns.',
      example: 'Built input field variants covering error states, loading states, and disabled contexts based on 20+ real form implementations across the product.',
      illustration: 'components'
    },
    {
      title: 'Collaboration with Engineering',
      description: 'Working closely with developers on constraints, edge cases, and implementation feasibility. Systems work only succeeds when design and engineering move together.',
      example: 'Partnered with frontend engineers to audit CSS inconsistencies and align on component prop structures, reducing implementation time by clarifying expectations upfront.',
      illustration: 'connection'
    }
  ];

  // Illustration components
  const GridIllustration = () => (
    <svg width="50" height="50" viewBox="0 0 80 80" fill="none" className="opacity-25">
      <rect x="8" y="8" width="16" height="16" stroke="#ff9f7a" strokeWidth="1" />
      <rect x="32" y="8" width="16" height="16" stroke="#ff9f7a" strokeWidth="1" />
      <rect x="56" y="8" width="16" height="16" stroke="#ff9f7a" strokeWidth="1" />
      <rect x="8" y="32" width="16" height="16" stroke="#ff9f7a" strokeWidth="1" />
      <rect x="32" y="32" width="16" height="16" stroke="#ff9f7a" strokeWidth="1" fill="rgba(255,159,122,0.08)" />
      <rect x="56" y="32" width="16" height="16" stroke="#ff9f7a" strokeWidth="1" />
      <rect x="8" y="56" width="16" height="16" stroke="#ff9f7a" strokeWidth="1" />
      <rect x="32" y="56" width="16" height="16" stroke="#ff9f7a" strokeWidth="1" />
      <rect x="56" y="56" width="16" height="16" stroke="#ff9f7a" strokeWidth="1" />
    </svg>
  );

  const TokensIllustration = () => (
    <svg width="50" height="50" viewBox="0 0 80 80" fill="none" className="opacity-25">
      <circle cx="20" cy="20" r="6" stroke="#ff9f7a" strokeWidth="1" />
      <circle cx="40" cy="20" r="6" stroke="#ff9f7a" strokeWidth="1" fill="rgba(255,159,122,0.1)" />
      <circle cx="60" cy="20" r="6" stroke="#ff9f7a" strokeWidth="1" />
      <line x1="20" y1="26" x2="20" y2="40" stroke="#ff9f7a" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="40" y1="26" x2="40" y2="40" stroke="#ff9f7a" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="60" y1="26" x2="60" y2="40" stroke="#ff9f7a" strokeWidth="1" strokeDasharray="2 2" />
      <rect x="10" y="45" width="20" height="12" rx="2" stroke="#ff9f7a" strokeWidth="1" />
      <rect x="30" y="45" width="20" height="12" rx="2" stroke="#ff9f7a" strokeWidth="1" fill="rgba(255,159,122,0.08)" />
      <rect x="50" y="45" width="20" height="12" rx="2" stroke="#ff9f7a" strokeWidth="1" />
    </svg>
  );

  const ComponentsIllustration = () => (
    <svg width="50" height="50" viewBox="0 0 80 80" fill="none" className="opacity-25">
      <rect x="12" y="12" width="56" height="10" rx="2" stroke="#ff9f7a" strokeWidth="1" />
      <rect x="12" y="28" width="56" height="10" rx="2" stroke="#ff9f7a" strokeWidth="1" fill="rgba(255,159,122,0.08)" />
      <rect x="12" y="44" width="56" height="10" rx="2" stroke="#ff9f7a" strokeWidth="1" />
      <rect x="12" y="60" width="26" height="8" rx="2" stroke="#ff9f7a" strokeWidth="1" />
      <rect x="42" y="60" width="26" height="8" rx="2" stroke="#ff9f7a" strokeWidth="1" fill="rgba(255,159,122,0.1)" />
    </svg>
  );

  const ConnectionIllustration = () => (
    <svg width="50" height="50" viewBox="0 0 80 80" fill="none" className="opacity-25">
      <circle cx="20" cy="30" r="8" stroke="#ff9f7a" strokeWidth="1" fill="rgba(255,159,122,0.08)" />
      <circle cx="60" cy="30" r="8" stroke="#ff9f7a" strokeWidth="1" fill="rgba(255,159,122,0.08)" />
      <circle cx="40" cy="55" r="8" stroke="#ff9f7a" strokeWidth="1" fill="rgba(255,159,122,0.1)" />
      <line x1="26" y1="34" x2="35" y2="50" stroke="#ff9f7a" strokeWidth="1" />
      <line x1="54" y1="34" x2="45" y2="50" stroke="#ff9f7a" strokeWidth="1" />
      <line x1="20" y1="22" x2="60" y2="22" stroke="#ff9f7a" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
    </svg>
  );

  const FoundationIllustration = () => (
    <svg width="130" height="105" viewBox="0 0 200 160" fill="none" className="opacity-20">
      <g>
        {/* Layered foundation blocks */}
        <rect x="40" y="120" width="120" height="8" rx="1" fill="rgba(255,159,122,0.12)" />
        <rect x="30" y="105" width="140" height="8" rx="1" fill="rgba(255,159,122,0.15)" />
        <rect x="20" y="90" width="160" height="8" rx="1" fill="rgba(255,159,122,0.18)" />
        
        {/* Structure lines */}
        <line x1="50" y1="90" x2="50" y2="30" stroke="#ff9f7a" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
        <line x1="100" y1="90" x2="100" y2="20" stroke="#ff9f7a" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
        <line x1="150" y1="90" x2="150" y2="30" stroke="#ff9f7a" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
        
        {/* Top connection nodes */}
        <circle cx="50" cy="30" r="3" fill="#ff9f7a" opacity="0.4" />
        <circle cx="100" cy="20" r="3" fill="#ff9f7a" opacity="0.45" />
        <circle cx="150" cy="30" r="3" fill="#ff9f7a" opacity="0.4" />
        
        {/* Connection lines between nodes */}
        <line x1="54" y1="30" x2="96" y2="22" stroke="#ff9f7a" strokeWidth="0.8" opacity="0.25" />
        <line x1="104" y1="22" x2="146" y2="30" stroke="#ff9f7a" strokeWidth="0.8" opacity="0.25" />
      </g>
    </svg>
  );

  const getIllustration = (type: string) => {
    switch (type) {
      case 'grid':
        return <GridIllustration />;
      case 'tokens':
        return <TokensIllustration />;
      case 'components':
        return <ComponentsIllustration />;
      case 'connection':
        return <ConnectionIllustration />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Back Button */}
      <section className="max-w-6xl mx-auto px-6 pt-8">
        <motion.button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-[#a0a0a0] hover:text-[#ff9f7a] transition-colors group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ x: -3 }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </motion.button>
      </section>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 relative">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(255,159,122,0.08) 0%, transparent 50%)'
        }} />
        
        {/* Foundation illustration - positioned on the right side */}
        <motion.div
          className="absolute right-8 top-12 pointer-events-none hidden lg:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <FoundationIllustration />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-16 relative z-10"
        >
          {/* Title and intro */}
          <div className="flex flex-col gap-8">
            <h1 className="lg:text-7xl text-[#f8f8f2] leading-tight max-w-4xl text-[48px]">
              Systems & Foundations
            </h1>
            
            <p className="text-[#b5b5b5] leading-relaxed max-w-3xl text-[20px]">
              Designing foundations that help teams build faster and stay aligned.
            </p>

            <p className="text-[#b5b5b5] leading-relaxed max-w-3xl text-[18px]">
              Systems work doesn't happen in isolation. It lives alongside product delivery—evolving as products grow, adapting to real constraints, and making space for both consistency and flexibility. The goal is to support scale without sacrificing clarity or speed.
            </p>

            <p className="text-[#a0a0a0] leading-relaxed max-w-3xl text-[16px] italic">
              Example: At Khazna, visual inconsistencies across flows slowed implementation and created confusion for users. Establishing shared spacing rules and interaction patterns reduced design-to-dev handoff questions by 40%.
            </p>
          </div>
        </motion.div>
      </section>

      {/* What I Worked On */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-12"
        >
          <div className="flex flex-col gap-4 border-t border-[rgba(255,159,122,0.1)] pt-16">
            <h2 className="text-4xl text-[#f8f8f2]">What I Worked On</h2>
            <p className="text-[18px] text-[#a0a0a0] leading-relaxed max-w-3xl">
              These aren't case studies—they're the invisible foundation work that makes everything else easier. Each area supports real product delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {systemsAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col gap-4 p-8 rounded-xl bg-[rgba(255,159,122,0.02)] border border-[rgba(255,159,122,0.08)]"
              >
                <h3 className="text-2xl text-[#f8f8f2]">{area.title}</h3>
                <p className="text-[#b5b5b5] leading-relaxed text-[17px]">
                  {area.description}
                </p>
                <div className="flex items-start gap-2 mt-2">
                  <div className="w-1 h-1 rounded-full bg-[#ff9f7a] mt-2 flex-shrink-0" />
                  <p className="text-[#a0a0a0] leading-relaxed text-[15px] italic">
                    {area.example}
                  </p>
                </div>
                <div className="mt-4">
                  {getIllustration(area.illustration)}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* How This Shows Up in Products */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-12 border-t border-[rgba(255,159,122,0.1)] pt-16"
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl text-[#f8f8f2]">How This Shows Up in Products</h2>
            <p className="text-[18px] text-[#b5b5b5] leading-relaxed max-w-3xl">
              Systems work becomes visible through shipped features. Consistency isn't just aesthetic—it's functional.
            </p>
          </div>

          <div className="relative">
            {/* Subtle connecting lines between cards */}
            <div className="absolute inset-0 pointer-events-none hidden md:block" style={{ zIndex: 0 }}>
              <svg width="100%" height="100%" className="opacity-20">
                {/* Horizontal line connecting top row */}
                <line x1="50%" y1="15%" x2="100%" y2="15%" stroke="#ff9f7a" strokeWidth="1" strokeDasharray="4 4" />
                {/* Horizontal line connecting bottom row */}
                <line x1="0%" y1="65%" x2="50%" y2="65%" stroke="#ff9f7a" strokeWidth="1" strokeDasharray="4 4" />
                {/* Vertical connecting lines */}
                <line x1="25%" y1="35%" x2="25%" y2="50%" stroke="#ff9f7a" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="75%" y1="35%" x2="75%" y2="50%" stroke="#ff9f7a" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative" style={{ zIndex: 1 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col gap-4 p-8 rounded-xl bg-[#0f0a18] border border-[rgba(255,159,122,0.08)] relative"
              >
                {/* Small accent dot */}
                <div className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-[#ff9f7a] opacity-50" />
                <h3 className="text-xl text-[#f8f8f2]">Faster Iteration</h3>
                <p className="text-[#b5b5b5] leading-relaxed text-[16px]">
                  Teams move faster when foundational decisions are already made. Reusable components and clear patterns reduce redundant work and speed up both design and development.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col gap-4 p-8 rounded-xl bg-[#0f0a18] border border-[rgba(255,159,122,0.08)] relative"
              >
                {/* Small accent dot */}
                <div className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-[#ff9f7a] opacity-50" />
                <h3 className="text-xl text-[#f8f8f2]">Visual Consistency</h3>
                <p className="text-[#b5b5b5] leading-relaxed text-[16px]">
                  Consistent hierarchy, spacing, and interaction patterns create a cohesive product experience—even across multiple teams and feature areas.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col gap-4 p-8 rounded-xl bg-[#0f0a18] border border-[rgba(255,159,122,0.08)] relative"
              >
                {/* Small accent dot */}
                <div className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-[#ff9f7a] opacity-50" />
                <h3 className="text-xl text-[#f8f8f2]">Easier Maintenance</h3>
                <p className="text-[#b5b5b5] leading-relaxed text-[16px]">
                  Centralized design decisions make updates predictable. Changing a token value propagates across the product without hunting down individual instances.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col gap-4 p-8 rounded-xl bg-[#0f0a18] border border-[rgba(255,159,122,0.08)] relative"
              >
                {/* Small accent dot */}
                <div className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-[#ff9f7a] opacity-50" />
                <h3 className="text-xl text-[#f8f8f2]">Aligned Teams</h3>
                <p className="text-[#b5b5b5] leading-relaxed text-[16px]">
                  Shared systems create a common language between design and engineering, reducing misalignment and rework during implementation.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* My Approach to Systems */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8 border-t border-[rgba(255,159,122,0.1)] pt-16"
        >
          <h2 className="text-4xl text-[#f8f8f2]">My Approach to Systems</h2>
          
          <div className="flex flex-col gap-6 max-w-3xl">
            <p className="text-[#b5b5b5] leading-relaxed text-[18px]">
              Systems aren't big upfront projects that need to be "finished" before work can begin. They evolve alongside the product—starting small, proving value, and growing as real needs emerge.
            </p>
            
            <p className="text-[#b5b5b5] leading-relaxed text-[18px]">
              Foundations are built incrementally. A spacing rule becomes useful when it solves actual inconsistency. A component becomes reusable after it's been tested in multiple contexts. Decisions are refined through real usage, not speculation.
            </p>
            
            <p className="text-[#b5b5b5] leading-relaxed text-[18px]">
              Good systems work is invisible. It doesn't announce itself—it just makes everything else feel easier and more coherent. The best outcome is when teams can build faster without thinking about the foundation at all.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Closing CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start gap-6 border-t border-[rgba(255,159,122,0.1)] pt-16"
        >
          <button
            onClick={() => onSectionChange('case-studies')}
            className="inline-flex items-center gap-2 text-[#ff9f7a] hover:text-[#ffb394] transition-colors group"
          >
            <span className="text-[17px]">View Case Studies</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}