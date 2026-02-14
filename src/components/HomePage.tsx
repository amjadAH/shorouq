import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, ChevronDown, Mail, Linkedin, ClipboardCheck, Users, Calendar, DollarSign, Network } from 'lucide-react@0.487.0';
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
    },
    { 
      title: 'Service-Led Activation Redesign',
      description: 'Mapping operational bottlenecks to improve registration visibility and reduce support dependency.',
      icon: Network
    }
  ];

  const scrollToWork = () => {
    const workSection = document.getElementById('selected-work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-14">
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
                onClick={scrollToWork}
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
      <section className="max-w-6xl mx-auto px-6 py-14">
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
      <section id="selected-work" className="max-w-6xl mx-auto px-6 py-14">
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
            const isClickable = index === 0 || index === 1 || index === 2 || index === 3 || index === 4; // All five case studies are clickable
            const caseStudyRoute = index === 0 
              ? 'case-study-khazna-registration' 
              : index === 1 
                ? 'case-study-khazna-referral'
                : index === 2
                  ? 'case-study-simplia-hotdesk'
                  : index === 3
                    ? 'case-study-khazna-early-repayment'
                    : index === 4
                      ? 'case-study-service-activation'
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
                  <div className="flex items-start gap-4 mb-2">
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
      <section className="max-w-6xl mx-auto px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="flex flex-col gap-16 px-0 py-14 relative">
            {/* Header */}
            <div className="flex flex-col gap-4 items-center w-full relative z-10">
              <h2 className="text-4xl text-[#f8f8f2]">Design Systems & Product Foundations</h2>
              <p className="text-lg text-[#a0a0a0] text-center max-w-3xl leading-relaxed">
                The infrastructure behind scalable, consistent, and high-performing product experiences.
              </p>
            </div>
            
            {/* Main Content Container */}
            <div className="flex flex-col gap-8 w-full relative z-10">
              
              {/* Highlighted Core System Work - Full Width */}
              <motion.div 
                className="relative"
                transition={{ duration: 0.3 }}
              >
                <div className="relative bg-[rgba(255,159,122,0.03)] rounded-xl border border-[rgba(255,159,122,0.1)] p-8 md:p-10">
                  <div className="flex flex-col gap-4 items-center text-center">
                    <h3 className="text-2xl text-[#f8f8f2]">Scalable Design Systems</h3>
                    <p className="text-lg text-[#a0a0a0] leading-relaxed max-w-4xl">
                      Built and evolved reusable component libraries and patterns used across multiple product squads to ensure consistency and speed.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Supporting Cards - 3 Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Design Tokens & Governance */}
                <motion.div 
                  className="group"
                  transition={{ duration: 0.3 }}
                >
                  <div className="h-full bg-[rgba(255,159,122,0.03)] rounded-lg border border-[rgba(255,159,122,0.1)] p-6">
                    <div className="flex flex-col gap-3 h-full">
                      <h3 className="text-xl text-[#f8f8f2]">
                        Design Tokens & Governance
                      </h3>
                      <p className="text-base text-[#a0a0a0] leading-relaxed">
                        Established tokens for typography, spacing, color, and states to align product decisions with engineering implementation.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Cross-Functional Collaboration */}
                <motion.div 
                  className="group"
                  transition={{ duration: 0.3 }}
                >
                  <div className="h-full bg-[rgba(255,159,122,0.03)] rounded-lg border border-[rgba(255,159,122,0.1)] p-6">
                    <div className="flex flex-col gap-3 h-full">
                      <h3 className="text-xl text-[#f8f8f2]">
                        Cross-Functional Collaboration
                      </h3>
                      <p className="text-base text-[#a0a0a0] leading-relaxed">
                        Partnered closely with product and engineering to align UX decisions with technical constraints and business priorities.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Documentation & Adoption */}
                <motion.div 
                  className="group"
                  transition={{ duration: 0.3 }}
                >
                  <div className="h-full bg-[rgba(255,159,122,0.03)] rounded-lg border border-[rgba(255,159,122,0.1)] p-6">
                    <div className="flex flex-col gap-3 h-full">
                      <h3 className="text-xl text-[#f8f8f2]">
                        Documentation & Adoption
                      </h3>
                      <p className="text-base text-[#a0a0a0] leading-relaxed">
                        Created structured documentation and guidelines to improve adoption and reduce design inconsistencies across teams.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
              </div>
              
              {/* Metrics Strip */}
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 pt-8">
                <div className="flex flex-col items-center gap-1">
                  <p className="text-sm text-[#6b6b6b] uppercase tracking-wider">Impact</p>
                  <p className="text-base text-[#a0a0a0]">Used across 15+ product flows</p>
                </div>
                <div className="hidden md:block w-px h-8 bg-[rgba(255,159,122,0.1)]" />
                <div className="flex flex-col items-center gap-1">
                  <p className="text-sm text-[#6b6b6b] uppercase tracking-wider">Reach</p>
                  <p className="text-base text-[#a0a0a0]">Supported 6 squads</p>
                </div>
                <div className="hidden md:block w-px h-8 bg-[rgba(255,159,122,0.1)]" />
                <div className="flex flex-col items-center gap-1">
                  <p className="text-sm text-[#6b6b6b] uppercase tracking-wider">Quality</p>
                  <p className="text-base text-[#a0a0a0]">Reduced design inconsistencies</p>
                </div>
                <div className="hidden md:block w-px h-8 bg-[rgba(255,159,122,0.1)]" />
                <div className="flex flex-col items-center gap-1">
                  <p className="text-sm text-[#6b6b6b] uppercase tracking-wider">Speed</p>
                  <p className="text-base text-[#a0a0a0]">Improved delivery speed</p>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="flex flex-col items-center justify-center w-full pt-4">
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
      <section className="max-w-6xl mx-auto py-14">
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
      <section className="max-w-6xl mx-auto px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
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
                I'm a Senior Product Designer focused on bringing clarity to complex problems. My work spans fintech, education, and enterprise products—designing experiences that balance user needs, business goals, and real-world constraints. I believe thoughtful design builds trust and creates meaningful impact.
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