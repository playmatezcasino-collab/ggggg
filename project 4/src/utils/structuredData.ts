// Base URL for your site - UPDATE THIS TO YOUR ACTUAL DOMAIN
const BASE_URL = 'https://www.playmatez.cc';

// Organization schema for Playmatez
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Playmatez",
  "alternateName": "Playmatez Casino",
  "url": BASE_URL,
  "logo": `${BASE_URL}/logos/FullLogo_Transparent_NoBuffer (2).png`,
  "description": "Revolutionary gaming platform combining casino games, sports betting, and crypto trading with $PLYM token investment opportunities.",
  "foundingDate": "2022",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+442045773683",
    "contactType": "customer service",
    "email": "info@playmatez.cc",
    "availableLanguage": ["English", "Spanish", "French"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "167-169 Great Portland Street",
    "addressLocality": "London",
    "postalCode": "W1W 5PF",
    "addressCountry": "GB"
  },
  "sameAs": [
    "https://t.me/+EYZTs2m09785N2Nk",
    "https://m.facebook.com/people/Playmatez/61556742454970/",
    "https://www.instagram.com/playmatezofficial/",
    "https://www.youtube.com/@PlaymatezCasino",
    "https://medium.com/@playmatezcasino",
    "https://mirror.xyz/0x74DabD069c200FB1F044A61052792B145c3c00F5",
    "https://hackernoon.com/u/playmatez",
    "https://steemit.com/crypto/@playmatez/introducing-playmatez-the-future-of-gaming-betting-and-crypto-innovation"
  ],
  "knowsAbout": [
    "Online Gaming",
    "Cryptocurrency Trading",
    "Sports Betting",
    "Blockchain Technology",
    "Token Investment",
    "DeFi"
  ]
});

// FAQ Page schema
export const getFAQPageSchema = (faqs: Array<{question: string, answer: string}>) => ({
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
});

// Generic WebPage schema
export const getWebPageSchema = (title: string, description: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": title,
  "description": description,
  "url": `${BASE_URL}${path}`,
  "isPartOf": {
    "@type": "WebSite",
    "name": "Playmatez",
    "url": BASE_URL
  },
  "about": getOrganizationSchema(),
  "inLanguage": "en-US"
});

// Home page specific schema
export const getHomePageSchema = (title: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Playmatez",
  "alternateName": "Playmatez Casino",
  "url": BASE_URL,
  "description": description,
  "publisher": getOrganizationSchema(),
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${BASE_URL}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  },
  "mainEntity": {
    "@type": "SoftwareApplication",
    "name": "Playmatez Gaming Platform",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free to join gaming platform with investment opportunities"
    }
  }
});

// Token page schema
export const getTokenPageSchema = (title: string, description: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": title,
  "description": description,
  "url": `${BASE_URL}${path}`,
  "isPartOf": {
    "@type": "WebSite",
    "name": "Playmatez",
    "url": BASE_URL
  },
  "about": {
    "@type": "DigitalDocument",
    "name": "$PLYM Token",
    "description": "Utility and governance token for the Playmatez gaming ecosystem",
    "about": {
      "@type": "Thing",
      "name": "Cryptocurrency Token",
      "description": "BEP-20 token on Binance Smart Chain"
    }
  },
  "mainEntity": {
    "@type": "FinancialProduct",
    "name": "$PLYM Token",
    "description": "Gaming ecosystem utility token with revenue sharing and governance rights",
    "provider": getOrganizationSchema()
  }
});

// Investment page schema
export const getInvestmentPageSchema = (title: string, description: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": title,
  "description": description,
  "url": `${BASE_URL}${path}`,
  "isPartOf": {
    "@type": "WebSite",
    "name": "Playmatez",
    "url": BASE_URL
  },
  "about": getOrganizationSchema(),
  "mainEntity": {
    "@type": "Service",
    "name": "Playmatez Investment Opportunities",
    "description": "Investment packages for gaming platform revenue sharing",
    "provider": getOrganizationSchema(),
    "serviceType": "Investment Service",
    "category": "Financial Services",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Investment Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Silver Package",
          "description": "Entry level investment package with dividends and platform access",
          "category": "Investment Package",
          "eligibleRegion": "Worldwide"
        },
        {
          "@type": "Offer",
          "name": "Gold Package",
          "description": "Growth focused investment package with enhanced dividends and exclusive events",
          "category": "Investment Package",
          "eligibleRegion": "Worldwide"
        },
        {
          "@type": "Offer",
          "name": "Platinum Package",
          "description": "Premium access investment package with VIP treatment and priority support",
          "category": "Investment Package",
          "eligibleRegion": "Worldwide"
        },
        {
          "@type": "Offer",
          "name": "VIP Package",
          "description": "Elite status investment package with maximum dividends and personal account management",
          "category": "Investment Package",
          "eligibleRegion": "Worldwide"
        }
      ]
    }
  }
});

// Main function to get schema based on path
export const getSchemaForPath = (path: string, title: string, description: string) => {
  switch (path) {
    case '/':
      return getHomePageSchema(title, description);
    
    case '/faqs':
      // For FAQ page, we'll use a simplified version since we don't have access to the actual FAQ data here
      // In a real implementation, you might want to pass the FAQ data as a parameter
      return {
        ...getWebPageSchema(title, description, path),
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Playmatez?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Discover Playmatez, the cutting-edge online casino and sportsbook platform revolutionizing the gaming industry with a wide array of interactive betting options and futures trading application."
            }
          },
          {
            "@type": "Question",
            "name": "How does investing in Playmatez work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Uncover the flexible investment opportunities at Playmatez, where investors can acquire tokens or shares for potential profits and dividends in our secure and innovative gaming environment."
            }
          }
        ]
      };
    
    case '/plym-token':
      return getTokenPageSchema(title, description, path);
    
    case '/how-to-invest':
      return getInvestmentPageSchema(title, description, path);
    
    case '/what-is-playmatez':
      return {
        ...getWebPageSchema(title, description, path),
        "about": getOrganizationSchema(),
        "mainEntity": {
          "@type": "AboutPage",
          "name": title,
          "description": description,
          "about": getOrganizationSchema()
        }
      };
    
    case '/playmatez-advantage':
      return {
        ...getWebPageSchema(title, description, path),
        "mainEntity": {
          "@type": "Article",
          "headline": title,
          "description": description,
          "author": getOrganizationSchema(),
          "publisher": getOrganizationSchema(),
          "about": {
            "@type": "Thing",
            "name": "Gaming Platform Advantages",
            "description": "Competitive advantages of Playmatez gaming platform"
          }
        }
      };
    
    case '/rewards-and-referrals':
      return {
        ...getWebPageSchema(title, description, path),
        "mainEntity": {
          "@type": "Service",
          "name": "Playmatez Rewards & Referrals",
          "description": "Pre-launch rewards and affiliate program for Playmatez gaming platform",
          "provider": getOrganizationSchema(),
          "serviceType": "Rewards and Affiliate Marketing Program",
          "category": "Marketing Services",
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Rewards and Commission Tiers",
            "itemListElement": [
              {
                "@type": "Offer",
                "name": "Founders Waitlist Bonus",
                "description": "$10 bonus credits for joining pre-launch waitlist",
                "category": "Pre-launch Reward"
              },
              {
                "@type": "Offer",
                "name": "Referral Rewards",
                "description": "$5 bonus credits per referral (capped at 10)",
                "category": "Referral Reward"
              },
              {
                "@type": "Offer",
                "name": "Bronze Tier",
                "description": "25% commission for 1-25 referrals",
                "category": "Affiliate Commission"
              },
              {
                "@type": "Offer",
                "name": "Silver Tier", 
                "description": "35% commission for 26-100 referrals",
                "category": "Affiliate Commission"
              },
              {
                "@type": "Offer",
                "name": "Gold Tier",
                "description": "45% commission for 101-500 referrals",
                "category": "Affiliate Commission"
              },
              {
                "@type": "Offer",
                "name": "Platinum Tier",
                "description": "55% commission for 500+ referrals",
                "category": "Affiliate Commission"
              }
            ]
          }
        }
      };
    
    case '/prelaunch':
      return {
        ...getWebPageSchema(title, description, path),
        "mainEntity": {
          "@type": "Event",
          "name": "Playmatez Pre-Launch",
          "description": "Exclusive early access to Playmatez gaming platform",
          "organizer": getOrganizationSchema(),
          "eventStatus": "https://schema.org/EventScheduled"
        }
      };
    
    case '/thank-you':
      return {
        ...getWebPageSchema(title, description, path),
        "mainEntity": {
          "@type": "ConfirmationPage",
          "name": title,
          "description": description
        }
      };
    
    default:
      return getWebPageSchema(title, description, path);
  }
};

// Rewards page schema
export const getRewardsPageSchema = (title: string, description: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": title,
  "description": description,
  "url": `${BASE_URL}${path}`,
  "isPartOf": {
    "@type": "WebSite",
    "name": "Playmatez",
    "url": BASE_URL
  },
  "about": getOrganizationSchema(),
  "mainEntity": {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "When do rewards get credited?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "At public launch. Credits appear in your account dashboard."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a cap on referrals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — up to 10 referrals for pre-launch rewards."
        }
      },
      {
        "@type": "Question",
        "name": "What if I don't have Discord or Telegram?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can still claim the Waitlist Bonus and referrals."
        }
      }
    ]
  }
});