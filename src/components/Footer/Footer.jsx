const Footer = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+918448443089";
    const message = "Hi! I'm interested in Golden City Township in Sujanpur, Aligarh. Can you provide more information?";
    const url = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:goldencitytownship@gmail.com";
  };

  const handleSocialClick = (platform) => {
    const socialLinks = {
      facebook: "https://facebook.com/goldencity",
      instagram: "https://instagram.com/goldencity",
      youtube: "https://youtube.com/goldencity"
    };
    window.open(socialLinks[platform], '_blank');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-gradient">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-lime-400 to-lime-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  THE <span className="text-lime-400">GOLDENCITY</span>
                </h3>
                <p className="text-sm text-gray-400 font-medium">TOWNSHIP</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              Premium residential and commercial plots on Aligarh Palwal Road, NH334D, Sujanpur. 
              Over 60 acres of well-planned township with modern infrastructure and amenities.
            </p>
            
            {/* Social Media */}
            <div className="mb-8">
              <h4 className="footer-section-title">Follow GoldenCity</h4>
              <div className="flex space-x-3">
                <button
                  onClick={() => handleSocialClick('facebook')}
                  className="footer-social-btn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button
                  onClick={() => handleSocialClick('instagram')}
                  className="footer-social-btn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.197-1.559-.748-.948-1.197-2.25-1.197-3.654 0-1.404.449-2.706 1.197-3.654.749-.948 1.9-1.559 3.197-1.559s2.448.611 3.197 1.559c.748.948 1.197 2.25 1.197 3.654 0 1.404-.449 2.706-1.197 3.654-.749.948-1.9 1.559-3.197 1.559zm7.138 0c-1.297 0-2.448-.611-3.197-1.559-.748-.948-1.197-2.25-1.197-3.654 0-1.404.449-2.706 1.197-3.654.749-.948 1.9-1.559 3.197-1.559s2.448.611 3.197 1.559c.748.948 1.197 2.25 1.197 3.654 0 1.404-.449 2.706-1.197 3.654-.749.948-1.9 1.559-3.197 1.559z"/>
                  </svg>
                </button>
                <button
                  onClick={() => handleSocialClick('youtube')}
                  className="footer-social-btn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-400">
                <svg className="w-4 h-4 mr-2 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                </svg>
                Subscribe for updates
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <svg className="w-4 h-4 mr-2 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                Plots in Sujanpur Aligarh
              </div>
            </div>
          </div>

          {/* GoldenCity Links */}
          <div>
            <h4 className="footer-section-title">GoldenCity Links</h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="footer-link text-sm"
                >
                  GoldenCity Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="footer-link text-sm"
                >
                  GoldenCity Plots
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="footer-link text-sm"
                >
                  GoldenCity Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('location')}
                  className="footer-link text-sm"
                >
                  Golden City Sujanpur Location
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="footer-link text-sm"
                >
                  Township Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('process')}
                  className="footer-link text-sm"
                >
                  Booking Process
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Searches */}
          <div>
            <h4 className="footer-section-title">Popular Searches</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="footer-link text-sm">
                  GoldenCity Plots
                </a>
              </li>
              <li>
                <a href="#" className="footer-link text-sm">
                  Golden City Sujanpur
                </a>
              </li>
              <li>
                <a href="#" className="footer-link text-sm">
                  Plots NH334D
                </a>
              </li>
              <li>
                <a href="#" className="footer-link text-sm">
                  Plots in Aligarh
                </a>
              </li>
              <li>
                <a href="#" className="footer-link text-sm">
                  Golden City Aligarh
                </a>
              </li>
              <li>
                <a href="#" className="footer-link text-sm">
                  GoldenCity Price
                </a>
              </li>
              <li>
                <a href="#" className="footer-link text-sm">
                  GoldenCity Booking
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="footer-section-title">Contact GoldenCity</h4>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-lime-400/20 rounded-lg flex items-center justify-center mr-3 mt-1">
                  <svg className="w-5 h-5 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">+91 8448443047</p>
                  <p className="text-gray-400 text-sm">Call us anytime</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-lime-400/20 rounded-lg flex items-center justify-center mr-3 mt-1">
                  <svg className="w-5 h-5 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <button
                    onClick={handleEmailClick}
                    className="text-white hover:text-lime-400 transition-colors duration-300 font-medium"
                  >
                    goldencitytownship@gmail.com
                  </button>
                  <p className="text-gray-400 text-sm">Send us an email</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-lime-400/20 rounded-lg flex items-center justify-center mr-3 mt-1">
                  <svg className="w-5 h-5 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">
                    Aligarh Palwal Road, NH334D, Sujanpur
                  </p>
                  <p className="text-gray-400 text-sm">Aligarh - 202141</p>
                </div>
              </div>

              <button
                onClick={handleWhatsAppClick}
                className="footer-whatsapp-btn w-full"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.687"/>
                </svg>
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700/50">
        <div className="container mx-auto px-6 lg:px-12 py-8">
          <div className="text-center space-y-4">
            <p className="text-gray-400 text-sm font-medium">
              © 2025 GoldenCity Township. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Premium Township on NH334D Aligarh Palwal Road | Sujanpur Real Estate
            </p>
            <p className="text-gray-600 text-xs leading-relaxed max-w-4xl mx-auto">
              Premium Residential & Commercial Plots in Sujanpur Aligarh | ADA Approved | Bank Loan Available | Immediate Possession
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;