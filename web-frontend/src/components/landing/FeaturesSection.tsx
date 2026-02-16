interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Autonomous Deployment',
    description: 'Deploy applications automatically to AWS, Cloudflare, and Kubernetes without writing pipelines or scripts.',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Self-Healing Infrastructure',
    description: 'Agents detect failures, restart services, and recover systems automatically with zero downtime.',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Real-Time Monitoring',
    description: 'Continuously monitor performance, uptime, and infrastructure health globally.',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3v-9" />
      </svg>
    ),
    title: 'Auto Scaling',
    description: 'Scale your infrastructure dynamically based on traffic, load, and system conditions.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 bg-gray-950">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-950" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="text-white">Why </span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
              InfraMind?
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Automate your entire DevOps lifecycle using intelligent infrastructure agents.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-cyan-500/50 transition-all duration-300"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 rounded-xl transition-all duration-300" />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-12 h-12 mb-4 flex items-center justify-center bg-gray-800 border border-gray-700 rounded-lg text-cyan-400 group-hover:border-cyan-500/50 transition-colors">
                  {feature.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
