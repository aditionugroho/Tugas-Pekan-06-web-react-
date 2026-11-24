export class Lesson {
  id: number;
  title: string;
  topic: 'Huruf' | 'Angka' | 'Warna';
  level: 'Pemula' | 'Menengah';
  duration: number;
  completed: boolean;
  createdAt: string;
}
