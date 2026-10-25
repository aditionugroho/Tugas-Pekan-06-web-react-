import React, { useRef, useState } from "react";
import ActivityForm from "./components/ActivityForm.jsx";
import ActivityList from "./components/ActivityList.jsx";
import ActivitySummary from "./components/ActivitySummary.jsx";
import AppHeader from "./components/AppHeader.jsx";
import Footer from "./components/Footer.jsx";
import WelcomeSection from "./components/WelcomeSection.jsx";

const initialActivities = [
  {
    id: "huruf",
    title: "Mengenal Huruf A-D",
    category: "Literasi",
    description: "Belajar bunyi huruf A, B, C, dan D melalui apel, bola, ceri, dan domba.",
    duration: 15,
  },
  {
    id: "angka",
    title: "Berhitung dengan Apel",
    category: "Numerasi",
    description: "Menghitung apel dari satu sampai sepuluh sambil menyebutkan nama angkanya.",
    duration: 10,
  },
  {
    id: "warna",
    title: "Mengenal Warna dan Bentuk",
    category: "Seni dan Kreativitas",
    description: "Mencari benda berwarna cerah dan mengenali lingkaran, persegi, serta segitiga.",
    duration: 20,
  },
];

export default function App() {
  const [activities, setActivities] = useState(initialActivities);
  const nextId = useRef(0);

  function addActivity(activity) {
    const id =
      typeof globalThis.crypto?.randomUUID === "function"
        ? globalThis.crypto.randomUUID()
        : `aktivitas-${Date.now()}-${nextId.current++}`;
    setActivities((currentActivities) => [{ ...activity, id }, ...currentActivities]);
  }

  function removeActivity(id) {
    setActivities((currentActivities) =>
      currentActivities.filter((activity) => activity.id !== id),
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#F4F7FB] font-[Nunito,sans-serif] text-slate-800">
      <AppHeader />
      <main className="w-full max-w-5xl flex-grow px-5 py-10">
        <WelcomeSection />
        <ActivitySummary count={activities.length} />
        <ActivityForm onAddActivity={addActivity} />
        <ActivityList activities={activities} onRemoveActivity={removeActivity} />
      </main>
      <Footer />
    </div>
  );
}
