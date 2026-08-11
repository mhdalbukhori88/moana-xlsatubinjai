"use client";

export default function Hero() {
  return (
    <section id="beranda" className="relative min-h-[90vh] overflow-hidden pt-16 md:pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-3xl animate-float" />
        <div className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-support/10 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute right-1/4 top-1/3 h-[200px] w-[200px] rounded-full bg-white/5 blur-2xl animate-pulse-slow" />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="container-main relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-4 lg:flex-row lg:gap-12 lg:px-8">
        {/* Left: Text content */}
        <div className="flex-1 pt-12 text-center lg:pt-0 lg:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-xs font-medium text-white/90">Melayani Area Binjai &amp; Sekitarnya</span>
          </div>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Internet Rumah{" "}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-secondary-light to-white bg-clip-text text-transparent">
                Super Cepat
              </span>
              <span className="absolute -bottom-2 left-0 h-3 w-full bg-secondary/30 rounded-full blur-md" />
            </span>
            <br />
            dari XLSMART FTTH!
          </h1>

          <p className="mb-8 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg lg:max-w-xl">
            Internet lemot bikin kerja, belajar, atau streaming jadi terganggu? Saatnya upgrade ke <strong className="text-white">XL SATU SPARK FTTH Internet Only</strong> dengan koneksi cepat, stabil, dan terpercaya!
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#cek-jangkauan"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-primary shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <svg className="h-5 w-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Cek Jangkauan Area
            </a>
            <a
              href="https://wa.me/6285857547266?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20internet%20XL%20Satu%20Binjai"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/50 hover:bg-white/20"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat WhatsApp Sales
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
            <div className="flex items-center gap-2 text-white/60">
              <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              <span className="text-xs font-medium">Fiber Optic</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              <span className="text-xs font-medium">Unlimited</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              <span className="text-xs font-medium">Gratis Instalasi</span>
            </div>
          </div>
        </div>

        {/* Right: Illustration */}
        <div className="mt-12 flex-1 lg:mt-0">
          <div className="relative mx-auto max-w-md lg:max-w-lg">
            {/* Decorative ring */}
            <div className="absolute inset-0 animate-pulse-slow rounded-full bg-gradient-to-br from-secondary/20 to-transparent blur-2xl" />
            
            {/* Main illustration card */}
            <div className="relative rounded-3xl bg-white/10 p-8 backdrop-blur-sm border border-white/10">
              <div className="flex flex-col items-center gap-6">
                {/* WiFi Icon */}
                <div className="relative">
                  <div className="absolute inset-0 animate-ping rounded-full bg-secondary/30" style={{ animationDuration: "2s" }} />
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-primary shadow-2xl">
                    <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
                    </svg>
                  </div>
                </div>
                
                {/* Speed indicator */}
                <div className="text-center">
                  <div className="text-5xl font-black text-white">300</div>
                  <div className="text-lg font-semibold text-secondary-light">Mbps</div>
                  <div className="mt-1 text-sm text-white/60">Kecepatan Maksimal</div>
                </div>

                {/* Feature chips */}
                <div className="flex flex-wrap justify-center gap-2">
                  {["Streaming 4K", "Gaming", "WFH", "Video Call"].map((tag) => (
                    <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 73.3C480 67 600 73 720 80C840 87 960 93 1080 90C1200 87 1320 73 1380 67L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F8F9FC" />
        </svg>
      </div>
    </section>
  );
}
