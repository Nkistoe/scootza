"use client";

import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-scootza-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-scootza-green/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-8 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-scootza-green/10 border border-scootza-green/20 rounded-full">
            <ShieldCheck className="w-4 h-4 text-scootza-green" />
            <span className="text-sm font-semibold text-scootza-green">
              Biometric-Verified Delivery
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-scootza-dark leading-[1.05] tracking-tight">
            We Move
            <br />
            <span className="text-scootza-green">So You Don&apos;t</span>
            <br />
            Have To.
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
            Durban&apos;s safety-first food and store delivery service. Verified
            drivers, real-time tracking, and biometric protection on every
            order.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#download" className="btn-primary group">
              Order Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#partners" className="btn-secondary">
              Become a Driver
            </Link>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-3 border-white bg-gradient-to-br from-scootza-green to-scootza-green-dark flex items-center justify-center text-white font-bold text-sm"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-scootza-green text-scootza-green"
                  />
                ))}
                <span className="ml-2 text-sm font-bold text-scootza-dark">
                  4.9
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Trusted by 10,000+ Durbanites
              </p>
            </div>
          </div>
        </div>

        {/* Phone mockup */}
        <div className="relative flex justify-center lg:justify-end animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-scootza-green/20 rounded-[60px] blur-2xl scale-95" />
            <div className="relative w-[320px] h-[640px] bg-scootza-dark rounded-[50px] p-3 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[40px] overflow-hidden relative">
                {/* Status bar */}
                <div className="h-10 bg-white flex items-center justify-between px-6 text-xs font-semibold">
                  <span>9:41</span>
                  <span>•••</span>
                </div>

                {/* App content */}
                <div className="px-5 pt-2">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-xs text-gray-500">Deliver to</p>
                      <p className="font-bold text-scootza-dark">
                        Morningside, Durban
                      </p>
                    </div>
                    <div className="px-3 py-1 bg-scootza-green/10 rounded-full">
                      <span className="text-xs font-semibold text-scootza-green">
                        ✓ Verified
                      </span>
                    </div>
                  </div>

                  <div className="bg-gray-100 rounded-2xl p-3 mb-4 flex items-center gap-2">
                    <div className="w-5 h-5 bg-scootza-green rounded-full" />
                    <span className="text-sm text-gray-500">
                      Search restaurants
                    </span>
                  </div>

                  <div className="bg-gradient-to-br from-scootza-green to-scootza-green-dark rounded-2xl p-5 mb-4 text-white">
                    <span className="inline-block px-2 py-0.5 bg-white/20 rounded-full text-xs font-bold mb-2">
                      FREE DELIVERY
                    </span>
                    <h3 className="font-display font-bold text-lg leading-tight mb-1">
                      First Order Special
                    </h3>
                    <p className="text-sm opacity-90 mb-3">
                      R50 off orders over R150
                    </p>
                    <button className="px-4 py-1.5 bg-white text-scootza-green rounded-lg text-xs font-bold">
                      Order Now
                    </button>
                  </div>

                  <h4 className="font-display font-bold text-base mb-3">
                    Popular Near You
                  </h4>

                  <div className="space-y-3">
                    {[
                      { name: "The Curry House", rating: "4.8", time: "25-35", tag: "Halaal" },
                      { name: "Ocean Basket", rating: "4.6", time: "30-40", tag: "Seafood" },
                    ].map((restaurant) => (
                      <div
                        key={restaurant.name}
                        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                      >
                        <div className="h-20 bg-gradient-to-br from-orange-200 to-orange-300 relative">
                          <span className="absolute top-2 left-2 px-2 py-0.5 bg-scootza-green text-white text-xs font-bold rounded-full">
                            25% OFF
                          </span>
                        </div>
                        <div className="p-3">
                          <h5 className="font-bold text-sm text-scootza-dark">
                            {restaurant.name}
                          </h5>
                          <div className="flex items-center gap-2 text-xs text-gray-600 mt-1">
                            <span className="text-scootza-green font-semibold">
                              ★ {restaurant.rating}
                            </span>
                            <span>•</span>
                            <span>{restaurant.time} min</span>
                            <span>•</span>
                            <span>{restaurant.tag}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating verification badge */}
            <div className="absolute -left-8 top-32 bg-white rounded-2xl shadow-xl p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-scootza-green/10 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-scootza-green" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">ID Verified</p>
                  <p className="text-sm font-bold text-scootza-dark">
                    Welcome, Mthunzi
                  </p>
                </div>
              </div>
            </div>

            {/* Floating order status */}
            <div className="absolute -right-4 bottom-24 bg-white rounded-2xl shadow-xl p-4 animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-scootza-green rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🛵</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Arriving in</p>
                  <p className="text-sm font-bold text-scootza-dark">
                    12 minutes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
