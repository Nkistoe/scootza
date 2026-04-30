"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-scootza-dark text-white pt-20 pb-8">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <Image
              src="/scootza-logo.svg"
              alt="ScootZA"
              width={160}
              height={45}
              className="h-10 w-auto brightness-0 invert mb-6"
            />
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              South Africa&apos;s safety-first food and store delivery platform.
              Verified drivers, biometric protection, and real-time tracking.
              Proudly serving Durban.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-white/5 hover:bg-scootza-green rounded-full flex items-center justify-center transition-colors"
                  aria-label="Social media"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Careers", "Press", "Blog"].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-scootza-green transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "POPIA Compliance", "Cookie Policy"].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-scootza-green transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-lg mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-scootza-green flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Durban, KwaZulu-Natal, South Africa</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-scootza-green flex-shrink-0 mt-0.5" />
                <a href="mailto:hello@scootza.co.za" className="text-gray-400 hover:text-scootza-green transition-colors">
                  hello@scootza.co.za
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-scootza-green flex-shrink-0 mt-0.5" />
                <a href="tel:+27000000000" className="text-gray-400 hover:text-scootza-green transition-colors">
                  +27 (0) 31 000 0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ScootZA. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Designed and built by{" "}
            <a
              href="https://ideaconvergence.com"
              className="text-scootza-green hover:text-scootza-green-light transition-colors font-semibold"
            >
              Idea Convergence
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
