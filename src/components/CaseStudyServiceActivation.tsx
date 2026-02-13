import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react@0.487.0';
import { Footer } from './Footer';
import serviceBlueprintImage from 'figma:asset/8da819478eb58c0c2cd3b1c02b7c325a3a6aa79b.png';

interface CaseStudyServiceActivationProps {
  onBack: () => void;
}

export function CaseStudyServiceActivation({ onBack }: CaseStudyServiceActivationProps) {
  return (
    <div className="min-h-screen pt-20 pb-12 bg-background">
      {/* Back Button */}
      <section className="max-w-5xl mx-auto px-6 pt-8">
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
      <section className="max-w-5xl mx-auto px-6 py-16">
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

      {/* Subtle divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-[rgba(255,159,122,0.08)]" />
      </div>

      {/* Context Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
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

      {/* Subtle divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-[rgba(255,159,122,0.08)]" />
      </div>

      {/* The Investigation Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
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

      {/* Subtle divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-[rgba(255,159,122,0.08)]" />
      </div>

      {/* Service Blueprint Visual Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
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

      {/* Subtle divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-[rgba(255,159,122,0.08)]" />
      </div>

      {/* Key Breakpoints Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
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

      {/* Subtle divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-[rgba(255,159,122,0.08)]" />
      </div>

      {/* Product-Level Outcome Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <h2 className="text-[32px] text-[#f8f8f2]">Product-Level Outcome</h2>
          
          <div className="flex flex-col gap-6 max-w-3xl">
            <p className="text-[17px] text-[#a0a0a0] leading-relaxed">
              Insights from this blueprint directly informed the redesign of the registration flow.
            </p>
            
            <p className="text-[17px] text-[#a0a0a0] leading-relaxed">
              I introduced structured "pending" states and clearer activation visibility screens, allowing users to understand where they were in the process.
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

      {/* Footer */}
      <Footer />
    </div>
  );
}
