const Features = () => {
  const features = [
    {
      id: 1,
      number: "01",
      title: 'ADA Approved',
      description: 'Fully ADA-approved plots with clear title deeds and legal documentation for secure ownership.',
      icon: '📋'
    },
    {
      id: 2,
      number: "02", 
      title: '24/7 Security',
      description: 'Gated community with compound wall, security gate, and round-the-clock surveillance.',
      icon: '🛡️'
    },
    {
      id: 3,
      number: "03",
      title: 'Wide Roads',
      description: 'Modern infrastructure with wide roads, proper drainage, and street lighting.',
      icon: '🛣️'
    },
    {
      id: 4,
      number: "04",
      title: 'Prime Location',
      description: 'Near Jewar Airport with excellent connectivity to business hubs and transport.',
      icon: '📍'
    },
    {
      id: 5,
      number: "05",
      title: 'Modern Amenities',
      description: 'Clubhouse, swimming pool, gymnasium, and landscaped gardens for premium living.',
      icon: '🏢'
    },
    {
      id: 6,
      number: "06",
      title: 'Investment Value',
      description: 'High ROI potential in the rapidly developing NCR region with future growth.',
      icon: '📈'
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "+918448443089";
    const message = "Hi! I'm interested in Golden City Township features in Sujanpur, Aligarh. Can you provide more information?";
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
    <section id="features" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-lime-500 text-white px-6 py-4 rounded-full text-sm font-semibold mb-4">
            TOWNSHIP FEATURES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Modern Infrastructure & Amenities
          </h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-lime-600 mb-6">
            for Premium Living
          </h3>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience world-class facilities designed for modern families seeking comfort and security.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-lime-200 group"
            >
              {/* Header with Number and Icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-lime-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {feature.number}
                </div>
                <div className="text-4xl">{feature.icon}</div>
              </div>

              {/* Content */}
              <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 group-hover:text-lime-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
              Ready to Experience Premium Living?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied families who have made GoldenCity Township their home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToGallery}
                className="bg-lime-500 hover:bg-lime-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                View Properties
              </button>
              <button 
                onClick={handleWhatsAppClick}
                className="bg-transparent border-2 border-lime-500 text-lime-600 hover:bg-lime-500 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;