"use client";

const stats = [
  { value: "100%", label: "Verified Drivers" },
  { value: "< 30 min", label: "Average Delivery" },
  { value: "24/7", label: "Customer Support" },
  { value: "POPIA", label: "Compliant" },
];

export default function Stats() {
  return (
    <section className="py-16 bg-scootza-green">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center text-white">
              <div className="font-display text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-white/90 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
