import { motion } from 'motion/react';
import { Linkedin, Mail, ExternalLink } from 'lucide-react@0.487.0';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
      </div>
    </footer>
  );
}
