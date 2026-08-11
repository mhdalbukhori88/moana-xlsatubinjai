"use client";

const features = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Instalasi Cepat",
    description:
      "Proses pemasangan selesai dalam 1-3 hari kerja setelah survei lokasi. Tim teknisi profesional langsung datang ke rumah Anda.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Harga Transparan",
    description:
      "Tidak ada biaya tersembunyi. Harga yang ditampilkan sudah termasuk semua biaya. Gratis instalasi untuk paket tertentu.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    title: "Dukungan Langsung Sales",
    description:
      "Hubungi sales resmi langsung via WhatsApp kapan saja. Respon cepat, konsultasi gratis, dan pendampingan penuh.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Bebas Pasang Bongkar",
    description:
      "Fleksibel tanpa kontrak jangka panjang yang mengikat. Proses berhenti langganan mudah tanpa biaya penalti berlebihan.",
  },
];

export default function KenapaKami() {
  return (
    <section className="relative bg-surface section-padding overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23002CBA' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container-main relative">
        <div className="mb-12 text-center lg:mb-16">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-2">
            <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Keunggulan</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
            Kenapa Pilih Kami?
          </h2>
          <p className="mx-auto max-w-2xl text-base text-text-muted sm:text-lg">
            Kami berkomitmen memberikan layanan terbaik untuk koneksi internet rumah Anda di Binjai
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative rounded-3xl bg-white p-6 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:from-primary group-hover:to-support group-hover:text-white group-hover:shadow-lg">
                {feature.icon}
              </div>

              <h3 className="mb-3 text-lg font-bold text-text">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-text-muted">{feature.description}</p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-6 right-6 h-1 rounded-t-full bg-gradient-to-r from-primary to-secondary opacity-0 transition-all duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
