# Portofolio Minimalis Modern (Apple-Inspired)

Ini adalah website portofolio personal yang dibangun dengan **Next.js 15**, **TypeScript**, **Tailwind CSS**, dan **Framer Motion**. Desainnya terinspirasi oleh estetika Apple yang minimalis, futuristik, dan clean, dengan dominasi mode gelap.

## Fitur Utama

### 1. Desain UI/UX Premium
- **Apple Aesthetic**: Menggunakan font sans-serif bersih, sudut membulat (`rounded-xl`), bayangan lembut, dan efek glassmorphism.
- **Dark Mode Dominant**: Latar belakang utama `#0A0A0A` dengan aksen `#8A2BE2` (Violet) dan highlight `#BFFF00` (Neon Green).
- **Smooth Motion**: Transisi halaman dan animasi mikro yang halus menggunakan Framer Motion.

### 2. Struktur Konten Publik
- **Home**: Hero section fullscreen, pernyataan misi, dan call-to-action yang jelas.
- **Projects**: Menampilkan daftar proyek dengan status (Completed, In Progress, Draft, On Hold).
- **About**:
  - **Coding Journey**: Timeline interaktif perjalanan karir/belajar.
  - **Tools & Ecosystem**: Grid alat-alat yang digunakan (VSCode, Vercel, AI, dll).
- **Music Section**: Widget musik minimalis dengan preview lagu favorit.

### 3. Admin Panel Terintegrasi (`/admin`)
- **Autentikasi Aman**: Login menggunakan password yang disimpan di Environment Variable (`ADMIN_PASSWORD`).
- **Manajemen Proyek**: Tambah, edit, hapus, dan ubah status proyek.
- **Code Editor**: Integrasi **Monaco Editor** untuk mengedit file konfigurasi atau konten langsung dari browser.
- **GitHub Sync**: Mempublikasikan perubahan data (`projects.json`) atau file lainnya langsung ke repositori GitHub menggunakan GitHub API.

## Teknologi

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Editor**: @monaco-editor/react
- **Auth**: JWT (jose)
- **API Integration**: Octokit (GitHub REST API)

## Cara Menjalankan (Lokal)

1.  **Clone Repositori**
    ```bash
    git clone https://github.com/username/repo-name.git
    cd repo-name
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Setup Environment Variables**
    Buat file `.env.local` di root direktori dan isi:
    ```env
    ADMIN_PASSWORD=rahasia_anda
    JWT_SECRET=kunci_rahasia_jwt_anda
    GITHUB_TOKEN=token_github_anda_dengan_scope_repo
    GITHUB_REPO_OWNER=username_github_anda
    GITHUB_REPO_NAME=nama_repo_anda
    ```

4.  **Jalankan Server Development**
    ```bash
    npm run dev
    ```
    Buka `http://localhost:3000`.

## Deployment (Vercel)

1.  Push kode ke GitHub.
2.  Import proyek ke Vercel.
3.  Masukkan Environment Variables yang sama di pengaturan Vercel.
4.  Deploy.

## Lisensi

MIT
