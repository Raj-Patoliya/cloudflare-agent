import { Button } from '@/components/ui/button';
import { SITE_CONFIG } from '@/lib/constants';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-500/5 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">Deploy, Monitor, and Scale Infrastructure with </span>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                Autonomous AI Agents
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-lg">
              InfraMind replaces manual DevOps work with intelligent agents that deploy applications, monitor infrastructure, fix failures automatically, and scale your systems without human intervention.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg">
                Start Free Trial
              </Button>
              <Button variant="secondary" size="lg">
                See How It Works
              </Button>
            </div>
          </div>

          {/* Right Content - AI Agent Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-112.5 lg:h-112.5">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />
              
              {/* AI Agent Illustration SVG */}
              <svg
                viewBox="0 0 400 400"
                className="relative w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="agentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                  <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                
                {/* Background Circle */}
                <circle cx="200" cy="200" r="150" fill="url(#glowGradient)" />
                
                {/* Central Core/Brain */}
                <circle cx="200" cy="200" r="40" fill="#111827" stroke="url(#agentGradient)" strokeWidth="2" />
                <circle cx="200" cy="200" r="30" fill="none" stroke="#06b6d4" strokeWidth="1" opacity="0.5" />
                <circle cx="200" cy="200" r="20" fill="none" stroke="#06b6d4" strokeWidth="1" opacity="0.3" />
                <circle cx="200" cy="200" r="8" fill="#06b6d4" />
                
                {/* Connected Nodes */}
                {/* Top Node */}
                <circle cx="200" cy="100" r="12" fill="#111827" stroke="url(#agentGradient)" strokeWidth="1.5" />
                <circle cx="200" cy="100" r="6" fill="#06b6d4" opacity="0.8" />
                
                {/* Right Node */}
                <circle cx="300" cy="200" r="12" fill="#111827" stroke="url(#agentGradient)" strokeWidth="1.5" />
                <circle cx="300" cy="200" r="6" fill="#3b82f6" opacity="0.8" />
                
                {/* Bottom Node */}
                <circle cx="200" cy="300" r="12" fill="#111827" stroke="url(#agentGradient)" strokeWidth="1.5" />
                <circle cx="200" cy="300" r="6" fill="#06b6d4" opacity="0.8" />
                
                {/* Left Node */}
                <circle cx="100" cy="200" r="12" fill="#111827" stroke="url(#agentGradient)" strokeWidth="1.5" />
                <circle cx="100" cy="200" r="6" fill="#3b82f6" opacity="0.8" />
                
                {/* Connection Lines */}
                <line x1="200" y1="240" x2="200" y2="288" stroke="#06b6d4" strokeWidth="1.5" opacity="0.6" />
                <line x1="240" y1="200" x2="288" y2="200" stroke="#3b82f6" strokeWidth="1.5" opacity="0.6" />
                <line x1="200" y1="160" x2="200" y2="112" stroke="#06b6d4" strokeWidth="1.5" opacity="0.6" />
                <line x1="160" y1="200" x2="112" y2="200" stroke="#3b82f6" strokeWidth="1.5" opacity="0.6" />
                
                {/* Diagonal Connections */}
                <line x1="235" y1="165" x2="280" y2="120" stroke="#06b6d4" strokeWidth="1" opacity="0.4" strokeDasharray="3 3" />
                <line x1="235" y1="235" x2="280" y2="280" stroke="#3b82f6" strokeWidth="1" opacity="0.4" strokeDasharray="3 3" />
                <line x1="165" y1="165" x2="120" y2="120" stroke="#06b6d4" strokeWidth="1" opacity="0.4" strokeDasharray="3 3" />
                <line x1="165" y1="235" x2="120" y2="280" stroke="#3b82f6" strokeWidth="1" opacity="0.4" strokeDasharray="3 3" />
                
                {/* Floating Data Particles */}
                <circle cx="80" cy="150" r="3" fill="#06b6d4" opacity="0.6" />
                <circle cx="320" cy="150" r="3" fill="#3b82f6" opacity="0.6" />
                <circle cx="150" cy="80" r="2" fill="#06b6d4" opacity="0.4" />
                <circle cx="250" cy="80" r="2" fill="#3b82f6" opacity="0.4" />
                <circle cx="80" cy="280" r="2" fill="#06b6d4" opacity="0.4" />
                <circle cx="320" cy="280" r="3" fill="#3b82f6" opacity="0.5" />
                
                {/* Pulse Ring */}
                <circle cx="200" cy="200" r="60" fill="none" stroke="#06b6d4" strokeWidth="1" opacity="0.2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
