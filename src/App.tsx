import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { CaseStudyKhaznaRegistration } from './components/CaseStudyKhaznaRegistration';
import { CaseStudyKhaznaReferral } from './components/CaseStudyKhaznaReferral';
import { CaseStudySimpliaHotdesk } from './components/CaseStudySimpliaHotdesk';
import { CaseStudyKhaznaEarlyRepayment } from './components/CaseStudyKhaznaEarlyRepayment';
import { AboutMe } from './components/AboutMe';
import { Mentorship } from './components/Mentorship';
import { Contact } from './components/Contact';
import { SystemsFoundations } from './components/SystemsFoundations';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomePage onSectionChange={setActiveSection} />;
      case 'case-study-khazna-registration':
        return <CaseStudyKhaznaRegistration onBack={() => setActiveSection('home')} />;
      case 'case-study-khazna-referral':
        return <CaseStudyKhaznaReferral onBack={() => setActiveSection('home')} />;
      case 'case-study-simplia-hotdesk':
        return <CaseStudySimpliaHotdesk onBack={() => setActiveSection('home')} />;
      case 'case-study-khazna-early-repayment':
        return <CaseStudyKhaznaEarlyRepayment onBack={() => setActiveSection('home')} />;
      case 'systems':
        return <SystemsFoundations onBack={() => setActiveSection('home')} onSectionChange={setActiveSection} />;
      case 'about':
        return <AboutMe />;
      case 'mentorship':
        return <Mentorship />;
      case 'contact':
        return <Contact />;
      default:
        return <HomePage onSectionChange={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      <main>
        {renderSection()}
      </main>
      
      {/* Floating "Made with Figma Make" Tag */}
      <div className="fixed bottom-6 right-6 z-50 px-4 py-2 rounded-full bg-[#1a1a1a] border border-[rgba(255,255,255,0.1)] backdrop-blur-sm shadow-lg">
        <p className="text-sm text-[#808080]">Made with Figma Make</p>
      </div>
    </div>
  );
}