import './Process.css';

const Process = () => {
  const steps = [
    {
      id: 1,
      number: '01',
      title: 'Initial Consultation',
      description: 'Connect with our property experts to discuss your requirements, budget, and preferences for your dream home.',
      icon: '💬',
      timeline: 'Day 1',
      features: ['Free Consultation', 'Expert Guidance', 'Requirement Analysis']
    },
    {
      id: 2,
      number: '02',
      title: 'Property Selection',
      description: 'Browse through our curated portfolio of premium properties with personalized recommendations based on your needs.',
      icon: '🏠',
      timeline: 'Day 2-5',
      features: ['Curated Selection', 'Virtual Tours', 'Detailed Information']
    },
    {
      id: 3,
      number: '03',
      title: 'Site Visit & Inspection',
      description: 'Schedule personalized site visits with our team to experience the property and surrounding amenities firsthand.',
      icon: '🚗',
      timeline: 'Day 6-10',
      features: ['Guided Tours', 'Area Analysis', 'Amenity Check']
    },
    {
      id: 4,
      number: '04',
      title: 'Legal Documentation',
      description: 'Complete all legal formalities, documentation, and verification processes with our legal team\'s assistance.',
      icon: '📋',
      timeline: 'Day 11-20',
      features: ['Legal Verification', 'Document Processing', 'Loan Assistance']
    },
    {
      id: 5,
      number: '05',
      title: 'Key Handover',
      description: 'Receive your keys and complete the final handover process. Welcome to your new home with our ongoing support.',
      icon: '🔑',
      timeline: 'Day 21+',
      features: ['Key Ceremony', 'Final Inspection', 'After-sales Support']
    }
  ];

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '100%', label: 'Customer Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "+918448443047";
    const message = "Hi! I'd like to know more about your property buying process and get started with my property journey in Golden City Sujanpur, Aligarh.";
    const url = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleScheduleCall = () => {
    const phoneNumber = "+918448443047";
    const message = "Hi! I'd like to schedule a consultation call to discuss my property requirements for Golden City plots in Sujanpur, Aligarh.";
    const url = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="process" className="process-section">
      <div className="process-container">
        {/* Section Header */}
        <div className="process-header">
          <div className="process-badge">
            <div className="process-badge-icon"></div>
            Our Process
          </div>
          <h2 className="process-title">
            Simple &
          </h2>
          <h3 className="process-subtitle">
            Seamless Journey
          </h3>
          <p className="process-description">
            From initial consultation to key handover, we guide you through every step 
            of your property journey with transparency, expertise, and personalized care.
          </p>
        </div>

        {/* Process Steps */}
        <div className="process-steps-container">
          {/* Connection Line */}
          <div className="process-connection-line"></div>
          
          <div className="process-steps-grid">
            {steps.map((step, index) => (
              <div key={step.id} className="process-step">
                <div className="process-timeline-indicator">
                  {step.timeline}
                </div>
                
                {/* Step Number Circle */}
                <div className="process-step-number">
                  {step.number}
                  <div className="process-step-icon">
                    {step.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="process-step-title">
                  {step.title}
                </h3>
                <p className="process-step-description">
                  {step.description}
                </p>

                {/* Features */}
                <div className="process-step-features">
                  {step.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="process-step-feature">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="process-cta">
          <div className="process-cta-content">
            <h3 className="process-cta-title">
              Ready to Begin Your Property Journey?
            </h3>
            <p className="process-cta-subtitle">
              Join hundreds of satisfied families who have found their dream homes through our 
              proven process. Let our experts guide you every step of the way.
            </p>
            
            <div className="process-cta-buttons">
              <button
                onClick={handleWhatsAppClick}
                className="process-cta-primary"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.687"/>
                </svg>
                Start Your Journey
              </button>
              
              <button
                onClick={handleScheduleCall}
                className="process-cta-secondary"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Schedule Consultation
              </button>
            </div>

            {/* Statistics */}
            <div className="process-stats">
              {stats.map((stat, index) => (
                <div key={index} className="process-stat">
                  <span className="process-stat-number">{stat.number}</span>
                  <span className="process-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;