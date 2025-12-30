import { motion } from 'motion/react';
import { SunMascot } from './SunMascot';
import { Button } from './ui/button';
import { Card } from './ui/card';

export function Mentorship() {
  const highlights = [
    {
      title: 'Khazna Internship Program',
      description: 'Led the complete internship program from A to Z, designing curriculum, mentoring processes, and success metrics that helped junior designers transition into full-time roles.',
      impact: 'Successfully onboarded 8 junior designers with 100% retention rate',
      icon: '🎓'
    },
    {
      title: 'Junior Designer Mentorship',
      description: 'Provided one-on-one mentorship to a junior designer, focusing on design thinking, portfolio development, and career growth strategies.',
      impact: 'Mentee promoted to mid-level designer within 6 months',
      icon: '🌱'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <section className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <SunMascot variant="teaching" className="w-48 h-48" />
          </motion.div>
          
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl mb-6 text-foreground">Helping Others Shine</h1>
            <p className="text-xl text-muted-foreground">
              Just as the sun nurtures growth, I believe in empowering the next generation of designers through mentorship and knowledge sharing.
            </p>
          </motion.div>
        </div>

        {/* Mentorship Highlights */}
        <div className="space-y-8 mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Card className="p-8 bg-card border-border hover:border-primary transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="text-4xl">{highlight.icon}</div>
                  <div className="flex-1">
                    <h2 className="text-2xl mb-4 text-foreground">{highlight.title}</h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {highlight.description}
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-primary text-sm">{highlight.impact}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Card className="p-12 bg-card border-border">
            <h2 className="text-3xl mb-4 text-foreground">Ready to Grow Together?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're just starting your design journey or looking to level up your skills, 
              I'm here to help you shine brighter.
            </p>
            
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => window.open('https://adplist.org', '_blank')}
            >
              Connect with me on ADPList
            </Button>
            
            <div className="mt-6 text-sm text-muted-foreground">
              Available for 1:1 mentorship sessions and career guidance
            </div>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}