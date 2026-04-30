"use client";

import { Search, ShoppingBag, MapPin, Smile } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Browse & Discover",
    description:
      "Explore Durban's best restaurants and stores. Search by cuisine, distance, or rating.",
  },
  {
    icon: ShoppingBag,
    number: "02",
    title: "Order Your Way",
    description:
      "Add items to cart, customise, and pay with cards, instant EFT, wallets, or cash on delivery.",
  },
  {
    icon: MapPin,
    number: "03",
    title: "Track in Real Time",
    description:
      "Watch your verified driver approach with live GPS tracking and accurate ETAs.",
  },
  {
    icon: Smile,
    number: "04",
    title: "Enjoy & Rate",
    description:
      "Receive your order at your door. Rate your experience and help us serve you better.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-scootza-green/10 text-scootza-green text-sm font-bold rounded-full mb-4">
            HOW IT WORKS
          </span>
          <h2 className="section-title mb-6">
            Four steps to your <span className="text-scootza-green">door</span>
          </h2>
          <p className="section-subtitle">
            Built for South African network conditions, payment preferences, and
            delivery realities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative group"
            >
              <div className="bg-white rounded-3xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-scootza-green/10 rounded-2xl flex items-center justify-center group-hover:bg-scootza-green group-hover:scale-110 transition-all duration-300">
                    <step.icon className="w-6 h-6 text-scootza-green group-hover:text-white" />
                  </div>
                  <span className="font-display text-4xl font-bold text-gray-200 group-hover:text-scootza-green/30 transition-colors">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-scootza-dark mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-scootza-green/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
