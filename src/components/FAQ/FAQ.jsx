import { useState, useEffect } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Are plots in Golden City Sujanpur Aligarh approved?",
      answer: "Yes, all plots in Golden City Township are fully approved by ADA (Aligarh Development Authority). We have complete legal documentation including clear title deeds, revenue department clearance, and all necessary approvals for residential and commercial development."
    },
    {
      id: 2,
      question: "Is Golden City Sujanpur good for investment?",
      answer: "Absolutely! Golden City offers excellent investment potential due to its strategic location on NH334D Aligarh Palwal Road in Sujanpur. With the upcoming infrastructure development and proximity to Jewar Airport, property values are expected to appreciate significantly."
    },
    {
      id: 3,
      question: "What is the exact location of Golden City Township?",
      answer: "Golden City Township is located on Aligarh Palwal Road, NH334D, Sujanpur, Aligarh - 202141. The township has direct highway connectivity and excellent access to major destinations."
    },
    {
      id: 4,
      question: "What plot sizes are available in Golden City?",
      answer: "We offer flexible plot sizes ranging from 100 sq yard to 200 sq yard. Available options include: 100 sq yard (₹15 Lakh), 120 sq yard (₹20 Lakh), 150 sq yard (₹25 Lakh), and commercial plots of 200 sq yard (₹35 Lakh). All plots come with proper demarcation and clear boundaries."
    },
    {
      id: 5,
      question: "Is registry available for Golden City plots?",
      answer: "Yes, complete registry and documentation services are available. We provide clear title deeds, ADA approval certificates, and assist with the entire registration process. Our legal team ensures all paperwork is completed smoothly and transparently."
    },
    {
      id: 6,
      question: "What amenities are provided in Golden City Township?",
      answer: "Golden City offers world-class amenities including swimming pool complex, modern gymnasium, community clubhouse, landscaped gardens, children's play area, 24/7 security, street lighting, underground utilities, ample parking, and power backup facilities."
    },
    {
      id: 7,
      question: "Is the location suitable for future appreciation?",
      answer: "Yes, the location is highly suitable for future appreciation. With infrastructure development, proximity to Jewar Airport, NH334D connectivity, and ongoing commercial growth in the area, the township is poised for significant property value appreciation."
    },
    {
      id: 8,
      question: "How to book a plot in Golden City?",
      answer: "Booking is simple and transparent. Contact us at +91-8448443047 or visit our site office. Our process includes: site visit, plot selection, documentation verification, booking amount payment, and completion of legal formalities. We provide end-to-end assistance."
    },
    {
      id: 9,
      question: "What is the payment plan for Golden City plots?",
      answer: "We offer flexible payment plans to suit different budgets. Options include: one-time payment with attractive discounts, EMI plans up to 24 months, and construction-linked payment plans. Down payment starts from 20% with easy installment options."
    },
    {
      id: 10,
      question: "Are there any hidden charges in Golden City plots?",
      answer: "No, we maintain complete transparency in pricing. All costs including development charges, amenity charges, and legal fees are clearly mentioned upfront. There are no hidden charges or surprise costs during the booking or registration process."
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  // Add FAQ structured data to head
  useEffect(() => {
    const faqStructuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    let script = document.querySelector('script[type="application/ld+json"]#faq-structured-data');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('id', 'faq-structured-data');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(faqStructuredData);

    return () => {
      // Cleanup on unmount
      const existingScript = document.querySelector('script[type="application/ld+json"]#faq-structured-data');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [faqs]);

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <div className="faq-badge">
            <div className="faq-badge-icon"></div>
            Frequently Asked Questions
          </div>
          <h2 className="faq-title">
            Frequently Asked Questions
          </h2>
          <h3 className="faq-subtitle">
            About Golden City Plots
          </h3>
          <p className="faq-description">
            Get answers to common questions about our plots in Sujanpur Aligarh, 
            investment opportunities, legal documentation, and booking process.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className={`faq-item ${openFAQ === faq.id ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(faq.id)}
                aria-expanded={openFAQ === faq.id}
              >
                <span className="faq-question-text">{faq.question}</span>
                <span className="faq-toggle-icon">
                  {openFAQ === faq.id ? '−' : '+'}
                </span>
              </button>
              
              <div className={`faq-answer ${openFAQ === faq.id ? 'open' : ''}`}>
                <div className="faq-answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="faq-cta">
          <h3 className="faq-cta-title">Still Have Questions?</h3>
          <p className="faq-cta-description">
            Our experts are here to help you with any additional questions about 
            Golden City plots in Sujanpur, investment opportunities, or booking process.
          </p>
          <div className="faq-cta-buttons">
            <a href="tel:+918448443047" className="faq-cta-button primary">
              📞 Call Expert: +91-8448443047
            </a>
            <a href="https://wa.me/918448443089" className="faq-cta-button secondary">
              💬 WhatsApp Query
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;