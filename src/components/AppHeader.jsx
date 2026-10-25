import React from "react";

export default function AppHeader() {
  return (
    <header className="w-full bg-white px-5 py-4 shadow-sm md:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3">
        <a href="#beranda" className="flex items-center gap-2 text-xl font-black text-blue-700">
          <span aria-hidden="true">🎨</span>
          Ceria Belajar
        </a>
        <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-extrabold text-yellow-700">
          Belajar sambil bermain ⭐
        </span>
      </div>
    </header>
  );
}
