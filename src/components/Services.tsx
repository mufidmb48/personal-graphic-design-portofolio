import React from 'react';
import { Sparkles, Smartphone, Layout, CalendarDays, ShoppingBag, Shapes, Check } from 'lucide-react';
import { servicesData } from '../data/services';

const iconMap = {
  Sparkles,
  Smartphone,
  Layout,
  CalendarDays,
  ShoppingBag,
  Shapes
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-primary mb-3">
              <span>What I Can Do</span>
              <span aria-hidden="true" className="text-outline">·</span>
              <span>Specialized Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface leading-tight">
              Purpose-driven visual solutions engineered for real-world impact.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-secondary max-w-md">
            Every service is tailored to solve specific communication hurdles—from brand identity systems to daily high-turnaround promotional campaign assets.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => {
            const Icon = iconMap[service.iconName as keyof typeof iconMap] || Shapes;
            return (
              <div
                key={service.id}
                className="bg-surface-container-lowest p-7 sm:p-8 rounded-3xl border border-outline-variant hover:border-primary-container hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary-container/30 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-on-surface mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs font-medium text-primary mb-4 leading-snug">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-secondary leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="pt-6 border-t border-outline-variant/50">
                    <p className="text-xs font-semibold tracking-wider uppercase text-on-surface mb-3">
                      Key Deliverables:
                    </p>
                    <ul className="space-y-2 text-xs text-secondary">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-outline-variant/30 flex items-center justify-between text-xs text-outline font-mono">
                  <span>Service 0{idx + 1}</span>
                  <a href="#contact" className="text-primary font-sans font-semibold text-xs group-hover:underline">
                    Inquire Now →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
