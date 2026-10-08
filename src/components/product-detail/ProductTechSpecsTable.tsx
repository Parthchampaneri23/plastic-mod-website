'use client';

import React from 'react';
import { Product } from '@/data/products';

interface ProductTechSpecsTableProps {
  techSpecs: Product['techSpecs'];
}

export default function ProductTechSpecsTable({ techSpecs }: ProductTechSpecsTableProps) {
  const rows = [
    { label: 'Mold Type', value: techSpecs.moldType },
    { label: 'Cavity Details', value: techSpecs.cavityDetails },
    { label: 'Material & Hardness', value: techSpecs.material },
    { label: 'Machine Compatibility', value: techSpecs.machineCompatibility },
    { label: 'Application Industry', value: techSpecs.application },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
      <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
        <h3 className="text-base font-bold text-slate-900 tracking-tight">
          Technical Specifications Table
        </h3>
        <span className="text-xs font-mono font-semibold text-[#0056b3] bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full">
          VERIFIED DATA
        </span>
      </div>

      <div className="divide-y divide-slate-100">
        {rows.map((row, idx) => (
          <div key={idx} className="grid grid-cols-1 sm:grid-cols-12 p-4 hover:bg-slate-50/60 transition-colors">
            <div className="sm:col-span-4 text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center">
              <span className="w-2 h-2 rounded-full bg-[#0056b3] mr-2.5"></span>
              {row.label}
            </div>
            <div className="sm:col-span-8 text-xs sm:text-sm text-slate-900 font-medium mt-1 sm:mt-0">
              {row.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
