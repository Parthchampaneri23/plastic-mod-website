'use client';

import React from 'react';
import Image from 'next/image';

interface ProductImageGalleryProps {
  image: string;
  productName: string;
}

export default function ProductImageGallery({ image, productName }: ProductImageGalleryProps) {
  const displayImage = image || '/product/pet-preform-mold.png';

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm group">
      <Image
        src={displayImage}
        alt={productName}
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover object-center group-hover:scale-103 transition-transform duration-500 ease-out"
      />
    </div>
  );
}
