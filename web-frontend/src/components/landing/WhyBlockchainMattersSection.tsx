import { Button } from '@/components/ui/button';

export function BenefitsSection() {
  return (
    <section className="relative py-24 bg-gray-950 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 text-cyan-500/20 text-4xl font-bold">+</div>
      <div className="absolute bottom-40 left-40 text-cyan-500/20 text-4xl font-bold">+</div>
      <div className="absolute top-1/2 right-1/4 text-cyan-500/20 text-4xl font-bold">+</div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">
              <span className="text-white">The Future of </span>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                DevOps is Autonomous
              </span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Traditional DevOps requires constant manual intervention, monitoring, and maintenance. InfraMind replaces manual workflows with autonomous agents that manage infrastructure intelligently, reducing operational overhead and improving reliability.
            </p>
            <Button variant="primary">
              Learn More
            </Button>
          </div>

          {/* Right Content - Infrastructure Illustration */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Glow Effect */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-cyan-500/20 to-transparent rounded-full blur-3xl" />
              
              {/* SVG Infrastructure Illustration */}
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="infraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                  <linearGradient id="infraPlatform" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
                  </linearGradient>
                </defs>

                {/* Platform Base */}
                <path d="M50 300 L200 350 L350 300 L200 250 Z" fill="url(#infraPlatform)" stroke="#06b6d4" strokeWidth="1" opacity="0.5" />
                <path d="M80 285 L200 325 L320 285 L200 245 Z" fill="url(#infraPlatform)" stroke="#06b6d4" strokeWidth="1" opacity="0.3" />

                {/* Main Server Tower */}
                <rect x="160" y="120" width="80" height="130" rx="4" fill="#111827" stroke="#06b6d4" strokeWidth="1.5" />
                <rect x="170" y="130" width="60" height="10" rx="2" fill="#06b6d4" opacity="0.3" />
                <rect x="170" y="150" width="60" height="10" rx="2" fill="#06b6d4" opacity="0.3" />
                <rect x="170" y="170" width="60" height="10" rx="2" fill="#06b6d4" opacity="0.3" />
                <rect x="170" y="190" width="60" height="10" rx="2" fill="#06b6d4" opacity="0.3" />
                <rect x="170" y="210" width="60" height="10" rx="2" fill="#06b6d4" opacity="0.3" />
                
                {/* Status Indicators */}
                <circle cx="178" cy="240" r="3" fill="#06b6d4" />
                <circle cx="191" cy="240" r="3" fill="#3b82f6" />
                <circle cx="204" cy="240" r="3" fill="#06b6d4" />

                {/* Left Service */}
                <rect x="50" y="160" width="70" height="80" rx="4" fill="#111827" stroke="#06b6d4" strokeWidth="1" />
                <rect x="60" y="170" width="50" height="8" rx="2" fill="#06b6d4" opacity="0.3" />
                <rect x="60" y="185" width="50" height="8" rx="2" fill="#06b6d4" opacity="0.3" />
                <circle cx="65" cy="215" r="2" fill="#06b6d4" />
                <circle cx="75" cy="215" r="2" fill="#3b82f6" />

                {/* Right Service */}
                <rect x="280" y="160" width="70" height="80" rx="4" fill="#111827" stroke="#06b6d4" strokeWidth="1" />
                <rect x="290" y="170" width="50" height="8" rx="2" fill="#06b6d4" opacity="0.3" />
                <rect x="290" y="185" width="50" height="8" rx="2" fill="#06b6d4" opacity="0.3" />
                <circle cx="295" cy="215" r="2" fill="#06b6d4" />
                <circle cx="305" cy="215" r="2" fill="#3b82f6" />

                {/* Top Monitor/Control */}
                <rect x="170" y="60" width="60" height="50" rx="3" fill="#111827" stroke="#06b6d4" strokeWidth="1.5" />
                <rect x="180" y="72" width="40" height="28" fill="#0f172a" stroke="#06b6d4" strokeWidth="0.5" />
                <line x1="185" y1="75" x2="215" y2="75" stroke="#06b6d4" strokeWidth="0.5" opacity="0.5" />
                <line x1="185" y1="80" x2="215" y2="80" stroke="#06b6d4" strokeWidth="0.5" opacity="0.5" />
                <line x1="185" y1="85" x2="215" y2="85" stroke="#06b6d4" strokeWidth="0.5" opacity="0.5" />
                <line x1="185" y1="90" x2="215" y2="90" stroke="#06b6d4" strokeWidth="0.5" opacity="0.5" />

                {/* Connection Lines */}
                <line x1="120" y1="200" x2="160" y2="180" stroke="#06b6d4" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
                <line x1="240" y1="180" x2="280" y2="200" stroke="#06b6d4" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
                <line x1="200" y1="120" x2="200" y2="110" stroke="#06b6d4" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />

                {/* Data Flow Indicators */}
                <circle cx="100" cy="140" r="4" fill="#06b6d4" opacity="0.6" />
                <circle cx="300" cy="140" r="4" fill="#3b82f6" opacity="0.6" />
                <circle cx="150" cy="80" r="3" fill="#06b6d4" opacity="0.4" />
                <circle cx="250" cy="80" r="3" fill="#3b82f6" opacity="0.4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
