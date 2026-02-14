import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Users, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react@0.487.0';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Footer } from './Footer';
import Container from '../imports/Container';
import MobileContainer from '../imports/Container-125-52';

interface CaseStudyKhaznaRegistrationProps {
  onBack: () => void;
  onSectionChange?: (section: string) => void;
}

export function CaseStudyKhaznaRegistration({ onBack, onSectionChange }: CaseStudyKhaznaRegistrationProps) {
  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Back Button */}
      <section className="px-14 pt-8">
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
      <section className="px-14 py-14 relative">
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
            
            <h1 className="lg:text-7xl text-[#f8f8f2] leading-tight max-w-4xl text-[48px]">
              Khazna — On-ground Registration Experience Optimization
            </h1>
            
            <p className="text-[#b5b5b5] leading-relaxed max-w-3xl text-[20px]">
              At Khazna, couriers regularly visit on-ground locations such as factories and companies to onboard multiple users in a limited time window. The registration process needed to work reliably in high-pressure, real-world environments where delays directly impacted both couriers and customers.
            </p>
          </div>

          {/* Metadata grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <span className="text-xl text-[#f8f8f2]">Courier portal experience, operational workflows, and system feedback</span>
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
              <Clock className="w-8 h-8 text-[#ff9f7a]" />
              <span className="text-sm text-[#808080] uppercase tracking-wider">Challenge</span>
              <p className="text-base text-[#d0d0d0] leading-relaxed">
                Register 10+ users per site visit in high-pressure, time-sensitive environments
              </p>
            </div>
            
            <div className="flex flex-col gap-3 p-8 rounded-xl bg-[rgba(255,159,122,0.03)] border border-[rgba(255,159,122,0.1)]">
              <AlertCircle className="w-8 h-8 text-[#ff9f7a]" />
              <span className="text-sm text-[#808080] uppercase tracking-wider">Core Issue</span>
              <p className="text-base text-[#d0d0d0] leading-relaxed">
                Unclear system states and backend errors left couriers stuck with waiting users
              </p>
            </div>
            
            <div className="flex flex-col gap-3 p-8 rounded-xl bg-[rgba(255,159,122,0.03)] border border-[rgba(255,159,122,0.1)]">
              <CheckCircle className="w-8 h-8 text-[#ff9f7a]" />
              <span className="text-sm text-[#808080] uppercase tracking-wider">Outcome</span>
              <p className="text-base text-[#d0d0d0] leading-relaxed">
                Smoother flow, reduced friction, and clearer feedback during critical onboarding
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Identify */}
      <section className="px-14 py-14">
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
              The existing courier portal struggled to support fast, on-site onboarding. Couriers often had to register more than ten users in a single visit, while users were waiting to return to work.
            </p>
            
            <div className="flex flex-col gap-4">
              <p className="text-lg text-[#d0d0d0]">Several issues repeatedly blocked the flow:</p>
              
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
                    Registration relied on long, form-heavy screens with no clear hierarchy.
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
                    Envelope QR codes, used to connect Khazna cards to users, frequently failed due to backend issues.
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
                    When errors occurred, there was no clear status explaining what went wrong or what action was needed.
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
                    Backend operations responses took time, leaving couriers stuck with multiple users waiting.
                  </p>
                </motion.div>
              </div>
            </div>
            
            <p className="text-xl text-[#b5b5b5] leading-relaxed">
              This created frustration, delays, and uncertainty during critical onboarding moments.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Define */}
      <section className="px-14 py-14">
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
              The core challenge was not adding more features, but removing friction under real constraints.
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
                    Support fast, confident onboarding during on-site visits.
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
                    Reduce cognitive load for couriers working under pressure.
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
                    Clearly communicate system states and backend-related issues.
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
                    Respect legal and operational steps that could not be removed from the flow.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Explore */}
      <section className="px-14 py-14">
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
              To fully understand the problem, I focused on the real context in which the portal was used.
            </p>
            
            <p className="text-xl text-[#b5b5b5] leading-relaxed">
              I conducted user interviews with couriers and joined on-site visits to observe registration sessions in real environments. I mapped the full courier workflow, from scanning national IDs and capturing photos, to collecting signatures and coordinating with backend operations.
            </p>
            
            <p className="text-xl text-[#b5b5b5] leading-relaxed">
              This helped identify where delays happened, how backend dependencies affected the flow, and which steps caused the most confusion during peak usage.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Act */}
      <section className="px-14 py-14">
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
              Based on these insights, I redesigned the registration experience to prioritize clarity and flow.
            </p>
            
            <p className="text-xl text-[#b5b5b5] leading-relaxed">
              I restructured the registration steps so dependent actions were clearly grouped and logically ordered. Long forms were simplified by improving data hierarchy and reducing unnecessary switching between steps.
            </p>
            
            <p className="text-xl text-[#b5b5b5] leading-relaxed">
              System feedback was redesigned to make backend-related issues visible and understandable, reducing uncertainty when errors occurred. Throughout the process, I worked closely with product managers, operations, and engineering teams to ensure the solution remained legally compliant and technically feasible.
            </p>
            
            <p className="text-xl text-[#b5b5b5] leading-relaxed">
              Clear handoff documentation was prepared to support implementation and iteration.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Learn */}
      <section className="px-14 py-14">
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
              This project reinforced that operational tools must prioritize speed, clarity, and trust over completeness. Clear system feedback significantly reduces stress in high-pressure environments, and designing for field work requires understanding physical, time-based, and human constraints — not just screens.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Impact */}
      <section className="px-14 py-14">
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

          <div className="flex flex-col gap-4">
            <p className="text-xl text-[#b5b5b5] leading-relaxed">The redesigned flow resulted in:</p>
            
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
                  Smoother registration during peak on-site visits.
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
                  Couriers handling more users per visit with less friction.
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
                  A noticeable reduction in "stuck" or unclear system states.
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
                  Fewer photo-related issues reported by backend operations, reducing onboarding delays.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Final Designs */}
      <section className="px-14 py-14">
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
            <p className="text-xl text-[#b5b5b5] leading-relaxed">The final UI focused on:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                className="flex flex-col gap-4 p-8 rounded-lg bg-[rgba(255,159,122,0.03)] border border-[rgba(255,159,122,0.1)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <p className="text-lg text-[#d0d0d0] leading-relaxed">
                  Clear hierarchy and progressive disclosure.
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
                  Visible system states and error feedback.
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
                  A streamlined, end-to-end flow designed for real-world use.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Screens Section */}
      <section className="px-14 py-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-16"
        >
          {/* Language note */}
          <div className="flex flex-col gap-4 p-6 rounded-lg bg-[rgba(255,159,122,0.03)] border-l-4 border-[#ff9f7a]">
            <p className="text-base text-[#b5b5b5] leading-relaxed">
              Screens are shown in Arabic as the product serves a local market. Design decisions focus on hierarchy, flow, and system feedback.
            </p>
          </div>

          {/* Desktop Experience */}
          <Container />

          {/* Mobile-first Experience */}
          <MobileContainer />
        </motion.div>
      </section>

      {/* Reflection */}
      <section className="px-14 py-14">
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
              Designing for on-ground operations requires balancing speed, compliance, and human limitations. This case highlighted the importance of stepping into the field, understanding real workflows, and designing with empathy for people working under pressure.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Navigation */}
      <section className="px-14 py-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-center"
        >
          {onSectionChange && (
            <button
              onClick={() => onSectionChange('case-study-service-activation')}
              className="inline-flex items-center gap-2 text-[#ff9f7a] hover:text-[#ffb394] transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Previous Case Study</span>
            </button>
          )}

          {onSectionChange && (
            <button
              onClick={() => onSectionChange('case-study-khazna-referral')}
              className="inline-flex items-center gap-2 text-[#ff9f7a] hover:text-[#ffb394] transition-colors group"
            >
              <span>Next Case Study</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </motion.div>
      </section>

      {/* Footer */}
      <section className="px-14 py-14">
        <Footer />
      </section>
    </div>
  );
}