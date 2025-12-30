import { motion } from 'motion/react';
import { SunMascot } from './SunMascot';
import { Button } from './ui/button';
import { Card } from './ui/card';

export function AboutMe() {
  const testimonials = [
    {
      name: 'Bichoy Asaad',
      text: 'Shorouk brings exceptional clarity to complex design challenges and consistently delivers user-centered solutions.'
    },
    {
      name: 'Abdelrahman Osama',
      text: 'Her ability to translate business requirements into intuitive user experiences is truly remarkable.'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <section className="max-w-4xl mx-auto px-6 py-12">
        {/* Header with Sun Mascot */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <SunMascot variant="reading" className="w-48 h-48" />
          </motion.div>
          
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl mb-8 text-foreground">About Me</h1>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                I'm a Senior Product Designer with a passion for creating digital experiences that feel as natural as watching the sunrise. 
              </p>
              <p>
                My approach combines user empathy with business strategy, ensuring every design decision illuminates the path toward meaningful outcomes.
              </p>
              <p>
                When I'm not designing, you'll find me mentoring emerging designers and contributing to the design community's growth.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl text-center mb-12 text-foreground">What People Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-8 bg-card border-border hover:border-primary transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-4 italic">
                        "{testimonial.text}"
                      </p>
                      <p className="text-foreground">
                        — {testimonial.name}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Download Resume CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-6 p-8 bg-card rounded-lg border border-border">
            <div>
              <h3 className="text-xl mb-2 text-foreground">Want to know more?</h3>
              <p className="text-muted-foreground">Download my resume for a detailed look at my experience</p>
            </div>
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Download Resume
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}