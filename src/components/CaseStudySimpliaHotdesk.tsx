import { motion } from 'motion/react';
import { ArrowLeft, Calendar, TrendingDown, AlertCircle, CheckCircle } from 'lucide-react@0.487.0';
import { Footer } from './Footer';
import FinalDesignsSimpliaSection from '../imports/Container-136-94';

interface CaseStudySimpliaHotdeskProps {
  onBack: () => void;
}

export function CaseStudySimpliaHotdesk({ onBack }: CaseStudySimpliaHotdeskProps) {
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
          <span>Back to Work</span>
        </motion.button>
      </section>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 relative">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(255,159,122,0.08) 0%, transparent 50%)'
        }} />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-16 relative z-10"
        >
          {/* Title and intro */}
          <div className="flex flex-col gap-8">
            <motion.div 
              className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full bg-[rgba(255,159,122,0.08)] border border-[rgba(255,159,122,0.15)]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-2 h-2 rounded-full bg-[#ff9f7a]" />
              <span className="text-sm text-[#ff9f7a] uppercase tracking-wider">Case Study</span>
            </motion.div>
            
            <h1 className="text-5xl lg:text-7xl text-[#f8f8f2] leading-tight max-w-4xl">Simplia — Client Hotdesk Booking Funnel Optimization</h1>
            
            <p className="text-2xl text-[#b5b5b5] leading-relaxed max-w-3xl">
              Simplia worked with a client offering a hotdesk booking product where users could reserve workspaces online. While the product was functional and already in use, a key issue persisted: users were not completing the booking funnel.
            </p>
          </div>

          {/* Metadata grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[rgba(255,159,122,0.1)]">
            <motion.div 
              className="flex flex-col gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="text-sm text-[#808080] uppercase tracking-wider">Role</span>
              <span className="text-xl text-[#f8f8f2]">UX/UI Designer</span>
            </motion.div>
            
            <motion.div 
              className="flex flex-col gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className="text-sm text-[#808080] uppercase tracking-wider">Company</span>
              <span className="text-xl text-[#f8f8f2]">Simplia</span>
            </motion.div>
            
            <motion.div 
              className="flex flex-col gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className="text-sm text-[#808080] uppercase tracking-wider">Scope</span>
              <span className="text-xl text-[#f8f8f2]">Booking funnel UX, process clarity, and UI improvements</span>
            </motion.div>
          </div>

          {/* Key stats or highlights */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="flex flex-col gap-3 p-8 rounded-xl bg-[rgba(255,159,122,0.03)] border border-[rgba(255,159,122,0.1)]">
              <AlertCircle className="w-8 h-8 text-[#ff9f7a]" />
              <span className="text-sm text-[#808080] uppercase tracking-wider">Challenge</span>
              <p className="text-base text-[#d0d0d0] leading-relaxed">
                Users dropped off before completing bookings, resulting in lost revenue
              </p>
            </div>
            
            <div className="flex flex-col gap-3 p-8 rounded-xl bg-[rgba(255,159,122,0.03)] border border-[rgba(255,159,122,0.1)]">
              <TrendingDown className="w-8 h-8 text-[#ff9f7a]" />
              <span className="text-sm text-[#808080] uppercase tracking-wider">Core Issue</span>
              <p className="text-base text-[#d0d0d0] leading-relaxed">
                Fragmented funnel with unclear steps and poor information hierarchy
              </p>
            </div>
            
            <div className="flex flex-col gap-3 p-8 rounded-xl bg-[rgba(255,159,122,0.03)] border border-[rgba(255,159,122,0.1)]">
              <CheckCircle className="w-8 h-8 text-[#ff9f7a]" />
              <span className="text-sm text-[#808080] uppercase tracking-wider">Outcome</span>
              <p className="text-base text-[#d0d0d0] leading-relaxed">
                Streamlined funnel increased completion rates and user confidence
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Identify */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-[rgba(255,159,122,0.1)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-12"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#ff9f7a]" />
            <h2 className="text-4xl text-[#f8f8f2]">Identify</h2>
          </div>

          <div className="flex flex-col gap-8">
            <p className="text-xl text-[#b5b5b5] leading-relaxed">
              Although users could browse available workspaces, many dropped off before finishing their booking. The funnel felt fragmented and unclear, forcing users to pause, reconsider, or abandon the process altogether.
            </p>
            
            <div className="flex flex-col gap-4">
              <p className="text-lg text-[#d0d0d0]">Key issues included:</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <motion.div 
                  className="flex gap-4 items-start p-6 rounded-lg hover:bg-[rgba(255,159,122,0.02)] transition-colors"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff9f7a] mt-3 flex-shrink-0" />
                  <p className="text-lg text-[#b5b5b5] leading-relaxed">
                    Booking steps felt disjointed and unintuitive.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="flex gap-4 items-start p-6 rounded-lg hover:bg-[rgba(255,159,122,0.02)] transition-colors"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff9f7a] mt-3 flex-shrink-0" />
                  <p className="text-lg text-[#b5b5b5] leading-relaxed">
                    Important information such as pricing, time slots, and availability wasn't clearly prioritized.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="flex gap-4 items-start p-6 rounded-lg hover:bg-[rgba(255,159,122,0.02)] transition-colors"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff9f7a] mt-3 flex-shrink-0" />
                  <p className="text-lg text-[#b5b5b5] leading-relaxed">
                    Users faced unnecessary confirmations and decisions.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="flex gap-4 items-start p-6 rounded-lg hover:bg-[rgba(255,159,122,0.02)] transition-colors"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff9f7a] mt-3 flex-shrink-0" />
                  <p className="text-lg text-[#b5b5b5] leading-relaxed">
                    Stakeholders lacked clarity on where and why users dropped off.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Define */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-[rgba(255,159,122,0.1)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-12"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#ff9f7a]" />
            <h2 className="text-4xl text-[#f8f8f2]">Define</h2>
          </div>

          <div className="flex flex-col gap-8">
            <p className="text-xl text-[#b5b5b5] leading-relaxed">
              The core challenge wasn't attracting users—it was helping them complete a task that should have been simple.
            </p>
            
            <div className="flex flex-col gap-4">
              <p className="text-lg text-[#d0d0d0]">The design needed to:</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <motion.div 
                  className="flex gap-4 items-start p-6 rounded-lg hover:bg-[rgba(255,159,122,0.02)] transition-colors"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff9f7a] mt-3 flex-shrink-0" />
                  <p className="text-lg text-[#b5b5b5] leading-relaxed">
                    Reduce friction across the booking funnel.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="flex gap-4 items-start p-6 rounded-lg hover:bg-[rgba(255,159,122,0.02)] transition-colors"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff9f7a] mt-3 flex-shrink-0" />
                  <p className="text-lg text-[#b5b5b5] leading-relaxed">
                    Make decision points clearer and more predictable.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="flex gap-4 items-start p-6 rounded-lg hover:bg-[rgba(255,159,122,0.02)] transition-colors"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff9f7a] mt-3 flex-shrink-0" />
                  <p className="text-lg text-[#b5b5b5] leading-relaxed">
                    Lower cognitive load during booking.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="flex gap-4 items-start p-6 rounded-lg hover:bg-[rgba(255,159,122,0.02)] transition-colors"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff9f7a] mt-3 flex-shrink-0" />
                  <p className="text-lg text-[#b5b5b5] leading-relaxed">
                    Reflect business rules without overwhelming users.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Explore */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-[rgba(255,159,122,0.1)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-12"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#ff9f7a]" />
            <h2 className="text-4xl text-[#f8f8f2]">Explore</h2>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-xl text-[#b5b5b5] leading-relaxed">
              To understand the problem, I conducted user interviews and shadowed real booking attempts to observe hesitation points. I mapped the end-to-end booking flow, identifying where users slowed down or exited the process.
            </p>
            
            <p className="text-xl text-[#b5b5b5] leading-relaxed">
              I also aligned with stakeholders to understand operational constraints around pricing, availability, and booking policies—ensuring the redesign wouldn't conflict with business logic.
            </p>
            
            <p className="text-xl text-[#b5b5b5] leading-relaxed">
              These insights highlighted the need for clearer hierarchy, fewer steps, and better guidance throughout the funnel.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Act */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-[rgba(255,159,122,0.1)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-12"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#ff9f7a]" />
            <h2 className="text-4xl text-[#f8f8f2]">Act</h2>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-xl text-[#b5b5b5] leading-relaxed">
              I redesigned the booking experience with clarity and flow as primary goals.
            </p>
            
            <div className="flex flex-col gap-4">
              <p className="text-lg text-[#d0d0d0]">The updated funnel:</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <motion.div 
                  className="flex gap-4 items-start p-6 rounded-lg hover:bg-[rgba(255,159,122,0.02)] transition-colors"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff9f7a] mt-3 flex-shrink-0" />
                  <p className="text-lg text-[#b5b5b5] leading-relaxed">
                    Introduced clearer step progression from selection to confirmation.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="flex gap-4 items-start p-6 rounded-lg hover:bg-[rgba(255,159,122,0.02)] transition-colors"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff9f7a] mt-3 flex-shrink-0" />
                  <p className="text-lg text-[#b5b5b5] leading-relaxed">
                    Simplified screens by grouping related information and removing distractions.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="flex gap-4 items-start p-6 rounded-lg hover:bg-[rgba(255,159,122,0.02)] transition-colors"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff9f7a] mt-3 flex-shrink-0" />
                  <p className="text-lg text-[#b5b5b5] leading-relaxed">
                    Reduced unnecessary confirmations and repeated inputs.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="flex gap-4 items-start p-6 rounded-lg hover:bg-[rgba(255,159,122,0.02)] transition-colors"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff9f7a] mt-3 flex-shrink-0" />
                  <p className="text-lg text-[#b5b5b5] leading-relaxed">
                    Provided consistent feedback so users always knew where they were in the process.
                  </p>
                </motion.div>
              </div>
            </div>
            
            <p className="text-xl text-[#b5b5b5] leading-relaxed">
              UI improvements focused on readability, spacing, and predictable interaction patterns, helping users move forward with confidence.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Learn */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-[rgba(255,159,122,0.1)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-12"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#ff9f7a]" />
            <h2 className="text-4xl text-[#f8f8f2]">Learn</h2>
          </div>

          <div className="flex flex-col gap-6 p-10 rounded-xl bg-[rgba(255,159,122,0.03)] border-l-4 border-[#ff9f7a]">
            <p className="text-xl text-[#d0d0d0] leading-relaxed">
              This project reinforced that drop-offs often signal uncertainty, not lack of intent. When users don't clearly understand what comes next, even small friction points can stop progress.
            </p>
            <p className="text-xl text-[#d0d0d0] leading-relaxed">
              Designing for conversion meant designing for reassurance, not persuasion.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Impact */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-[rgba(255,159,122,0.1)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-12"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#ff9f7a]" />
            <h2 className="text-4xl text-[#f8f8f2]">Impact</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              className="flex flex-col gap-4 p-8 rounded-lg bg-[rgba(255,159,122,0.05)] border border-[rgba(255,159,122,0.15)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <CheckCircle className="w-8 h-8 text-[#ff9f7a]" />
              <p className="text-lg text-[#d0d0d0] leading-relaxed">
                Increased booking completion rates.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col gap-4 p-8 rounded-lg bg-[rgba(255,159,122,0.05)] border border-[rgba(255,159,122,0.15)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <CheckCircle className="w-8 h-8 text-[#ff9f7a]" />
              <p className="text-lg text-[#d0d0d0] leading-relaxed">
                Reduced hesitation during the booking process.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col gap-4 p-8 rounded-lg bg-[rgba(255,159,122,0.05)] border border-[rgba(255,159,122,0.15)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <CheckCircle className="w-8 h-8 text-[#ff9f7a]" />
              <p className="text-lg text-[#d0d0d0] leading-relaxed">
                Clearer alignment between UX and business rules.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col gap-4 p-8 rounded-lg bg-[rgba(255,159,122,0.05)] border border-[rgba(255,159,122,0.15)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <CheckCircle className="w-8 h-8 text-[#ff9f7a]" />
              <p className="text-lg text-[#d0d0d0] leading-relaxed">
                Improved stakeholder confidence in the booking flow.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Final Designs */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-[rgba(255,159,122,0.1)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-12"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#ff9f7a]" />
            <h2 className="text-4xl text-[#f8f8f2]">Final Designs</h2>
          </div>

          <div className="flex flex-col gap-8">
            <p className="text-xl text-[#b5b5b5] leading-relaxed">The final designs emphasized:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                className="flex flex-col gap-4 p-8 rounded-lg bg-[rgba(255,159,122,0.03)] border border-[rgba(255,159,122,0.1)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <p className="text-lg text-[#d0d0d0] leading-relaxed">
                  Clear information hierarchy.
                </p>
              </motion.div>
              
              <motion.div 
                className="flex flex-col gap-4 p-8 rounded-lg bg-[rgba(255,159,122,0.03)] border border-[rgba(255,159,122,0.1)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-lg text-[#d0d0d0] leading-relaxed">
                  Streamlined steps from start to finish.
                </p>
              </motion.div>
              
              <motion.div 
                className="flex flex-col gap-4 p-8 rounded-lg bg-[rgba(255,159,122,0.03)] border border-[rgba(255,159,122,0.1)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="text-lg text-[#d0d0d0] leading-relaxed">
                  Predictable and calm booking interactions.
                </p>
              </motion.div>
            </div>

            {/* Desktop Experience - Final Designs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 p-8 rounded-xl bg-[rgba(255,159,122,0.03)] border border-[rgba(255,159,122,0.1)] flex items-center justify-center min-h-[400px]"
            >
              <FinalDesignsSimpliaSection />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Reflection */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-[rgba(255,159,122,0.1)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-12"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#ff9f7a]" />
            <h2 className="text-4xl text-[#f8f8f2]">Reflection</h2>
          </div>

          <div className="flex flex-col gap-6 p-10 rounded-xl bg-[rgba(255,159,122,0.03)] border border-[rgba(255,159,122,0.1)]">
            <p className="text-xl text-[#b5b5b5] leading-relaxed">
              Optimizing this funnel highlighted how small UX decisions—clarity, pacing, and feedback—can have a significant impact on business outcomes without adding complexity.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Navigation */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-[rgba(255,159,122,0.1)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-center"
        >
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-[#ff9f7a] hover:text-[#ffb394] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Work</span>
          </button>

          <span className="text-sm text-[#808080]">Next Case Study →</span>
        </motion.div>
      </section>

      {/* Footer */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-[rgba(255,159,122,0.1)]">
        <Footer />
      </section>
    </div>
  );
}