import React from "react";

export default function ActivitySummary({ count }) {
  return (
    <section
      aria-live="polite"
      className="mb-8 flex flex-wrap items-center justify-between gap-3 rounded-[24px] bg-blue-500 p-6 text-white shadow-lg shadow-blue-200"
    >
      <div>
        <p className="text-sm font-bold text-blue-100">Kegiatan belajar tersimpan</p>
        <p className="text-3xl font-black">{count} aktivitas</p>
      </div>
      <span className="text-4xl" aria-hidden="true">
        ⭐
      </span>
    </section>
  );
}
