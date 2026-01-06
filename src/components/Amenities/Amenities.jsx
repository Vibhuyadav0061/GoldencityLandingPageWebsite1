import './Amenities.css';
import lackViewImg from '../../assets/images/GoldenCityLake.jpeg'
import SocietyGateImg from '../../assets/images/GoldencityGate.jpeg'
import parkimg from '../../assets/images/GoldencityCentralPark.jpg'
const Amenities = () => {
  const amenities = [
    {
      id: 1,
      number: "01",
      title: 'Serene Lake View',
      description: 'Breathtaking panoramic views of the pristine lake with walking trails, boating facilities, and peaceful meditation spots for ultimate relaxation.',
      image: lackViewImg,
      icon: '🏞️',
      badge: 'Premium View',
      features: ['Boating', 'Walking Trails', 'Meditation Spots', 'Fishing Area'],
      className: 'lake-view featured'
    },
    {
      id: 2,
      number: "02",
      title: 'Grand Society Gate',
      description: 'Impressive entrance with 24/7 security, automated gates, visitor management system, and elegant landscaping creating a prestigious first impression.',
      image: SocietyGateImg,
      icon: '🏛️',
      badge: 'Secure Entry',
      features: ['24/7 Security', 'Automated Gates', 'Visitor Management', 'CCTV Surveillance'],
      className: 'society-gate'
    },
    {
      id: 3,
      number: "03",
      title: 'Premium Clubhouse',
      description: 'State-of-the-art clubhouse with banquet halls, conference rooms, library, and recreational facilities for community gatherings and events.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      icon: '🏢',
      badge: 'Community Hub',
      features: ['Banquet Hall', 'Conference Room', 'Library', 'Game Room'],
      className: 'clubhouse'
    },
    {
      id: 4,
      number: "04",
      title: 'Modern Gymnasium',
      description: 'Fully equipped fitness center with latest cardio machines, weight training equipment, yoga studio, and certified personal trainers.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      icon: '💪',
      badge: 'Fitness Zone',
      features: ['Cardio Equipment', 'Weight Training', 'Yoga Studio', 'Personal Trainers'],
      className: 'gymnasium'
    },
    {
      id: 5,
      number: "05",
      title: 'Landscaped Gardens',
      description: 'Beautifully designed botanical gardens with exotic plants, jogging tracks, outdoor fitness equipment, and children\'s play areas.',
      image: parkimg,
      icon: '🌳',
      badge: 'Green Spaces',
      features: ['Botanical Garden', 'Jogging Track', 'Play Area', 'Outdoor Gym'],
      className: 'garden'
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "+918448443089";
    const message = "Hi! I'm interested in Golden City Township amenities in Sujanpur, Aligarh. Can you provide more information?";
    const url = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const scrollToGallery = () => {
    const element = document.getElementById('gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="amenities" className="amenities-section">
      <div className="amenities-container">
        {/* Section Header */}
        <div className="amenities-header">
          <div className="amenities-badge">
            <div className="amenities-badge-icon"></div>
            PREMIUM AMENITIES
          </div>
          <h2 className="amenities-title">
            Luxury Living
          </h2>
          <h3 className="amenities-subtitle">
            Redefined
          </h3>
          <p className="amenities-description">
            Experience world-class amenities designed to elevate your lifestyle with breathtaking views, 
            premium facilities, and unmatched comfort in every corner of our township.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="amenities-grid special-layout">
          {amenities.map((amenity) => (
            <div
              key={amenity.id}
              className={`amenity-card ${amenity.className}`}
            >
              {/* Image Container */}
              <div className="amenity-image-container">
                <img 
                  src={amenity.image} 
                  alt={amenity.title}
                  className="amenity-image"
                />
                <div className="amenity-overlay">
                  <div className="amenity-overlay-content">
                    <div className="amenity-overlay-icon">
                      <span style={{ fontSize: '20px' }}>{amenity.icon}</span>
                    </div>
                    <div className="amenity-overlay-text">View in 3D</div>
                  </div>
                </div>
                <div className="amenity-badge-overlay">
                  {amenity.badge}
                </div>
              </div>

              {/* Content */}
              <div className="amenity-content">
                <div className="amenity-header">
                  <div className="amenity-number">
                    {amenity.number}
                  </div>
                  <div className="amenity-icon">
                    {amenity.icon}
                  </div>
                </div>

                <h3 className="amenity-title">
                  {amenity.title}
                </h3>
                
                <p className="amenity-description">
                  {amenity.description}
                </p>

                <div className="amenity-features">
                  {amenity.features.map((feature, index) => (
                    <span key={index} className="amenity-feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="amenities-cta">
          <h3 className="amenities-cta-title">
            Ready to Experience Luxury Living?
          </h3>
          <p className="amenities-cta-description">
            Discover a lifestyle where every day feels like a vacation. Schedule your visit today 
            and witness these premium amenities firsthand.
          </p>
          <div className="amenities-cta-buttons">
            <button 
              onClick={scrollToGallery}
              className="amenities-btn-primary"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Explore Gallery
            </button>
            <button 
              onClick={handleWhatsAppClick}
              className="amenities-btn-secondary"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.687"/>
              </svg>
              Schedule Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;