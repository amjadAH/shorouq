import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { CaseStudies } from './components/CaseStudies';
import { CaseStudyKhaznaRegistration } from './components/CaseStudyKhaznaRegistration';
import { CaseStudyKhaznaReferral } from './components/CaseStudyKhaznaReferral';
import { AboutMe } from './components/AboutMe';
import { Mentorship } from './components/Mentorship';
import { Contact } from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomePage onSectionChange={setActiveSection} />;
      case 'case-studies':
        return <CaseStudies />;
      case 'case-study-khazna-registration':
        return <CaseStudyKhaznaRegistration onBack={() => setActiveSection('case-studies')} />;
      case 'case-study-khazna-referral':
        return <CaseStudyKhaznaReferral onBack={() => setActiveSection('case-studies')} />;
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
    </div>
  );
}