Project: Strategic Tech Founder Portfolio
Phase: 1 – Public Portfolio Foundation
Status: Approved by CEO


---

1️⃣ EXECUTIVE SUMMARY

Website ini adalah public-facing strategic tech founder portfolio.

Tujuan:

Menampilkan karya secara profesional

Mencerminkan pola pikir sistem dan arsitektur

Memberikan positioning sebagai builder, bukan sekadar coder

Menjadi foundation untuk pengembangan sistem lebih lanjut


Admin panel dan automation system tidak termasuk dalam fase ini.


---

2️⃣ PROJECT SCOPE

Included (Phase 1)

Multi-page architecture

Public portfolio pages

Project grid

Project detail dynamic routing

Contact page

Typed data structure

SEO metadata

Responsive UI

Clean Apple-like minimal design

Vercel deployment ready


Excluded (Deferred)

Admin panel

JWT authentication

GitHub API automation

File upload system

Mini code editor

Server-side publishing system



---

3️⃣ PRIMARY FOCUS

Fokus utama fase ini:

> Build a stable, scalable, production-ready public portfolio.



Priority ranking:

1. Clean architecture


2. Structured data typing


3. SEO correctness


4. UI refinement


5. Motion subtlety



Bukan fitur kompleks.


---

4️⃣ TECH STACK (LOCKED)

Next.js (App Router)

TypeScript

Tailwind CSS

Framer Motion (subtle only)

GitHub (source control)

Vercel (deployment)


Stack tidak boleh diubah.


---

5️⃣ ROUTING STRUCTURE

/
├─ /projects
├─ /projects/[slug]
├─ /contact

All routes must:

Use proper metadata

Follow semantic HTML

Be SEO optimized

Use static generation where possible



---

6️⃣ FOLDER STRUCTURE

src/
 ├─ app/
 │   ├─ layout.tsx
 │   ├─ page.tsx
 │   ├─ projects/
 │   │   ├─ page.tsx
 │   │   ├─ [slug]/page.tsx
 │   ├─ contact/
 │   │   ├─ page.tsx
 ├─ components/
 │   ├─ Navbar.tsx
 │   ├─ Footer.tsx
 │   ├─ ProjectCard.tsx
 │   ├─ StatusBadge.tsx
 │   ├─ SectionWrapper.tsx
 │   ├─ Container.tsx
 ├─ data/
 │   ├─ projects.ts
 ├─ types/
 │   ├─ project.ts
 ├─ lib/
 │   ├─ utils.ts
 ├─ styles/
 │   ├─ globals.css

Separation of concerns is mandatory.


---

7️⃣ DATA ARCHITECTURE

Type Definition

export type ProjectStatus =
  | "completed"
  | "in-progress"
  | "on-hold";

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  thumbnail: string;
  techStack: string[];
  status: ProjectStatus;
  createdAt: string;
  githubUrl?: string;
  liveUrl?: string;
}

Data source: src/data/projects.ts

No draft state in Phase 1.


---

8️⃣ UI DESIGN PRINCIPLES

Identity

Minimal but informative like SaaS founder website.

Tone:

Professional

Calm

Rational

Structured


Not:

Overanimated

Neon heavy

Playful

Chaotic



---

Color System

Primary Background: #0A0A0A

Accent: #8A2BE2

Highlight: #BFFF00 (micro only)


No glow effects. No aggressive gradients. Spacing generous.


---

Motion Rules

Duration around 0.4s

Ease out

Opacity + translateY

No bounce

No exaggerated scaling



---

9️⃣ PAGE STRUCTURE DETAILS

Home Page

Sections:

1. Hero


2. Core Focus Pillars


3. Selected Projects


4. Strategic Positioning



Hero includes:

Strong headline

Subheadline

CTA to /projects

Secondary to /contact



---

Projects Page

Grid:

Desktop 3 columns

Tablet 2

Mobile 1


Each card:

Thumbnail

Title

Short description

Status badge

Tech stack tags

Creation date


Status styling:

Completed → subtle violet border

In Progress → small neon dot

On Hold → reduced opacity



---

Project Detail Page

Structure:

Title

Status

Date

Tech stack

Problem

Solution

Architecture decision

GitHub link

Live link


Must use dynamic route by slug.


---

Contact Page

Contains:

Short positioning paragraph

GitHub link

TikTok link

Email

Minimal layout


No backend form in Phase 1.


---

🔟 SEO REQUIREMENTS

Each page must implement:

Metadata export

Open Graph tags

Descriptive title

Semantic structure

Proper heading hierarchy


Project detail pages must generate dynamic metadata.


---

11️⃣ RENDERING STRATEGY

Static rendering for home and projects

Static generation for project detail via generateStaticParams

No unnecessary client components

Use server components by default



---

12️⃣ DEPLOYMENT STRATEGY

Workflow:

1. Develop locally


2. Commit to GitHub main branch


3. Vercel auto deploy


4. GitHub remains source of truth



No environment variables required in Phase 1.


---

13️⃣ SCALABILITY PREPARATION

Although admin is excluded, structure must allow future:

/admin route addition

API route addition

Auth middleware

GitHub integration layer


Architecture must remain extendable.


---

🚀 EXECUTION PLAN v1.0

Step 1 – Initialize Project

Create Next.js app

Setup TypeScript

Install Tailwind

Configure global styles


Step 2 – Define Types

Create project type

Create sample data


Step 3 – Build Layout

Navbar

Footer

Container system


Step 4 – Implement Home Page

Hero

Core pillars

Selected projects section


Step 5 – Implement Projects Page

Grid layout

ProjectCard component

StatusBadge component


Step 6 – Implement Dynamic Project Detail

Slug routing

generateStaticParams

Metadata per project


Step 7 – Implement Contact Page

Step 8 – SEO Optimization

Step 9 – Motion Refinement

Step 10 – Production Testing

Mobile test

Lighthouse test

Performance check

Responsiveness validation



---

FINAL CTO NOTE

Fokus kita sekarang adalah fondasi arsitektur dan branding positioning.

Tidak ada fitur tambahan. Tidak ada scope creep. Tidak ada eksperimen liar.

Kita bangun struktur yang bersih. Karena founder tidak membangun dengan emosi. Founder membangun dengan sistem.


📘 DOCUMENT ADDENDUM v1.1

Project: Strategic Tech Founder Portfolio
Phase: Public Portfolio
Style Direction: Hybrid SaaS + Dashboard
Hero Type: Split Layout + Abstract System UI


---

1️⃣ HERO DESIGN SPECIFICATION

Objective

Membangun hero section yang:

Menunjukkan positioning founder

Memberi kesan sistem dan struktur

Tidak terlihat seperti template portfolio biasa

Konsisten dengan dark minimal aesthetic



---

Layout Architecture

Desktop:

2 column grid (50 / 50)

Max width 1200px

Gap 64px

Vertical padding 120px


Mobile:

Text stack

Visual stack

Padding 64px



---

Left Column Structure

1. H1 (max 10 words)


2. Short founder positioning paragraph


3. CTA Group (Primary + Secondary)



No extra badges. No floating elements. No noisy animations.


---

Right Column: Abstract System UI Card

Concept

Sebuah dashboard-style card yang menampilkan:

Project analytics block

Status chips

Contribution-like grid preview

Structured layout blocks


Ini bukan data real. Ini visual representation of system thinking.


---

Abstract Card Structure

Card container:

Background: #171717

Border: #262626

Radius: 16px

Padding: 24px

Elevation level 1


Inside card:

Section 1:

Title: “System Overview”

Small status chip (Active)


Section 2:

3 metric blocks:

Projects

Systems Built

Architecture Score (dummy aesthetic)



Section 3:

Mini heatmap grid (green micro accent)


Section 4:

Recent activity list (3 items)


Semua aesthetic. Tidak over-detailed.


---

2️⃣ DESIGN SYSTEM LOCK

Spacing

8px base system.

Allowed: 8 16 24 32 48 64 96


---

Radius

8px small
16px card
9999px chip

No random values.


---

Elevation

Level 0 → flat
Level 1 → subtle shadow
Level 2 → hero focus

Shadow opacity max 10%.


---

Typography

H1 → Large, tight
H2 → Section
Body → 16px
Small → 14px
Chip → 12px

Max 5 font sizes.


---

Color Tokens

Background: #0A0A0A

Surface: #171717

Border: #262626

Text primary: #F5F5F5

Text secondary: #A3A3A3

Accent: #8A2BE2

Micro highlight: #BFFF00

No glow. No gradient heavy. No multiple accent colors.


---

3️⃣ MVP DEFINITION

Sekarang kita realistis.

MVP bukan “sempurna”. MVP adalah “layak dipublikasikan”.


---

MVP MUST HAVE

1. Hero split layout


2. Selected projects section


3. Projects page grid


4. Project detail page


5. Contact page


6. Responsive layout


7. SEO metadata basic


8. Clean design system




---

MVP NICE TO HAVE

1. Subtle animation


2. Heatmap aesthetic in hero


3. Pillars section (System Design / Automation / Architecture)


4. Hover micro-interactions




---

NOT INCLUDED IN MVP

1. Admin panel


2. GitHub automation


3. CMS


4. Forms backend


5. Advanced analytics




---

4️⃣ MVP EXECUTION ORDER

Step 1: Initialize project + Tailwind config

Step 2: Create layout + navbar + container system

Step 3: Implement Hero (static first, no animation)

Step 4: Implement Projects data structure

Step 5: Build Projects grid

Step 6: Dynamic detail page

Step 7: Contact page

Step 8: Refine design system consistency

Step 9: Add subtle motion

Step 10: SEO refinement + Lighthouse check


---

5️⃣ SUCCESS CRITERIA FOR MVP

Website dianggap siap publish jika:

Lighthouse score > 90

Tidak ada hydration warning

Layout konsisten spacing

No visual noise

Responsif 100%

Dark mode aesthetic cohesive.


1. Objective
Menghasilkan Master Technical Specification Document sebagai dokumen otoritas tunggal yang merangkum seluruh arsitektur, standar desain, dan logika sistem untuk fase pembangunan "Strategic Tech Founder Portfolio". Dokumen ini berfungsi sebagai referensi final bagi CTO dan tim eksekusi untuk memastikan tidak ada deviasi teknis selama fase pengkodean.

2. System Logic Explanation
Sistem portfolio ini dirancang sebagai aplikasi web performa tinggi dengan arsitektur Static Site Generation (SSG).

Core Engine: Next.js (App Router) yang mengekstraksi data dari src/data/projects.ts pada saat build-time.

Data Integrity Layer: Menggunakan TypeScript Strict Mode dan Interface Mapping untuk memastikan konsistensi antara struktur data proyek dengan komponen UI.

Design Orchestration: Menggunakan sistem token pada Tailwind CSS yang memetakan nilai desain (warna, spacing, radius) ke dalam utility classes yang bersifat tetap (immutable).

Routing & SEO: Logika generateStaticParams akan secara otomatis menciptakan rute statis untuk setiap slug proyek, sementara fungsi generateMetadata menjamin optimasi mesin pencari secara dinamis berdasarkan konten proyek.

3. Constraints
Technology Stack: Terpaku pada Next.js, TypeScript, Tailwind CSS, dan Framer Motion. Penggunaan pustaka UI pihak ketiga (seperti MUI atau Bootstrap) dilarang.

Design Tokens:

Colors: Background (#0A0A0A), Surface (#171717), Border (#262626), Text Primary (#F5F5F5), Accent (#8A2BE2), Highlight (#BFFF00).

Spacing: Sistem berbasis 8px (8, 16, 24, 32, 48, 64, 96).

Typography: Maksimal 5 ukuran font tetap.

Functional Scope: Terbatas pada Portfolio Publik, Project Grid, Detail Project (Dynamic), dan Halaman Kontak. Tidak ada fitur Admin, Auth, atau Database Eksternal di Phase 1.

Performance: Skor Lighthouse wajib > 90 untuk seluruh kategori (Performance, Accessibility, Best Practices, SEO).

4. Potential Risks
Accessibility (Contrast): Penggunaan warna aksen ungu (#8A2BE2) pada latar belakang hitam pekat berisiko gagal dalam uji kontras WCAG untuk teks kecil.

Technical Debt (Scalability): Meskipun admin panel ditiadakan, penulisan logika yang terlalu terikat pada file statis dapat menyulitkan migrasi ke CMS/Database di masa depan jika tidak menggunakan pola Data Access Layer (DAL).

Hydration Errors: Kompleksitas visual pada Dashboard-style Hero Card dapat memicu perbedaan antara server-rendered HTML dan client-side DOM jika manipulasi elemen dilakukan terlalu dini sebelum hidrasi selesai.

Build Failures: Kesalahan penulisan slug atau hilangnya field wajib pada data proyek akan menyebabkan kegagalan proses integrasi berkelanjutan (CI/CD).

5. Validation Strategy
Static Analysis: Eksekusi npm run build dan npm run lint untuk memvalidasi integritas kode dan tipe data sebelum setiap rilis.

Visual Audit: Perbandingan manual dan otomatis terhadap Design Tokens untuk memastikan tidak ada penggunaan arbitrary values pada Tailwind.

Core Web Vitals Check: Menggunakan Lighthouse dan PageSpeed Insights untuk memverifikasi kepatuhan terhadap standar performa yang ditetapkan.

Edge Case Routing: Pengujian manual terhadap rute 404 dan slug yang tidak valid untuk memastikan sistem penanganan error berfungsi sesuai standar arsitektur Next.js.

A11y Testing: Audit aksesibilitas menggunakan Axe DevTools untuk memastikan navigasi dan rasio kontras mematuhi standar WCAG 2.1 Level AA.
