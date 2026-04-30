"use client";

import { ArrowRight, Apple, Smartphone } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="download" className="py-24 lg:py-32 bg-white">
      <div className="container-custom">
        <div className="relative bg-scootza-dark rounded-3xl lg:rounded-[40px] overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-scootza-green/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-scootza-green/10 rounded-full blur-3xl" />
          </div>

          <div className="relative p-10 md:p-16 lg:p-20 text-center text-white">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 max-w-3xl mx-auto">
              Ready to <span className="text-scootza-green">move</span> with us?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Download ScootZA today and experience Durban&apos;s safest, fastest
              delivery service. First order on us.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <button className="inline-flex items-center gap-3 px-7 py-4 bg-white text-scootza-dark rounded-2xl font-semibold transition-all hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-xl">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs text-gray-500">Download on the</div>
                  <div className="text-base font-bold">App Store</div>
                </div>
              </button>
              <button className="inline-flex items-center gap-3 px-7 py-4 bg-white text-scootza-dark rounded-2xl font-semibold transition-all hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-xl">
                <Smartphone className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs text-gray-500">Get it on</div>
                  <div className="text-base font-bold">Google Play</div>
                </div>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 border-t border-white/10">
              <p className="text-gray-400">Want to drive with us?</p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-scootza-green font-semibold hover:text-scootza-green-light transition-colors"
              >
                Apply to become a verified driver
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
