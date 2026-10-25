import React from "react";
import ActivityCard from "./ActivityCard.jsx";

export default function ActivityList({ activities, onRemoveActivity }) {
  return (
    <section aria-labelledby="activity-list-title">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-2">
        <div>
          <h2 id="activity-list-title" className="text-2xl font-extrabold">
            Daftar Aktivitas
          </h2>
          <p className="mt-1 font-semibold text-slate-500">
            Pilih kegiatan yang ingin dilakukan bersama si kecil.
          </p>
        </div>
      </div>
      {activities.length === 0 ? (
        <p className="rounded-[24px] border-2 border-dashed border-slate-300 bg-white px-6 py-12 text-center text-lg font-extrabold text-slate-500">
          Belum ada data aktivitas belajar
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              onRemove={onRemoveActivity}
            />
          ))}
        </div>
      )}
    </section>
  );
}
