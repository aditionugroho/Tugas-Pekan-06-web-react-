const letters = [
  ["A", "Apel", "🍎"], ["B", "Bola", "⚽"], ["C", "Ceri", "🍒"],
  ["D", "Domba", "🐑"], ["E", "Elang", "🦅"], ["F", "Foto", "📷"],
  ["G", "Gajah", "🐘"], ["H", "Harimau", "🐯"], ["I", "Ikan", "🐟"],
  ["J", "Jeruk", "🍊"], ["K", "Kelinci", "🐰"], ["L", "Lebah", "🐝"],
  ["M", "Mobil", "🚗"], ["N", "Nanas", "🍍"], ["O", "Obor", "🔥"],
  ["P", "Pisang", "🍌"], ["Q", "Quran", "📖"], ["R", "Rusa", "🦌"],
  ["S", "Sapi", "🐄"], ["T", "Topi", "🧢"], ["U", "Ular", "🐍"],
  ["V", "Vas", "🏺"], ["W", "Wortel", "🥕"], ["X", "Xilofon", "🎶"],
  ["Y", "Yoyo", "🪀"], ["Z", "Zebra", "🦓"],
].map(([value, word, emoji]) => ({
  id: value,
  label: value,
  value,
  word,
  emoji,
  description: `${value} untuk ${word}`,
  speech: `${value}. ${word}. ${value} untuk ${word}.`,
}));

const numberWords = [
  "Satu", "Dua", "Tiga", "Empat", "Lima",
  "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh",
];

const numbers = numberWords.map((word, index) => {
  const value = index + 1;
  return {
    id: String(value),
    label: String(value),
    value: String(value),
    word,
    emoji: "🍎",
    count: value,
    description: `Ada ${value} apel`,
    speech: `${word}. Ada ${value} apel.`,
  };
});

const colors = [
  { id: "merah", label: "Merah", value: "Merah", word: "Apel", emoji: "🍎", color: "bg-red-500", description: "Warna apel yang matang" },
  { id: "kuning", label: "Kuning", value: "Kuning", word: "Pisang", emoji: "🍌", color: "bg-yellow-400", description: "Warna pisang yang manis" },
  { id: "biru", label: "Biru", value: "Biru", word: "Langit", emoji: "☁️", color: "bg-blue-500", description: "Warna langit yang cerah" },
  { id: "hijau", label: "Hijau", value: "Hijau", word: "Daun", emoji: "🍃", color: "bg-emerald-500", description: "Warna daun di pohon" },
  { id: "jingga", label: "Jingga", value: "Jingga", word: "Jeruk", emoji: "🍊", color: "bg-orange-500", description: "Warna buah jeruk" },
  { id: "ungu", label: "Ungu", value: "Ungu", word: "Anggur", emoji: "🍇", color: "bg-purple-500", description: "Warna buah anggur" },
].map((color) => ({
  ...color,
  speech: `${color.value}. ${color.word}. ${color.description}.`,
}));

export const topics = [
  {
    id: "huruf",
    label: "Huruf",
    title: "Belajar Huruf",
    icon: "🔤",
    description: "Kenali huruf alfabet dan kata yang dimulai dengan huruf tersebut.",
    lessons: letters,
  },
  {
    id: "angka",
    label: "Angka",
    title: "Belajar Angka",
    icon: "🔢",
    description: "Ayo menghitung apel dan mengenal angka satu sampai sepuluh.",
    lessons: numbers,
  },
  {
    id: "warna",
    label: "Warna",
    title: "Belajar Warna",
    icon: "🎨",
    description: "Temukan warna cerah di sekitar kita dan contoh bendanya.",
    lessons: colors,
  },
];
