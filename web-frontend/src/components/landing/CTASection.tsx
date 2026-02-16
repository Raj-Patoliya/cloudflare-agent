import Link from 'next/link';

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900/30 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl -top-32 -right-32" />
        <div className="absolute w-72 h-72 rounded-full bg-blue-500/20 blur-3xl -bottom-32 -left-32" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Stop Managing Infrastructure.<br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Let AI Do It.
          </span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Deploy, monitor, and scale your infrastructure automatically with InfraMind's autonomous AI agents. No more sleepless nights managing deployments or firefighting infrastructure issues.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/register"
            className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-center"
          >
            Create Your Agent
          </Link>
          <Link
            href="#"
            className="px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300 text-center"
          >
            Ask About Enterprise
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-12 border-t border-gray-700/50">
          <p className="text-gray-400 text-sm mb-6">Trusted by DevOps teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-white font-semibold">AWS Partner</div>
            <div className="text-white font-semibold">Kubernetes Certified</div>
            <div className="text-white font-semibold">Cloudflare Partner</div>
          </div>
        </div>
      </div>
    </section>
  );
}
