import React from 'react';
import { MessageSquare, ShieldCheck, Clock, FileCheck } from 'lucide-react';

export const TestimonialPlaceholder: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl border border-dashed border-outline-variant p-8 sm:p-12 bg-surface-container-low/30 text-center max-w-4xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-secondary-container/40 text-secondary flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="w-6 h-6 text-primary" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-on-surface mb-2">
            Client Feedback & Verified Reviews
          </h3>

          <p className="text-sm text-secondary max-w-xl mx-auto mb-8">
            Complete transparency is paramount. This dedicated space displays authentic client reviews and collaboration results upon project completion.
          </p>

          {/* Guarantees Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-outline-variant/50 text-left">
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-surface-container-lowest border border-outline-variant/40">
              <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="text-xs font-bold text-on-surface">Quality Commitment</p>
                <p className="text-[11px] text-secondary">Targeted revisions aligned with the agreed brief</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-surface-container-lowest border border-outline-variant/40">
              <Clock className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="text-xs font-bold text-on-surface">Timely Delivery</p>
                <p className="text-[11px] text-secondary">Structured milestones completed without delays</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-surface-container-lowest border border-outline-variant/40">
              <FileCheck className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="text-xs font-bold text-on-surface">Full Ownership</p>
                <p className="text-[11px] text-secondary">Complete commercial rights and source master files</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
