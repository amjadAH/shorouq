import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, TrendingUp, DollarSign, CheckCircle, ArrowRight } from 'lucide-react@0.487.0';
import ResearchStrategy from '../imports/Container-137-29';
import UserFlowRedesigned from '../imports/Container-137-60';
import MobileExperience from '../imports/Container-138-123';

interface CaseStudyKhaznaEarlyRepaymentProps {
  onBack: () => void;
  onSectionChange?: (section: string) => void;
}

export function CaseStudyKhaznaEarlyRepayment({ onBack, onSectionChange }: CaseStudyKhaznaEarlyRepaymentProps) {
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
            
            <h1 className="text-5xl lg:text-7xl text-[#f8f8f2] leading-tight max-w-4xl">
              Khazna — Early Repayment Experience Optimization
            </h1>
            
            <p className="text-2xl text-[#b5b5b5] leading-relaxed max-w-3xl">
              Khazna offers users the option to repay their loans early. Although the feature existed, many users hesitated to complete the action due to confusion and uncertainty around the financial impact.
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
              <span className="text-sm text-[#808080] uppercase tracking-wider">Context</span>
              <span className="text-xl text-[#f8f8f2]">Financial decision-making UX, information hierarchy, trust design</span>
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
              <TrendingUp className="w-8 h-8 text-[#ff9f7a]" />
              <span className="text-sm text-[#808080] uppercase tracking-wider">Challenge</span>
              <p className="text-base text-[#d0d0d0] leading-relaxed">
                Users hesitated to complete early repayment due to confusion about financial impact
              </p>
            </div>
            
            <div className="flex flex-col gap-3 p-8 rounded-xl bg-[rgba(255,159,122,0.03)] border border-[rgba(255,159,122,0.1)]">
              <DollarSign className="w-8 h-8 text-[#ff9f7a]" />
              <span className="text-sm text-[#808080] uppercase tracking-wider">Core Issue</span>
              <p className="text-base text-[#d0d0d0] leading-relaxed">
                Unclear information hierarchy and lack of transparent explanation of outcomes
              </p>
            </div>
            
            <div className="flex flex-col gap-3 p-8 rounded-xl bg-[rgba(255,159,122,0.03)] border border-[rgba(255,159,122,0.1)]">
              <CheckCircle className="w-8 h-8 text-[#ff9f7a]" />
              <span className="text-sm text-[#808080] uppercase tracking-wider">Outcome</span>
              <p className="text-base text-[#d0d0d0] leading-relaxed">
                Clearer hierarchy and supportive design increased user confidence and trust
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

          <div className="flex flex-col gap-6">
            <p className="text-xl text-[#b5b5b5] leading-relaxed">
              Users reached the early repayment option but often stopped before completing it. The experience did not clearly explain what early repayment means financially, making it difficult for users to understand how much they would save or what would change after repayment.
            </p>
            
            <p className="text-xl text-[#b5b5b5] leading-relaxed">
              Information was presented without clear hierarchy, increasing hesitation. The flow felt transactional rather than supportive, leaving users uncertain about whether they were making the right decision. This lack of clarity turned what should have been a simple, beneficial action into a moment of anxiety and doubt.
            </p>
            
            <p className="text-xl text-[#b5b5b5] leading-relaxed">
              The problem wasn't technical or functional—the feature worked as designed. The issue was that the design failed to provide the reassurance and transparency users needed when making an important financial decision.
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

          <div className="flex flex-col gap-6">
            <p className="text-xl text-[#b5b5b5] leading-relaxed">
              The real issue was not the lack of early settlement options, but how difficult it was to understand what settlement actually meant—financially and practically.
            </p>
            
            <p className="text-xl text-[#b5b5b5] leading-relaxed">
              Users needed clarity around:
            </p>
            
            <div className="flex flex-col gap-4 pl-4">
              <div className="flex gap-4 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ff9f7a] mt-3 flex-shrink-0" />
                <p className="text-lg text-[#d0d0d0] leading-relaxed">
                  What exactly they owe and why
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ff9f7a] mt-3 flex-shrink-0" />
                <p className="text-lg text-[#d0d0d0] leading-relaxed">
                  How much money early settlement would save them
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ff9f7a] mt-3 flex-shrink-0" />
                <p className="text-lg text-[#d0d0d0] leading-relaxed">
                  What happens after they pay
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ff9f7a] mt-3 flex-shrink-0" />
                <p className="text-lg text-[#d0d0d0] leading-relaxed">
                  Whether the transaction is secure and confirmed
                </p>
              </div>
            </div>
          </div>

          {/* Research Strategy Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8"
          >
            <ResearchStrategy />
          </motion.div>

          {/* User Flow Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8"
          >
            <UserFlowRedesigned />
          </motion.div>
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
              I began by reviewing user behavior and feedback around repayment flows, looking for patterns in where users hesitated or dropped off. I analyzed how other financial products explain sensitive financial actions, paying attention to tone, structure, and the balance between information and simplicity.
            </p>
            
            <p className="text-xl text-[#b5b5b5] leading-relaxed">
              Working closely with product and stakeholders, I aligned on business rules and calculation constraints to ensure the design would accurately reflect the financial logic behind early repayment. This collaboration helped identify opportunities for better hierarchy, clearer explanation, and a more reassuring tone throughout the experience.
            </p>
            
            <p className="text-xl text-[#b5b5b5] leading-relaxed">
              The exploration phase reinforced that users weren't avoiding early repayment because they didn't want it—they were avoiding it because they didn't understand it well enough to feel confident moving forward.
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
              I redesigned the early repayment flow to guide users through the decision with clarity and confidence. The updated experience improved hierarchy to surface key information first, making it immediately clear what early repayment means and what the user would gain from it.
            </p>
            
            <p className="text-xl text-[#b5b5b5] leading-relaxed">
              The design clearly presented repayment amounts and potential savings, removing ambiguity around the financial outcome. I added explanatory content to clarify what happens after repayment, addressing common concerns and questions before they became barriers to action.
            </p>
            
            <p className="text-xl text-[#b5b5b5] leading-relaxed">
              Visual and cognitive clutter were reduced during the decision moment, allowing users to focus on the information that mattered most. The tone shifted from transactional to supportive, reinforcing that this was a choice made in their best interest, not a pressure point designed to drive behavior.
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
              Financial decisions are emotional, not just functional. Users need more than accurate calculations—they need reassurance that they understand the implications of their choices.
            </p>
            <p className="text-xl text-[#d0d0d0] leading-relaxed">
              Lack of clarity increases hesitation, even when a feature is beneficial. When users can't easily see what they'll gain or lose, they default to inaction as a protective measure.
            </p>
            <p className="text-xl text-[#d0d0d0] leading-relaxed">
              Calm, supportive UX builds trust more effectively than urgency. Designing for confidence rather than conversion creates experiences that users feel good about, which ultimately serves both user and business goals better.
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
                Clearer understanding of early repayment outcomes.
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
                Increased user confidence when making repayment decisions.
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
                Reduced hesitation and drop-off during the decision moment.
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
                Improved perception of transparency and trust.
              </p>
            </motion.div>
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
            <p className="text-xl text-[#b5b5b5] leading-relaxed">
              The final designs emphasized clear information hierarchy, transparent explanation of savings, and supportive decision-making moments throughout the flow.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                className="flex flex-col gap-4 p-8 rounded-lg bg-[rgba(255,159,122,0.03)] border border-[rgba(255,159,122,0.1)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <p className="text-lg text-[#d0d0d0] leading-relaxed">
                  Clear information hierarchy that surfaces key details first.
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
                  Transparent explanation of savings and financial outcomes.
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
                  Supportive decision-making moments without pressure.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Mobile Experience Screens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8"
          >
            <MobileExperience />
          </motion.div>
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
              Designing for financial experiences requires deep empathy and a commitment to clarity above all else. Users are making decisions that affect their financial well-being, and the design must honor that responsibility by providing transparency, reducing anxiety, and building trust.
            </p>
            <p className="text-xl text-[#b5b5b5] leading-relaxed">
              This project reinforced that the best financial UX doesn't push users toward actions—it empowers them to make informed decisions with confidence. When users feel supported rather than pressured, they trust the product more, which creates better outcomes for everyone involved.
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
              onClick={() => onSectionChange('case-study-simplia-hotdesk')}
              className="inline-flex items-center gap-2 text-[#ff9f7a] hover:text-[#ffb394] transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Previous Case Study</span>
            </button>
          )}

          {onSectionChange && (
            <button
              onClick={() => onSectionChange('case-study-service-activation')}
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