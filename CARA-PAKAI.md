# Portofolio v2 — full repo (sudah termasuk Blog MDX)

Ini repo utuh, tinggal pakai. Tidak perlu patch, tidak perlu copy satu-satu.

## Cara pakai di PC

1. Extract zip ini ke folder baru, misal `portofolio_v2`
2. Buka terminal di folder itu
3. Jalankan:

```powershell
bun install
bun run dev
```

`bun install` perlu sekali saja, karena ada dependensi baru `@astrojs/mdx`.

## Yang sudah ada di dalamnya

- Semua file asli repo (termasuk `src/pages/about.astro` dan
  `src/styles/global.css`)
- Section Blog di homepage (di antara Skills dan Contact)
- Halaman `/blog` dan halaman detail `/blog/nama-post`
- 3 post contoh di `src/content/blog/` + banner contoh di `public/blog/`

## Menambah post blog baru

Buat file `src/content/blog/judul-baru.mdx`, isi frontmatter
(title, description, pubDate, banner, tags), tulis isi pakai
Markdown di bawahnya, simpan. Post itu otomatis muncul di
homepage (3 terbaru) dan di `/blog/judul-baru`.

Panduan lengkapnya ada di `src/content/blog/README.md`.

File `CARA-PAKAI.md` ini boleh dihapus setelah dibaca, tidak
mempengaruhi web-nya.
