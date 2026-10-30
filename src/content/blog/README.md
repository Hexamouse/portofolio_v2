# Cara Menambah Post Blog (MDX)

File ini hanya panduan, tidak akan tampil sebagai post karena
koleksinya hanya membaca file `.mdx`.

## 1. Buat file baru

Buat file di folder ini, misal `src/content/blog/judul-post-baru.mdx`.
Nama file = slug URL-nya. Contoh di atas akan jadi `/blog/judul-post-baru`.

## 2. Isi frontmatter di bagian atas

```mdx
---
title: "Judul Post Kamu"
description: "Satu-dua kalimat ringkasan, ini yang tampil di kartu blog."
pubDate: 2026-10-30
banner: "/blog/nama-banner.jpg"
bannerAlt: "Deskripsi banner"
tags: ["Astro", "Tutorial"]
draft: false
---
```

- `banner`: taruh gambarnya di `public/blog/`, lalu tulis path-nya
  diawali `/blog/`. Kalau tidak ada banner, kartu akan menampilkan
  huruf awal judul sebagai pengganti.
- `draft: true`: post disembunyikan dari homepage dan halaman `/blog`.

## 3. Tulis isi di bawah frontmatter

Pakai Markdown biasa (`#`, `**tebal**`, list, kode, link).
File MDX juga bisa menyisipkan komponen kalau suatu saat perlu.

## 4. Selesai — tanpa daftar manual

Tidak perlu mendaftarkan post di `index.astro` atau di tempat lain.
Homepage otomatis menampilkan 3 post terbaru (bukan draft),
diurutkan dari `pubDate` terbaru. Halaman detailnya otomatis
dibuat oleh `src/pages/blog/[slug].astro`, dan daftar lengkapnya
ada di `/blog`.

## Menghapus post contoh

Tiga post awal (`hello-blog`, `astro-mdx`,
`satu-section-satu-komponen`) adalah contoh. Hapus file-nya kalau
sudah tidak perlu, dan ganti banner contoh di `public/blog/`
dengan gambarmu sendiri.
