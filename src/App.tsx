import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { CaseStudyKhaznaRegistration } from './components/CaseStudyKhaznaRegistration';
import { CaseStudyKhaznaReferral } from './components/CaseStudyKhaznaReferral';
import { CaseStudySimpliaHotdesk } from './components/CaseStudySimpliaHotdesk';
import { CaseStudyKhaznaEarlyRepayment } from './components/CaseStudyKhaznaEarlyRepayment';
import { CaseStudyServiceActivation } from './components/CaseStudyServiceActivation';
import { AboutMe } from './components/AboutMe';
import { Mentorship } from './components/Mentorship';
import { SystemsFoundations } from './components/SystemsFoundations';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomePage onSectionChange={setActiveSection} />;
      case 'case-study-khazna-registration':
        return <CaseStudyKhaznaRegistration onBack={() => setActiveSection('home')} onSectionChange={setActiveSection} />;
      case 'case-study-khazna-referral':
        return <CaseStudyKhaznaReferral onBack={() => setActiveSection('home')} onSectionChange={setActiveSection} />;
      case 'case-study-simplia-hotdesk':
        return <CaseStudySimpliaHotdesk onBack={() => setActiveSection('home')} onSectionChange={setActiveSection} />;
      case 'case-study-khazna-early-repayment':
        return <CaseStudyKhaznaEarlyRepayment onBack={() => setActiveSection('home')} onSectionChange={setActiveSection} />;
      case 'case-study-service-activation':
        return <CaseStudyServiceActivation onBack={() => setActiveSection('home')} />;
      case 'systems':
        return <SystemsFoundations onBack={() => setActiveSection('home')} onSectionChange={setActiveSection} />;
      case 'about':
        return <AboutMe />;
      case 'mentorship':
        return <Mentorship />;
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
    </div>
  );
}