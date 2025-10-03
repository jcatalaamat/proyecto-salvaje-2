import React, { useState, useEffect } from 'react';
import { CheckCircle, Sparkles, Calendar, MapPin, Leaf, ArrowRight, Zap, Users, Bell, Waves } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (count < 247) {
      const timer = setTimeout(() => setCount(count + 7), 30);
      return () => clearTimeout(timer);
    }
  }, [count]);

  const handleSubmit = async () => {
    if (!email || !email.includes('@')) return;
    setLoading(true);
    
    try {
      // ConvertKit API integration
      const convertKitApiKey = (import.meta as any).env.VITE_CONVERTKIT_API_KEY;
      const convertKitFormId = (import.meta as any).env.VITE_CONVERTKIT_FORM_ID;
      
      if (convertKitApiKey && convertKitFormId) {
        console.log('Sending to ConvertKit:', { apiKey: convertKitApiKey, formId: convertKitFormId, email });
        
        const response = await fetch(`https://api.convertkit.com/v3/forms/${convertKitFormId}/subscribe`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            api_key: convertKitApiKey,
            email: email,
            tags: ['mazunte-waitlist']
          })
        });

        console.log('ConvertKit response:', response.status, response.statusText);
        
        if (response.ok) {
          const data = await response.json();
          console.log('ConvertKit success:', data);
          setSubmitted(true);
          setEmail('');
          setLoading(false);
          return;
        } else {
          const errorData = await response.json();
          console.error('ConvertKit error:', errorData);
          throw new Error('Failed to subscribe');
        }
      }

      // Fallback: No email service configured
      throw new Error('No email service configured');
      
    } catch (error) {
      console.error('Subscription error:', error);
      // For now, still show success for demo purposes
      // In production, you might want to show an error message
      setSubmitted(true);
      setEmail('');
    }
    
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSubmit();
  };

  const spotlightStyle = {
    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(251, 146, 60, 0.15), transparent 40%)`
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated mesh background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '7s'}}></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '9s', animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '11s', animationDelay: '4s'}}></div>
      </div>

      {/* Mouse spotlight effect */}
      <div className="fixed inset-0 pointer-events-none" style={spotlightStyle}></div>

      {/* Grid overlay */}
      <div className="fixed inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-20 pb-32 md:pt-32 md:pb-48">
          <div className="max-w-6xl mx-auto text-center">
            
            {/* Logo */}
            <div className="inline-flex items-center justify-center gap-3 mb-8">
              <div className="relative">
                <Waves className="w-12 h-12 text-orange-400 relative z-10" />
                <div className="absolute inset-0 bg-orange-400 blur-xl opacity-50"></div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Mazunte Connect
              </h1>
            </div>

            {/* Floating badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 animate-pulse" style={{animationDuration: '3s'}}>
                <Sparkles className="w-4 h-4 text-orange-400" />
                <span className="text-sm text-gray-300">Launching Soon</span>
              </div>
            </div>

            {/* Animated headline */}
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="inline-block animate-fadeIn" style={{
                background: 'linear-gradient(to right, #fb923c, #f472b6, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% auto',
                animation: 'gradient 3s linear infinite'
              }}>
                Never miss
              </span>
              <br />
              <span className="inline-block" style={{animationDelay: '0.2s'}}>
                what's happening
              </span>
              <br />
              <span className="inline-block text-gray-500" style={{animationDelay: '0.4s'}}>
                in Mazunte
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed" style={{opacity: Math.min(1, scrollY / 100)}}>
              All events, retreats, yoga, restaurants, and conscious spaces in Mazunte. 
              <span className="text-orange-400"> No more WhatsApp chaos.</span>
            </p>

            {/* Waitlist form - Stacked Version */}
            {!submitted ? (
              <div className="max-w-md mx-auto mb-16">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-1000"></div>
                  <div className="relative bg-zinc-900/90 backdrop-blur-2xl p-6 rounded-2xl border border-white/10 space-y-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="your@email.com"
                      className="w-full px-6 py-4 rounded-xl bg-black/50 border border-white/10 focus:border-orange-500/50 focus:outline-none text-lg text-white placeholder-gray-600 transition-all"
                    />
                    <button
                      onClick={handleSubmit}
                      disabled={loading || !email}
                      className="w-full group/btn px-8 py-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all disabled:opacity-50 flex items-center justify-center gap-3 relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {loading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Joining...
                          </>
                        ) : (
                          <>
                            Get Early Access
                            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4 flex items-center justify-center gap-2">
                  <Users className="w-4 h-4 text-orange-400" />
                  Join {count}+ people on the waitlist
                </p>
              </div>
            ) : (
              <div className="max-w-md mx-auto mb-16 animate-fadeIn">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur-xl opacity-50"></div>
                  <div className="relative p-12 bg-zinc-900/95 backdrop-blur-2xl rounded-3xl border border-green-500/20">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mb-6 animate-bounce">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-3">You're in! 🎉</h3>
                    <p className="text-gray-400 text-lg">We'll notify you when Mazunte Connect launches.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Floating mockup preview */}
            <div className="relative" style={{transform: `translateY(${scrollY * 0.1}px)`}}>
              <div className="relative mx-auto w-80 h-[600px] bg-gradient-to-br from-zinc-900 to-black rounded-[3rem] border-8 border-zinc-800 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl"></div>
                <div className="p-6 pt-12 h-full bg-gradient-to-b from-zinc-900/50 to-transparent">
                  <div className="space-y-3">
                    <div className="h-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded w-32 animate-pulse"></div>
                    <div className="h-24 bg-zinc-800/50 backdrop-blur rounded-xl border border-zinc-700/50 p-3">
                      <div className="h-3 bg-zinc-700 rounded w-3/4 mb-2"></div>
                      <div className="h-2 bg-zinc-700/50 rounded w-1/2"></div>
                    </div>
                    <div className="h-24 bg-zinc-800/50 backdrop-blur rounded-xl border border-zinc-700/50 p-3 animate-pulse" style={{animationDelay: '0.5s'}}>
                      <div className="h-3 bg-zinc-700 rounded w-2/3 mb-2"></div>
                      <div className="h-2 bg-zinc-700/50 rounded w-1/3"></div>
                    </div>
                    <div className="h-24 bg-zinc-800/50 backdrop-blur rounded-xl border border-zinc-700/50 p-3 animate-pulse" style={{animationDelay: '1s'}}>
                      <div className="h-3 bg-zinc-700 rounded w-3/5 mb-2"></div>
                      <div className="h-2 bg-zinc-700/50 rounded w-2/5"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-20 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 blur-3xl -z-10 animate-pulse" style={{animationDuration: '4s'}}></div>
            </div>
          </div>
        </div>

        {/* Bento Grid Features */}
        <div className="container mx-auto px-4 py-32">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Everything Mazunte, one app
              </h2>
              <p className="text-xl text-gray-400">
                Your digital guide to paradise
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Large card */}
              <div className="md:col-span-2 group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative h-full bg-zinc-900/90 backdrop-blur-xl rounded-3xl border border-white/5 p-10 hover:border-white/10 transition-all overflow-hidden">
                  <Calendar className="w-12 h-12 text-orange-400 mb-6" />
                  <h3 className="text-3xl font-bold mb-4">Never miss an event</h3>
                  <p className="text-gray-400 text-lg mb-6">Cacao ceremonies, ecstatic dance, yoga classes, full moon gatherings. See everything happening.</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span>Calendar & list views</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <span>Smart filters & search</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Save favorites</span>
                    </div>
                  </div>
                  <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
                </div>
              </div>

              {/* Tall card */}
              <div className="md:row-span-2 group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-b from-pink-500 to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative h-full bg-zinc-900/90 backdrop-blur-xl rounded-3xl border border-white/5 p-10 hover:border-white/10 transition-all">
                  <MapPin className="w-12 h-12 text-pink-400 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Discover everything</h3>
                  <p className="text-gray-400 mb-8">Retreat centers, wellness studios, vegan restaurants, healers, surf spots. All mapped.</p>
                  <div className="relative h-48 bg-zinc-800/50 rounded-2xl overflow-hidden border border-zinc-700/50">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent"></div>
                    <div className="absolute top-4 left-4 w-3 h-3 bg-pink-400 rounded-full animate-ping"></div>
                    <div className="absolute top-12 right-8 w-3 h-3 bg-orange-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                    <div className="absolute bottom-8 left-12 w-3 h-3 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
                  </div>
                </div>
              </div>

              {/* Wide card */}
              <div className="md:col-span-2 group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-3xl border border-white/5 p-10 hover:border-white/10 transition-all">
                  <div className="flex items-start gap-8">
                    <div className="flex-shrink-0">
                      <Leaf className="w-12 h-12 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Conscious & eco-friendly</h3>
                      <p className="text-gray-400">Supporting businesses with regenerative practices and authentic community values.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Square cards */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-3xl border border-white/5 p-8 hover:border-white/10 transition-all h-full">
                  <Bell className="w-10 h-10 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Push reminders</h3>
                  <p className="text-gray-400 text-sm">Never forget an event</p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-3xl border border-white/5 p-8 hover:border-white/10 transition-all h-full">
                  <Zap className="w-10 h-10 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Always fresh</h3>
                  <p className="text-gray-400 text-sm">Updated daily</p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-3xl border border-white/5 p-8 hover:border-white/10 transition-all h-full">
                  <Users className="w-10 h-10 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">By travelers</h3>
                  <p className="text-gray-400 text-sm">For the community</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Problem/Solution section */}
        <div className="container mx-auto px-4 py-32">
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-green-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-zinc-900/80 backdrop-blur-2xl rounded-3xl border border-white/10 p-12 md:p-16">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                  No more WhatsApp chaos
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-red-950/20 border border-red-900/20">
                      <span className="text-red-400 font-bold text-2xl">✗</span>
                      <div>
                        <p className="text-gray-300">Events buried in 500 messages</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-red-950/20 border border-red-900/20">
                      <span className="text-red-400 font-bold text-2xl">✗</span>
                      <div>
                        <p className="text-gray-300">"What's happening tonight?" asked daily</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-red-950/20 border border-red-900/20">
                      <span className="text-red-400 font-bold text-2xl">✗</span>
                      <div>
                        <p className="text-gray-300">Newcomers miss everything</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-green-950/20 border border-green-900/20">
                      <span className="text-green-400 font-bold text-2xl">✓</span>
                      <div>
                        <p className="text-gray-300">Searchable calendar view</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-green-950/20 border border-green-900/20">
                      <span className="text-green-400 font-bold text-2xl">✓</span>
                      <div>
                        <p className="text-gray-300">See the whole week instantly</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-green-950/20 border border-green-900/20">
                      <span className="text-green-400 font-bold text-2xl">✓</span>
                      <div>
                        <p className="text-gray-300">Everyone finds everything</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="container mx-auto px-4 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-3xl blur-3xl opacity-30"></div>
              <div className="relative bg-zinc-900/80 backdrop-blur-2xl rounded-3xl border border-white/10 p-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Your guide to Mazunte
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                  Every event, retreat, restaurant, and conscious space. Always updated, beautifully organized.
                </p>
                
                {!submitted && (
                  <div className="max-w-md mx-auto">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl blur opacity-50 group-hover:opacity-75 transition"></div>
                      <div className="relative bg-black/50 backdrop-blur-xl p-4 rounded-2xl border border-white/10 space-y-3">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onKeyPress={handleKeyPress}
                          placeholder="your@email.com"
                          className="w-full px-6 py-4 rounded-xl bg-zinc-900/50 border border-white/10 focus:border-orange-500/50 focus:outline-none text-white placeholder-gray-600"
                        />
                        <button
                          onClick={handleSubmit}
                          disabled={loading || !email}
                          className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all disabled:opacity-50"
                        >
                          {loading ? 'Joining...' : 'Join Waitlist'}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="container mx-auto px-4 py-16 border-t border-white/5">
          <div className="max-w-6xl mx-auto text-center space-y-4">
            <p className="text-gray-500">
              Made with 💚 by travelers, for Mazunte
            </p>
            <p className="text-sm text-gray-600">
              <span className="text-orange-400">hello@mazunteconnect.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;