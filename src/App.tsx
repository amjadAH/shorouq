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

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomePage onSectionChange={handleSectionChange} />;
      case 'case-study-khazna-registration':
        return <CaseStudyKhaznaRegistration onBack={() => handleSectionChange('home')} onSectionChange={handleSectionChange} />;
      case 'case-study-khazna-referral':
        return <CaseStudyKhaznaReferral onBack={() => handleSectionChange('home')} onSectionChange={handleSectionChange} />;
      case 'case-study-simplia-hotdesk':
        return <CaseStudySimpliaHotdesk onBack={() => handleSectionChange('home')} onSectionChange={handleSectionChange} />;
      case 'case-study-khazna-early-repayment':
        return <CaseStudyKhaznaEarlyRepayment onBack={() => handleSectionChange('home')} onSectionChange={handleSectionChange} />;
      case 'case-study-service-activation':
        return <CaseStudyServiceActivation onBack={() => handleSectionChange('home')} onSectionChange={handleSectionChange} />;
      case 'systems':
        return <SystemsFoundations onBack={() => handleSectionChange('home')} onSectionChange={handleSectionChange} />;
      case 'about':
        return <AboutMe />;
      case 'mentorship':
        return <Mentorship />;
      default:
        return <HomePage onSectionChange={handleSectionChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange} 
      />
      <main>
        {renderSection()}
      </main>
    </div>
  );
}