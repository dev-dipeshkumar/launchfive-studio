import { siteConfig } from "@/lib/site";

/**
 * Renders Schema.org JSON-LD for the studio.
 *
 * Combines Organization + LocalBusiness + ProfessionalService + WebSite +
 * ContactPoint so Google's Rich Results Test passes without errors.
 * Rendered as a server component (no JS cost).
 */
export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        email: siteConfig.contactEmail,
        telephone: siteConfig.contactPhone,
        description: siteConfig.description,
        foundingDate: siteConfig.foundingDate,
        priceRange: siteConfig.priceRange,
        areaServed: siteConfig.areaServed,
        address: {
          "@type": "PostalAddress",
          addressCountry: siteConfig.addressCountry,
        },
        sameAs: siteConfig.sameAs,
        numberOfEmployees: {
          "@type": "QuantitativeValue",
          value: siteConfig.employeeCount,
        },
        makesOffer: siteConfig.serviceTypes.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s },
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "en",
        publisher: { "@id": `${siteConfig.url}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteConfig.url}/?s={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contactPhone,
        email: siteConfig.contactEmail,
        contactType: "customer support",
        areaServed: siteConfig.areaServed,
        availableLanguage: "English",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
