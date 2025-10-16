import React from 'react';
import { Leaf, Shield, TrendingUp, Coins, Lock, Vote, MapPin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CryptoInvestPage: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated mesh background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-sage-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '7s'}}></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-terra-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '9s', animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-earth-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '11s', animationDelay: '4s'}}></div>
      </div>

      {/* Grid overlay */}
      <div className="fixed inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              <Link to="/" className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                <Leaf className="w-8 h-8 text-sage-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-sage-400 via-terra-400 to-earth-400 bg-clip-text text-transparent">
                  Proyecto Salvaje
                </span>
              </Link>

              <div className="flex items-center gap-3">
                <Link
                  to="/"
                  className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all text-sm"
                >
                  ← Back to Main Site
                </Link>
                <a
                  href="https://wa.me/5219581171682"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 hover:shadow-lg hover:shadow-green-500/50 transition-all"
                  title="Contact us on WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </nav>

      {/* Hero Section */}
      <section className="relative">
        {/* Hero Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/property/property-screenshot-02.png"
            alt="Proyecto Salvaje Land"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
        </div>

        <div className="relative container mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-sage-700/50 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-white/10">
              <Leaf className="w-4 h-4 text-sage-300" />
              <span className="text-sm font-medium text-sage-100">ReFi • Land-Backed • DAO Governed</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="inline-block bg-gradient-to-r from-sage-400 via-terra-400 to-earth-400 bg-clip-text text-transparent" style={{
                backgroundSize: '200% auto',
                animation: 'gradient 3s linear infinite'
              }}>
                First Land-Backed ReFi DAO in Latin America
              </span>
            </h1>

            <p className="text-2xl md:text-3xl mb-8 text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Deploy capital into 12 acres of regenerative land in Mazunte, Oaxaca.
            </p>

            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Governed by TERRA token holders through Colony DAO on Arbitrum One.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button
                onClick={() => scrollToSection('tiers')}
                className="group px-8 py-4 bg-gradient-to-r from-sage-500 via-terra-500 to-sage-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-sage-500/50 transform hover:scale-105 transition-all flex items-center gap-3"
              >
                <Coins className="w-5 h-5" />
                <span>View Membership Tiers</span>
              </button>
              <button
                onClick={() => window.open('https://colony.io/@proyectosalvaje', '_blank')}
                className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all"
              >
                Explore DAO →
              </button>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-sage-500 to-terra-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                  <Leaf className="w-8 h-8 text-sage-400 mb-3 mx-auto" />
                  <div className="text-2xl font-bold text-white mb-1">12 acres</div>
                  <div className="text-sm text-gray-400">Regenerative Land</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-terra-500 to-earth-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                  <Coins className="w-8 h-8 text-terra-400 mb-3 mx-auto" />
                  <div className="text-2xl font-bold text-white mb-1">1M TERRA</div>
                  <div className="text-sm text-gray-400">Token Supply</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-earth-500 to-sage-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                  <TrendingUp className="w-8 h-8 text-earth-400 mb-3 mx-auto" />
                  <div className="text-2xl font-bold text-white mb-1">Arbitrum</div>
                  <div className="text-sm text-gray-400">Layer 2 Network</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-sage-500 to-terra-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                  <Lock className="w-8 h-8 text-sage-400 mb-3 mx-auto" />
                  <div className="text-2xl font-bold text-white mb-1">4 Tiers</div>
                  <div className="text-sm text-gray-400">NFT Memberships</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why ReFi Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Regenerative Finance?
            </h2>
            <p className="text-xl text-gray-400">
              Traditional investment meets ecological restoration through transparent DAO governance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-sage-500 to-terra-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative bg-zinc-900/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-sage-900/50 rounded-xl flex items-center justify-center mb-4 border border-sage-700/30">
                <Shield className="w-6 h-6 text-sage-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Land-Backed Security</h3>
              <p className="text-gray-400 leading-relaxed">
                Your investment is backed by 12 acres (5 hectares) of titled land in Mazunte, Oaxaca.
                Legal framework ensures transparent ownership through Mexican Ejido structure.
              </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-terra-500 to-earth-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative bg-zinc-900/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center mb-4 border border-blue-700/30">
                <Vote className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">DAO Governance</h3>
              <p className="text-gray-400 leading-relaxed">
                Colony DAO on Arbitrum One provides reputation-based governance.
                TERRA token holders vote on development decisions, budget allocation, and community proposals.
              </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-earth-500 to-sage-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative bg-zinc-900/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-emerald-900/50 rounded-xl flex items-center justify-center mb-4 border border-emerald-700/30">
                <Leaf className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Ecological Impact</h3>
              <p className="text-gray-400 leading-relaxed">
                100% regenerative development with permaculture design, forest restoration,
                water harvesting, and indigenous plant conservation. Verified impact metrics on-chain.
              </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-sage-500 to-terra-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative bg-zinc-900/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-purple-900/50 rounded-xl flex items-center justify-center mb-4 border border-purple-700/30">
                <TrendingUp className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Low Gas Costs</h3>
              <p className="text-gray-400 leading-relaxed">
                Built on Arbitrum One for minimal transaction fees.
                NFT minting, token transfers, and DAO voting cost pennies instead of $50-200 on Ethereum mainnet.
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section id="tiers" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              NFT Membership Tiers
            </h2>
            <p className="text-xl text-gray-400">
              Each tier is an NFT on Arbitrum One via Unlock Protocol.
              <br className="hidden md:block" />
              TERRA tokens automatically granted upon purchase.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Tier 1: Digital Supporter */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-sage-500 to-terra-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition"></div>
              <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10">
              <div className="bg-gradient-to-r from-sage-600 to-terra-600 p-6 text-white border-b border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Lock className="w-5 h-5" />
                  <span className="text-sm font-medium opacity-90">TIER 1</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">Digital Supporter</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">$50</span>
                  <span className="text-sage-100">USD</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-4 text-sage-400">
                  <Coins className="w-5 h-5" />
                  <span className="font-bold text-lg">50 TERRA tokens</span>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-sage-400 rounded-full mt-2"></div>
                    <span className="text-gray-300">Discord community access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-sage-400 rounded-full mt-2"></div>
                    <span className="text-gray-300">Monthly development updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-sage-400 rounded-full mt-2"></div>
                    <span className="text-gray-300">Vote on minor proposals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-sage-400 rounded-full mt-2"></div>
                    <span className="text-gray-300">Digital community badge NFT</span>
                  </li>
                </ul>

                <button
                  className="w-full bg-gradient-to-r from-sage-600 to-terra-600 hover:from-sage-500 hover:to-terra-500 px-6 py-3 rounded-lg font-semibold text-white transition-all shadow-lg hover:shadow-sage-500/50"
                  onClick={() => window.open('https://app.unlock-protocol.com/checkout', '_blank')}
                >
                  Purchase with Crypto
                </button>
                <p className="text-xs text-gray-500 text-center mt-2">
                  Credit card available • 2-3% fees
                </p>
              </div>
              </div>
            </div>

            {/* Tier 2: Community Member */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-terra-500 to-earth-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition"></div>
              <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-2xl overflow-hidden border-2 border-terra-500/50">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full z-10">
                POPULAR
              </div>
              <div className="bg-gradient-to-r from-terra-600 to-earth-600 p-6 text-white border-b border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Lock className="w-5 h-5" />
                  <span className="text-sm font-medium opacity-90">TIER 2</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">Community Member</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">$250-500</span>
                  <span className="text-terra-100">USD</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-4 text-terra-400">
                  <Coins className="w-5 h-5" />
                  <span className="font-bold text-lg">250-500 TERRA tokens</span>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-terra-400 rounded-full mt-2"></div>
                    <span className="text-gray-300">All Digital Supporter benefits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-terra-400 rounded-full mt-2"></div>
                    <span className="text-gray-300">Vote on major proposals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-terra-400 rounded-full mt-2"></div>
                    <span className="text-gray-300">Quarterly video calls with founders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-terra-400 rounded-full mt-2"></div>
                    <span className="text-gray-300">15% discount on retreats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-terra-400 rounded-full mt-2"></div>
                    <span className="text-gray-300">Name on community wall</span>
                  </li>
                </ul>

                <button
                  className="w-full bg-gradient-to-r from-terra-600 to-earth-600 hover:from-terra-500 hover:to-earth-500 px-6 py-3 rounded-lg font-semibold text-white transition-all shadow-lg hover:shadow-terra-500/50"
                  onClick={() => window.open('https://app.unlock-protocol.com/checkout', '_blank')}
                >
                  Purchase with Crypto
                </button>
                <p className="text-xs text-gray-500 text-center mt-2">
                  Credit card available • 2-3% fees
                </p>
              </div>
              </div>
            </div>

            {/* Tier 3: Land Partner */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-earth-500 to-sage-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition"></div>
              <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-2xl overflow-hidden border-2 border-purple-500/50">
              <div className="bg-gradient-to-r from-purple-700 to-indigo-700 p-6 text-white border-b border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm font-medium opacity-90">TIER 3</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">Land Partner</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">$55K</span>
                  <span className="text-purple-100">USD</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-4 text-purple-400">
                  <Coins className="w-5 h-5" />
                  <span className="font-bold text-lg">10,000 TERRA tokens</span>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2"></div>
                    <span className="text-gray-300">All Community Member benefits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2"></div>
                    <span className="text-white font-semibold">Co-ownership of 1 plot (600m²)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2"></div>
                    <span className="text-gray-300">Build rights for eco-cabin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2"></div>
                    <span className="text-gray-300">30% revenue share from plot rentals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2"></div>
                    <span className="text-gray-300">Unlimited retreat access</span>
                  </li>
                </ul>

                <button
                  className="w-full bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 px-6 py-3 rounded-lg font-semibold text-white transition-all shadow-lg hover:shadow-purple-500/50"
                  onClick={() => window.open('https://app.unlock-protocol.com/checkout', '_blank')}
                >
                  Purchase with Crypto
                </button>
                <p className="text-xs text-gray-500 text-center mt-2">
                  Crypto only • Contact for bank transfer option
                </p>
              </div>
              </div>
            </div>

            {/* Tier 4: Founding Steward */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-2xl blur opacity-40 group-hover:opacity-60 transition"></div>
              <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-2xl overflow-hidden border-2 border-yellow-500/50">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full z-10 shadow-lg">
                FOUNDER
              </div>
              <div className="bg-gradient-to-r from-yellow-700 via-orange-700 to-red-700 p-6 text-white border-b border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm font-medium opacity-90">TIER 4</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">Founding Steward</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">$85K</span>
                  <span className="text-orange-100">USD</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-4 text-orange-400">
                  <Coins className="w-5 h-5" />
                  <span className="font-bold text-lg">50,000 TERRA tokens</span>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                    <span className="text-gray-300">All Land Partner benefits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                    <span className="text-white font-semibold">Full ownership of 1 plot (600m²)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                    <span className="text-white font-semibold">Seat on Founders Council</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                    <span className="text-gray-300">Veto power on major decisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                    <span className="text-gray-300">50% revenue share from plot rentals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                    <span className="text-gray-300">Permanent residency rights</span>
                  </li>
                </ul>

                <button
                  className="w-full bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 hover:from-yellow-500 hover:via-orange-500 hover:to-red-500 px-6 py-3 rounded-lg font-semibold text-white transition-all shadow-lg hover:shadow-orange-500/50"
                  onClick={() => window.open('https://app.unlock-protocol.com/checkout', '_blank')}
                >
                  Purchase with Crypto
                </button>
                <p className="text-xs text-gray-500 text-center mt-2">
                  Crypto only • Contact for bank transfer option
                </p>
              </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400">
              All NFTs minted on Arbitrum One • View locks on{' '}
              <a
                href="https://app.unlock-protocol.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage-400 hover:text-sage-300 font-medium underline"
              >
                Unlock Protocol
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* TERRA Tokenomics */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-sage-900/50 text-sage-300 px-4 py-2 rounded-full mb-4 border border-sage-700/30">
                <Coins className="w-4 h-4" />
                <span className="text-sm font-medium">ERC-20 • Arbitrum One</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                TERRA Token Economics
              </h2>
              <p className="text-xl text-gray-400">
                Fixed supply of 1,000,000 TERRA tokens distributed across membership tiers
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-sage-500 to-terra-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                  <div className="text-3xl font-bold text-sage-400 mb-2">1,000,000</div>
                  <div className="text-sm text-gray-300 font-medium">Total Supply</div>
                  <div className="text-xs text-gray-500 mt-1">Fixed • No inflation</div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-terra-500 to-earth-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                  <div className="text-3xl font-bold text-terra-400 mb-2">Colony</div>
                  <div className="text-sm text-gray-300 font-medium">Governance Platform</div>
                  <div className="text-xs text-gray-500 mt-1">Reputation-based voting</div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-earth-500 to-sage-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                  <div className="text-3xl font-bold text-earth-400 mb-2">Arbitrum</div>
                  <div className="text-sm text-gray-300 font-medium">Network</div>
                  <div className="text-xs text-gray-500 mt-1">Low gas • Fast finality</div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-sage-500 via-terra-500 to-earth-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl shadow-lg p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Token Distribution</h3>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">NFT Tier Allocations</span>
                    <span className="text-white font-bold">400,000 TERRA (40%)</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-3">
                    <div className="bg-sage-500 h-3 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Distributed automatically to NFT purchasers via Unlock Protocol
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">DAO Treasury</span>
                    <span className="text-white font-bold">300,000 TERRA (30%)</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-3">
                    <div className="bg-terra-500 h-3 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Controlled by Colony DAO for development, grants, and operations
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">Founding Team</span>
                    <span className="text-white font-bold">150,000 TERRA (15%)</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-3">
                    <div className="bg-purple-500 h-3 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    2-year vesting schedule • Cliff after 6 months
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">Community Rewards</span>
                    <span className="text-white font-bold">100,000 TERRA (10%)</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-3">
                    <div className="bg-earth-500 h-3 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Incentives for contributors, developers, and ecosystem growth
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">Liquidity Pool</span>
                    <span className="text-white font-bold">50,000 TERRA (5%)</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-3">
                    <div className="bg-orange-500 h-3 rounded-full" style={{ width: '5%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Initial liquidity on Uniswap V3 (Arbitrum) paired with ETH
                  </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Colony DAO Governance */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-900/50 text-blue-300 px-4 py-2 rounded-full mb-4 border border-blue-700/30">
                <Vote className="w-4 h-4" />
                <span className="text-sm font-medium">Decentralized Governance</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Governed by Colony DAO
              </h2>
              <p className="text-xl text-gray-400">
                Every TERRA holder has a voice. Decisions made transparently through on-chain voting.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-sage-500 to-terra-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">How Colony Works</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-sage-900/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-sage-700/30">
                      <span className="text-sage-300 text-xs font-bold">1</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Reputation System</div>
                      <div className="text-sm text-gray-400">TERRA tokens grant voting power, but reputation is earned through contributions</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-sage-900/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-sage-700/30">
                      <span className="text-sage-300 text-xs font-bold">2</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Lazy Consensus</div>
                      <div className="text-sm text-gray-400">Proposals pass automatically unless objections are raised</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-sage-900/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-sage-700/30">
                      <span className="text-sage-300 text-xs font-bold">3</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Hierarchical Domains</div>
                      <div className="text-sm text-gray-400">Specialized teams (Land, Community, Treasury) with delegated authority</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-sage-900/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-sage-700/30">
                      <span className="text-sage-300 text-xs font-bold">4</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">On-Chain Execution</div>
                      <div className="text-sm text-gray-400">Passed proposals execute automatically via smart contracts</div>
                    </div>
                  </li>
                </ul>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-terra-500 to-earth-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">What You Can Vote On</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-terra-400 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-white">Development Decisions</div>
                      <div className="text-sm text-gray-400">Infrastructure projects, building permits, land use changes</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-terra-400 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-white">Budget Allocation</div>
                      <div className="text-sm text-gray-400">Treasury spending, grants, operational expenses</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-terra-400 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-white">Community Proposals</div>
                      <div className="text-sm text-gray-400">Events, programs, partnerships, new member applications</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-terra-400 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-white">Protocol Changes</div>
                      <div className="text-sm text-gray-400">Governance rules, tokenomics adjustments, major pivots</div>
                    </div>
                  </li>
                </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                className="bg-gradient-to-r from-terra-600 to-earth-600 hover:from-terra-500 hover:to-earth-500 px-8 py-4 rounded-xl font-semibold text-white transition-all shadow-lg hover:shadow-terra-500/50"
                onClick={() => window.open('https://colony.io/@proyectosalvaje', '_blank')}
              >
                View Colony Dashboard →
              </button>
              <p className="text-sm text-gray-500 mt-3">
                See live proposals, voting history, and treasury balance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Assets */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                The Land
              </h2>
              <p className="text-xl text-gray-400">
                12 acres of titled land in Mazunte, Oaxaca's most biodiverse coastal region
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-sage-500 to-terra-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Property Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-gray-400">Total Area</span>
                    <span className="font-bold text-white">12 acres (5 hectares)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-gray-400">Location</span>
                    <span className="font-bold text-white">Mazunte, Oaxaca</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-gray-400">Elevation</span>
                    <span className="font-bold text-white">50-150m above sea</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-gray-400">Ocean View</span>
                    <span className="font-bold text-white">Pacific panorama</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-gray-400">Plots</span>
                    <span className="font-bold text-white">20 plots × 600m² each</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-gray-400">Legal Status</span>
                    <span className="font-bold text-white">Titled via Ejido</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-400">Zoning</span>
                    <span className="font-bold text-white">Eco-residential</span>
                  </div>
                </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-terra-500 to-earth-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Natural Assets</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Leaf className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">Primary Forest</div>
                      <div className="text-sm text-gray-400">60% old-growth tropical deciduous forest</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Leaf className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">Water Sources</div>
                      <div className="text-sm text-gray-400">2 natural springs + seasonal creek</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Leaf className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">Biodiversity</div>
                      <div className="text-sm text-gray-400">200+ plant species, endemic wildlife</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Leaf className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">Fruit Trees</div>
                      <div className="text-sm text-gray-400">Mango, papaya, coconut, guanabana</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Leaf className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">Soil Quality</div>
                      <div className="text-sm text-gray-400">Rich clay-loam ideal for permaculture</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Leaf className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">Climate</div>
                      <div className="text-sm text-gray-400">Tropical: 24-32°C year-round</div>
                    </div>
                  </li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Crypto Investor FAQs
            </h2>

            <div className="space-y-6">
              <details className="bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-white/10 p-6 group hover:border-sage-500/30 transition-all">
                <summary className="text-lg font-bold text-white cursor-pointer list-none flex items-center justify-between">
                  <span>Why Arbitrum One instead of Ethereum mainnet?</span>
                  <span className="text-gray-400 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-400 mt-4 leading-relaxed">
                  Gas fees on Ethereum mainnet would cost $50-200 per transaction (minting NFT, voting, token transfers).
                  On Arbitrum One, these same operations cost $0.10-0.50. For a membership community with frequent governance
                  activity, this makes participation affordable for all members, not just whales.
                </p>
              </details>

              <details className="bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-white/10 p-6 group hover:border-sage-500/30 transition-all">
                <summary className="text-lg font-bold text-white cursor-pointer list-none flex items-center justify-between">
                  <span>Why Colony over Snapshot or Moloch?</span>
                  <span className="text-gray-400 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-400 mt-4 leading-relaxed">
                  Snapshot is off-chain (no execution), Moloch requires full quorum for every decision (slow).
                  Colony uses lazy consensus (proposals pass unless objected) with on-chain execution. Perfect for
                  operational communities that need to move fast while staying decentralized. Plus hierarchical domains
                  let us delegate authority to specialized teams (Land, Treasury, Community) without bottlenecks.
                </p>
              </details>

              <details className="bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-white/10 p-6 group hover:border-sage-500/30 transition-all">
                <summary className="text-lg font-bold text-white cursor-pointer list-none flex items-center justify-between">
                  <span>What's the legal structure for land ownership?</span>
                  <span className="text-gray-400 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-400 mt-4 leading-relaxed">
                  Mexican Ejido system allows collective land ownership. The DAO (Colony smart contract) holds the legal
                  entity that owns the Ejido title. Individual plot rights are granted through governance votes to
                  Tier 3/4 NFT holders. Legal framework reviewed by Oaxaca land attorneys. Full documentation available
                  to TERRA holders via Colony files domain.
                </p>
              </details>

              <details className="bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-white/10 p-6 group hover:border-sage-500/30 transition-all">
                <summary className="text-lg font-bold text-white cursor-pointer list-none flex items-center justify-between">
                  <span>How is TERRA token distribution enforced?</span>
                  <span className="text-gray-400 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-400 mt-4 leading-relaxed">
                  Unlock Protocol hooks trigger automatic TERRA distribution via Colony payment system. When you purchase
                  an NFT, the hook calls our distribution contract which mints/transfers TERRA from treasury to your wallet.
                  All code is open-source and auditable on-chain. No manual processes, no trust required.
                </p>
              </details>

              <details className="bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-white/10 p-6 group hover:border-sage-500/30 transition-all">
                <summary className="text-lg font-bold text-white cursor-pointer list-none flex items-center justify-between">
                  <span>What's the exit strategy or liquidity plan?</span>
                  <span className="text-gray-400 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-400 mt-4 leading-relaxed">
                  TERRA tokens are liquid on Uniswap V3 (Arbitrum) paired with ETH. NFTs are transferable on OpenSea.
                  For Tier 3/4 land partners, plot ownership can be transferred via DAO vote (requires 60% approval).
                  The land itself appreciates ~8-12% annually in Mazunte. Long-term vision: fractional land NFTs
                  tradeable on secondary markets (Phase 2, 2026+).
                </p>
              </details>

              <details className="bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-white/10 p-6 group hover:border-sage-500/30 transition-all">
                <summary className="text-lg font-bold text-white cursor-pointer list-none flex items-center justify-between">
                  <span>What prevents the team from rugging?</span>
                  <span className="text-gray-400 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-400 mt-4 leading-relaxed">
                  Team tokens vest over 2 years with 6-month cliff (smart contract enforced). Treasury is controlled by
                  DAO multisig requiring 3/5 signatures from elected stewards. Major decisions require 60% TERRA holder
                  approval. Land title is held by legal entity controlled by DAO, not individuals. All transactions
                  transparent on-chain. We're building for decades, not an exit.
                </p>
              </details>

              <details className="bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-white/10 p-6 group hover:border-sage-500/30 transition-all">
                <summary className="text-lg font-bold text-white cursor-pointer list-none flex items-center justify-between">
                  <span>Can I visit the land before investing?</span>
                  <span className="text-gray-400 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-400 mt-4 leading-relaxed">
                  Absolutely. We host monthly open houses in Mazunte (first Saturday of each month). Book via Discord.
                  For serious investors (Tier 3/4), we offer private tours with founders and can arrange legal consultations
                  with our Oaxaca attorneys. Video tours and drone footage available on request. We want you to see exactly
                  what you're investing in.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sage-900 via-terra-900 to-earth-900 text-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Deploy Capital into Regenerative Land?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the first land-backed ReFi DAO in Latin America.
              <br />
              Built on Arbitrum One. Governed by TERRA holders.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                className="group px-8 py-4 bg-gradient-to-r from-sage-500 via-terra-500 to-sage-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-sage-500/50 transform hover:scale-105 transition-all min-w-[220px]"
                onClick={() => scrollToSection('tiers')}
              >
                Purchase Membership NFT
              </button>
              <button
                className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all min-w-[220px]"
                onClick={() => window.open('https://colony.io/@proyectosalvaje', '_blank')}
              >
                Explore Colony DAO →
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-sage-300">
              <a
                href="https://discord.gg/proyectosalvaje"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Join Discord
              </a>
              <span className="text-sage-600">•</span>
              <a
                href="https://github.com/proyectosalvaje"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                View Code on GitHub
              </a>
              <span className="text-sage-600">•</span>
              <a
                href="https://app.unlock-protocol.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Unlock Protocol Locks
              </a>
              <span className="text-sage-600">•</span>
              <a
                href="mailto:invest@proyectosalvaje.org"
                className="hover:text-white transition-colors"
              >
                Contact Team
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                Smart contracts deployed on Arbitrum One • TERRA token: [contract address] • Colony: @proyectosalvaje
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default CryptoInvestPage;
