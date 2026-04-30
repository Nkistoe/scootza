"use client";

import { Smartphone, Bike, Monitor, ArrowRight } from "lucide-react";

const tiers = [
  {
    icon: Smartphone,
    title: "Customer App",
    subtitle: "For hungry Durbanites",
    color: "bg-scootza-green",
    features: [
      "Browse hundreds of restaurants and stores",
      "Real-time GPS order tracking",
      "Multiple payment methods including cash",
      "Saved addresses and quick re-orders",
      "POPIA-compliant data protection",
    ],
  },
  {
    icon: Bike,
    title: "Driver App",
    subtitle: "For verified partners",
    color: "bg-scootza-dark",
    features: [
      "Smart order assignment by location",
      "Optimised navigation with traffic data",
      "Instant payment tracking and payouts",
      "Performance metrics and insights",
      "In-app communication with customers",
    ],
  },
  {
    icon: Monitor,
    title: "Admin Portal",
    subtitle: "For operations teams",
    color: "bg-scootza-green",
    features: [
      "Side-by-side biometric verification tool",
      "Real-time order and driver oversight",
      "Restaurant partner management",
      "Geographic heatmaps and analytics",
      "Dispute resolution workflows",
    ],
  },
];

export default function ThreeTier() {
  return (
    <section id="partners" className="py-24 lg:py-32 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-scootza-green/10 text-scootza-green text-sm font-bold rounded-full mb-4">
            ONE PLATFORM, THREE EXPERIENCES
          </span>
          <h2 className="section-title mb-6">
            Built for everyone who <span className="text-scootza-green">moves</span> with us
          </h2>
          <p className="section-subtitle">
            Customers, drivers, and operators each get purpose-built tools.
            Connected by a single safety-first ecosystem.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.title}
              className="group bg-white border-2 border-gray-100 rounded-3xl p-8 lg:p-10 hover:border-scootza-green hover:shadow-2xl hover:shadow-scootza-green/10 transition-all duration-300"
            >
              <div className={`w-16 h-16 ${tier.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <tier.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="font-display text-3xl font-bold text-scootza-dark mb-2">
                {tier.title}
              </h3>
              <p className="text-scootza-green font-semibold mb-6">
                {tier.subtitle}
              </p>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-scootza-green/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-scootza-green" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className="inline-flex items-center gap-2 text-scootza-dark font-semibold group-hover:text-scootza-green transition-colors">
                Learn more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
