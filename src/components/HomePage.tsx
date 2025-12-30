import { motion } from 'motion/react';
import { SunMascot } from './SunMascot';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ClipboardCheck, Users, Calendar, TrendingUp, Layers, UserPlus, Linkedin, Mail, ExternalLink } from 'lucide-react@0.487.0';
import svgPaths from '../imports/svg-c21zek608o';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onSectionChange: (section: string) => void;
}

export function HomePage({ onSectionChange }: HomePageProps) {
  const companies = [
    'Khazna', 'Toptal', 'Simpleia', 'Almentor', 'EFG Hermes'
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
      icon: TrendingUp
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
            const isClickable = index === 0 || index === 1; // First two case studies are clickable
            const caseStudyRoute = index === 0 
              ? 'case-study-khazna-registration' 
              : index === 1 
                ? 'case-study-khazna-referral'
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
                <button
                  onClick={() => onSectionChange('systems')}
                  className="flex gap-2 items-center justify-center group"
                >
                  <span className="text-base text-[#ff9f7a] font-medium cursor-pointer">View Systems & Foundations</span>
                  <div className="w-4 h-4">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g>
                        <path d="M10 2H14V6" stroke="#FF9F7A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        <path d="M6.66667 9.33333L14 2" stroke="#FF9F7A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        <path d={svgPaths.p25f66900} stroke="#FF9F7A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </g>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Leadership & Mentorship Preview */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col gap-16 px-0 py-20 relative border-t border-[rgba(255,159,122,0.1)]">
            {/* Subtle background glow */}
            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: 'radial-gradient(circle at 50% 20%, rgba(255,159,122,0.05) 0%, transparent 60%)'
            }} />
            
            {/* Header */}
            <motion.div 
              className="flex flex-col gap-3 items-start w-full relative z-10 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
            >
              <h2 className="text-4xl text-[#f8f8f2]">Leadership & Mentorship</h2>
              <p className="text-lg text-[#a0a0a0] leading-relaxed">
                Supporting people and fostering growth is as important to me as solving design problems.
              </p>
            </motion.div>
            
            {/* Content blocks - vertical stack with subtle offsets */}
            <div className="flex flex-col gap-12 w-full max-w-4xl relative z-10">
              
              {/* Internship Programs - slight left */}
              <motion.div
                className="flex flex-col gap-3 lg:ml-0 lg:max-w-3xl pl-6 border-l-2 border-[rgba(255,159,122,0.15)]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, delay: 0.2 }}
              >
                <h3 className="text-2xl text-[#f8f8f2]">Internship Programs</h3>
                <p className="text-lg text-[#b5b5b5] leading-relaxed">
                  Led end-to-end internship programs — from recruiting and onboarding to creating structured learning paths that build real skills and confidence.
                </p>
              </motion.div>

              {/* Team Mentorship - slight right */}
              <motion.div
                className="flex flex-col gap-3 lg:ml-auto lg:max-w-3xl pl-6 border-l-2 border-[rgba(255,159,122,0.15)]"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, delay: 0.3 }}
              >
                <h3 className="text-2xl text-[#f8f8f2]">Team Mentorship</h3>
                <p className="text-lg text-[#b5b5b5] leading-relaxed">
                  Mentor junior designers through regular feedback sessions, portfolio reviews, and collaborative problem-solving to develop their design voice.
                </p>
              </motion.div>

              {/* ADPList Mentorship - center */}
              <motion.div
                className="flex flex-col gap-3 lg:mx-auto lg:max-w-3xl pl-6 border-l-2 border-[rgba(255,159,122,0.15)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, delay: 0.4 }}
              >
                <h3 className="text-2xl text-[#f8f8f2]">ADPList Mentorship</h3>
                <p className="text-lg text-[#b5b5b5] leading-relaxed">
                  Support designers navigating career transitions, building portfolios, and developing strategic thinking through 1-on-1 mentorship sessions.
                </p>
              </motion.div>
            </div>

            {/* CTA Section */}
            <motion.div 
              className="flex flex-col items-start justify-start gap-4 pt-8 border-t border-[rgba(255,159,122,0.08)] relative z-10 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.5 }}
            >
              <p className="text-base text-[#a0a0a0] leading-relaxed">
                Interested in mentorship or career guidance? Let's connect and explore how I can help you grow.
              </p>
              <motion.button
                onClick={() => window.open('https://adplist.org', '_blank')}
                className="inline-flex gap-2 items-center text-[#ff9f7a] hover:text-[#ffb394] transition-colors group"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-base border-b border-[rgba(255,159,122,0.3)] group-hover:border-[rgba(255,159,122,0.6)] transition-colors">Book a Session on ADPList</span>
                <ExternalLink className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>
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
          <h2 className="text-4xl mb-6 text-foreground">About</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-3xl">
            I'm a problem-solver who happens to work in product design. My approach is grounded in understanding real-world constraints, user needs, and business goals — then crafting experiences that bring clarity to complexity.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            I've spent my career designing for fintech, education, and enterprise products where the stakes are high and the problems are messy. I believe thoughtful design can make hard things easier, build trust, and create real impact.
          </p>
          
          <button
            onClick={() => onSectionChange('about')}
            className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2 group"
          >
            <span>More about me</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <h2 className="text-4xl mb-4 text-foreground">Let's Connect</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Feel free to reach out for collaborations, mentorship, or just to say hello
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group w-full sm:w-auto"
              onClick={() => window.open('https://www.linkedin.com/in/shorouknasr', '_blank')}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              <span>LinkedIn</span>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group w-full sm:w-auto"
              onClick={() => window.location.href = 'mailto:shorouk@example.com'}
            >
              <Mail className="w-5 h-5 mr-2" />
              <span>Email</span>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group w-full sm:w-auto"
              onClick={() => window.open('https://adplist.org', '_blank')}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              <span>ADPList</span>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}