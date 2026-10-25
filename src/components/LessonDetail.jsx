import React from "react";

export default function LessonDetail({ lesson, topic, onSpeak }) {
  const isColor = topic.id === "warna";
  const isNumber = topic.id === "angka";

  return (
    <section
      aria-live="polite"
      className="rounded-[28px] bg-white p-6 text-center shadow-[0_12px_30px_rgba(0,0,0,0.05)] md:p-8"
    >
      <div
        className={`mx-auto mb-5 flex min-h-40 w-full max-w-2xl flex-col items-center justify-center rounded-[24px] p-5 ${
          isColor ? lesson.color : isNumber ? "bg-blue-50" : "bg-emerald-50"
        }`}
      >
        {isColor ? (
          <>
            <span className="text-6xl" role="img" aria-label={lesson.word}>{lesson.emoji}</span>
            <span className="mt-2 rounded-full bg-white/90 px-4 py-1 font-extrabold text-slate-700">
              {lesson.word}
            </span>
          </>
        ) : isNumber ? (
          <div className="flex max-w-lg flex-wrap justify-center gap-1 text-3xl sm:text-4xl" aria-label={`${lesson.count} apel`}>
            {Array.from({ length: lesson.count }, (_, index) => (
              <span key={index} role="img" aria-label={`Apel ${index + 1}`}>{lesson.emoji}</span>
            ))}
          </div>
        ) : (
          <span className="text-7xl font-black text-emerald-600">{lesson.value}</span>
        )}
      </div>
      <p className="mb-1 text-sm font-extrabold uppercase tracking-widest text-slate-400">
        {topic.label} {lesson.label}
      </p>
      <h2 className="mb-2 text-3xl font-black text-slate-800">
        {isNumber ? lesson.word : isColor ? lesson.value : `${lesson.value} untuk ${lesson.word}`}
      </h2>
      <p className="mb-6 text-lg font-bold text-slate-500">{lesson.description}</p>
      <button
        type="button"
        onClick={() => onSpeak(lesson.speech)}
        className="rounded-2xl border-0 border-b-4 border-yellow-600 bg-yellow-300 px-6 py-3.5 font-extrabold text-yellow-900 transition hover:bg-yellow-200 active:translate-y-1 active:border-b-0"
      >
        🔊 Dengarkan
      </button>
    </section>
  );
}
