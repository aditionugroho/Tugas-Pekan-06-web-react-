import React, { useState } from "react";

const initialForm = {
  title: "",
  category: "Literasi",
  description: "",
  duration: "",
};

export default function ActivityForm({ onAddActivity }) {
  const [form, setForm] = useState(initialForm);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddActivity({
      title: form.title.trim(),
      category: form.category,
      description: form.description.trim(),
      duration: Number(form.duration),
    });
    setForm(initialForm);
  }

  return (
    <section className="mb-10 rounded-[28px] bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.04)] md:p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-extrabold">Tambah Kegiatan Belajar</h2>
        <p className="mt-1 font-semibold text-slate-500">
          Buat rencana belajar baru yang menyenangkan.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <label className="flex flex-col gap-2 font-bold">
          Nama kegiatan
          <input
            name="title"
            value={form.title}
            onChange={updateField}
            placeholder="Contoh: Membaca cerita Kancil"
            maxLength={60}
            required
            className="rounded-xl border-2 border-slate-200 px-4 py-3 font-semibold outline-none transition placeholder:text-slate-400 focus:border-blue-400"
          />
        </label>
        <label className="flex flex-col gap-2 font-bold">
          Kategori
          <select
            name="category"
            value={form.category}
            onChange={updateField}
            className="rounded-xl border-2 border-slate-200 bg-white px-4 py-3 font-semibold outline-none transition focus:border-blue-400"
          >
            <option>Literasi</option>
            <option>Numerasi</option>
            <option>Seni dan Kreativitas</option>
            <option>Pengetahuan Umum</option>
          </select>
        </label>
        <label className="flex flex-col gap-2 font-bold">
          Deskripsi
          <textarea
            name="description"
            value={form.description}
            onChange={updateField}
            placeholder="Ceritakan hal yang akan dipelajari"
            maxLength={180}
            rows={3}
            required
            className="resize-y rounded-xl border-2 border-slate-200 px-4 py-3 font-semibold outline-none transition placeholder:text-slate-400 focus:border-blue-400"
          />
        </label>
        <label className="flex flex-col gap-2 font-bold">
          Durasi (menit)
          <input
            name="duration"
            type="number"
            value={form.duration}
            onChange={updateField}
            min="1"
            max="180"
            placeholder="Contoh: 15"
            required
            className="rounded-xl border-2 border-slate-200 px-4 py-3 font-semibold outline-none transition placeholder:text-slate-400 focus:border-blue-400"
          />
        </label>
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full rounded-2xl border-0 border-b-4 border-blue-700 bg-blue-500 px-6 py-3.5 font-extrabold text-white transition hover:bg-blue-600 active:translate-y-1 active:border-b-0 md:w-auto"
          >
            + Tambah
          </button>
        </div>
      </form>
    </section>
  );
}
