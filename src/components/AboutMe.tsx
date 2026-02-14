import { motion } from 'motion/react';
import { SunMascot } from './SunMascot';
import { Linkedin, Mail, ExternalLink } from 'lucide-react@0.487.0';
import { Footer } from './Footer';
import ProfileImage from '../imports/Frame12';
import awardImage from 'figma:asset/0dc49d5c00890cdf90deb0d7896e5b887a76a34e.png';

export function AboutMe() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Hero / Intro Section - First Fold */}
      <section className="max-w-6xl mx-auto px-6 py-14 min-h-[calc(100vh-5rem)] flex items-center">
        <div className="flex flex-col items-center justify-center gap-8 w-full">
          {/* Profile Image */}
          <motion.div 
            className="w-48 h-48 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <ProfileImage />
          </motion.div>

          {/* Text Content - Centered */}
          <motion.div 
            className="flex-1 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="lg:text-7xl text-[#f8f8f2] leading-tight mb-6 text-[48px]">
              About Me
            </h1>
            
            <div className="text-[#b5b5b5] leading-relaxed text-[18px] max-w-2xl mx-auto">
              <p>I'm Shorouk, a Senior Product Designer focused on solving real-world problems through clear, thoughtful design. I've worked on fintech workflows, operational tools, and systems where clarity isn't optional—products people rely on to get their jobs done. I care deeply about designing experiences that feel trustworthy, calm, and intentional, especially in complex or high-pressure contexts.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What People Say About Me */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-12 items-center"
        >
          <h2 className="text-4xl text-[#f8f8f2] text-center">What People Say About Me</h2>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            {/* Testimonial 1 - Bichoy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[rgba(255,159,122,0.03)] border border-[rgba(255,159,122,0.1)] rounded-lg p-8 flex flex-col gap-6"
            >
              <p className="text-[18px] text-[#b5b5b5] leading-relaxed italic">
                "Shorouk consistently delivers thoughtful, user-centered designs that balance business needs with real-world usability. Her ability to simplify complexity and collaborate across teams makes her an invaluable asset."
              </p>
              <div className="flex flex-col gap-1">
                <p className="text-[18px] text-[#f8f8f2]">Bichoy</p>
                <p className="text-[16px] text-[#a0a0a0]">Design/Discovery Manager @ Khazna</p>
              </div>
            </motion.div>

            {/* Testimonial 2 - Abdelrahman */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[rgba(255,159,122,0.03)] border border-[rgba(255,159,122,0.1)] rounded-lg p-8 flex flex-col gap-6"
            >
              <p className="text-[18px] text-[#b5b5b5] leading-relaxed italic">
                "I had the pleasure of working with Shorouk back at Simpleia and can't recommend her highly enough as a dedicated and skilled UX Designer. Her exceptional design skills, deep user empathy, and excellent collaborative abilities make her a valuable asset to any organization."
              </p>
              <div className="flex flex-col gap-1">
                <p className="text-[18px] text-[#f8f8f2]">Abdelrahman</p>
                <p className="text-[16px] text-[#a0a0a0]">Lead Product Designer @ Scale AI | 20+ Years of Product Strategy & Design Leadership</p>
              </div>
            </motion.div>
          </div>

          {/* Award Image and Recognition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-4 mt-8"
          >
            <div className="w-full max-w-2xl rounded-lg overflow-hidden border border-[rgba(255,159,122,0.1)]">
              <img
                src={awardImage}
                alt="Top Achiever Award Recognition"
                className="w-full h-64 object-cover"
              />
            </div>
            <p className="text-[16px] text-[#a0a0a0] text-center max-w-2xl">
              Recognized as Top Achiever for driving meaningful product impact and team collaboration.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* How I Work */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8 items-center text-center"
        >
          <h2 className="text-4xl text-[#f8f8f2]">How I Work</h2>
          
          <div className="text-[#b5b5b5] leading-relaxed text-[18px] max-w-2xl">
            <p>
              I work closely with product managers, engineers, and stakeholders to understand constraints early and design within them. I prefer steady iteration over big reveals, and I see feedback as an essential part of the design process. Ownership, collaboration, and clarity guide how I approach my work.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Experience */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-12 items-center"
        >
          <h2 className="text-4xl text-[#f8f8f2]">Experience</h2>
          
          <div className="flex flex-col gap-12 max-w-2xl w-full">
            {/* Product Design Experience */}
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl text-[#f8f8f2] text-center">Product Design Experience</h3>
              
              <div className="flex flex-col gap-4 relative pl-8">
                {/* Timeline vertical line */}
                <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-[rgba(255,159,122,0.2)]" />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex items-start gap-3 relative"
                >
                  <div className="absolute -left-8 w-4 h-4 rounded-full bg-[#ff9f7a] flex-shrink-0" />
                  <p className="text-[#a0a0a0] text-[16px] font-normal">
                    Almentor — Product Designer (Contract)
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-start gap-3 relative"
                >
                  <div className="absolute -left-8 w-4 h-4 rounded-full bg-[#ff9f7a] flex-shrink-0" />
                  <p className="text-[#a0a0a0] text-[16px] font-normal">
                    Khazna — Product Designer
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-start gap-3 relative"
                >
                  <div className="absolute -left-8 w-4 h-4 rounded-full bg-[#ff9f7a] flex-shrink-0" />
                  <p className="text-[#a0a0a0] text-[16px] font-normal">
                    Simplia — Product Designer
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-start gap-3 relative"
                >
                  <div className="absolute -left-8 w-4 h-4 rounded-full bg-[#ff9f7a] flex-shrink-0" />
                  <p className="text-[#a0a0a0] text-[16px] font-normal">
                    Toptal — Product Designer
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Earlier Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col gap-6"
            >
              <h3 className="text-2xl text-[#f8f8f2] text-center">Earlier Experience</h3>
              <div className="flex flex-col gap-4 relative pl-8">
                {/* Timeline vertical line */}
                <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-[rgba(255,159,122,0.2)]" />
                
                <div className="flex items-start gap-3 relative">
                  <div className="absolute -left-8 w-4 h-4 rounded-full bg-[#ff9f7a] flex-shrink-0" />
                  <p className="text-[#a0a0a0] text-[16px] font-normal">
                    Fabrica Development
                  </p>
                </div>
                <div className="flex items-start gap-3 relative">
                  <div className="absolute -left-8 w-4 h-4 rounded-full bg-[#ff9f7a] flex-shrink-0" />
                  <p className="text-[#a0a0a0] text-[16px] font-normal">
                    Leader Group
                  </p>
                </div>
                <div className="flex items-start gap-3 relative">
                  <div className="absolute -left-8 w-4 h-4 rounded-full bg-[#ff9f7a] flex-shrink-0" />
                  <p className="text-[#a0a0a0] text-[16px] font-normal">
                    uFlare (Software House)
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Early Start */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col gap-6"
            >
              <h3 className="text-2xl text-[#f8f8f2] text-center">Early Start</h3>
              <div className="flex items-start gap-3 relative pl-8">
                <div className="absolute -left-8 w-4 h-4 rounded-full bg-[#ff9f7a] flex-shrink-0" />
                <p className="text-[#a0a0a0] text-[16px] font-normal">
                  EasySchools — Graphic Designer
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      

      {/* Footer */}
      <Footer />
    </div>
  );
}