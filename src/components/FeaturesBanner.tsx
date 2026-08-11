"use client";

import Image from "next/image";

export default function FeaturesBanner() {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container-main px-4 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Image
            src="/features-xlsatu.jpg"
            alt="Fitur XL SATU: Fiber Optic, WiFi Unlimited, Kuota HP Sekeluarga, SATU Tagihan, SATU Aplikasi"
            width={1200}
            height={300}
            className="h-auto w-full object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
