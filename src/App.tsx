import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PropertyList from './components/PropertyList';
import PropertyModal from './components/PropertyModal';
import LeadForm from './components/LeadForm';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { properties } from './data/mockData';
import { Property } from './types';

function App() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadProperty, setLeadProperty] = useState<Property | undefined>(undefined);
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearch = (filters: { location: string; type: string; budget: string }) => {
    let filtered = properties;

    if (filters.location) {
      filtered = filtered.filter(p =>
        p.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.type) {
      filtered = filtered.filter(p => p.type === filters.type);
    }

    if (filters.budget) {
      const [min, max] = filters.budget.split('-').map(Number);
      filtered = filtered.filter(p => p.price >= min && p.price <= max);
    }

    setFilteredProperties(filtered);
    handleNavigate('properties');
  };

  const handleViewDetails = (property: Property) => {
    setSelectedProperty(property);
  };

  const handleInquire = (property?: Property) => {
    setLeadProperty(property);
    setShowLeadForm(true);
    setSelectedProperty(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={handleNavigate} />

      <div id="home">
        <Hero onSearch={handleSearch} />
      </div>

      <div id="properties">
        <PropertyList
          properties={filteredProperties}
          onViewDetails={handleViewDetails}
          onInquire={handleInquire}
        />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="testimonials">
        <Testimonials />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />

      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
          onInquire={handleInquire}
        />
      )}

      {showLeadForm && (
        <LeadForm
          property={leadProperty}
          onClose={() => {
            setShowLeadForm(false);
            setLeadProperty(undefined);
          }}
        />
      )}
    </div>
  );
}

export default App;
