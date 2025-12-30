import { motion } from 'motion/react';
import { SunMascot } from './SunMascot';
import { Card } from './ui/card';
import { Button } from './ui/button';

export function CaseStudies() {
  const projects = [
    {
      id: 1,
      title: 'Mobile Banking Revolution',
      problem: 'Complex banking processes were frustrating users and causing high drop-off rates',
      solution: 'Streamlined user flows with intuitive navigation and clear visual hierarchy',
      process: 'User research → Wireframing → Prototyping → Testing → Iteration',
      outcome: '40% increase in user completion rates and 60% reduction in support tickets'
    },
    {
      id: 2,
      title: 'E-learning Platform Redesign',
      problem: 'Students struggled to find relevant courses and track their learning progress',
      solution: 'Personalized dashboard with smart recommendations and progress visualization',
      process: 'Stakeholder interviews → User journey mapping → Design system → Implementation',
      outcome: '35% improvement in course completion and 50% increase in daily active users'
    },
    {
      id: 3,
      title: 'Investment Dashboard Simplification',
      problem: 'Complex financial data overwhelmed users, hindering investment decisions',
      solution: 'Clean, scannable interface with progressive disclosure and smart defaults',
      process: 'Data analysis → Information architecture → Visual design → Usability testing',
      outcome: '25% increase in portfolio interactions and improved user confidence scores'
    },
    {
      id: 4,
      title: 'Fintech Onboarding Experience',
      problem: 'Lengthy registration process with high abandonment rates',
      solution: 'Progressive onboarding with micro-interactions and clear progress indicators',
      process: 'Conversion funnel analysis → Flow optimization → A/B testing → Refinement',
      outcome: '55% reduction in drop-off rates and 30% faster completion times'
    },
    {
      id: 5,
      title: 'Digital Wallet Experience',
      problem: 'Users found mobile payments confusing and lacked trust in the system',
      solution: 'Intuitive gesture-based interactions with clear security messaging',
      process: 'Behavioral research → Interaction design → Security UX → User validation',
      outcome: '45% increase in transaction volume and improved security perception'
    },
    {
      id: 6,
      title: 'Trading Platform Interface',
      problem: 'Real-time trading tools were cluttered and caused user decision paralysis',
      solution: 'Focused workspace with customizable layouts and smart filtering',
      process: 'Trading behavior study → Information hierarchy → Component library → Testing',
      outcome: '20% faster trade execution and reduced user error rates'
    },
    {
      id: 7,
      title: 'Education Mobile App',
      problem: 'Low engagement rates and poor retention in mobile learning sessions',
      solution: 'Gamified learning experience with bite-sized content and progress rewards',
      process: 'Learning psychology research → Gamification strategy → UI/UX design → Iteration',
      outcome: '65% increase in session duration and 40% improvement in retention'
    },
    {
      id: 8,
      title: 'Financial Analytics Tool',
      problem: 'Users couldn\'t extract actionable insights from complex financial reports',
      solution: 'Narrative-driven data visualization with interactive storytelling elements',
      process: 'Data storytelling research → Visualization design → Interaction patterns → Testing',
      outcome: '50% faster insight discovery and improved decision-making confidence'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-center gap-8 mb-16">
          <SunMascot variant="guide" className="w-24 h-24" />
          <div className="text-center">
            <motion.h1 
              className="text-5xl mb-4 text-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Sun Stories
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Design projects that illuminate user needs and create meaningful impact
            </motion.p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="p-8 h-full bg-card border-border hover:border-primary transition-all duration-300 cursor-pointer group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-4 h-4 rounded-full bg-primary group-hover:scale-125 transition-transform"></div>
                  <h2 className="text-2xl text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm uppercase tracking-wide text-primary mb-2">Problem</h3>
                    <p className="text-muted-foreground">{project.problem}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm uppercase tracking-wide text-primary mb-2">Solution</h3>
                    <p className="text-muted-foreground">{project.solution}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm uppercase tracking-wide text-primary mb-2">Process</h3>
                    <p className="text-muted-foreground">{project.process}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm uppercase tracking-wide text-primary mb-2">Outcome</h3>
                    <p className="text-muted-foreground">{project.outcome}</p>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary-foreground hover:bg-primary p-0 h-auto"
                  >
                    View Full Case Study →
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}