import React from 'react';

export default function HomePage() {
  const bgUrl = '/Gemini_Generated_Image_1z5s8r1z5s8r1z5s.png';

  return (
    <div>
      <section className="relative h-[60vh] w-full bg-sky-50">
        <div
          className="absolute inset-0 bg-cover bg-center mask-l-from-10% mask-l-to-80%"
          style={{ backgroundImage: `url('${bgUrl}')` }}
        />

        <div className="relative z-10 h-full container flex items-center">
          <div className="text-primary">
            <h1 className="text-4xl sm:text-5xl font-extrabold">
              尋找銀髮照護資源，輕鬆無憂
            </h1>
            <p className="mt-4 text-lg sm:text-xl max-w-2xl">
              在這裡搜尋和發現本地的照護機構、服務和支援，讓您無後顧之憂。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
