# Ceria Belajar

Aplikasi pembelajaran anak untuk mengenal huruf, angka, dan warna. Frontend dibangun dengan React dan Vite, sedangkan backend dibangun dengan NestJS.

## Struktur Project

- `frontend/`: aplikasi React
- `backend/`: REST API NestJS untuk data pelajaran

## Menjalankan Aplikasi

### Backend

```powershell
cd backend
npm install
npm run start:dev
```

API berjalan di `http://localhost:3000`.

### Frontend

```powershell
cd frontend
npm install
npm run dev
```

Frontend berjalan di `http://localhost:5173`.

## Endpoint Pelajaran

- `GET /lessons`
- `GET /lessons/:id`
- `POST /lessons`
- `PATCH /lessons/:id`
- `DELETE /lessons/:id`

Pengujian endpoint tersedia di `backend/lessons.http`.
