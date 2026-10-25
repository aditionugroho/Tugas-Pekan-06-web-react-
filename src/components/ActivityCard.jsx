import React from "react";

const categoryIcons = {
  Literasi: "🔤",
  Numerasi: "🔢",
  "Seni dan Kreativitas": "🎨",
  "Pengetahuan Umum": "🌱",
};

export default function ActivityCard({ activity, onRemove }) {
  return (
    <article className="flex flex-col rounded-[24px] bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.04)] transition hover:-translate-y-1">
      <div className="mb-4 flex items-start justify-between gap-3">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-100 text-3xl" aria-hidden="true">
          {categoryIcons[activity.category] ?? "📚"}
        </span>
        <span className="rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-extrabold text-emerald-700">
          {activity.category}
        </span>
      </div>
      <h3 className="mb-2 text-xl font-extrabold">{activity.title}</h3>
      <p className="mb-5 flex-grow font-semibold leading-relaxed text-slate-500">
        {activity.description}
      </p>
      <div className="flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
        <span className="text-sm font-extrabold text-blue-600">⏱ {activity.duration} menit</span>
        <button
          type="button"
          onClick={() => onRemove(activity.id)}
          aria-label={`Hapus ${activity.title}`}
          className="rounded-lg px-3 py-2 text-sm font-extrabold text-red-500 transition hover:bg-red-50"
        >
          Hapus
        </button>
      </div>
    </article>
  );
}
