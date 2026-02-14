import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react@0.487.0';
import { Footer } from './Footer';
import serviceBlueprintImage from 'figma:asset/8da819478eb58c0c2cd3b1c02b7c325a3a6aa79b.png';

interface CaseStudyServiceActivationProps {
  onBack: () => void;
  onSectionChange?: (section: string) => void;
}

export function CaseStudyServiceActivation({ onBack, onSectionChange }: CaseStudyServiceActivationProps) {
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
      <section className="px-14 py-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-[48px] lg:text-[56px] text-[#f8f8f2] leading-tight">
            Service-Led Activation Redesign
          </h1>
          
          <p className="text-[20px] text-[#b5b5b5] leading-relaxed max-w-2xl">
            Mapping operational bottlenecks to improve registration visibility and reduce support dependency.
          </p>
        </motion.div>
      </section>

      {/* Identify */}
      <section className="px-14 py-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <h2 className="text-[32px] text-[#f8f8f2]">Context</h2>
          
          <div className="flex flex-col gap-6 max-w-3xl">
            <p className="text-[17px] text-[#a0a0a0] leading-relaxed">
              During the registration and activation journey, users frequently contacted support asking why their accounts were not activated.
            </p>
            
            <p className="text-[17px] text-[#a0a0a0] leading-relaxed">
              The onboarding process involved multiple invisible handoffs:
            </p>

            <ul className="flex flex-col gap-3 pl-6">
              <li className="text-[17px] text-[#a0a0a0] leading-relaxed list-disc">
                User registers
              </li>
              <li className="text-[17px] text-[#a0a0a0] leading-relaxed list-disc">
                Agents review
              </li>
              <li className="text-[17px] text-[#a0a0a0] leading-relaxed list-disc">
                Backend operations validate
              </li>
              <li className="text-[17px] text-[#a0a0a0] leading-relaxed list-disc">
                HR from the user's company approves
              </li>
              <li className="text-[17px] text-[#a0a0a0] leading-relaxed list-disc">
                Backend confirms activation
              </li>
              <li className="text-[17px] text-[#a0a0a0] leading-relaxed list-disc">
                User is finally activated
              </li>
            </ul>

            <p className="text-[17px] text-[#a0a0a0] leading-relaxed">
              Most of these transitions were manual and not visible to the user.
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
          className="flex flex-col gap-8"
        >
          <h2 className="text-[32px] text-[#f8f8f2]">The Investigation</h2>
          
          <div className="flex flex-col gap-6 max-w-3xl">
            <p className="text-[17px] text-[#a0a0a0] leading-relaxed">
              To understand the real operational flow, I created a full service blueprint mapping:
            </p>

            <ul className="flex flex-col gap-3 pl-6">
              <li className="text-[17px] text-[#a0a0a0] leading-relaxed list-disc">
                Customer actions
              </li>
              <li className="text-[17px] text-[#a0a0a0] leading-relaxed list-disc">
                Frontstage interactions
              </li>
              <li className="text-[17px] text-[#a0a0a0] leading-relaxed list-disc">
                Backend processes
              </li>
              <li className="text-[17px] text-[#a0a0a0] leading-relaxed list-disc">
                HR validation steps
              </li>
              <li className="text-[17px] text-[#a0a0a0] leading-relaxed list-disc">
                Internal operational dependencies
              </li>
            </ul>

            <p className="text-[17px] text-[#a0a0a0] leading-relaxed">
              This revealed that activation delays were often caused by HR approvals handled manually via Excel sheets sent over email, with no reminder system in place.
            </p>
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
          className="flex flex-col gap-6"
        >
          <div className="w-full rounded-xl overflow-hidden border border-[rgba(255,159,122,0.1)] bg-[rgba(255,159,122,0.02)]">
            <img 
              src={serviceBlueprintImage} 
              alt="Service blueprint mapping" 
              className="w-full h-auto"
            />
          </div>
          
          <p className="text-[14px] text-[#8a8a8a] text-center leading-relaxed">
            Service blueprint mapping cross-functional activation flow and operational bottlenecks.
          </p>
        </motion.div>
      </section>

      {/* Act */}
      <section className="px-14 py-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <h2 className="text-[32px] text-[#f8f8f2]">Key Breakpoints Identified</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <div className="flex flex-col gap-3 p-6 rounded-lg bg-[rgba(255,159,122,0.03)] border border-[rgba(255,159,122,0.1)]">
              <p className="text-[17px] text-[#f8f8f2] leading-relaxed">
                Manual HR approvals without automated reminders
              </p>
            </div>

            <div className="flex flex-col gap-3 p-6 rounded-lg bg-[rgba(255,159,122,0.03)] border border-[rgba(255,159,122,0.1)]">
              <p className="text-[17px] text-[#f8f8f2] leading-relaxed">
                Status changes not consistently reflected across systems
              </p>
            </div>

            <div className="flex flex-col gap-3 p-6 rounded-lg bg-[rgba(255,159,122,0.03)] border border-[rgba(255,159,122,0.1)]">
              <p className="text-[17px] text-[#f8f8f2] leading-relaxed">
                Backend dependency chains causing cascading delays
              </p>
            </div>

            <div className="flex flex-col gap-3 p-6 rounded-lg bg-[rgba(255,159,122,0.03)] border border-[rgba(255,159,122,0.1)]">
              <p className="text-[17px] text-[#f8f8f2] leading-relaxed">
                Zero visibility for users during pending states
              </p>
            </div>
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
          className="flex flex-col gap-8"
        >
          <h2 className="text-[32px] text-[#f8f8f2]">Design Recommendations</h2>
          
          <div className="flex flex-col gap-6 max-w-3xl">
            <p className="text-[17px] text-[#a0a0a0] leading-relaxed">
              Based on the identified bottlenecks, I recommended the following design changes:
            </p>
            
            <ul className="flex flex-col gap-3 pl-6">
              <li className="text-[17px] text-[#a0a0a0] leading-relaxed list-disc">
                Implement automated reminders for HR approvals
              </li>
              <li className="text-[17px] text-[#a0a0a0] leading-relaxed list-disc">
                Ensure status changes are consistently reflected across systems
              </li>
              <li className="text-[17px] text-[#a0a0a0] leading-relaxed list-disc">
                Break down backend dependency chains
              </li>
              <li className="text-[17px] text-[#a0a0a0] leading-relaxed list-disc">
                Provide clear visibility for users during pending states
              </li>
            </ul>
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
          className="flex flex-col gap-8"
        >
          <h2 className="text-[32px] text-[#f8f8f2]">Outcome</h2>
          
          <div className="flex flex-col gap-6 max-w-3xl">
            <p className="text-[17px] text-[#a0a0a0] leading-relaxed">
              The redesign significantly reduced activation delays and improved user satisfaction.
            </p>
            
            <p className="text-[17px] text-[#a0a0a0] leading-relaxed">
              Users no longer needed to contact support for activation status updates, leading to a decrease in support tickets.
            </p>

            <div className="flex flex-col gap-4 mt-4 p-6 rounded-lg bg-[rgba(255,159,122,0.03)] border border-[rgba(255,159,122,0.1)]">
              <p className="text-[15px] text-[#8a8a8a] uppercase tracking-wider">
                This approach aimed to:
              </p>
              <ul className="flex flex-col gap-3 pl-6">
                <li className="text-[17px] text-[#f8f8f2] leading-relaxed list-disc">
                  Reduce unnecessary support tickets
                </li>
                <li className="text-[17px] text-[#f8f8f2] leading-relaxed list-disc">
                  Increase transparency during activation
                </li>
                <li className="text-[17px] text-[#f8f8f2] leading-relaxed list-disc">
                  Improve internal alignment across teams
                </li>
              </ul>
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
          className="flex flex-col gap-8"
        >
          <h2 className="text-[32px] text-[#f8f8f2]">Final Designs</h2>
          
          <div className="flex flex-col gap-6 max-w-3xl">
            <p className="text-[17px] text-[#a0a0a0] leading-relaxed">
              The final designs included:
            </p>
            
            <ul className="flex flex-col gap-3 pl-6">
              <li className="text-[17px] text-[#a0a0a0] leading-relaxed list-disc">
                Automated reminders for HR approvals
              </li>
              <li className="text-[17px] text-[#a0a0a0] leading-relaxed list-disc">
                Consistent status updates across systems
              </li>
              <li className="text-[17px] text-[#a0a0a0] leading-relaxed list-disc">
                Simplified backend dependency chains
              </li>
              <li className="text-[17px] text-[#a0a0a0] leading-relaxed list-disc">
                Clear visibility for users during pending states
              </li>
            </ul>
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
          className="flex flex-col gap-8"
        >
          <h2 className="text-[32px] text-[#f8f8f2]">Screens</h2>
          
          <div className="flex flex-col gap-6 max-w-3xl">
            <p className="text-[17px] text-[#a0a0a0] leading-relaxed">
              The final screens included:
            </p>
            
            <ul className="flex flex-col gap-3 pl-6">
              <li className="text-[17px] text-[#a0a0a0] leading-relaxed list-disc">
                User registration screen
              </li>
              <li className="text-[17px] text-[#a0a0a0] leading-relaxed list-disc">
                Activation status screen
              </li>
              <li className="text-[17px] text-[#a0a0a0] leading-relaxed list-disc">
                HR approval reminder screen
              </li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Reflection */}
      <section className="px-14 py-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <h2 className="text-[32px] text-[#f8f8f2]">Reflection</h2>
          
          <div className="flex flex-col gap-6 max-w-3xl">
            <p className="text-[17px] text-[#a0a0a0] leading-relaxed">
              This project highlighted the importance of mapping out the entire user journey and identifying operational bottlenecks.
            </p>
            
            <p className="text-[17px] text-[#a0a0a0] leading-relaxed">
              By addressing these bottlenecks, we were able to significantly improve the user experience and reduce support dependency.
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
              onClick={() => onSectionChange('case-study-khazna-early-repayment')}
              className="inline-flex items-center gap-2 text-[#ff9f7a] hover:text-[#ffb394] transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Previous Case Study</span>
            </button>
          )}

          {onSectionChange && (
            <button
              onClick={() => onSectionChange('case-study-khazna-registration')}
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