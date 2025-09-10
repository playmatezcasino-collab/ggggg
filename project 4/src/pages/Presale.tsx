import React from 'react';
import { PresaleHero } from '../components/presale/PresaleHero';
import { TrustBadges } from '../components/presale/TrustBadges';
import { ProgressStrip } from '../components/presale/ProgressStrip';
import { PresaleBenefits } from '../components/presale/PresaleBenefits';
import { TokenomicsCard } from '../components/presale/TokenomicsCard';
import { PresaleTabs } from '../components/presale/PresaleTabs';
import { FAQ } from '../components/presale/FAQ';
import { LegalRisk } from '../components/presale/LegalRisk';

export const Presale: React.FC = () => {
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