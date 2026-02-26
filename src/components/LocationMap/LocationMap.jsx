import './LocationMap.css';

const LocationMap = () => {
  const nearbyLandmarks = [
    {
      id: 1,
      name: 'Noida International Airport',
      description: 'Major international airport hub',
      icon: '✈️',
      type: 'Airport',
      features: ['International Flights', 'Cargo Hub', 'Metro Connected']
    },
    {
      id: 2,
      name: 'Yamuna Expressway',
      description: '6-lane expressway to Delhi & Agra',
      icon: '🛣️',
      type: 'Highway',
      features: ['6-Lane Highway', 'Toll-Free', 'High Speed']
    },
    {
      id: 3,
      name: 'Greater Noida Metro',
      description: 'Metro connectivity to Delhi NCR',
      icon: '🚇',
      type: 'Metro',
      features: ['Blue Line', 'Aqua Line', 'Direct Delhi']
    },
    {
      id: 4,
      name: 'Film City Noida',
      description: 'Entertainment & media hub',
      icon: '🎬',
      type: 'Entertainment',
      features: ['Studios', 'Production Houses', 'Events']
    },
    {
      id: 5,
      name: 'Pari Chowk',
      description: 'Commercial & business center',
      icon: '🏢',
      type: 'Business',
      features: ['Shopping Malls', 'Offices', 'Restaurants']
    },
    {
      id: 6,
      name: 'Gautam Buddha University',
      description: 'Premier educational institution',
      icon: '🎓',
      type: 'Education',
      features: ['University', 'Research Center', 'Campus']
    }
  ];

  const connectivityStats = [
    { number: '15+', label: 'Major Highways' },
    { number: '3', label: 'Metro Lines' },
    { number: '45 min', label: 'To Delhi' },
    { number: '20 min', label: 'To Airport' }
  ];

  const handleGetDirections = () => {
    const propertyLocation = "27.971887, 77.772764";
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${propertyLocation}`;
    window.open(googleMapsUrl, '_blank');
  };

  const handleLandmarkClick = (landmark) => {
    const searchQuery = encodeURIComponent(`${landmark.name} Greater Noida`);
    const googleMapsUrl = `https://www.google.com/maps/search/${searchQuery}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <section id="location" className="location-section">
      <div className="location-container">
        {/* Section Header */}
        <div className="location-header">
          <div className="location-badge">
            <div className="location-badge-icon"></div>
            Prime Location
          </div>
          <h2 className="location-title">
            Strategic
          </h2>
          <h3 className="location-subtitle">
            Connectivity Hub
          </h3>
          <p className="location-description">
            Perfectly positioned at the heart of Greater Noida with unmatched connectivity 
            to major business districts, airports, and entertainment hubs across NCR.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="location-content-grid">
          {/* Map Section */}
          <div className="location-map-container">
            <div className="location-map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3721.0160837373587!2d77.77002257557946!3d27.97173061378096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2sin!4v1772084538115!5m2!1sen!2sin"
                className="location-map-iframe"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Golden City - HavenHub Infra Location Map - Sujanpur, Aligarh"
              ></iframe>
              <div className="location-map-overlay">
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                The Golden City
              </div>
            </div>
            <div className="location-map-controls">
              <button
                onClick={handleGetDirections}
                className="location-directions-btn"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Get Directions
              </button>
            </div>
          </div>

          {/* Landmarks Section */}
          <div className="location-landmarks">
            <div className="location-landmarks-header">
              <h3 className="location-landmarks-title">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                Nearby Destinations
              </h3>
              <p className="location-landmarks-subtitle">
                Discover the convenience of having major landmarks, business hubs, 
                and entertainment centers in close proximity to your new home.
              </p>
            </div>

            <div className="location-landmarks-grid">
              {nearbyLandmarks.map((landmark) => (
                <div
                  key={landmark.id}
                  className="location-landmark-card"
                  onClick={() => handleLandmarkClick(landmark)}
                >
                  <div className="location-landmark-content">
                    <div className="location-landmark-info">
                      <div className="location-landmark-icon">
                        {landmark.icon}
                      </div>
                      <h4 className="location-landmark-name">{landmark.name}</h4>
                      <p className="location-landmark-description">{landmark.description}</p>
                      <div className="location-landmark-features">
                        {landmark.features.map((feature, index) => (
                          <span key={index} className="location-landmark-feature">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="location-landmark-stats">
                      <div className="location-landmark-type">{landmark.type}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Connectivity Section */}
        <div className="location-connectivity">
          <div className="location-connectivity-content">
            <h3 className="location-connectivity-title">
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Unmatched Connectivity
            </h3>
            <p className="location-connectivity-description">
              Experience seamless connectivity with multiple transportation options, 
              ensuring you're always well-connected to the entire NCR region.
            </p>
            <div className="location-connectivity-stats">
              {connectivityStats.map((stat, index) => (
                <div key={index} className="location-connectivity-stat">
                  <div className="location-connectivity-stat-number">{stat.number}</div>
                  <div className="location-connectivity-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
