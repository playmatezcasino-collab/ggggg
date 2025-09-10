import type { FeatureItem, BenefitItem, FAQItem, InvestmentStep, AdvantageItem } from '../types';

export const platformFeatures: FeatureItem[] = [
  { icon: 'gamepad-2', title: '+2000 Games' },
  { icon: 'dice-6', title: 'Live Casino' },
  { icon: 'trophy', title: 'Sports Betting' },
  { icon: 'trending-up', title: 'Crypto Trading' },
  { icon: 'users', title: 'Virtual Hosts' },
  { icon: 'target', title: 'Bingo' },
  { icon: 'coins', title: 'Jackpot' },
  { icon: 'bar-chart-3', title: 'Prediction Market' },
  { icon: 'globe', title: 'Web 3' },
];

export const investmentBenefits: BenefitItem = {
  title: 'Benefits of Investing in Playmatez',
  items: [
    'Silver / Gold / Platinum / VIP',
    '$100k giveaway participation',
    'Dividends',
    'Revenue share',
    'Voting rights',
    'Staking (COMING SOON)',
  ],
};

export const investmentSteps: InvestmentStep[] = [
  {
    step: '①',
    title: 'Fill Out the Secure Contact Form',
    description: 'Submit your basic information through our encrypted contact form to start your journey.',
  },
  {
    step: '②',
    title: 'Connect with Our Investment Specialists',
    description: 'Our expert team will discuss tailored opportunities based on your goals and risk appetite.',
  },
  {
    step: '③',
    title: 'Choose Your Investment Package',
    description: 'Select from Silver, Gold, Platinum, or VIP tiers — designed to suit every level of investor.',
  },
];

export const partnersData: FeatureItem[] = [
  { icon: 'newspaper', title: 'CoinDesk' },
  { icon: 'blocks', title: 'BSCdaily' },
  { icon: 'bar-chart-2', title: 'CoinMarketCap' },
  { icon: 'line-chart', title: 'CoinGecko' },
];
export const playmatezAdvantages: AdvantageItem = {
  title: 'The Playmatez Advantage',
  features: [
    'High Growth Industry',
    'Experienced Team',
    'High Returns and Bonuses For Players',
    'Implementation of Futures Trading',
    'Exclusive VIP and Loyalty Plans',
    'Multiple Revenue Sharing Opportunities',
  ],
};

export const tokenFeatures: FeatureItem[] = [
  { icon: '🔄', title: 'Buy Back System', description: 'Automated token buyback mechanism' },
  { icon: '💰', title: 'Dividend Options', description: 'Regular dividend distributions' },
  { icon: '💵', title: 'Revenue Sharing', description: 'Share in platform revenues' },
  { icon: '🔥', title: 'Burnable', description: 'Deflationary token mechanics' },
  { icon: '🗳️', title: 'Voting Rights', description: 'Governance participation' },
  { icon: '📉', title: 'Anti Inflationary', description: 'Built-in inflation protection' },
  { icon: 'gamepad-2', title: 'Play with Token', description: 'Use the token directly for gaming, betting, and unlocking exclusive features' },
  { icon: 'award', title: 'Play to Earn', description: 'Earn tokens as rewards by participating in games, challenges, and community activities' },
];

export const faqItems: FAQItem[] = [
  {
    question: 'What is Playmatez?',
    answer: 'Discover Playmatez, the cutting-edge online casino and sportsbook platform revolutionizing the gaming industry with a wide array of interactive betting options and futures trading application.',
  },
  {
    question: 'How does investing in Playmatez work?',
    answer: 'Uncover the flexible investment opportunities at Playmatez, where investors can acquire tokens or shares for potential profits and dividends in our secure and innovative gaming environment.',
  },
  {
    question: 'What are the benefits of investing in Playmatez?',
    answer: 'The unparalleled benefits of investing in Playmatez, includes lucrative returns, diversified investment portfolios, and exclusive access to groundbreaking gaming innovations.',
  },
  {
    question: 'Is Playmatez secure?',
    answer: 'Rest assured, Playmatez prioritizes top-tier security measures to safeguard user data, financial transactions, and platform integrity, ensuring a safe and seamless gaming experience.',
  },
  {
    question: 'What investment opportunities are available on Playmatez?',
    answer: 'Delve into the diverse investment options at Playmatez, from tokenized revenue streams to shares in specific games and betting markets, offering unparalleled opportunities for financial growth.',
  },
  {
    question: 'How do I get started with investing in Playmatez?',
    answer: 'Completing the form and explore our innovative investment options, seizing the opportunity to maximize your financial potential.',
  },
  {
    question: 'What sets Playmatez apart from other online gambling platforms?',
    answer: 'Our commitment to innovation, unparalleled user experience, and transparent investment opportunities, setting us apart as industry leaders in online gaming.',
  },
];

export const tokenomicsBlurb = "Playmatez Tokenomics are designed for growth, transparency, and long-term value. With balanced distribution, built-in scarcity, and strong utility across gaming, trading, and prediction markets, every holder is part of a sustainable ecosystem built to win together.";

export const tokenomicsData = [
  { category: 'Total Supply', value: '1,000,000,000', description: 'Fixed Maximum Supply' },
  { category: 'Circulating Supply', value: '250,000,000', description: 'Currently in circulation' },
  { category: 'Token Type', value: 'Utility & Governance', description: 'Platform utility and governance' }
];

export const distributionData = [
  { category: 'Public Sale', percentage: '38%', amount: '380,000,000', color: 'bg-blue-500' },
  { category: 'Team & Advisors', percentage: '12%', amount: '120,000,000', color: 'bg-green-500', note: 'vested over 36 months, 6-month cliff' },
  { category: 'Development', percentage: '15%', amount: '150,000,000', color: 'bg-purple-500' },
  { category: 'Marketing & Growth', percentage: '15%', amount: '150,000,000', color: 'bg-yellow-500' },
  { category: 'Liquidity', percentage: '10%', amount: '100,000,000', color: 'bg-red-500' },
  { category: 'Reserve & Strategic Partnerships', percentage: '10%', amount: '100,000,000', color: 'bg-gray-500' }
];

export const tokenomicsMechanics = [
  {
    title: 'Staking Rewards Pool',
    description: 'Incentives for long-term holders from Reserve allocation'
  },
  {
    title: 'Deflationary Model',
    description: 'Periodic buyback & burn for scarcity'
  },
  {
    title: 'Governance Utility',
    description: 'Voting rights for community-driven decisions'
  }
];

export const affiliateFeatures = [
  {
    icon: 'dollar-sign',
    title: 'Lucrative Commission Structure',
    description: 'Earn generous commissions for every player/investor you refer'
  },
  {
    icon: 'gem',
    title: 'Multiple Revenue Streams',
    description: 'Diversify your income with revenue share, CPA, and hybrid deals'
  },
  {
    icon: 'globe',
    title: 'Global Reach',
    description: 'Tap into our global player base and expand your reach worldwide'
  },
  {
    icon: 'sparkles',
    title: 'Exclusive Promotions',
    description: 'Access to exclusive bonuses and incentives for players'
  },
  {
    icon: 'bar-chart-2',
    title: 'Real-Time Tracking',
    description: 'Monitor your clicks, conversions, and earnings in real-time'
  },
  {
    icon: 'life-buoy',
    title: 'Dedicated Support',
    description: 'Receive assistance from our dedicated affiliate support team'
  }
];

export const commissionTiers = [
  {
    tier: 'Bronze',
    referrals: '1-25',
    commission: '25%',
    bonus: 'Welcome Package',
    color: 'from-amber-600 to-amber-800'
  },
  {
    tier: 'Silver',
    referrals: '26-100',
    commission: '35%',
    bonus: 'Marketing Materials',
    color: 'from-gray-400 to-gray-600'
  },
  {
    tier: 'Gold',
    referrals: '101-500',
    commission: '45%',
    bonus: 'Personal Manager',
    color: 'from-yellow-400 to-yellow-600'
  },
  {
    tier: 'Platinum',
    referrals: '500+',
    commission: '55%',
    bonus: 'Custom Solutions',
    color: 'from-purple-400 to-purple-600'
  }
];

export const rewardsFaqItems: FAQItem[] = [
  {
    question: 'When do rewards get credited?',
    answer: 'At public launch. Credits appear in your account dashboard.'
  },
  {
    question: 'Is there a cap on referrals?',
    answer: 'Yes — up to 10 referrals for pre-launch rewards.'
  },
  {
    question: 'What if I don\'t have Discord or Telegram?',
    answer: 'You can still claim the Waitlist Bonus and referrals.'
  }
];