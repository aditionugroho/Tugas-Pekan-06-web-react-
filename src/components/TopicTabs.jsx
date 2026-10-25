import React from "react";

export default function TopicTabs({ topics, activeTopic, onSelectTopic }) {
  return (
    <nav aria-label="Pilih pelajaran" className="mb-6 grid grid-cols-3 gap-3">
      {topics.map((topic) => {
        const isActive = topic.id === activeTopic;
        return (
          <button
            key={topic.id}
            type="button"
            onClick={() => onSelectTopic(topic.id)}
            aria-pressed={isActive}
            className={`rounded-2xl px-3 py-4 text-center font-extrabold transition sm:text-lg ${
              isActive
                ? "bg-blue-500 text-white shadow-lg shadow-blue-200"
                : "bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-600"
            }`}
          >
            <span className="mr-1 sm:mr-2" aria-hidden="true">{topic.icon}</span>
            {topic.label}
          </button>
        );
      })}
    </nav>
  );
}
