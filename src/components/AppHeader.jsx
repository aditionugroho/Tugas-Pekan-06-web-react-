import React from "react";

export default function AppHeader({ soundEnabled, onToggleSound }) {
  return (
    <header className="w-full bg-white px-5 py-4 shadow-sm md:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-3">
        <a href="#beranda" className="flex items-center gap-2 text-xl font-black text-blue-700">
          <span aria-hidden="true">🎨</span>
          Ceria Belajar
        </a>
        <button
          type="button"
          onClick={onToggleSound}
          aria-pressed={soundEnabled}
          className={`rounded-full px-4 py-2 text-sm font-extrabold text-white ${
            soundEnabled ? "bg-emerald-500" : "bg-slate-500"
          }`}
        >
          {soundEnabled ? "🔊 Suara Aktif" : "🔇 Suara Mati"}
        </button>
      </div>
    </header>
  );
}
