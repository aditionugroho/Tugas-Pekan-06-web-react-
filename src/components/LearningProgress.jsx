import React from "react";

export default function LearningProgress({ topic, current, total }) {
  const progress = (current / total) * 100;

  return (
    <section
      aria-live="polite"
      className="mb-5 rounded-2xl bg-white p-5 shadow-sm"
    >
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div>
          <h2 className="text-xl font-extrabold">{topic.icon} {topic.title}</h2>
          <p className="mt-1 text-sm font-semibold text-slate-500">{topic.description}</p>
        </div>
        <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-extrabold text-yellow-700">
          {current} dari {total}
        </span>
      </div>
      <div
        className="h-3 overflow-hidden rounded-full bg-slate-100"
        role="progressbar"
        aria-label={`Progres ${topic.title}`}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={current}
      >
        <div
          className="h-full rounded-full bg-emerald-400 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </section>
  );
}
