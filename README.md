# Wesly Rismahadi — Personal Portfolio

Website portofolio pribadi **Wesly Adam Rismahadi**, mahasiswa Computer Science di Universitas Bina Nusantara dengan fokus pada pengembangan frontend. Website ini menampilkan proyek, keahlian teknis, pendidikan, pengalaman organisasi, dan informasi kontak.

Dibangun menggunakan **Next.js App Router**, **React**, dan **TypeScript**, dengan desain responsif bertema gelap dan aksen lime.

## Fitur

- Navigasi responsif dengan menu untuk perangkat mobile.
- Animasi mesin ketik dan efek pixel pada judul utama.
- Tiga proyek pilihan: Secure Notes, Quiz App, dan Learning Support Platform.
- Detail proyek dengan animasi buka-tutup dan efek fade.
- Informasi pendidikan, keahlian, pengalaman HIMCOMSCI, dan pelatihan.
- Tombol unduh CV dalam format PDF.
- Tombol kontak yang membuka Gmail dengan alamat penerima terisi.
- Tautan GitHub dan LinkedIn.
- Metadata halaman dan favicon.
- Dukungan preferensi `prefers-reduced-motion` untuk mengurangi animasi.

## Teknologi

| Teknologi | Penggunaan |
| --- | --- |
| Next.js 16 | Framework dan App Router |
| React 19 | Komponen antarmuka |
| TypeScript | Pemeriksaan tipe |
| CSS | Styling, layout responsif, dan animasi judul |
| Web Animations API | Animasi detail proyek |
| Prettier | Format kode |

## Menjalankan Secara Lokal

### Prasyarat

- Node.js versi **20.9 atau lebih baru**.
- npm.

### Instalasi

1. Clone repository atau ekstrak file proyek.
2. Buka folder yang berisi `package.json` di VS Code.
3. Jalankan perintah berikut pada terminal:

```bash
npm ci
npm run dev
```

4. Buka [http://localhost:3000](http://localhost:3000).

Jika proyek belum memiliki `package-lock.json`, gunakan `npm install` sebagai pengganti `npm ci`.

Website ini tidak memerlukan API key, database, atau konfigurasi environment variable.

## Perintah yang Tersedia

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Menjalankan development server |
| `npm run build` | Membuat build produksi |
| `npm run start` | Menjalankan hasil build produksi |
| `npm run typecheck` | Memeriksa tipe TypeScript |
| `npm run format` | Merapikan kode menggunakan Prettier |

Untuk menjalankan versi produksi secara lokal:

```bash
npm run build
npm run start
```

## Struktur Proyek

| Lokasi | Keterangan |
| --- | --- |
| `app/layout.tsx` | Root layout, metadata, dan import CSS |
| `app/page.tsx` | Halaman utama yang menyusun seluruh komponen |
| `app/globals.css` | Styling global, responsive layout, dan animasi CSS |
| `components/Header.tsx` | Navigasi dan menu mobile |
| `components/Hero.tsx` | Perkenalan, animasi judul, dan tombol utama |
| `components/Projects.tsx` | Daftar proyek dan tautan repositori |
| `components/AnimatedDetails.tsx` | Komponen detail dengan animasi buka-tutup |
| `components/About.tsx` | Latar belakang dan pendidikan |
| `components/Skills.tsx` | Keahlian teknis |
| `components/Experience.tsx` | Pengalaman organisasi dan pelatihan |
| `components/Contact.tsx` | Kontak dan tautan sosial |
| `components/Footer.tsx` | Footer halaman |
| `public/` | CV dan favicon |
| `next.config.ts` | Konfigurasi Next.js |
| `tsconfig.json` | Konfigurasi TypeScript |

`Header` dan `AnimatedDetails` menggunakan Client Components untuk menangani interaksi pengguna. Bagian lain menggunakan Server Components, sementara animasi judul berjalan melalui CSS.

## Proyek yang Ditampilkan

### Secure Notes

Aplikasi catatan mobile dengan alur vault terkunci dan terbuka, editor autosave, serta tampilan benchmark enkripsi. Kontribusi berfokus pada frontend mobile dalam proyek kelompok.

**Teknologi:** React Native, Expo, TypeScript, Expo Router.

[Repositori Secure Notes](https://github.com/gertrudisrms04/secure-notes)

### Quiz App

Aplikasi kuis berbasis OpenTDB dengan login username, timer, perpindahan soal otomatis, ringkasan hasil, dan penyimpanan progres menggunakan localStorage.

**Teknologi:** React, TypeScript, Tailwind CSS, Vite.

Tautan proyek saat ini menuju [pencarian repo Quiz App di GitHub](https://github.com/theo00000?tab=repositories&q=quiz). Ganti dengan URL repositori langsung pada `components/Projects.tsx` setelah tersedia.

### Learning Support Platform

Platform belajar dengan katalog materi, pelacakan progres, autentikasi, dan AI Study Assistant berbasis konteks materi.

**Teknologi:** React, Express.js, MongoDB, JWT, Gemini API.

[Repositori Learning Support Platform](https://github.com/theo00000/learning-support-platform)

## Penyesuaian Konten

| Kebutuhan | File yang Diedit |
| --- | --- |
| Mengubah deskripsi utama | `components/Hero.tsx` |
| Mengubah latar belakang dan pendidikan | `components/About.tsx` |
| Menambah atau mengubah proyek | `components/Projects.tsx` |
| Mengubah keahlian | `components/Skills.tsx` |
| Mengubah pengalaman dan pelatihan | `components/Experience.tsx` |
| Mengubah tujuan email dan tautan sosial | `components/Contact.tsx` |
| Mengubah warna dan tampilan | `app/globals.css` |
| Mengubah judul dan deskripsi halaman | `app/layout.tsx` |
| Memperbarui CV | `public/Wesly-Rismahadi-CV.pdf` |

Tombol Gmail hanya membuka halaman penulisan email; pengunjung tetap menulis dan mengirim pesan sendiri.

## Deployment ke Vercel

1. Push proyek ke repository GitHub, termasuk `package-lock.json`.
2. Masuk ke [Vercel](https://vercel.com) dan import repository tersebut sebagai project baru.
3. Gunakan **Next.js** sebagai Framework Preset.
4. Pastikan Root Directory mengarah ke folder yang berisi `package.json`.
5. Pertahankan Build Command dan Output Directory bawaan Next.js.
6. Tidak perlu menambahkan environment variable untuk versi ini.
7. Klik **Deploy**.

Jangan sertakan `node_modules` dan `.next` dalam repository. Keduanya sudah dikecualikan melalui `.gitignore`.

## Kontak

**Wesly Adam Rismahadi**

- Email: [weslyadam856@gmail.com](mailto:weslyadam856@gmail.com)
- GitHub: [theo00000](https://github.com/theo00000)
- LinkedIn: [Wesly Rismahadi](https://www.linkedin.com/in/wesly-rismahadi)

## Referensi

- [Dokumentasi instalasi Next.js](https://nextjs.org/docs/app/getting-started/installation)
- [Konfigurasi build Vercel](https://vercel.com/docs/builds/configure-a-build)
