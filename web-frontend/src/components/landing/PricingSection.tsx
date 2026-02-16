import { Button } from '@/components/ui/button';
import { PRICING_PLANS } from '@/lib/constants';

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 bg-gray-950">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/50 to-gray-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="text-white">Simple, Transparent </span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
              Pricing
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your infrastructure needs. Scale up or down anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-gradient-to-b from-cyan-500/10 to-blue-500/10 border-2 border-cyan-500/50 scale-105'
                  : 'bg-gray-900/50 border border-gray-800 hover:border-gray-700'
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className={`text-lg font-semibold ${plan.isPopular ? 'text-cyan-400' : 'text-cyan-400'}`}>
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mt-4 mb-2">
                {plan.price === null ? (
                  <>
                    <span className="text-4xl font-bold text-white">Custom</span>
                  </>
                ) : plan.price === 0 ? (
                  <>
                    <span className="text-4xl font-bold text-white">Free</span>
                  </>
                ) : (
                  <>
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-6">
                {plan.description}
              </p>

              {/* Features */}
              <div className="space-y-1 mb-8">
                <p className="text-sm font-medium text-gray-300 mb-3">Features:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 text-sm text-gray-400">
                      <svg className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <Button
                variant={plan.isPopular ? 'primary' : 'secondary'}
                className="w-full"
              >
                {plan.price === null ? 'Contact Sales' : 'Get Started'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
