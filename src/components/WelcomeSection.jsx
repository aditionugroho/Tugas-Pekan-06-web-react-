import React from "react";

export default function WelcomeSection() {
  return (
    <section id="beranda" className="mb-8 text-center">
      <div className="mb-5 inline-block rounded-full bg-yellow-100 px-5 py-2 font-extrabold text-yellow-700">
        👋 Halo, Teman Cilik!
      </div>
      <h1 className="mb-4 text-4xl font-black leading-tight text-teal-600 md:text-5xl">
        Rencana Belajar Ceria
      </h1>
      <p className="mx-auto max-w-2xl text-lg font-semibold leading-relaxed text-slate-500">
        Atur kegiatan belajar seru hari ini. Tambahkan ide baru dan ajak si kecil
        belajar sambil bermain!
      </p>
    </section>
  );
}
