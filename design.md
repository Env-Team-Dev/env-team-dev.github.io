# env-team Design System

> Panduan visual resmi untuk semua produk digital env-team — website, konten medsos, dan aset brand. Dokumen ini adalah sumber kebenaran tunggal untuk semua keputusan desain.

---

## Daftar Isi

1. [Brand Principles](#1-brand-principles)
2. [Color](#2-color)
3. [Typography](#3-typography)
4. [Spacing & Grid](#4-spacing--grid)
5. [Border Radius & Shadow](#5-border-radius--shadow)
6. [Components](#6-components)
7. [Icons](#7-icons)
8. [Motion & Animation](#8-motion--animation)
9. [Tone of Voice](#9-tone-of-voice)
10. [Social Media Kit](#10-social-media-kit)
11. [Do & Don't](#11-do--dont)

---

## 1. Brand Principles

env-team bukan agensi besar dengan banyak lapisan birokrasi. Kami adalah tim developer yang bergerak cepat, bicara jujur, dan membangun produk yang benar-benar berfungsi. Visual identity kami mencerminkan itu.

| Prinsip | Artinya dalam Desain |
|---|---|
| **Bold** | Tipografi besar, kontras tinggi, warna yang tidak takut tampil |
| **Bersih** | Tidak ada dekorasi yang tidak punya tujuan |
| **Teknis** | Elemen visual yang mengacu pada dunia coding — monospace, kode, terminal |
| **Hidup** | Aksen neon yang memperlihatkan energi dan semangat |

---

## 2. Color

### Palette Utama

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   ████████████   ████████████   ████████████████████████████   │
│   #0A0A0A        #FFFFFF        #C8FF00                         │
│   Void Black     Pure White     Neon Lime                       │
│   Primary BG     Light Surface  Brand Accent                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Semantic Colors

| Token | Hex | Penggunaan |
|---|---|---|
| `--color-bg-primary` | `#0A0A0A` | Background utama (dark sections) |
| `--color-bg-secondary` | `#111111` | Card background |
| `--color-bg-tertiary` | `#161616` | Nested card, inner surface |
| `--color-bg-light` | `#FFFFFF` | Light sections (services) |
| `--color-accent` | `#C8FF00` | CTA, highlight, aksen utama |
| `--color-accent-muted` | `rgba(200,255,0,0.1)` | Accent sebagai background subtle |
| `--color-border` | `#1F1F1F` | Border default (dark mode) |
| `--color-border-light` | `#E5E5E5` | Border default (light mode) |
| `--color-text-primary` | `#FFFFFF` | Body text di dark bg |
| `--color-text-muted` | `#888888` | Teks sekunder, caption |
| `--color-text-hint` | `#555555` | Footer text, placeholder |
| `--color-text-dark` | `#0A0A0A` | Text di atas aksen kuning |

### Penggunaan Warna

```
Dark Section (default)          Light Section (alternating)
┌─────────────────────┐         ┌─────────────────────┐
│  BG: #0A0A0A        │         │  BG: #FFFFFF        │
│  Text: #FFFFFF      │         │  Text: #0A0A0A      │
│  Muted: #888888     │         │  Muted: #888888     │
│  Border: #1F1F1F    │         │  Border: #E5E5E5    │
│  Accent: #C8FF00    │         │  Accent: #0A0A0A    │
└─────────────────────┘         └─────────────────────┘

Accent Section (CTA / Stats)
┌─────────────────────┐
│  BG: #C8FF00        │
│  Text: #0A0A0A      │
│  Muted: rgba(0,0,0,0.6) │
│  Button: #0A0A0A    │
└─────────────────────┘
```

### Aturan Warna

- `#C8FF00` **hanya dipakai sebagai aksen** — jangan jadikan background section utuh kecuali untuk CTA / stats bar
- Teks di atas `#C8FF00` **selalu** `#0A0A0A` — tidak boleh putih
- Jangan menggunakan warna lain di luar palette ini tanpa alasan kuat

---

## 3. Typography

### Font Families

| Peran | Font | CDN |
|---|---|---|
| **Display / Heading** | Space Grotesk | `fonts.google.com/specimen/Space+Grotesk` |
| **Body / UI** | Inter | `fonts.google.com/specimen/Inter` |

```css
/* Import */
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700;800&family=Inter:wght@400;500&display=swap');

--font-display: 'Space Grotesk', sans-serif;
--font-body:    'Inter', sans-serif;
```

### Type Scale

| Token | Font | Size | Weight | Penggunaan |
|---|---|---|---|---|
| `--text-hero` | Space Grotesk | `58px` | `800` | Heading utama hero |
| `--text-h1` | Space Grotesk | `44px` | `800` | Section heading besar |
| `--text-h2` | Space Grotesk | `36px` | `800` | Sub-section heading |
| `--text-h3` | Space Grotesk | `22px` | `700` | Card title, team name |
| `--text-h4` | Space Grotesk | `18px` | `700` | Label besar, sub-card |
| `--text-body-lg` | Inter | `16px` | `400` | Body utama |
| `--text-body` | Inter | `15px` | `400` | Body alternatif, sub-text |
| `--text-sm` | Inter | `13px` | `400` | Caption, meta, footer |
| `--text-xs` | Inter | `11px` | `700` | Label, badge, eyebrow |
| `--text-marquee` | Space Grotesk | `28px` | `800` | Ticker / marquee |

### Letter Spacing

```css
/* Untuk hero & heading besar */
letter-spacing: -2px;    /* hero h1 */
letter-spacing: -1.5px;  /* h1 */
letter-spacing: -1px;    /* h2 */

/* Untuk label / eyebrow */
letter-spacing: 0.05em;  /* badge, tag */
letter-spacing: 0.10em;  /* eyebrow uppercase */
```

### Contoh Hierarki

```
ABOUT US  ← Eyebrow (11px, Space Grotesk, 700, #C8FF00, UPPERCASE, tracking 0.1em)
──────────────────────────────────────────────
Turning Ideas Into    ← h2 (40px, Space Grotesk, 800, letter-spacing -1px)
Digital Reality

We may be a small team,   ← Body (15–16px, Inter, 400, color #888, line-height 1.8)
but our creativity knows
no bounds.
```

---

## 4. Spacing & Grid

### Spacing Scale

Gunakan kelipatan `8px` sebagai satuan dasar.

| Token | Value | Penggunaan |
|---|---|---|
| `--space-1` | `4px` | Gap micro (tag, badge internal) |
| `--space-2` | `8px` | Gap antar elemen kecil |
| `--space-3` | `12px` | Gap card-internal |
| `--space-4` | `16px` | Gap default antar item grid |
| `--space-5` | `20px` | Padding kecil |
| `--space-6` | `24px` | Padding card, gap medium |
| `--space-8` | `32px` | Margin section-internal |
| `--space-10` | `40px` | Padding horizontal konten |
| `--space-16` | `64px` | Padding section vertikal kecil |
| `--space-20` | `80px` | Padding section vertikal utama |

### Grid Layout

```
Web Profile — Desktop (1440px)
┌────────────────────────────────────────────────────────────────┐
│  40px                   Content                           40px │
│  ◄──►├─────────────────────────────────────────────────┤◄──►  │
│       │            max-width: 1200px                   │       │
└────────────────────────────────────────────────────────────────┘

Hero Grid (2 kolom asimetris)
┌─────────────────────────┬──────────────────────┐
│                         │                      │
│   1fr (kiri)            │   380px (kanan)      │
│   Headline + CTA        │   Visual Card        │
│                         │                      │
└─────────────────────────┴──────────────────────┘

Services Grid (2 kolom simetris)
┌──────────────────────┬──────────────────────┐
│   1fr               │   1fr               │
│   Service Card 01   │   Service Card 02   │
├──────────────────────┼──────────────────────┤
│   Service Card 03   │   Service Card 04   │
└──────────────────────┴──────────────────────┘

Team Grid (3 kolom)
┌──────────────┬──────────────┬──────────────┐
│   Member 1  │   Member 2  │   Member 3  │
└──────────────┴──────────────┴──────────────┘
```

### Breakpoints

| Nama | Width | Perubahan Layout |
|---|---|---|
| Desktop | `≥ 1024px` | Layout penuh, 2–3 kolom |
| Tablet | `768px – 1023px` | Hero stack, grid 2 kolom |
| Mobile | `< 768px` | Semua single column, font dikecilkan |

---

## 5. Border Radius & Shadow

### Border Radius

| Token | Value | Dipakai Pada |
|---|---|---|
| `--radius-sm` | `8px` | Badge, tag kecil, input |
| `--radius-md` | `12px` | Card kecil, stat card |
| `--radius-lg` | `16px` | Card utama, service card, team card |
| `--radius-xl` | `20px` | Hero visual card |
| `--radius-full` | `9999px` | Button, pill, avatar |

### Shadow

env-team **tidak menggunakan drop shadow** sebagai dekorasi. Kontras warna sudah cukup sebagai pemisah. Shadow hanya dipakai untuk:

```css
/* Focus ring — aksesibilitas */
box-shadow: 0 0 0 3px rgba(200, 255, 0, 0.4);

/* Tidak ada shadow dekoratif. */
```

### Border

```css
/* Default border dark */
border: 1px solid #1F1F1F;

/* Hover / emphasis border dark */
border: 1px solid #2A2A2A;

/* Accent border (hover card) */
border: 1px solid #C8FF00;

/* Default border light */
border: 1px solid #E5E5E5;
```

---

## 6. Components

### 6.1 Button

```
VARIASI BUTTON:

[  Mulai Proyek ↗  ]     ← Primary (BG: #C8FF00, Text: #0A0A0A)
[  Lihat Portfolio  ]    ← Outline (Border: #333, Text: #FFF)
[  Hubungi Kami →  ]     ← Dark (BG: #0A0A0A, Text: #FFF) — di atas accent section

Spesifikasi:
  padding:       14px 28px
  border-radius: 9999px (pill)
  font:          Space Grotesk, 700, 15px
  transition:    opacity 0.2s, transform 0.1s
  active:        scale(0.97)
```

```css
.btn-primary {
  background: #C8FF00;
  color: #0A0A0A;
  padding: 14px 28px;
  border-radius: 9999px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 15px;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;
}
.btn-primary:hover { opacity: 0.88; }
.btn-primary:active { transform: scale(0.97); }
```

### 6.2 Badge / Pill

```
[ • Open for Projects ]   ← Status badge (BG: #161616, Border: #2A2A2A, Text: #C8FF00)
[ env-team.dev        ]   ← Label pill (sama)
[ Instagram ]             ← Social pill di CTA section (BG: rgba(0,0,0,0.1), Text: #0A0A0A)

Spesifikasi:
  padding:       6px 16px
  border-radius: 9999px
  font:          Space Grotesk / Inter, 700, 12px
  letter-spacing: 0.05em
```

### 6.3 Eyebrow Label

```
ABOUT US  ←  selalu uppercase, Space Grotesk 700, 11–12px
──
Sebelumnya ada garis pendek 20px warna aksen
```

```css
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.10em;
  color: #C8FF00;
}
.eyebrow::before {
  content: '';
  width: 20px;
  height: 2px;
  background: #C8FF00;
  display: inline-block;
}
/* Di light section: ganti color ke #0A0A0A */
```

### 6.4 Stat Card

```
┌──────────────┐
│   2000+      │  ← Number: Space Grotesk 800, 36px, #0A0A0A (di stats bar kuning)
│   Company    │  ← Label: Inter 500, 13px, rgba(0,0,0,0.6)
└──────────────┘

Di hero (dark version):
┌──────────────┐
│   10+        │  ← Space Grotesk 800, 22px, #C8FF00
│   Proyek     │  ← Inter 400, 11px, #666
└──────────────┘
  BG: #111, Border: 1px solid #222, Border-radius: 12px, Padding: 14px
```

### 6.5 Service Card

```
┌──────────────────────────────────────────────┐
│   01                               [ → ]     │
│   Website Development                        │
└──────────────────────────────────────────────┘
Default:  BG white, Border: #E5E5E5
Hover:    BG #0A0A0A, Border: #0A0A0A, Text: #FFF, Arrow BG: #C8FF00

Spesifikasi:
  padding:       28px
  border-radius: 16px
  layout:        flex, space-between, center
  transition:    background 0.2s, border-color 0.2s, color 0.2s
```

### 6.6 Team Card

```
┌─────────────────────────────┐
│  [ ET ]  ← Avatar           │   Avatar: 56px circle, BG: #1F1F1F, Text: #C8FF00, 800, 18px
│  Lead Dev                   │   Name: Space Grotesk 700, 16px
│  Project Manager            │   Role: Inter 400, 13px, #666
│                             │
│  [React] [Node.js] [UI/UX]  │   Tag: 11px, BG: #1A1A1A, Border: #2A2A2A, Radius: 100px
└─────────────────────────────┘
  BG: #111, Border: 1px solid #1F1F1F
  Hover: Border: 1px solid #C8FF00
  Padding: 24px, Border-radius: 16px
```

### 6.7 Navigation

```
┌────────────────────────────────────────────────────────┐
│  env-team     About  Services  Portfolio  Team   [CTA] │
└────────────────────────────────────────────────────────┘
  BG:           #0A0A0A
  Border-bottom: 1px solid #1F1F1F
  Padding:      20px 40px
  Logo:         Space Grotesk 800, 20px — "env" dalam #C8FF00
  Links:        Inter 500, 14px, #AAA → hover #FFF
  CTA:          btn-primary kecil (padding: 10px 22px)
```

---

## 7. Icons

Gunakan **Tabler Icons** (outline style) sebagai icon library utama.

```html
<!-- Load via CDN -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css">

<!-- Penggunaan -->
<i class="ti ti-code"></i>
<i class="ti ti-devices"></i>
<i class="ti ti-server"></i>
<i class="ti ti-arrow-right"></i>
```

### Ukuran Icon

| Konteks | Size | CSS |
|---|---|---|
| Inline dalam teks | 16px | `font-size: 16px; vertical-align: -2px` |
| Button / CTA | 18px | `font-size: 18px` |
| Dekoratif / Section | 24–32px | `font-size: 24–32px` |
| Background overlay (subtle) | 48px+ | `font-size: 48px; opacity: 0.12` |

### Icon yang Sering Dipakai

| Icon | Token | Penggunaan |
|---|---|---|
| `ti-code` | Kode / Development | About, service card |
| `ti-devices` | Responsif / Multi-device | Service section |
| `ti-server` | Backend / Server | Service section |
| `ti-arrow-right` | Navigasi → | Button, service card arrow |
| `ti-brand-instagram` | Instagram | Footer, social |
| `ti-brand-tiktok` | TikTok | Footer, social |
| `ti-brand-whatsapp` | WhatsApp | Kontak |
| `ti-star-filled` | Rating / Review | Testimonial |

---

## 8. Motion & Animation

### Prinsip

- Animasi harus punya **tujuan** — tidak sekadar dekorasi
- Durasi singkat: `0.15s – 0.3s` untuk interaksi, `0.4s – 0.8s` untuk entrance
- Gunakan `ease-out` untuk elemen masuk, `ease-in-out` untuk loop

### Animasi yang Dipakai

#### Marquee / Ticker

```css
@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.marquee-track {
  animation: marquee 16s linear infinite;
  white-space: nowrap;
  display: flex;
}
/* Track harus berisi konten 2x untuk seamless loop */
```

#### Pulse (Status badge dot)

```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.3; }
}
.status-dot {
  animation: pulse 2s ease-in-out infinite;
}
```

#### Hover Transitions

```css
/* Card hover — semua transisi 0.2s */
transition: background 0.2s, border-color 0.2s, color 0.2s;

/* Button active */
transition: transform 0.1s;
:active { transform: scale(0.97); }

/* Link hover */
transition: color 0.2s;
```

#### Scroll Reveal (opsional, implementasi dengan JS)

```js
// Gunakan Intersection Observer untuk fade-in saat scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Yang TIDAK Boleh

- Jangan gunakan `animation` pada lebih dari 3 elemen sekaligus dalam satu viewport
- Jangan buat animasi yang bloking (tidak mengganggu scroll)
- Selalu sediakan `@media (prefers-reduced-motion: reduce)` untuk aksesibilitas

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 9. Tone of Voice

### Prinsip

env-team berbicara seperti developer yang kompeten dan jujur — bukan seperti korporat besar yang berbasa-basi.

| Kami Berbicara | Kami Tidak Berbicara |
|---|---|
| Langsung dan jelas | Berputar-putar dengan kata marketing |
| Percaya diri tanpa sombong | Merendah berlebihan |
| Teknis tapi tetap mudah dipahami | Terlalu teknis hingga membingungkan klien |
| Ramah dan personal ("kamu") | Formal dan kaku ("Anda", "Bapak/Ibu") |
| Aksi nyata ("Mulai sekarang") | Pasif ("Silahkan pertimbangkan") |

### Contoh Copy

```
❌ "Kami menyediakan solusi pengembangan web terdepan dan inovatif
    yang memenuhi kebutuhan transformasi digital bisnis Anda."

✅ "Kami bikin website yang kerja keras untuk bisnis kamu —
    dari landing page sederhana sampai aplikasi web yang kompleks."

---

❌ "Inovasi tanpa batas untuk masa depan digital Anda."

✅ "Kamu punya ide. Kami punya kodenya."

---

❌ "Hubungi kami untuk informasi lebih lanjut."

✅ "DM kami — konsultasi pertama gratis. 💬"
```

### Struktur CTA

```
[Verb] + [Objek] + [Benefit/Urgency]

Contoh:
- "Mulai Proyek →"
- "Lihat Portfolio ↗"
- "Hubungi Kami — Gratis"
- "Cek Layanan Kami"
```

---

## 10. Social Media Kit

### Spesifikasi Ukuran

| Platform | Format | Ukuran |
|---|---|---|
| Instagram Feed | Landscape | `1080 × 1080px` |
| Instagram Story | Vertikal | `1080 × 1920px` |
| Instagram Carousel | Landscape | `1080 × 1080px` (per slide) |
| TikTok Video | Vertikal | `1080 × 1920px` |
| TikTok Thumbnail | Vertikal | `1080 × 1920px` |
| Profil Picture | Kotak | `400 × 400px` |

### Template Struktur Konten Feed

```
┌────────────────────────────────┐
│  BG: #0A0A0A                   │
│                                │
│   ████████████████  ← Nomor/tag kecil (#C8FF00, 12px)
│   Heading Besar    ← Space Grotesk 800, 36–44px
│   Konten           ← Inter 400, 18px, #888
│                                │
│   ┌──────────────┐             │
│   │  Visual / Icon│            │
│   └──────────────┘             │
│                                │
│  env-team  ←  watermark kecil  │
└────────────────────────────────┘
```

### Warna Background Variasi Konten

| Jenis Konten | BG | Aksen |
|---|---|---|
| Edukasi (tips & info) | `#0A0A0A` | `#C8FF00` |
| Portfolio showcase | `#FFFFFF` | `#0A0A0A` |
| Behind the scenes | `#111111` | `#C8FF00` |
| Announcement / promo | `#C8FF00` | `#0A0A0A` |

### Font untuk Konten Medsos (Canva)

Karena Google Fonts mungkin tidak tersedia di semua tools:

| Peran | Alternatif Canva |
|---|---|
| Heading (Space Grotesk) | `DM Sans` atau `Syne` |
| Body (Inter) | `Inter` (tersedia di Canva) |

---

## 11. Do & Don't

### ✅ Do

- Gunakan `#C8FF00` sebagai satu-satunya warna cerah — konsistensi adalah kunci
- Selalu pasangkan heading Space Grotesk dengan body Inter
- Berikan cukup whitespace — desain yang sempit terasa murah
- Gunakan kontras tinggi antara text dan background
- Hover state harus selalu terasa signifikan (bukan hanya opacity 0.9)
- Copy harus singkat dan berbasis aksi
- Selalu test di mobile sebelum publish

### ❌ Don't

- Jangan tambah warna baru di luar palette tanpa diskusi tim
- Jangan gunakan lebih dari 2 font families dalam satu halaman
- Jangan buat button yang tidak ada hover state-nya
- Jangan gunakan `font-weight: 600` — pakai 700 (bold) atau 500 (medium)
- Jangan taruh teks di atas foto tanpa overlay gelap
- Jangan pakai `border-radius` berbeda-beda dalam satu halaman
- Jangan gunakan shadow drop sebagai dekorasi — bukan bagian dari visual language env-team
- Jangan resize logo dengan mengubah proporsi

---

## CSS Variables — Quick Reference

```css
:root {
  /* Colors */
  --color-bg-primary:    #0A0A0A;
  --color-bg-secondary:  #111111;
  --color-bg-tertiary:   #161616;
  --color-bg-light:      #FFFFFF;
  --color-accent:        #C8FF00;
  --color-accent-muted:  rgba(200, 255, 0, 0.10);
  --color-border:        #1F1F1F;
  --color-border-light:  #E5E5E5;
  --color-text-primary:  #FFFFFF;
  --color-text-muted:    #888888;
  --color-text-hint:     #555555;
  --color-text-dark:     #0A0A0A;

  /* Typography */
  --font-display: 'Space Grotesk', sans-serif;
  --font-body:    'Inter', sans-serif;

  /* Spacing */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-8:  32px;
  --space-10: 40px;
  --space-16: 64px;
  --space-20: 80px;

  /* Border Radius */
  --radius-sm:   8px;
  --radius-md:   12px;
  --radius-lg:   16px;
  --radius-xl:   20px;
  --radius-full: 9999px;
}
```

---

*Design System ini adalah dokumen hidup. Update setiap kali ada keputusan desain baru yang disepakati tim.*

*env-team Design System — v1.0 | Juni 2025*
