import { useState, useEffect } from 'react';
import './Header.css';
import goldencitylogo from '../../assets/images/GoldenCityLogo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'PLOTS', href: '#gallery', id: 'gallery' },
    { label: 'AMENITIES', href: '#amenities', id: 'amenities' },
    { label: 'PROCESS', href: '#process', id: 'process' },
    { label: 'LOCATION', href: '#location', id: 'location' },
    { label: 'FAQ', href: '#faq', id: 'faq' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(menuItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "+918448443047";
    const message = "Hi! I'd like to talk about Golden City Township services in Sujanpur, Aligarh.";
    const url = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

const handleMenuClick = (href) => {
  setIsMenuOpen(false);

  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });

    // ✅ Update URL hash without page reload
    window.history.pushState(null, '', href);
  }
};

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : 'header--transparent'}`}>
      <div className="header__container">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            handleMenuClick('#home');
          }}
          className={`header__logo ${isScrolled ? 'header__logo--dark' : 'header__logo--light'}`}
        >
          <div className="header__logo-icon">
            <img src={goldencitylogo} alt="GoldencityLogo" />
          </div>
          <div className="header__logo-text">
            <div className="header__logo-main">
              <span className="header__logo-accent">GOLDEN</span>CITY
            </div>
            <div className="header__logo-sub">TOWNSHIP</div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="header__nav">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleMenuClick(item.href);
              }}
              className={`header__nav-item ${
                activeSection === item.id ? 'header__nav-item--active' : ''
              } ${isScrolled ? 'header__nav-item--dark' : 'header__nav-item--light'}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Contact Button */}
        <button
          onClick={handleWhatsAppClick}
          className={`header__contact-btn ${isScrolled ? 'header__contact-btn--dark' : 'header__contact-btn--light'}`}
        >
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.687"/>
          </svg>
          CONTACT US
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`header__mobile-btn ${isScrolled ? 'header__mobile-btn--dark' : 'header__mobile-btn--light'}`}
        >
          <div className={`header__hamburger ${isMenuOpen ? 'header__hamburger--open' : ''}`}>
            <span className="header__hamburger-line"></span>
            <span className="header__hamburger-line"></span>
            <span className="header__hamburger-line"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`header__mobile-menu ${isMenuOpen ? 'header__mobile-menu--open' : 'header__mobile-menu--closed'}`}>
        <div className={`header__mobile-content ${isScrolled ? 'header__mobile-content--dark' : 'header__mobile-content--light'}`}>
          <nav className="header__mobile-nav">
            {menuItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick(item.href);
                }}
                className={`header__mobile-nav-item ${
                  activeSection === item.id ? 'header__mobile-nav-item--active' : ''
                } ${isScrolled ? 'header__mobile-nav-item--dark' : 'header__mobile-nav-item--light'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                handleWhatsAppClick();
                setIsMenuOpen(false);
              }}
              className="header__mobile-contact"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.687"/>
              </svg>
              CONTACT US
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;