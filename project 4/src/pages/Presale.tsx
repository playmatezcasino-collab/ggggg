import React, { useEffect } from 'react';
import { PresaleHero } from '../components/presale/PresaleHero';
import { TrustBadges } from '../components/presale/TrustBadges';
import { ProgressStrip } from '../components/presale/ProgressStrip';
import { PresaleBenefits } from '../components/presale/PresaleBenefits';
import { TokenomicsCard } from '../components/presale/TokenomicsCard';
import { PresaleTabs } from '../components/presale/PresaleTabs';
import { FAQ } from '../components/presale/FAQ';
import { LegalRisk } from '../components/presale/LegalRisk';

export const Presale: React.FC = () => {
  useEffect(() => {
    // Create the Coinremitter widget script
    const crPresaleWidget = document.createElement('script');
    crPresaleWidget.id = 'coinremitter-presale-widget';
    crPresaleWidget.type = 'text/javascript';
    crPresaleWidget.src = 'https://cdn.coinremitter.com/widget/presale/MFN5nM0p09/checkout.js';
    crPresaleWidget.charset = 'UTF-8';
    crPresaleWidget.setAttribute('crossorigin', '*');

    // Append to the container
    const container = document.getElementById('coinremitter-widget-container');
    if (container) {
      container.appendChild(crPresaleWidget);
    }

    // Cleanup on unmount
    return () => {
      if (container && crPresaleWidget.parentNode) {
        container.removeChild(crPresaleWidget);
      }
    };
  }, []);

  return (
    <div className="min-h-screen section-with-top-shade">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <PresaleHero>
          <PresaleTabs />
        </PresaleHero>
      </div>

      <div className="container mx-auto px-4">
        {/* Trust Badges */}
        <TrustBadges />

        {/* Progress Strip */}
        <ProgressStrip />

        {/* Coinremitter Widget */}
        <div id="coinremitter-widget-container" className="my-8"></div>

        {/* Benefits */}
        <PresaleBenefits />

        {/* Tokenomics */}
        <TokenomicsCard />

        {/* FAQ */}
        <FAQ />

        {/* Legal & Risk */}
        <LegalRisk />
      </div>
    </div>
  );
};

export default Presale;
