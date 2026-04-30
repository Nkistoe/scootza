"use client";

import { ShieldCheck, ScanFace, FileCheck, Lock } from "lucide-react";

const safetyFeatures = [
  {
    icon: FileCheck,
    title: "Document Vault",
    description:
      "Every driver and customer uploads government-issued identification before activation. Reviewed and verified by our admin team.",
  },
  {
    icon: ScanFace,
    title: "Live Biometric Sync",
    description:
      "Real-time selfie capture matched against ID documents. Anti-spoofing technology prevents fraud at every checkpoint.",
  },
  {
    icon: ShieldCheck,
    title: "Active Safety Gate",
    description:
      "Quick selfie verification before placing orders and accepting deliveries. We confirm it's really you, every time.",
  },
  {
    icon: Lock,
    title: "POPIA Compliant",
    description:
      "Your data is encrypted, consent-based, and protected under South African privacy regulations. Always.",
  },
];

export default function Safety() {
  return (
    <section id="safety" className="py-24 lg:py-32 bg-scootza-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-scootza-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-scootza-green/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-scootza-green text-white text-sm font-bold rounded-full mb-4">
            SAFETY-FIRST PROTOCOL
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            Verified at every <span className="text-scootza-green">checkpoint</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            ScootZA is the only delivery platform in South Africa with a
            mandatory three-phase biometric verification system. Built because
            safety isn&apos;t a feature, it&apos;s the foundation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {safetyFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-scootza-green/50"
            >
              <div className="w-14 h-14 bg-scootza-green rounded-2xl flex items-center justify-center mb-5">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Verification flow visualization */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12">
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-center mb-10">
              The Verification Journey
            </h3>
            <div className="grid md:grid-cols-3 gap-6 relative">
              {[
                { step: "1", label: "Upload ID", desc: "Government document scan" },
                { step: "2", label: "Live Selfie", desc: "Real-time face capture" },
                { step: "3", label: "Get Active", desc: "Admin reviewed & approved" },
              ].map((item) => (
                <div key={item.step} className="text-center relative">
                  <div className="w-16 h-16 bg-scootza-green rounded-full flex items-center justify-center mx-auto mb-4 font-display font-bold text-2xl">
                    {item.step}
                  </div>
                  <h4 className="font-display text-xl font-bold mb-2">
                    {item.label}
                  </h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
