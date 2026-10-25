import React, { useState } from "react";
import AppHeader from "./components/AppHeader.jsx";
import Footer from "./components/Footer.jsx";
import LearningProgress from "./components/LearningProgress.jsx";
import LessonDetail from "./components/LessonDetail.jsx";
import LessonGrid from "./components/LessonGrid.jsx";
import TopicTabs from "./components/TopicTabs.jsx";
import WelcomeSection from "./components/WelcomeSection.jsx";
import { topics } from "./data/lessons.js";

export default function App() {
  const [topicId, setTopicId] = useState("huruf");
  const [lessonIndex, setLessonIndex] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [speechError, setSpeechError] = useState("");
  const topic = topics.find((item) => item.id === topicId) ?? topics[0];
  const lesson = topic.lessons[lessonIndex];

  function selectTopic(id) {
    setTopicId(id);
    setLessonIndex(0);
    setSpeechError("");
  }

  function speak(text) {
    if (!soundEnabled) return;
    if (!("speechSynthesis" in window)) {
      setSpeechError("Maaf, fitur suara tidak didukung oleh browser ini.");
      return;
    }

    setSpeechError("");
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "id-ID";
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  }

  function toggleSound() {
    if (soundEnabled && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setSoundEnabled((enabled) => !enabled);
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#F4F7FB] font-[Nunito,sans-serif] text-slate-800">
      <AppHeader soundEnabled={soundEnabled} onToggleSound={toggleSound} />
      <main className="w-full max-w-5xl flex-grow px-5 py-8 md:py-10">
        <WelcomeSection />
        <TopicTabs topics={topics} activeTopic={topicId} onSelectTopic={selectTopic} />
        {speechError && (
          <p role="status" className="mb-5 rounded-xl bg-red-100 px-4 py-3 font-semibold text-red-700">
            {speechError}
          </p>
        )}
        <LearningProgress
          topic={topic}
          current={lessonIndex + 1}
          total={topic.lessons.length}
        />
        <LessonDetail lesson={lesson} topic={topic} onSpeak={speak} />
        <div className="my-8 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <button
            type="button"
            disabled={lessonIndex === 0}
            onClick={() => setLessonIndex((index) => Math.max(index - 1, 0))}
            className="w-full rounded-2xl border-2 border-b-4 border-slate-300 bg-white px-5 py-3 font-extrabold transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400 sm:w-auto"
          >
            ← Sebelumnya
          </button>
          <button
            type="button"
            onClick={() => setLessonIndex((index) => (index + 1) % topic.lessons.length)}
            className="w-full rounded-2xl border-0 border-b-4 border-blue-700 bg-blue-500 px-5 py-3 font-extrabold text-white transition hover:bg-blue-600 active:translate-y-1 active:border-b-0 sm:w-auto"
          >
            {lessonIndex === topic.lessons.length - 1
              ? "Ulangi dari Awal 🎉"
              : `Berikutnya: ${topic.lessons[lessonIndex + 1].label} →`}
          </button>
        </div>
        <LessonGrid
          topic={topic}
          activeIndex={lessonIndex}
          onSelectLesson={setLessonIndex}
        />
      </main>
      <Footer />
    </div>
  );
}
