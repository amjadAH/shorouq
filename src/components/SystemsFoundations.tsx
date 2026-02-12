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
          url: 'https://images.unsplash.com/photo-1729992530956-912936b9785d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb2xvciUyMHBhbGV0dGUlMjBncmlkfGVufDF8fHx8MTc3MDgxNjA3OXww&ixlib=rb-4.1.0&q=80&w=1080',
          caption: 'Standardized spacing scale across 10+ flows'
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
          url: 'https://images.unsplash.com/photo-1691440599496-4ae4378799eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0b2tlbnMlMjB0eXBvZ3JhcGh5JTIwc3BhY2luZ3xlbnwxfHx8fDE3NzA4MTYwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
          caption: 'Token structure enabling consistent decisions'
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
          url: 'https://images.unsplash.com/photo-1721046013656-0a0980264689?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wb25lbnQlMjBsaWJyYXJ5JTIwdWklMjBlbGVtZW50c3xlbnwxfHx8fDE3NzA4MTYwODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
          caption: 'Component library with standardized variants'
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
          url: 'https://images.unsplash.com/photo-1646579886741-12b59840c63f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMGRlc2lnbiUyMGVuZ2luZWVyaW5nfGVufDF8fHx8MTc3MDgxNjA4MHww&ixlib=rb-4.1.0&q=80&w=1080',
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
      <section className="max-w-5xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-8"
        >
          <h1 className="text-[56px] lg:text-[64px] text-[#f8f8f2] leading-tight">
            Systems & Foundations
          </h1>
          
          <p className="text-[20px] text-[#b5b5b5] leading-relaxed max-w-2xl">
            Designing foundations that help teams build faster and stay aligned.
          </p>

          <p className="text-[17px] text-[#8a8a8a] leading-relaxed max-w-2xl">
            Systems work doesn't happen in isolation. It evolves alongside product delivery—adapting to real constraints and making space for both consistency and flexibility.
          </p>
        </motion.div>
      </section>

      {/* Subtle divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-[rgba(255,159,122,0.08)]" />
      </div>

      {/* What I Worked On */}
      <section className="max-w-5xl mx-auto px-6 py-24">
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

      {/* Subtle divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-[rgba(255,159,122,0.08)]" />
      </div>

      {/* How This Shows Up - Redesigned as metric cards */}
      <section className="max-w-5xl mx-auto px-6 py-24">
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

      {/* Subtle divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-[rgba(255,159,122,0.08)]" />
      </div>

      {/* System Impact Numbers */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-12"
        >
          <h2 className="text-[40px] text-[#f8f8f2] font-bold text-center">System Impact</h2>
          
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

      {/* Subtle divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-[rgba(255,159,122,0.08)]" />
      </div>

      {/* My Approach to Systems */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <h2 className="text-[40px] text-[#f8f8f2] font-bold">My Approach</h2>
          
          <div className="flex flex-col gap-6 max-w-2xl">
            <p className="text-[17px] text-[#a0a0a0] leading-relaxed">
              Systems evolve alongside the product—starting small, proving value, and growing as real needs emerge.
            </p>
            
            <p className="text-[17px] text-[#a0a0a0] leading-relaxed">
              Foundations are built incrementally. A spacing rule becomes useful when it solves actual inconsistency. A component becomes reusable after it's been tested in multiple contexts.
            </p>
            
            <p className="text-[17px] text-[#a0a0a0] leading-relaxed">
              Good systems work is invisible. The best outcome is when teams can build faster without thinking about the foundation at all.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Subtle divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-[rgba(255,159,122,0.08)]" />
      </div>

      {/* Closing CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start gap-6"
        >
          <button
            onClick={() => onSectionChange('home')}
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