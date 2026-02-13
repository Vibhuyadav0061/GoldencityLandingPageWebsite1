import { useState } from 'react';
import './PropertyGallery.css';
import roadConstructionImg from '../../assets/images/RoadConstruction.jpg';
import commercialPlotImg from '../../assets/images/CommercialPlots.png';
import wideRoadImg from '../../assets/images/wideRoad.jpg';
import residentialPlotImg from '../../assets/images/residentialdevelopment.png';
import plotsBoundaryImg from '../../assets/images/plotsboundry.jpg';
import masterPlane from '../../assets/images/masterplane.jpg';
import waterSystemImg from '../../assets/images/waterSystem.jpg';
const PropertyGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAllImages, setShowAllImages] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const galleryImages = [
    {
      id: 1,
      title: 'Township Master Layout',
      category: 'masterplan',
      image: masterPlane,
      description: 'Comprehensive master plan showing complete township layout and plot distribution'
    },
    {
      id: 2,
      title: 'Residential Plot Development',
      category: 'plots',
      image: residentialPlotImg,
      description: 'Well-planned residential plots with proper demarcation and boundaries'
    },
    {
      id: 3,
      title: 'Wide Internal Roads',
      category: 'infrastructure',
      image: wideRoadImg,
      description: 'Modern wide roads with proper drainage and street lighting infrastructure'
    },
    {
      id: 4,
      title: 'Commercial Plot Section',
      category: 'plots',
      image:commercialPlotImg ,
      description: 'Prime commercial plots strategically located for business development'
    },
    {
      id: 5,
      title: 'Road Construction Progress',
      category: 'construction',
      image: roadConstructionImg,
      description: 'Ongoing road construction with modern equipment and quality materials'
    },
    {
      id: 6,
      title: 'Plot Boundary Marking',
      category: 'plots',
      image: plotsBoundaryImg,
      description: 'Clear plot demarcation with boundary stones and proper surveying'
    },
    {
      id: 7,
      title: 'Underground Utilities',
      category: 'infrastructure',
      image:waterSystemImg,
      description: 'Underground utility installation including water, electricity, and sewage lines'
    },
    {
      id: 8,
      title: 'Plot Size Variations',
      category: 'plots',
      image: residentialPlotImg,
      description: 'Various plot sizes available from 1000 to 5000 sq ft to suit different needs'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Images', icon: '�️' },
    { id: 'masterplan', label: 'Master Plan', icon: '📋' },
    { id: 'plots', label: 'Plots & Land', icon: '�️' },
    { id: 'infrastructure', label: 'Infrastructure', icon: '🛣️' },
    { id: 'construction', label: 'Construction', icon: '🚧' }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  const displayedImages = showAllImages ? filteredImages : filteredImages.slice(0, 6);

  const openImageModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const handleShowMore = () => {
    setShowAllImages(true);
  };

  const handleShowLess = () => {
    setShowAllImages(false);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "+918448443047";
    const message = "Hi! I'm interested in Golden City Township plots and land development in Sujanpur, Aligarh. I saw the development gallery and would like to know more about available plots and pricing.";
    const url = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        {/* Section Header */}
        <div className="gallery-header">
          <div className="gallery-badge">
            <div className="gallery-badge-icon"></div>
            Development Gallery
          </div>
          <h2 className="gallery-title">
            Land & Plot
          </h2>
          <h3 className="gallery-subtitle">
            Development Gallery
          </h3>
          <p className="gallery-description">
            Explore our township development progress featuring land preparation, plot demarcation, 
            road construction, and infrastructure development for premium residential and commercial plots in Sujanpur, Aligarh.
          </p>
        </div>

        {/* Category Filters */}
        <div className="gallery-filters">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setShowAllImages(false);
              }}
              className={`gallery-filter ${activeCategory === category.id ? 'active' : ''}`}
            >
              <span className="gallery-filter-icon">{category.icon}</span>
              <span className="gallery-filter-label">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="gallery-grid">
          {displayedImages.map((image, index) => (
            <div
              key={image.id}
              className={`gallery-item ${index === 0 ? 'featured' : ''}`}
              onClick={() => openImageModal(image)}
            >
              <div className="gallery-image-container">
                <img
                  src={image.image}
                  alt={`Golden City Township ${image.title} - ${image.description} near Jewar Airport Aligarh`}
                  className="gallery-image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <div className="gallery-overlay-icon">
                      <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <div className="gallery-overlay-text">View Image</div>
                  </div>
                </div>
              </div>
              <div className="gallery-item-info">
                <h4 className="gallery-item-title">{image.title}</h4>
                <p className="gallery-item-description">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredImages.length > 6 && (
          <div className="gallery-actions">
            {!showAllImages ? (
              <button onClick={handleShowMore} className="gallery-show-more">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                Show More Images ({filteredImages.length - 6} more)
              </button>
            ) : (
              <button onClick={handleShowLess} className="gallery-show-less">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
                Show Less Images
              </button>
            )}
          </div>
        )}

        {/* Contact CTA */}
        <div className="gallery-cta">
          <div className="gallery-cta-content">
            <h3 className="gallery-cta-title">Ready to Invest in Premium Plots?</h3>
            <p className="gallery-cta-description">
              Schedule a site visit to see our land development progress and choose your ideal plot location.
            </p>
            <button onClick={handleWhatsAppClick} className="gallery-cta-button">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.687"/>
              </svg>
              Schedule Site Visit
            </button>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="gallery-modal-overlay" onClick={closeImageModal}>
            <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
              <button onClick={closeImageModal} className="gallery-modal-close">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="gallery-modal-content">
                <img
                  src={selectedImage.image}
                  alt={`Golden City Township ${selectedImage.title} - ${selectedImage.description} near Jewar Airport Aligarh`}
                  className="gallery-modal-image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="gallery-modal-info">
                  <h3 className="gallery-modal-title">{selectedImage.title}</h3>
                  <p className="gallery-modal-description">{selectedImage.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyGallery;