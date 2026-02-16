interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Connect Your Cloud',
    description: 'Securely connect your AWS, Cloudflare, or Kubernetes environments.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.051A4.002 4.002 0 003 15z" />
      </svg>
    ),
  },
  {
    number: 2,
    title: 'Deploy Your Application',
    description: 'Provide your GitHub repository and deployment configuration.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    number: 3,
    title: 'Agent Takes Over',
    description: 'InfraMind agents deploy, monitor, scale, and maintain your infrastructure automatically.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    number: 4,
    title: 'Relax',
    description: 'Your infrastructure runs autonomously while you focus on building products.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export function HowItWorksSection() {
  return (
    <section className="relative py-24 bg-gray-950">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="text-white">How InfraMind </span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
              Works
            </span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="group relative p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-cyan-500/50 transition-all duration-300 h-full">
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 rounded-xl transition-all duration-300" />

                <div className="relative">
                  {/* Step Number Badge */}
                  <div className="w-12 h-12 mb-4 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg text-white font-bold text-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 mb-4 flex items-center justify-center bg-gray-800 border border-gray-700 rounded-lg text-cyan-400 group-hover:border-cyan-500/50 transition-colors">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Arrow Connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* Timeline Visual for Mobile */}
        <div className="mt-12 lg:hidden">
          <div className="space-y-3">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="relative flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-1 h-12 bg-gradient-to-b from-cyan-500/50 to-transparent mt-2" />
                  )}
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-white">{step.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
