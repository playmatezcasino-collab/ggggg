import React from 'react';
import { PresaleHero } from '../components/presale/PresaleHero';
import { TrustBadges } from '../components/presale/TrustBadges';
import { ProgressStrip } from '../components/presale/ProgressStrip';
import { PresaleBenefits } from '../components/presale/PresaleBenefits';
import { HowToBuy } from '../components/presale/HowToBuy';
import { Tokenomics } from '../components/presale/Tokenomics';
import { Roadmap } from '../components/presale/Roadmap';
import { FAQ } from '../components/presale/FAQ';
import { LegalRisk } from '../components/presale/LegalRisk';

export const Presale: React.FC = () => {
  return (
    <div className="min-h-screen section-with-top-shade">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <PresaleHero />

        {/* Trust Badges */}
        <TrustBadges />

        {/* Progress Strip */}
        <ProgressStrip />

        {/* Widget Placeholder - Coinremitter widget temporarily disabled */}
        <div className="my-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-playmatez-gold text-center">
            <h3 className="text-2xl font-bold text-playmatez-white mb-4">Purchase $PLYM Tokens</h3>
            <p className="text-playmatez-white/80 mb-6">
              The token purchase widget will be available here. Use the "How to Buy" section below for detailed instructions.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-playmatez-gold/20 border border-playmatez-gold rounded-full text-playmatez-gold font-medium">
              Widget Coming Soon
            </div>
          </div>
        </div>

        {/* Benefits */}
        <PresaleBenefits />

        {/* How to Buy */}
        <HowToBuy />

        {/* Tokenomics */}
        <Tokenomics />

        {/* Roadmap */}
        <Roadmap />

        {/* FAQ */}
        <FAQ />

        {/* Legal Risk */}
        <LegalRisk />
      </div>
    </div>
  );
};