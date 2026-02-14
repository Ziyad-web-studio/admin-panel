# Portofolio Minimalis Futuristik

Situs web portofolio pribadi modern bergaya brutalis yang dibangun dengan Next.js (App Router), Tailwind CSS, dan TypeScript.

## Fitur

- **Desain Futuristik**: Estetika bersih, gelap, dan kuat dengan aksen ungu.
- **Manajemen Proyek**: Panel admin untuk mengelola proyek.
- **CMS Berbasis File**: Proyek disimpan di `src/data/projects.json`.
- **Integrasi GitHub**: Menerbitkan pembaruan langsung ke GitHub untuk memicu deployment Vercel.
- **Autentikasi**: Akses admin berbasis kata sandi sederhana.

## Tumpukan Teknologi

- Next.js 16 (App Router)
- Tailwind CSS 4
- TypeScript
- Framer Motion
- Lucide React
- Octokit (GitHub API)
- Jose (JWT Auth)

## Pengaturan

1.  **Clone repositori:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Instal dependensi:**
    ```bash
    npm install
    ```

3.  **Variabel Lingkungan:**
    Salin `.env.example` ke `.env.local` dan isi nilainya:
    ```bash
    cp .env.example .env.local
    ```
    - `ADMIN_PASSWORD`: Kata sandi untuk mengakses panel admin.
    - `JWT_SECRET`: Kunci rahasia untuk menandatangani JWT (buat string acak yang kuat).
    - `GITHUB_TOKEN`: Token Akses Pribadi (PAT) GitHub dengan cakupan `repo`.
    - `GITHUB_REPO_OWNER`: Nama pengguna GitHub Anda.
    - `GITHUB_REPO_NAME`: Nama repositori ini.

4.  **Jalankan secara lokal:**
    ```bash
    npm run dev
    ```
    Kunjungi `http://localhost:3000` untuk situs publik.
    Kunjungi `http://localhost:3000/admin` untuk panel admin.

## Deployment di Vercel

1.  Push kode Anda ke repositori GitHub.
2.  Impor proyek ke Vercel.
3.  Tambahkan variabel lingkungan dari `.env.local` Anda ke pengaturan proyek Vercel.
4.  Deploy!

## Penggunaan Admin

1.  Arahkan ke `/admin`.
2.  Login dengan `ADMIN_PASSWORD` Anda.
3.  Tambahkan atau edit proyek.
4.  Klik "Publish to GitHub" untuk melakukan commit perubahan ke `src/data/projects.json`.
5.  Tunggu Vercel melakukan redeploy dengan konten baru.

## Lisensi

MIT
