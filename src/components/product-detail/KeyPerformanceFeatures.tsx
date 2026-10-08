'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface KeyPerformanceFeaturesProps {
  features: string[];
}

export default function KeyPerformanceFeatures({ features }: KeyPerformanceFeaturesProps) {
  if (!features || features.length === 0) return null;

  return (
    <div className="space-y-3">
      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
        Key Performance Features
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
            whileHover={{ y: -3, scale: 1.01 }}
            className="group relative flex items-start text-xs sm:text-sm text-slate-700 bg-white p-3 rounded-xl border border-slate-200/90 shadow-2xs hover:border-[#0056b3] hover:shadow-md hover:bg-blue-50/30 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            {/* Left Accent Bar on Hover */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0056b3] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Check Icon with Micro Scale Animation */}
            <div className="p-1 rounded-md bg-blue-50 group-hover:bg-[#0056b3] text-[#0056b3] group-hover:text-white transition-colors duration-300 mr-2.5 shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>

            <span className="font-semibold text-slate-800 group-hover:text-[#0056b3] transition-colors leading-snug">
              {feature}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
