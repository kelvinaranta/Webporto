# Kelvin Aranta — Personal Portfolio

> Personal portfolio website for Kelvin Aranta, Information Systems student with expertise in computer networking and web development using Laravel.

---

## 🌐 Live Demo

Publish menggunakan GitHub Pages: `https://yourusername.github.io/portfolio`

*(Ganti `yourusername` dengan username GitHub Anda)*

---

## 📋 Deskripsi

Website portfolio pribadi yang dibuat menggunakan HTML5, CSS3, dan Vanilla JavaScript.  
Dirancang untuk kebutuhan melamar magang/kerja, menampilkan:

- Profil & deskripsi singkat
- Skills (Programming, Database, Tools, Networking)
- Projects (Momkind.id, Leftrow)
- Experience (PT Maxmedia Cyber Indo)
- Certificates
- Contact Information

---

## 🛠️ Teknologi

| Teknologi        | Keterangan                      |
|------------------|---------------------------------|
| HTML5            | Struktur halaman (Semantic HTML)|
| CSS3             | Styling & Responsive Layout     |
| JavaScript (Vanilla) | Interaktivitas & Animasi    |
| Lucide Icons     | Icon library via CDN            |
| Google Fonts     | Inter & JetBrains Mono          |

---

## 📁 Struktur Folder

```
portfolio/
│
├── index.html              ← Halaman utama
│
├── css/
│   └── style.css           ← Semua styling
│
├── js/
│   └── script.js           ← Semua JavaScript
│
├── assets/
│   └── images/
│       ├── profile.jpg         ← Foto profil Anda
│       ├── momkind.jpg         ← Screenshot project Momkind.id
│       ├── leftrow.jpg         ← Screenshot project Leftrow
│       ├── certificate-1.jpg   ← Foto/scan sertifikat 1
│       └── certificate-2.jpg   ← Foto/scan sertifikat 2
│
└── README.md               ← File ini
```

---

## 🚀 Cara Menjalankan Secara Lokal

Website ini adalah **static website** sehingga tidak membutuhkan backend, server, atau build process apapun.

**Cara 1 — Langsung buka di browser:**
```
Klik dua kali pada file: portfolio/index.html
```

**Cara 2 — Menggunakan VS Code Live Server:**
1. Install extension **Live Server** di VS Code
2. Klik kanan `index.html` → **Open with Live Server**

**Cara 3 — Menggunakan Python (jika sudah terinstall):**
```bash
cd portfolio
python -m http.server 8080
# Buka browser: http://localhost:8080
```

---

## 🖼️ Cara Memasukkan / Mengganti Gambar

> Semua gambar harus diletakkan di folder: `assets/images/`

### 1. Foto Profile
Simpan foto Anda dengan nama **`profile.jpg`** di:
```
assets/images/profile.jpg
```
- Ukuran rekomendasi: minimal **600×600px** (square/persegi)
- Format: `.jpg` atau `.png` (jika `.png`, ubah juga src di HTML)
- Lokasi di `index.html`: cari komentar `<!-- EDIT: Profile Image -->`

### 2. Screenshot Momkind.id
Simpan screenshot dengan nama **`momkind.jpg`** di:
```
assets/images/momkind.jpg
```
- Ukuran rekomendasi: **1280×720px** (landscape, rasio 16:9)
- Lokasi di `index.html`: cari komentar `<!-- EDIT: Momkind Project -->`

### 3. Screenshot Leftrow
Simpan screenshot dengan nama **`leftrow.jpg`** di:
```
assets/images/leftrow.jpg
```
- Ukuran rekomendasi: **1280×720px** (landscape, rasio 16:9)
- Lokasi di `index.html`: cari komentar `<!-- EDIT: Leftrow Project -->`

### 4. Sertifikat
Simpan foto/scan sertifikat dengan nama **`certificate-1.jpg`** dan **`certificate-2.jpg`** di:
```
assets/images/certificate-1.jpg
assets/images/certificate-2.jpg
```
- Lokasi di `index.html`: cari komentar `<!-- EDIT: Certificate 1 -->` dan `<!-- EDIT: Certificate 2 -->`
- Untuk menambah sertifikat baru, copy blok `<article class="cert-card">` yang sudah ada

---

## ✏️ Cara Mengganti Informasi Personal

Buka file `index.html` dan cari komentar **`<!-- EDIT:`** untuk menemukan bagian yang perlu diedit.

### Mengganti Email
Cari: `<!-- EDIT: Contact Information -->`  
Ganti semua `youremail@example.com` dengan email Anda.

### Mengganti GitHub
Ganti semua `https://github.com/yourusername` dengan URL GitHub Anda.  
Ganti semua `github.com/yourusername` (teks yang ditampilkan) dengan username Anda.

### Mengganti LinkedIn
Ganti semua `https://linkedin.com/in/yourusername` dengan URL LinkedIn Anda.  
Ganti semua `linkedin.com/in/yourusername` (teks yang ditampilkan) dengan profil Anda.

---

## 🔗 Cara Mengganti Link Project

### Link Live Demo & Repository Momkind.id
Cari komentar: `<!-- EDIT: Momkind Project -->`

```html
<!-- Ganti '#' dengan URL live demo Anda -->
<a href="https://momkind.id" ...>Live Demo</a>

<!-- Ganti '#' dengan URL repository GitHub Anda -->
<a href="https://github.com/yourusername/momkind" ...>View Project</a>
```

### Link Live Demo & Repository Leftrow
Cari komentar: `<!-- EDIT: Leftrow Project -->`

```html
<!-- Ganti '#' dengan URL live demo Anda -->
<a href="https://leftrow.com" ...>Live Demo</a>

<!-- Ganti '#' dengan URL repository GitHub Anda -->
<a href="https://github.com/yourusername/leftrow" ...>View Project</a>
```

### Link View Certificate
Cari komentar: `<!-- EDIT: Certificate 1 -->` dan `<!-- EDIT: Certificate 2 -->`  
Ganti `href="#"` dengan link ke sertifikat digital Anda (mis. Google Drive, Credly, dll.)

---

## ☁️ Cara Publish ke GitHub Pages

### Langkah 1 — Siapkan repository GitHub
1. Login ke [github.com](https://github.com)
2. Klik **New Repository**
3. Nama repository: `portfolio` (atau apapun)
4. Set sebagai **Public**
5. Klik **Create Repository**

### Langkah 2 — Upload file
**Opsi A — Via GitHub Web (mudah):**
1. Di halaman repository, klik **Add file → Upload files**
2. Drag & drop seluruh isi folder `portfolio/` (bukan foldernya, tapi isinya)
3. Pastikan `index.html` berada di root repository (bukan di dalam subfolder)
4. Klik **Commit changes**

**Opsi B — Via Git (untuk yang familiar):**
```bash
git init
git add .
git commit -m "Initial portfolio upload"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

### Langkah 3 — Aktifkan GitHub Pages
1. Buka repository Anda di GitHub
2. Klik tab **Settings**
3. Scroll ke bagian **Pages** (sidebar kiri)
4. Di bagian **Source**, pilih branch: `main`
5. Folder: `/ (root)`
6. Klik **Save**
7. Tunggu beberapa menit, lalu akses: `https://yourusername.github.io/portfolio`

> **Catatan:** Pastikan `index.html` ada di root repository (bukan di subfolder).

---

## 📌 Tips Penting

- Jika gambar tidak muncul, periksa bahwa nama file **persis sama** (case-sensitive di GitHub Pages)
- Gunakan huruf kecil untuk nama file gambar: `profile.jpg` ✅ bukan `Profile.JPG` ❌
- Jangan ubah struktur folder atau nama file gambar yang sudah ditentukan
- Untuk menambah project baru, copy blok `<article class="project-card">` di `index.html`

---

## 📄 License

© 2026 Kelvin Aranta. All Rights Reserved.
