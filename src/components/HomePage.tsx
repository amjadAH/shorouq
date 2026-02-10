import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, ChevronDown, Mail, Linkedin, ClipboardCheck, Users, Calendar, DollarSign } from 'lucide-react@0.487.0';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { SunMascot } from './SunMascot';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Footer } from './Footer';
import FigmaButton from '../imports/Button';
import KnowMoreButton from '../imports/Button-141-2446';
import FinalDesignsSection from '../imports/Container-136-94';
import MentorshipImage from '../imports/Frame12';
import AboutProfileImage from '../imports/Frame12-138-764';
import MentorshipSection from '../imports/Section-138-834';
import svgPaths from '../imports/svg-wg56ef214f';
import svgPathsMentorship from '../imports/svg-hao4jb5ei9';

interface HomePageProps {
  onSectionChange: (section: string) => void;
}

export function HomePage({ onSectionChange }: HomePageProps) {
  const companies = [
    'Khazna', 'Simpleia', 'Almentor', 'EFG Hermes'
  ];

  const caseStudies = [
    { 
      title: 'Khazna — On-ground Registration Experience Optimization',
      description: 'Redesigning a high-pressure, on-site registration flow to improve speed and operational efficiency.',
      icon: ClipboardCheck
    },
    { 
      title: 'Khazna — Referral Program Enhancement',
      description: 'Improving transparency and trust in a low-performing referral program to drive better activation.',
      icon: Users
    },
    { 
      title: 'Simplia — Client Hotdesk Booking Funnel Optimization',
      description: 'Optimizing a client\'s workspace booking funnel to reduce drop-offs and increase completed bookings.',
      icon: Calendar
    },
    { 
      title: 'Khazna  Early Repayment Experience Optimization',
      description: 'Making early repayment decisions clearer and more reassuring through guided UX and better hierarchy.',
      icon: DollarSign
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl mb-4 text-foreground">
              Hi, I'm Shorouk — I design clarity, like a sunrise.
            </h1>
            <p className="text-2xl lg:text-3xl mb-6 text-primary">
              Senior Product Designer
            </p>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              I design clear, thoughtful product experiences for complex, real-world problems — focusing on clarity, efficiency, and trust.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => onSectionChange('case-studies')}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Download Resume
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <SunMascot variant="hero" className="w-64 h-64 lg:w-80 lg:h-80" />
          </motion.div>
        </div>
      </section>

      {/* Companies Row */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-muted-foreground">Trusted by leading companies</p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-8 lg:gap-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {companies.map((company, index) => (
            <motion.div
              key={company}
              className="text-2xl text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              {company}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Case Study Previews */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h2 className="text-4xl mb-4 text-foreground">Selected Work</h2>
          <p className="text-xl text-muted-foreground">Case studies focused on clarity, efficiency, and user trust</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            const isClickable = index === 0 || index === 1 || index === 2 || index === 3; // All four case studies are clickable
            const caseStudyRoute = index === 0 
              ? 'case-study-khazna-registration' 
              : index === 1 
                ? 'case-study-khazna-referral'
                : index === 2
                  ? 'case-study-simplia-hotdesk'
                  : index === 3
                    ? 'case-study-khazna-early-repayment'
                    : '';
            return (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => isClickable && onSectionChange(caseStudyRoute)}
              >
                <Card className={`p-8 h-full bg-card border-border hover:border-primary transition-colors group ${isClickable ? 'cursor-pointer' : ''}`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg text-foreground group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground ml-16">{study.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Systems & Foundations Preview */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="flex flex-col gap-12 px-0 py-20 relative border-t border-[rgba(255,159,122,0.1)]">
            <div className="flex flex-col gap-4 items-center w-full">
              <h2 className="text-4xl text-[#f8f8f2]">Systems & Foundations</h2>
              <p className="text-xl text-[#a0a0a0] text-center max-w-3xl">
                The invisible work that makes products easier to design, build, and scale.
              </p>
            </div>
            
            <div className="flex flex-col gap-10 items-center justify-center rounded-2xl border border-[rgba(255,159,122,0.05)] p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
                {/* Visual Foundations */}
                <div className="bg-[#0f0a18] rounded-lg p-3 flex items-center justify-center">
                  <div className="flex flex-col gap-2 items-start w-full">
                    <div className="flex items-center justify-center w-full">
                      <p className="text-xl text-[#f8f8f2] text-center">Visual Foundations</p>
                    </div>
                    <div className="w-full">
                      <p className="text-base text-[#a0a0a0] leading-relaxed text-center">
                        I define color systems, typography scales, spacing rules, and interaction patterns that create consistency across products and teams.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Design Tokens */}
                <div className="bg-[#0f0a18] rounded-lg p-3 flex items-center justify-center">
                  <div className="flex flex-col gap-2 items-center justify-center w-full">
                    <div className="flex items-center justify-center w-full">
                      <p className="text-xl text-[#f8f8f2] text-center">Design Tokens</p>
                    </div>
                    <div className="w-full">
                      <p className="text-base text-[#a0a0a0] leading-relaxed text-center">
                        I work with tokenized values for colors, spacing, typography, and states to ensure design decisions translate cleanly into code.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Reusable Components */}
                <div className="bg-[#0f0a18] rounded-lg p-3 flex items-center justify-center">
                  <div className="flex flex-col gap-2 items-start w-full">
                    <div className="flex items-center justify-center w-full">
                      <p className="text-xl text-[#f8f8f2] text-center">Reusable Components</p>
                    </div>
                    <div className="w-full">
                      <p className="text-base text-[#a0a0a0] leading-relaxed text-center">
                        I help shape reusable, accessible components that teams can confidently build on without reinventing UI patterns.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Collaboration with Engineering */}
                <div className="bg-[#0f0a18] rounded-lg p-3 flex items-center justify-center">
                  <div className="flex flex-col gap-2 items-center justify-center w-full">
                    <div className="flex items-center justify-center w-full">
                      <p className="text-xl text-[#f8f8f2] text-center">Collaboration with Engineering</p>
                    </div>
                    <div className="w-full">
                      <p className="text-base text-[#a0a0a0] leading-relaxed text-center">
                        I partner closely with developers to align on constraints, states, and edge cases—bridging design intent and implementation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-center w-full border-t border-[rgba(255,159,122,0.05)] pt-8">
                <div 
                  onClick={() => onSectionChange('systems')}
                  className="cursor-pointer w-fit hover:opacity-90 transition-opacity"
                >
                  <FigmaButton />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Leadership & Mentorship Preview */}
      <section className="max-w-6xl mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <MentorshipSection onButtonClick={() => onSectionChange('mentorship')} />
        </motion.div>
      </section>

      {/* About Preview Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="border-t border-border pt-20"
        >
          <div className="flex flex-col items-center text-center gap-8">
            {/* Profile Image */}
            <motion.div 
              className="w-64 h-64 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 2.4 }}
            >
              <AboutProfileImage />
            </motion.div>

            {/* Content */}
            <div className="flex flex-col items-center gap-6">
              <h2 className="text-4xl text-foreground">About</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                I'm a problem-solver who happens to work in product design. My approach is grounded in understanding real-world constraints, user needs, and business goals — then crafting experiences that bring clarity to complexity.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                I've spent my career designing for fintech, education, and enterprise products where the stakes are high and the problems are messy. I believe thoughtful design can make hard things easier, build trust, and create real impact.
              </p>
              
              <div 
                onClick={() => onSectionChange('about')}
                className="cursor-pointer w-fit hover:opacity-90 transition-opacity mt-4"
              >
                <KnowMoreButton />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}