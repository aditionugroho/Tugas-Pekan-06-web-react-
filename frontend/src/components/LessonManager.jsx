import React, { useEffect, useState } from "react";

const API_URL = "http://localhost:3000/lessons";

const emptyForm = {
  title: "",
  topic: "Huruf",
  level: "Pemula",
  duration: 10,
  completed: false,
};

export default function LessonManager() {
  const [lessons, setLessons] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");

  async function loadLessons() {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Gagal mengambil data pelajaran");
    setLessons(await response.json());
  }

  useEffect(() => {
    loadLessons().catch((message) => setError(message.message));
  }, []);

  async function submitLesson(event) {
    event.preventDefault();
    setError("");

    try {
      const response = await fetch(
        editingId ? `${API_URL}/${editingId}` : API_URL,
        {
          method: editingId ? "PATCH" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            duration: Number(form.duration),
          }),
        },
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message ?? "Gagal menyimpan pelajaran");
      }
      await loadLessons();
      setForm(emptyForm);
      setEditingId(null);
    } catch (message) {
      setError(message.message);
    }
  }

  function editLesson(lesson) {
    setEditingId(lesson.id);
    setForm({
      title: lesson.title,
      topic: lesson.topic,
      level: lesson.level,
      duration: lesson.duration,
      completed: lesson.completed,
    });
  }

  async function removeLesson(id) {
    setError("");
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message ?? "Gagal menghapus pelajaran");
      }
      await loadLessons();
    } catch (message) {
      setError(message.message);
    }
  }

  return (
    <section className="mt-10 rounded-3xl bg-white p-5 shadow-sm sm:p-7">
      <h2 className="text-2xl font-extrabold">Kelola Pelajaran</h2>
      {error && (
        <p role="alert" className="mt-4 rounded-xl bg-red-100 px-4 py-3 font-bold text-red-700">
          {error}
        </p>
      )}

      <form onSubmit={submitLesson} className="mt-5 grid gap-3 sm:grid-cols-2">
        <input
          required
          minLength={3}
          value={form.title}
          onChange={(event) => setForm({ ...form, title: event.target.value })}
          placeholder="Judul pelajaran"
          className="rounded-xl border-2 border-slate-200 px-4 py-3 font-bold"
        />
        <select
          value={form.topic}
          onChange={(event) => setForm({ ...form, topic: event.target.value })}
          className="rounded-xl border-2 border-slate-200 px-4 py-3 font-bold"
        >
          <option>Huruf</option>
          <option>Angka</option>
          <option>Warna</option>
        </select>
        <select
          value={form.level}
          onChange={(event) => setForm({ ...form, level: event.target.value })}
          className="rounded-xl border-2 border-slate-200 px-4 py-3 font-bold"
        >
          <option>Pemula</option>
          <option>Menengah</option>
        </select>
        <input
          required
          type="number"
          min={1}
          value={form.duration}
          onChange={(event) => setForm({ ...form, duration: event.target.value })}
          className="rounded-xl border-2 border-slate-200 px-4 py-3 font-bold"
        />
        <label className="flex items-center gap-2 font-bold">
          <input
            type="checkbox"
            checked={form.completed}
            onChange={(event) => setForm({ ...form, completed: event.target.checked })}
          />
          Sudah selesai
        </label>
        <button
          type="submit"
          className="rounded-xl bg-blue-500 px-5 py-3 font-extrabold text-white"
        >
          {editingId ? "Simpan Perubahan" : "Tambah Pelajaran"}
        </button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setForm(emptyForm);
              setError("");
            }}
            className="rounded-xl bg-slate-300 px-5 py-3 font-extrabold text-slate-700"
          >
            Batal
          </button>
        )}
      </form>

      <div className="mt-6 space-y-3">
        {lessons.map((lesson) => (
          <article
            key={lesson.id}
            className="flex flex-col gap-3 rounded-2xl bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="font-black">{lesson.title}</p>
              <p className="text-sm font-semibold text-slate-500">
                {lesson.topic} · {lesson.level} · {lesson.duration} menit ·
                {" "}{lesson.completed ? "Selesai" : "Belum selesai"}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => editLesson(lesson)}
                className="rounded-xl bg-amber-400 px-4 py-2 font-bold"
              >
                Ubah
              </button>
              <button
                type="button"
                onClick={() => removeLesson(lesson.id)}
                className="rounded-xl bg-red-500 px-4 py-2 font-bold text-white"
              >
                Hapus
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
