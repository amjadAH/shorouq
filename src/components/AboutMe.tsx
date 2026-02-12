import { motion } from 'motion/react';
import { SunMascot } from './SunMascot';
import { Linkedin, Mail, ExternalLink } from 'lucide-react@0.487.0';
import { Footer } from './Footer';
import ProfileImage from '../imports/Frame12';
import awardImage from 'figma:asset/0dc49d5c00890cdf90deb0d7896e5b887a76a34e.png';

export function AboutMe() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Hero / Intro Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 relative">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(255,159,122,0.08) 0%, transparent 50%)'
        }} />
        
        <div className="flex flex-col items-center justify-center gap-12 relative z-10">
          {/* Profile Image */}
          <motion.div 
            className="w-64 h-64 flex items-center justify-center"
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
            <h1 className="lg:text-7xl text-[#f8f8f2] leading-tight mb-8 text-[48px]">
              About Me
            </h1>
            
            <div className="flex flex-col gap-6 text-[#b5b5b5] leading-relaxed text-[18px] max-w-2xl mx-auto">
              <p>I'm Shorouk, a Senior product designer focused on solving real-world problems through clear, thoughtful, and practical design decisions.</p>
              <p>
                I've worked on products where clarity isn't optional—fintech workflows, operational tools, and systems that people rely on to get their jobs done.
              </p>
              <p>
                I care deeply about designing experiences that feel trustworthy, calm, and intentional—especially in complex or high-pressure contexts.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What People Say About Me */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-12 border-t border-[rgba(255,159,122,0.1)] pt-16"
        >
          <h2 className="text-4xl text-[#f8f8f2] text-center">What People Say About Me</h2>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
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
                <p className="text-[16px] text-[#a0a0a0]">Engineering Lead</p>
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
                "Working with Shorouk has been a game-changer. She approaches problems with clarity and empathy, turning ambiguous challenges into elegant solutions. Her mentorship has shaped how I think about design."
              </p>
              <div className="flex flex-col gap-1">
                <p className="text-[18px] text-[#f8f8f2]">Abdelrahman</p>
                <p className="text-[16px] text-[#a0a0a0]">Product Designer</p>
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

      {/* Experience */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-12 border-t border-[rgba(255,159,122,0.1)] pt-16"
        >
          <h2 className="text-4xl text-[#f8f8f2]">Experience</h2>
          
          {/* Product Design Experience */}
          <div className="flex flex-col gap-8">
            <h3 className="text-2xl text-[#f8f8f2]">Product Design Experience</h3>
            
            <div className="flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col gap-2"
              >
                <p className="text-[#f8f8f2] text-[18px]">
                  Almentor — Product Designer (Contract)
                </p>
                <p className="text-[#b5b5b5] text-[16px] leading-relaxed">
                  Worked on improving internal L&D admin experiences through user interviews, workflow mapping, and UX improvements.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col gap-2"
              >
                <p className="text-[#f8f8f2] text-[18px]">
                  Khazna — Product Designer
                </p>
                <p className="text-[#b5b5b5] text-[16px] leading-relaxed">
                  Worked on fintech products including on-ground operational workflows, customer-facing experiences, and system-level foundations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col gap-2"
              >
                <p className="text-[#f8f8f2] text-[18px]">
                  Simplia — Product Designer
                </p>
                <p className="text-[#b5b5b5] text-[16px] leading-relaxed">
                  Client-based work focused on improving UX flows, booking funnels, and usability across different product contexts.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col gap-2"
              >
                <p className="text-[#f8f8f2] text-[18px]">
                  Toptal — Product Designer
                </p>
                <p className="text-[#b5b5b5] text-[16px] leading-relaxed">
                  Contributed to product design work in distributed teams, focusing on clarity, execution, and collaboration.
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
            className="flex flex-col gap-4"
          >
            <h3 className="text-2xl text-[#f8f8f2]">Earlier Experience</h3>
            <p className="text-[#b5b5b5] text-[16px] leading-relaxed">
              Fabrica Development · Leader Group · uFlare (Software House)<br />
              Worked across different product and delivery environments, building a strong foundation in problem-solving and collaboration.
            </p>
          </motion.div>

          {/* Early Start */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-2xl text-[#f8f8f2]">Early Start</h3>
            <p className="text-[#b5b5b5] text-[16px] leading-relaxed">
              EasySchools — Graphic Designer<br />
              Started my career in graphic design, which shaped my visual sensibility and attention to detail before transitioning into product design.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* How I Work */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8 border-t border-[rgba(255,159,122,0.1)] pt-16"
        >
          <h2 className="text-4xl text-[#f8f8f2]">How I Work</h2>
          
          <div className="flex flex-col gap-6 text-[#b5b5b5] leading-relaxed text-[18px] max-w-3xl">
            <p>
              I work closely with product managers, engineers, and stakeholders to understand constraints early and design within them.
            </p>
            <p>
              I prefer steady iteration over big reveals, and I see feedback as an essential part of the design process.
            </p>
            <p>
              Ownership, collaboration, and clarity guide how I approach my work.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      

      {/* Footer */}
      <Footer />
    </div>
  );
}