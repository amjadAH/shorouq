import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react@0.487.0';
import { Footer } from './Footer';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface SystemsFoundationsProps {
  onBack: () => void;
  onSectionChange: (section: string) => void;
}

export function SystemsFoundations({ onBack, onSectionChange }: SystemsFoundationsProps) {
  const systemsAreas = [
    {
      title: 'Visual Foundations',
      description: 'Establishing the core visual language that creates consistency across products.',
      bullets: [
        'Defined color systems, typography scales, and spacing rules',
        'Created interaction patterns reducing redundant design decisions',
        'Ensured accessibility standards across all visual elements'
      ],
      impact: 'Reduced design-to-dev handoff questions by 40%',
      snapshots: [
        {
          url: 'figma:asset/4e0cfe48646d8e7a5e8e4617ff2b6485a4dd697b.png',
          caption: 'Comprehensive design system foundations'
        }
      ]
    },
    {
      title: 'Design Tokens',
      description: 'Structuring design decisions as reusable tokens for consistent implementation.',
      bullets: [
        'Created semantic naming conventions tied to functional roles',
        'Established token hierarchies bridging design intent and code',
        'Enabled predictable theming and scalable updates'
      ],
      impact: 'Supported 6 product squads with shared foundations',
      snapshots: [
        {
          url: 'figma:asset/d8692490d4679a4085f2be6843e6c649db1e3241.png',
          caption: 'Semantic color system with functional roles'
        }
      ]
    },
    {
      title: 'Reusable Components',
      description: 'Building practical, flexible components designed for real-world usage.',
      bullets: [
        'Designed components with complete states (error, loading, disabled)',
        'Ensured accessibility standards and keyboard navigation',
        'Created flexible variants based on recurring product patterns'
      ],
      impact: 'Deployed across 15+ product flows',
      snapshots: [
        {
          url: 'figma:asset/408d9881cf6c3266afbac7796a55cbac738b29ec.png',
          caption: 'Component variants with complete state coverage'
        }
      ]
    },
    {
      title: 'Collaboration with Engineering',
      description: 'Partnering with developers to align on implementation and constraints.',
      bullets: [
        'Conducted regular design-engineering sync sessions',
        'Aligned on component prop structures and edge cases',
        'Documented technical constraints and feasibility considerations'
      ],
      impact: 'Improved handoff clarity across 4 product teams',
      snapshots: [
        {
          url: 'figma:asset/f2df04dc6bb9bde5ac8c82fe6a30875ea163670c.png',
          caption: 'Cross-functional collaboration in practice'
        }
      ]
    }
  ];

  const impactMetrics = [
    {
      title: 'Faster Iteration',
      description: 'Reusable components and clear patterns reduce redundant work'
    },
    {
      title: 'Visual Consistency',
      description: 'Cohesive product experience across multiple teams and features'
    },
    {
      title: 'Easier Maintenance',
      description: 'Centralized decisions make updates predictable and scalable'
    },
    {
      title: 'Aligned Teams',
      description: 'Shared systems create a common language between disciplines'
    }
  ];

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
      <section className="max-w-5xl mx-auto px-6 py-14 min-h-[60vh] flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-[56px] lg:text-[64px] text-[#f8f8f2] leading-tight">
            Design Systems & Product Foundations
          </h1>
          
          <p className="text-[20px] text-[#b5b5b5] leading-relaxed max-w-3xl">
            Building scalable foundations that help teams ship faster and stay aligned. This work evolves alongside product delivery—adapting to real constraints while creating shared language and consistent patterns across multiple squads.
          </p>
        </motion.div>
      </section>

      {/* What I Worked On */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-20"
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-[40px] text-[#f8f8f2] font-bold">What I Worked On</h2>
            <p className="text-[17px] text-[#8a8a8a] leading-relaxed max-w-2xl">
              Foundation work that makes everything else easier.
            </p>
          </div>

          {/* Systems Areas with 2-column layout */}
          <div className="flex flex-col gap-32">
            {systemsAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
              >
                {/* Left Column: Text Content */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-[28px] text-[#f8f8f2] font-bold">{area.title}</h3>
                  
                  <p className="text-[16px] text-[#a0a0a0] leading-relaxed">
                    {area.description}
                  </p>

                  <div className="flex flex-col gap-3">
                    {area.bullets.map((bullet, bulletIndex) => (
                      <div key={bulletIndex} className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-[#ff9f7a] mt-2 flex-shrink-0" />
                        <p className="text-[15px] text-[#8a8a8a] leading-relaxed">
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Impact highlight */}
                  <div className="pt-4">
                    <p className="text-[15px] text-[#ff9f7a]">
                      {area.impact}
                    </p>
                  </div>
                </div>

                {/* Right Column: Visual Snapshot */}
                <div className="flex flex-col gap-3">
                  {area.snapshots.map((snapshot, snapshotIndex) => (
                    <motion.div
                      key={snapshotIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="group"
                    >
                      <div className="relative rounded-lg overflow-hidden">
                        {/* Image */}
                        <div className="relative aspect-[4/3]">
                          <ImageWithFallback
                            src={snapshot.url}
                            alt={snapshot.caption}
                            className="w-full h-full object-cover"
                          />
                          {/* Soft shadow overlay */}
                          <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,159,122,0.06)]" />
                        </div>
                      </div>
                      
                      {/* Caption */}
                      <p className="text-[13px] text-[#6a6a6a] leading-relaxed mt-3">
                        {snapshot.caption}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* How This Shows Up - Redesigned as metric cards */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-12"
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-[40px] text-[#f8f8f2] font-bold">How This Shows Up</h2>
            <p className="text-[17px] text-[#8a8a8a] leading-relaxed max-w-2xl">
              Systems work becomes visible through shipped features and team velocity.
            </p>
          </div>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col gap-3 p-6 rounded-lg border border-[rgba(255,159,122,0.06)] hover:border-[rgba(255,159,122,0.12)] transition-colors"
              >
                <h3 className="text-[18px] text-[#f8f8f2] font-medium">{metric.title}</h3>
                <p className="text-[15px] text-[#8a8a8a] leading-relaxed">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* System Impact Numbers */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-12"
        >
          <h2 className="text-[40px] text-[#f8f8f2] font-bold text-center">Design Systems Impact</h2>
          
          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="text-[56px] font-bold text-[#ff9f7a]">
                10+
              </div>
              <p className="text-[15px] text-[#a0a0a0] leading-relaxed">
                Product flows using standardized components
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="text-[56px] font-bold text-[#ff9f7a]">
                6+
              </div>
              <p className="text-[15px] text-[#a0a0a0] leading-relaxed">
                Component variants consolidated into unified patterns
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="text-[56px] font-bold text-[#ff9f7a]">
                4+
              </div>
              <p className="text-[15px] text-[#a0a0a0] leading-relaxed">
                Product teams supported with shared foundations
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* My Approach to Systems */}
      <section className="max-w-5xl mx-auto px-6 py-14 min-h-[60vh] flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <h2 className="text-[40px] text-[#f8f8f2] font-bold">My Approach</h2>
          
          <div className="flex flex-col gap-6 max-w-3xl">
            <p className="text-[17px] text-[#a0a0a0] leading-relaxed">
              Systems evolve alongside products—starting small, proving value through real usage, and growing as needs emerge. Foundations are built incrementally: a spacing rule becomes useful when it solves actual inconsistency; a component becomes reusable after it's been tested across contexts. The best systems work is invisible—teams should ship faster without thinking about the foundation.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Closing CTA */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start gap-6"
        >
          <button
            onClick={() => {
              onSectionChange('home');
              setTimeout(() => {
                const workSection = document.getElementById('selected-work');
                if (workSection) {
                  workSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }, 100);
            }}
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