import Script from 'next/script';

interface StructuredDataProps {
  type: 'website' | 'calculator' | 'car-calculator' | 'moto-calculator';
  title: string;
  description: string;
  url: string;
}

const StructuredData = ({ type, title, description, url }: StructuredDataProps) => {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": title,
      "description": description,
      "url": url,
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "BRL"
      },
      "author": {
        "@type": "Person",
        "name": "Daniel H",
        "url": "https://github.com/eudanielhenrique"
      },
      "publisher": {
        "@type": "Person",
        "name": "Daniel H"
      },
      "inLanguage": "pt-BR",
      "isAccessibleForFree": true
    };

    switch (type) {
      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Calculadora de Emplacamento",
          "description": "Calculadora gratuita para emplacamento de carros e motos",
          "url": "https://calculadora-emplacamento.vercel.app",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://calculadora-emplacamento.vercel.app/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          },
          "author": {
            "@type": "Person",
            "name": "Daniel H",
            "url": "https://github.com/eudanielhenrique"
          }
        };

      case 'car-calculator':
        return {
          ...baseData,
          "name": "Calculadora de Emplacamento de Carros",
          "description": "Calculadora especializada para emplacamento de automóveis, incluindo IPVA, taxas e documentação",
          "keywords": ["IPVA", "emplacamento", "carros", "automóveis", "documentação", "taxa"],
          "applicationSubCategory": "Automotive Calculator"
        };

      case 'moto-calculator':
        return {
          ...baseData,
          "name": "Calculadora de Emplacamento de Motos",
          "description": "Calculadora especializada para emplacamento de motocicletas com venda de estoque",
          "keywords": ["IPVA", "emplacamento", "motos", "motocicletas", "documentação", "venda estoque"],
          "applicationSubCategory": "Motorcycle Calculator"
        };

      default:
        return baseData;
    }
  };

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()),
      }}
    />
  );
};

export default StructuredData;
