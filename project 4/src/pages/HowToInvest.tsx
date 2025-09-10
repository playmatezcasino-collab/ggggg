import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Rocket, Users, DollarSign, Flame, Globe, Crown, Vote, CalendarCheck, Handshake } from 'lucide-react';
import { PageHeader } from '../components/UI/PageHeader';
import { ContactForm } from '../components/UI/ContactForm';
import { investmentSteps, investmentBenefits } from '../data/content';

export const HowToInvest: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const handlePackageSelect = (packageName: string) => {
    setSelectedPackage(packageName);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  // Helper function to get Lucide icon component
  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'trending-up': TrendingUp,
      'rocket': Rocket,
      'users': Users,
      'dollar-sign': DollarSign,
      'flame': Flame,
      'globe': Globe,
      'crown': Crown,
      'vote': Vote,
      'handshake': Handshake,
      'calendar-check': CalendarCheck,
    };
    return iconMap[iconName] || TrendingUp;
  };

  return (
    <div className="min-h-screen section-with-top-shade">
      <div className="container mx-auto px-4 py-20">
        <PageHeader
          title="How to Invest"
          subtitle="Your Path to Gaming Industry Investment"
          description="Join the Playmatez investment community in just three simple steps and unlock exclusive, high-value benefits."
        />

        {/* Investment Steps */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-playmatez-white text-center mb-12">
            Investment Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investmentSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-playmatez-gold rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                    <span className="text-4xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < investmentSteps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full">
                      <ArrowRight className="text-playmatez-gold w-8 h-8 mx-auto" />
                    </div>
                  )}
                </div>
                <h4 className="text-2xl font-bold text-playmatez-white mb-4">
                  {step.title}
                </h4>
                <p className="text-playmatez-white/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Investor Packages */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 mb-20">
          <h4 className="text-3xl font-bold text-playmatez-white text-center mb-8">
            Investor Packages
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(() => {
              const investorPackages = [
                {
                  name: 'Silver',
                  subtitle: 'Entry Level',
                  description: 'Start your journey with dividends, platform access, and community membership. Ideal for first-time gaming investors.',
                  price: '',
                  ctaText: 'Apply Now',
                  isPopular: false,
                  isApplicationOnly: false,
                  nameColor: 'text-playmatez-white',
                  dataPackage: 'Silver – Entry Level'
                },
                {
                  name: 'Gold',
                  subtitle: 'Growth Focused',
                  description: 'Enhanced dividends, exclusive events, and priority support. A perfect balance of access and returns.',
                  price: '',
                  ctaText: 'Apply Now',
                  isPopular: true,
                  isApplicationOnly: false,
                  nameColor: 'text-playmatez-gold',
                  dataPackage: 'Gold – Growth Focused (Most Popular)'
                },
                {
                  name: 'Platinum',
                  subtitle: 'Premium Access',
                  description: 'VIP treatment, premium dividends, and early access to features. Designed for serious investors seeking maximum growth.',
                  price: '',
                  ctaText: 'Apply Now',
                  isPopular: false,
                  isApplicationOnly: false,
                  nameColor: 'text-playmatez-gold',
                  dataPackage: 'Platinum – Premium Access'
                },
                {
                  name: 'VIP',
                  subtitle: 'Elite Status',
                  description: 'Maximum dividends, personal account management, and every premium benefit. For high-level investors only.',
                  price: '',
                  ctaText: 'Contact Us',
                  isPopular: false,
                  isApplicationOnly: true,
                  nameColor: 'text-playmatez-gold',
                  dataPackage: 'VIP – Elite Status (By Application Only)'
                }
              ];

              return investorPackages.map((pkg, index) => (
                <div 
                  key={index} 
                  className="relative bg-playmatez-grey backdrop-blur-sm rounded-xl p-6 border border-playmatez-gold text-center hover:bg-playmatez-grey/80 transition-all duration-300 hover:scale-105 cursor-pointer"
                  tabIndex={0}
                  role="button"
                  data-package={pkg.dataPackage}
                  onClick={() => handlePackageSelect(pkg.dataPackage)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handlePackageSelect(pkg.dataPackage);
                    }
                  }}
                >
                  {/* Most Popular Badge */}
                  {pkg.isPopular && (
                    <div className="absolute -top-3 right-3 bg-playmatez-gold text-white text-xs font-bold px-3 py-1 rounded-full transform rotate-3 shadow-lg">
                      Most Popular
                    </div>
                  )}
                  
                  {/* By Application Only Badge */}
                  {pkg.isApplicationOnly && (
                    <div className="absolute -top-3 left-3 bg-playmatez-green text-white text-xs font-bold px-3 py-1 rounded-full transform -rotate-3 shadow-lg">
                      By Application Only
                    </div>
                  )}

                  <h4 className={`text-2xl font-bold mb-2 ${pkg.nameColor}`}>{pkg.name}</h4>
                  <p className="text-playmatez-gold text-sm uppercase font-semibold mb-4 tracking-wide">{pkg.subtitle}</p>
                  <p className="text-playmatez-white/80 text-sm leading-relaxed mb-6 min-h-[80px] flex items-center">{pkg.description}</p>
                  
                  {/* Price Placeholder */}
                  {pkg.price && (
                    <div className="text-playmatez-gold text-lg font-bold mb-4">{pkg.price}</div>
                  )}
                  
                  {/* CTA Button */}
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-playmatez-gold hover:bg-playmatez-gold/80 text-white font-medium rounded-full transition-colors duration-300"
                  >
                    {pkg.ctaText}
                  </a>
                </div>
              ));
            })()}
          </div>
        </div>

        {/* Investment Benefits */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-playmatez-white text-center mb-12">
            {investmentBenefits.title}
          </h3>
          
          {/* Benefits Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <div className="space-y-4">
                {investmentBenefits.items.map((benefit, index) => (
                  <div key={index} className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-colors duration-300 border border-playmatez-gold">
                    <span className="w-6 h-6 bg-playmatez-gold rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white text-sm font-bold">✓</span>
                    </span>
                    <span className="text-playmatez-white font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-gold rounded-2xl p-8 h-full flex items-center justify-center border border-playmatez-gold">
                <div className="text-center text-white">
                  <div className="text-6xl mb-6">💎</div>
                  <h3 className="text-2xl font-bold mb-4">Premium Investor Status</h3>
                  <p className="text-lg opacity-90">
                    Join our exclusive community and unlock all premium benefits designed for serious investors.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* Why Invest Section */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-playmatez-white text-center mb-12">
            Why Invest in Playmatez?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'High-Growth Industry',
                description: '$321B market by 2026',
                icon: 'trending-up'
              },
              {
                title: 'First-Mover Advantage',
                description: 'Only platform merging gaming, sports betting, and futures trading',
                icon: 'rocket'
              },
              {
                title: 'Proven Team',
                description: 'Experts in gaming, blockchain, and fintech',
                icon: 'users'
              },
              {
                title: 'Multiple Revenue Streams',
                description: 'Gaming, trading, affiliates, token value growth',
                icon: 'dollar-sign'
              },
              {
                title: 'Deflationary Tokenomics',
                title: 'Strategic Partnerships',
                description: 'Partnerships across gaming, sports betting, and fintech expanding our ecosystem.',
                icon: 'handshake'
              },
              {
                title: 'Global Reach',
                description: 'Worldwide audience with localized marketing',
                icon: 'globe'
              }
            ].map((reason, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300 border border-playmatez-gold">
                <div className="flex justify-center mb-4">
                  {(() => {
                    const IconComponent = getIconComponent(reason.icon);
                    return <IconComponent className="w-12 h-12 text-playmatez-gold" strokeWidth={1.5} />;
                  })()}
                </div>
                <h4 className="text-xl font-bold text-playmatez-white mb-3">{reason.title}</h4>
                <p className="text-playmatez-white/80">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Opportunity */}

        {/* Investment Opportunities */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-playmatez-white text-center mb-12">
            Investment Opportunities
          </h3>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Token-based revenue sharing',
              'Equity stakes in gaming operations',
              'Participation in platform governance',
              'Access to exclusive investment rounds',
              'Portfolio diversification opportunities'
            ].map((opportunity, index) => (
              <div key={index} className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/15 transition-colors duration-300 border border-playmatez-gold">
                <span className="w-6 h-6 bg-playmatez-gold rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white text-sm font-bold">✓</span>
                </span>
                <span className="text-playmatez-white">{opportunity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div id="contact" className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold text-playmatez-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-playmatez-white/80">
              Fill out our contact form and our investment team will reach out to discuss your opportunities.
            </p>
          </div>
          <ContactForm initialPackage={selectedPackage} showPackageSelector={true} />
        </div>
      </div>
    </div>
  );
};