"use client";

import { Zap, CreditCard, MapPin, Bell, Headphones, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Load Shedding Resilient",
    description: "Designed for South African network conditions with offline order queuing and graceful degradation.",
  },
  {
    icon: CreditCard,
    title: "Local Payment Methods",
    description: "Cards, instant EFT, SnapScan, Zapper, and cash on delivery. We accept how you want to pay.",
  },
  {
    icon: MapPin,
    title: "Live GPS Tracking",
    description: "Watch your order move from kitchen to door with real-time updates powered by Google Maps.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Get push, SMS, and WhatsApp updates at every stage. Never wonder where your food is.",
  },
  {
    icon: Headphones,
    title: "Local Support Team",
    description: "Durban-based customer service team ready to help in English, isiZulu, and Afrikaans.",
  },
  {
    icon: BarChart3,
    title: "Transparent Pricing",
    description: "No hidden fees. See your delivery cost, service fee, and total before you confirm your order.",
  },
];

export default function Features() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-scootza-green/10 text-scootza-green text-sm font-bold rounded-full mb-4">
            BUILT FOR SOUTH AFRICA
          </span>
          <h2 className="section-title mb-6">
            Local context, <span className="text-scootza-green">global</span> standards
          </h2>
          <p className="section-subtitle">
            Every feature designed with the realities of delivery in Durban and
            beyond. From payment preferences to network conditions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-7 hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-scootza-green/10 rounded-xl flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-scootza-green" />
              </div>
              <h3 className="font-display text-xl font-bold text-scootza-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
