import React from "react";

export default function WelcomeSection() {
  return (
    <section id="beranda" className="mb-8 text-center">
      <div className="mb-4 inline-block rounded-full bg-yellow-100 px-5 py-2 font-extrabold text-yellow-700">
        👋 Halo, Teman Cilik!
      </div>
      <h1 className="mb-3 text-4xl font-black leading-tight text-teal-600 md:text-5xl">
        Yuk Belajar dengan Ceria!
      </h1>
      <p className="mx-auto max-w-2xl text-lg font-semibold leading-relaxed text-slate-500">
        Pilih pelajaran untuk mengenal huruf, angka, dan warna. Belajar jadi
        lebih seru sambil melihat gambar dan mendengarkan cara menyebutkannya.
      </p>
    </section>
  );
}
