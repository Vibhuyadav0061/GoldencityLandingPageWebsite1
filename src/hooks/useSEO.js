import { useEffect } from 'react';

export const useSEO = (seoData) => {
  useEffect(() => {
    // Update document title
    if (seoData.title) {
      document.title = seoData.title;
    }

    // Update meta tags
    const updateMetaTag = (name, content, property = false) => {
      if (!content) return;
      
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Update link tags
    const updateLinkTag = (rel, href) => {
      if (!href) return;
      
      let link = document.querySelector(`link[rel="${rel}"]`);
      
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      
      link.setAttribute('href', href);
    };

    // Basic meta tags
    updateMetaTag('description', seoData.description);
    updateMetaTag('keywords', seoData.keywords);
    updateMetaTag('author', seoData.author);
    updateMetaTag('robots', seoData.robots);

    // Open Graph tags
    updateMetaTag('og:title', seoData.ogTitle, true);
    updateMetaTag('og:description', seoData.ogDescription, true);
    updateMetaTag('og:type', seoData.ogType, true);
    updateMetaTag('og:url', seoData.ogUrl, true);
    updateMetaTag('og:image', seoData.ogImage, true);
    updateMetaTag('og:site_name', seoData.ogSiteName, true);
    updateMetaTag('og:locale', seoData.ogLocale, true);

    // Twitter tags
    updateMetaTag('twitter:card', seoData.twitterCard, true);
    updateMetaTag('twitter:title', seoData.twitterTitle, true);
    updateMetaTag('twitter:description', seoData.twitterDescription, true);
    updateMetaTag('twitter:image', seoData.twitterImage, true);
    updateMetaTag('twitter:url', seoData.twitterUrl, true);

    // Geo tags
    updateMetaTag('geo.region', seoData.geoRegion);
    updateMetaTag('geo.placename', seoData.geoPlacename);
    updateMetaTag('geo.position', seoData.geoPosition);
    updateMetaTag('ICBM', seoData.icbm);

    // Language tags
    if (seoData.contentLanguage) {
      let meta = document.querySelector('meta[http-equiv="content-language"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('http-equiv', 'content-language');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', seoData.contentLanguage);
    }

    // Canonical URL
    updateLinkTag('canonical', seoData.canonical);

    // Alternate language links
    if (seoData.alternateLinks) {
      seoData.alternateLinks.forEach(({ hrefLang, href }) => {
        let link = document.querySelector(`link[hreflang="${hrefLang}"]`);
        if (!link) {
          link = document.createElement('link');
          link.setAttribute('rel', 'alternate');
          link.setAttribute('hreflang', hrefLang);
          document.head.appendChild(link);
        }
        link.setAttribute('href', href);
      });
    }

    // Structured Data
    if (seoData.structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]#main-structured-data');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('id', 'main-structured-data');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(seoData.structuredData);
    }

  }, [seoData]);
};

export default useSEO;