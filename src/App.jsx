import { useEffect } from 'react';
import useSEO from './hooks/useSEO';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import SEOContent from './components/SEOContent/SEOContent'
import PropertyGallery from './components/PropertyGallery/PropertyGallery'
import Amenities from './components/Amenities/Amenities'
import Process from './components/Process/Process'
import LocationMap from './components/LocationMap/LocationMap'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import LeadChatBot from './components/ChatBot/LeadChatBot';

function App() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "name": "Golden City Township",
        "description": "Premium residential and investment plots on Aligarh Palwal Road, NH334D, Sujanpur. Close to Jewar Airport and Film City with modern amenities and infrastructure.",
        "url": "https://goldencityplots.com",
        "telephone": "+91-8448443047",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Aligarh Palwal Road, NH334D",
          "addressLocality": "Sujanpur, Aligarh",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "202141",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "27.8974",
          "longitude": "78.0880"
        },
        "areaServed": [
          "Aligarh",
          "Sujanpur",
          "Greater Noida",
          "Jewar"
        ],
        "serviceType": [
          "Residential Plots",
          "Investment Plots",
          "Commercial Plots"
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "Golden City Township",
        "image": "https://goldencityplots.com/images/golden-city-logo.jpg",
        "@id": "https://goldencityplots.com",
        "url": "https://goldencityplots.com",
        "telephone": "+91-8448443047",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Aligarh Palwal Road, NH334D",
          "addressLocality": "Sujanpur, Aligarh",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "202141",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "27.8974",
          "longitude": "78.0880"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        },
        "sameAs": [
          "https://www.facebook.com/goldencitytownship",
          "https://www.instagram.com/goldencitytownship"
        ]
      }
    ]
  };

  // SEO Configuration
  const seoData = {
    title: "Golden City Plots Sujanpur Aligarh | NH334D Palwal Road",
    description: "Premium residential & investment plots in Golden City Township on Aligarh Palwal Road, NH334D, Sujanpur. Close to Jewar Airport & Film City. ADA approved plots with modern amenities.",
    keywords: "plots Sujanpur Aligarh, plots NH334D, plots Aligarh Palwal Road, residential plots Sujanpur, Golden City plots, investment plots Aligarh, ADA approved plots",
    author: "Golden City Township",
    robots: "index, follow",
    canonical: "https://goldencityplots.com/golden-city-plots-sujanpur-aligarh",
    
    // Open Graph
    ogTitle: "Golden City Plots Sujanpur Aligarh | NH334D Palwal Road",
    ogDescription: "Premium residential & investment plots in Golden City Township on Aligarh Palwal Road, NH334D, Sujanpur. Close to Jewar Airport & Film City. ADA approved plots with modern amenities.",
    ogType: "website",
    ogUrl: "https://goldencityplots.com/golden-city-plots-sujanpur-aligarh",
    ogImage: "https://goldencityplots.com/images/golden-city-aerial-view.jpg",
    ogSiteName: "Golden City Township",
    ogLocale: "en_IN",
    
    // Twitter
    twitterCard: "summary_large_image",
    twitterTitle: "Golden City Plots Sujanpur Aligarh | NH334D Palwal Road",
    twitterDescription: "Premium residential & investment plots in Golden City Township on Aligarh Palwal Road, NH334D, Sujanpur. Close to Jewar Airport & Film City.",
    twitterImage: "https://goldencityplots.com/images/golden-city-aerial-view.jpg",
    twitterUrl: "https://goldencityplots.com/golden-city-plots-sujanpur-aligarh",
    
    // Geo
    geoRegion: "IN-UP",
    geoPlacename: "Sujanpur, Aligarh, Uttar Pradesh",
    geoPosition: "27.8974;78.0880",
    icbm: "27.8974, 78.0880",
    
    // Language
    contentLanguage: "en-IN",
    alternateLinks: [
      { hrefLang: "en-IN", href: "https://goldencityplots.com/golden-city-plots-sujanpur-aligarh" },
      { hrefLang: "hi-IN", href: "https://goldencityplots.com/hi/golden-city-plots-sujanpur-aligarh" }
    ],
    
    // Structured Data
    structuredData: structuredData
  };

  // Apply SEO
  useSEO(seoData);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        
        <section id="home">
          <Hero />
        </section>
        
        {/* SEO Content Section */}
        <SEOContent />
        
        {/* Property Gallery */}
        <section id="gallery">
          <PropertyGallery />
        </section>
        
        {/* Amenities Section */}
        <section id="amenities">
          <Amenities />
        </section>
        
        {/* Process Section */}
        <section id="process">
          <Process />
        </section>
        
        {/* Location & Map Section */}
        <section id="location">
          <LocationMap />
        </section>
        
        {/* FAQ Section */}
        <section id="faq">
          <FAQ />
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Floating WhatsApp Button */}
      {/* <WhatsAppButton 
        phoneNumber="+918448443089"
        message="Hi! I'm interested in Golden City Township plots in Sujanpur, Aligarh. Can we chat?"
        variant="floating"
      /> */}
      <LeadChatBot/>
    </div>
  )
}

export default App
