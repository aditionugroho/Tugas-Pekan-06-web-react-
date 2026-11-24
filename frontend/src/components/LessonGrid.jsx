import React from "react";

export default function LessonGrid({ topic, activeIndex, onSelectLesson }) {
  return (
    <section aria-labelledby="lesson-grid-title" className="mt-10">
      <div className="mb-4">
        <h2 id="lesson-grid-title" className="text-2xl font-extrabold">
          Pilih {topic.label}
        </h2>
        <p className="mt-1 font-semibold text-slate-500">
          Tekan kartu untuk melihat pelajaran.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-5">
        {topic.lessons.map((lesson, index) => (
          <button
            key={lesson.id}
            type="button"
            onClick={() => onSelectLesson(index)}
            aria-pressed={activeIndex === index}
            className={`flex min-h-24 flex-col items-center justify-center rounded-2xl p-3 text-center transition ${
              activeIndex === index
                ? "bg-blue-500 text-white shadow-lg shadow-blue-200"
                : "bg-white hover:bg-blue-50"
            }`}
          >
            {topic.id === "warna" ? (
              <span className={`mb-2 h-8 w-8 rounded-full ${lesson.color}`} aria-label={lesson.value} />
            ) : topic.id === "angka" ? (
              <span className="text-2xl font-black">{lesson.value}</span>
            ) : (
              <span className="text-2xl font-black">{lesson.value}</span>
            )}
            <span className="text-sm font-extrabold">{lesson.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
