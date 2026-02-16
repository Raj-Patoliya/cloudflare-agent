import { NavLink, PricingPlan } from '@/types/common.types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/', isActive: true },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Documentation', href: '/docs' },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Starter',
    price: 0,
    period: 'free',
    description: 'Perfect for getting started',
    features: [
      '1 Autonomous Agent',
      'Up to 3 Deployments',
      'Basic Monitoring',
      'Community Support',
    ],
  },
  {
    name: 'Pro',
    price: 29,
    period: 'month',
    description: 'For growing teams and projects',
    features: [
      '10 Autonomous Agents',
      'Unlimited Deployments',
      'Advanced Monitoring',
      'Auto Scaling',
      'Priority Support',
    ],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: null,
    period: 'custom',
    description: 'For large-scale operations',
    features: [
      'Unlimited Agents',
      'Multi-Cloud Support',
      'Dedicated Infrastructure',
      'Custom Integrations',
      'Dedicated Support',
    ],
  },
];

export const SITE_CONFIG = {
  name: 'InfraMind',
  description: 'Autonomous DevOps agents that deploy, monitor, and manage infrastructure intelligently.',
  tagline: 'Autonomous DevOps. Zero Manual Work.',
};
