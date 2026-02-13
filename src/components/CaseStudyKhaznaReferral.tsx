import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Target, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react@0.487.0';

interface CaseStudyKhaznaReferralProps {
  onBack: () => void;
  onSectionChange?: (section: string) => void;
}

export function CaseStudyKhaznaReferral({ onBack, onSectionChange }: CaseStudyKhaznaReferralProps) {
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
            
            <h1 className="text-5xl lg:text-7xl text-[#f8f8f2] leading-tight max-w-4xl">
              Khazna — Referral Program Enhancement
            </h1>
            
            <p className="text-2xl text-[#b5b5b5] leading-relaxed max-w-3xl">
              Khazna had an existing referral program, but performance remained consistently low despite users actively sharing referral codes. While the feature existed, it failed to build trust or clearly communicate how incentives were earned.
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
              <span className="text-xl text-[#f8f8f2]">Senior Product Designer</span>
            </motion.div>
            
            <motion.div 
              className="flex flex-col gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className="text-sm text-[#808080] uppercase tracking-wider">Company</span>
              <span className="text-xl text-[#f8f8f2]">Khazna</span>
            </motion.div>
            
            <motion.div 
              className="flex flex-col gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className="text-sm text-[#808080] uppercase tracking-wider">Scope</span>
              <span className="text-xl text-[#f8f8f2]">Referral experience, user transparency, internal operational clarity</span>
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
              <Target className="w-8 h-8 text-[#ff9f7a]" />
              <span className="text-sm text-[#808080] uppercase tracking-wider">Challenge</span>
              <p className="text-base text-[#d0d0d0] leading-relaxed">
                Users shared codes but rarely received rewards, damaging trust in the program
              </p>
            </div>
            
            <div className="flex flex-col gap-3 p-8 rounded-xl bg-[rgba(255,159,122,0.03)] border border-[rgba(255,159,122,0.1)]">
              <Users className="w-8 h-8 text-[#ff9f7a]" />
              <span className="text-sm text-[#808080] uppercase tracking-wider">Core Issue</span>
              <p className="text-base text-[#d0d0d0] leading-relaxed">
                No visibility into referral status or how incentives were actually earned
              </p>
            </div>
            
            <div className="flex flex-col gap-3 p-8 rounded-xl bg-[rgba(255,159,122,0.03)] border border-[rgba(255,159,122,0.1)]">
              <TrendingUp className="w-8 h-8 text-[#ff9f7a]" />
              <span className="text-sm text-[#808080] uppercase tracking-wider">Outcome</span>
              <p className="text-base text-[#d0d0d0] leading-relaxed">
                Transparent tracking and clear explanations improved trust and activation rates
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
              Users were participating in the referral program but rarely receiving incentives. From surveys and user feedback, frustration was clear—many users believed Khazna was intentionally withholding rewards.
            </p>
            
            <div className="flex flex-col gap-4">
              <p className="text-lg text-[#d0d0d0]">The main issues were:</p>
              
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
                    No visibility into referral progress or activation status.
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
                    Users did not understand that incentives depended on the referred user completing activation.
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
                    The experience stopped at "share a code," with no follow-up or explanation.
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
                    Internally, referral tracking relied on manual spreadsheets, creating confusion for operations and finance teams.
                  </p>
                </motion.div>
              </div>
            </div>
            
            <p className="text-xl text-[#b5b5b5] leading-relaxed">
              This lack of transparency damaged user trust and reduced engagement.
            </p>
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
              The core problem wasn't the incentive itself, but the lack of clarity around how the system worked.
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
                    Make referral logic transparent and easy to understand.
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
                    Restore trust by clearly showing referral status and dependencies.
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
                    Improve user confidence without changing backend or financial rules.
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
                    Reduce internal reliance on manual tracking and guesswork.
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
              To understand the problem more deeply, I analyzed survey responses and conducted follow-up user calls. These conversations confirmed that users were willing to refer others—but only if they understood what would happen next.
            </p>
            
            <p className="text-xl text-[#b5b5b5] leading-relaxed">
              I also reviewed referral programs across fintech and consumer apps to identify patterns that supported trust. The strongest examples focused on visibility rather than higher rewards.
            </p>
            
            <p className="text-xl text-[#b5b5b5] leading-relaxed">
              In parallel, I worked with internal stakeholders to understand operational constraints and why referral tracking had become so manual.
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
              I redesigned the referral experience with transparency as the guiding principle.
            </p>
            
            <div className="flex flex-col gap-4">
              <p className="text-lg text-[#d0d0d0]">The new design:</p>
              
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
                    Introduced a clear entry point to the referral program.
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
                    Explained how incentives are earned and when they are granted.
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
                    Gave users visibility into each referred user and their activation status.
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
                    Shifted the experience from "share and wait" to "track and understand."
                  </p>
                </motion.div>
              </div>
            </div>
            
            <p className="text-xl text-[#b5b5b5] leading-relaxed">
              Throughout the process, I aligned closely with product and operations teams to ensure the solution respected financial rules and system limitations.
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
              This project reinforced that referral programs are not just growth tools—they are trust-sensitive systems. When users don't understand how value is created, engagement drops quickly.
            </p>
            <p className="text-xl text-[#d0d0d0] leading-relaxed">
              Clear visibility and honest communication proved more effective than increasing incentives or adding promotional messaging.
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
                Clearer value proposition for users.
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
                Improved referral activation rates.
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
                Reduced user frustration and confusion.
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
                Better internal alignment and less reliance on manual tracking.
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
            <p className="text-xl text-[#b5b5b5] leading-relaxed">The final designs focused on:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                className="flex flex-col gap-3 p-8 rounded-xl bg-[rgba(255,159,122,0.03)] border border-[rgba(255,159,122,0.1)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="text-sm text-[#808080] uppercase tracking-wider">Visibility</span>
                <p className="text-base text-[#d0d0d0] leading-relaxed">
                  Clear tracking of referral status and reward progress
                </p>
              </motion.div>
              
              <motion.div 
                className="flex flex-col gap-3 p-8 rounded-xl bg-[rgba(255,159,122,0.03)] border border-[rgba(255,159,122,0.1)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-sm text-[#808080] uppercase tracking-wider">Clarity</span>
                <p className="text-base text-[#d0d0d0] leading-relaxed">
                  Transparent explanation of how incentives are earned
                </p>
              </motion.div>
              
              <motion.div 
                className="flex flex-col gap-3 p-8 rounded-xl bg-[rgba(255,159,122,0.03)] border border-[rgba(255,159,122,0.1)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="text-sm text-[#808080] uppercase tracking-wider">Trust</span>
                <p className="text-base text-[#d0d0d0] leading-relaxed">
                  Honest communication about activation dependencies
                </p>
              </motion.div>
            </div>
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
              Designing this experience highlighted how deeply trust and transparency affect user behavior in financial products. Small design decisions around visibility and explanation can significantly change perception and engagement.
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

          {onSectionChange && (
            <button
              onClick={() => onSectionChange('case-study-simplia-hotdesk')}
              className="inline-flex items-center gap-2 text-[#ff9f7a] hover:text-[#ffb394] transition-colors group"
            >
              <span>Next Case Study</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </motion.div>
      </section>
    </div>
  );
}