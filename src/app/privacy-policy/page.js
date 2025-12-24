"use client";

import { Shield, Mail, MapPin, Calendar, ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  const lastUpdated = "24 Desember 2024";
  const effectiveDate = "24 Desember 2024";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm font-medium">Kembali ke Beranda</span>
            </Link>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">PT. Clevio</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary/10 rounded-full">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Dokumen Resmi</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Kebijakan Privasi
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Komitmen kami untuk melindungi privasi dan data pribadi Anda
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Berlaku sejak: {effectiveDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Terakhir diperbarui: {lastUpdated}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Company Info Card */}
          <div className="mb-12 p-6 bg-surface rounded-xl border border-border">
            <h2 className="text-lg font-semibold text-foreground mb-4">Informasi Perusahaan</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">PT. Clevio</p>
                  <p className="text-sm text-muted-foreground">Badan Hukum Terdaftar</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">admin@clev.io</p>
                  <p className="text-sm text-muted-foreground">Kontak Privasi</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:col-span-2">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Alamat Kantor</p>
                  <p className="text-sm text-muted-foreground">
                    Bukit Golf Cibubur, Riverside 1 Blok A7/25, Gunung Putri, Bojong Nangka, 
                    Kec. Gn. Putri, Kabupaten Bogor, Jawa Barat 16963
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Policy Sections */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            
            {/* Section 1 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
                1. Pendahuluan
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                PT. Clevio (&quot;Kami&quot;, &quot;Perusahaan&quot;, atau &quot;Clevio&quot;) berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi Anda ketika Anda menggunakan layanan platform Clevio AI Staff, termasuk integrasi dengan WhatsApp Business Platform.
              </p>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Dengan mengakses atau menggunakan layanan kami, Anda menyetujui praktik yang dijelaskan dalam Kebijakan Privasi ini. Jika Anda tidak menyetujui kebijakan ini, mohon untuk tidak menggunakan layanan kami.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Kebijakan ini disusun sesuai dengan Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP) dan peraturan perundang-undangan yang berlaku di Indonesia.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
                2. Data yang Kami Kumpulkan
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Kami mengumpulkan dan memproses kategori data berikut:
              </p>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">2.1 Data dari WhatsApp Business Platform</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-4">
                <li>Nama pengguna WhatsApp</li>
                <li>Nomor telepon WhatsApp</li>
                <li>Konten pesan yang dikirim dan diterima melalui platform kami</li>
                <li>Informasi profil WhatsApp Business yang terhubung</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3">2.2 Data Teknis</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Untuk keperluan keamanan, operasional, dan peningkatan layanan, kami dapat mengumpulkan data teknis minimal, termasuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-4">
                <li>Alamat IP (Internet Protocol)</li>
                <li>Log akses dan aktivitas sistem</li>
                <li>Informasi perangkat (jenis, sistem operasi, browser)</li>
                <li>Data diagnostik untuk pemecahan masalah</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3">2.3 Data Akun</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/90">
                <li>Alamat email untuk registrasi dan komunikasi</li>
                <li>Informasi autentikasi akun</li>
                <li>Preferensi pengaturan akun</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
                3. Penggunaan Data
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Data yang kami kumpulkan digunakan untuk tujuan berikut:
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3">3.1 Penyediaan Layanan AI Agent</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-4">
                <li>Memproses pesan masuk dari pengguna WhatsApp</li>
                <li>Menghasilkan respons otomatis yang relevan dan kontekstual</li>
                <li>Menjalankan automasi percakapan sesuai konfigurasi AI Agent</li>
                <li>Menyediakan layanan pelanggan dan penjualan otomatis 24/7</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3">3.2 Pemrosesan Data Pesan</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Pesan yang diterima melalui WhatsApp diproses sementara oleh sistem AI kami untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-4">
                <li>Menganalisis konteks dan maksud pesan</li>
                <li>Memberikan respons yang akurat dan sesuai</li>
                <li>Meningkatkan kualitas respons AI berdasarkan pola percakapan</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3">3.3 Keamanan dan Operasional</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/90">
                <li>Mendeteksi dan mencegah aktivitas penipuan atau penyalahgunaan</li>
                <li>Memelihara keamanan platform dan infrastruktur</li>
                <li>Melakukan pemecahan masalah teknis</li>
                <li>Mematuhi kewajiban hukum dan regulasi</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
                4. Penyimpanan dan Retensi Data
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Kami menyimpan data Anda dengan prinsip-prinsip berikut:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-4">
                <li>Data diproses dan/atau disimpan pada server yang berlokasi di Indonesia dan/atau negara lain tempat penyedia layanan kami beroperasi</li>
                <li>Data pesan diproses secara sementara untuk memberikan respons real-time</li>
                <li>Data akun disimpan selama akun Anda aktif dan sesuai kebutuhan bisnis</li>
                <li>Log teknis disimpan untuk periode yang wajar guna keperluan keamanan dan audit</li>
                <li>Kami menerapkan langkah-langkah perlindungan yang sesuai untuk transfer data lintas batas</li>
              </ul>
              <p className="text-foreground/90 leading-relaxed">
                Data akan dihapus atau dianonimkan ketika tidak lagi diperlukan untuk tujuan yang telah ditetapkan, kecuali diwajibkan oleh hukum untuk menyimpannya lebih lama.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
                5. Pembagian Data dengan Pihak Ketiga
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Kami dapat membagikan data kepada pihak ketiga dalam keadaan berikut:
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3">5.1 Penyedia Layanan (Data Processor)</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Kami bekerja sama dengan penyedia layanan terpercaya yang membantu operasional platform, termasuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-4">
                <li>Penyedia layanan hosting dan cloud computing</li>
                <li>Penyedia teknologi kecerdasan buatan (AI)</li>
                <li>Penyedia layanan monitoring dan logging</li>
                <li>Penyedia infrastruktur keamanan</li>
              </ul>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Semua penyedia layanan terikat oleh perjanjian kontraktual yang ketat dan hanya dapat memproses data untuk tujuan layanan yang telah ditentukan.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3">5.2 Meta Platforms (WhatsApp)</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Sebagai bagian dari integrasi WhatsApp Business Platform, data tertentu diproses sesuai dengan kebijakan dan persyaratan Meta Platforms, Inc.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3">5.3 Kewajiban Hukum</h3>
              <p className="text-foreground/90 leading-relaxed">
                Kami dapat mengungkapkan data jika diwajibkan oleh hukum, proses hukum, atau permintaan dari otoritas pemerintah yang berwenang.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
                6. Keamanan Data
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang sesuai untuk melindungi data Anda, termasuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-4">
                <li>Enkripsi data dalam transmisi (TLS/SSL) dan penyimpanan</li>
                <li>Kontrol akses berbasis peran (RBAC)</li>
                <li>Pemantauan keamanan dan deteksi ancaman secara berkala</li>
                <li>Prosedur backup dan disaster recovery</li>
                <li>Pelatihan keamanan untuk personel</li>
                <li>Audit keamanan berkala</li>
              </ul>
              <p className="text-foreground/90 leading-relaxed">
                Meskipun kami berupaya keras untuk melindungi data Anda, tidak ada metode transmisi atau penyimpanan elektronik yang 100% aman. Kami tidak dapat menjamin keamanan absolut.
              </p>
            </section>

            {/* Section 7 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
                7. Hak-Hak Anda
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Sesuai dengan UU PDP dan peraturan yang berlaku, Anda memiliki hak-hak berikut:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-4">
                <li><strong>Hak Akses:</strong> Meminta informasi tentang data pribadi Anda yang kami proses</li>
                <li><strong>Hak Koreksi:</strong> Meminta perbaikan data yang tidak akurat atau tidak lengkap</li>
                <li><strong>Hak Penghapusan:</strong> Meminta penghapusan data pribadi Anda dalam keadaan tertentu</li>
                <li><strong>Hak Pembatasan:</strong> Meminta pembatasan pemrosesan data Anda</li>
                <li><strong>Hak Portabilitas:</strong> Menerima data Anda dalam format yang dapat dibaca mesin</li>
                <li><strong>Hak Keberatan:</strong> Menolak pemrosesan data untuk tujuan tertentu</li>
                <li><strong>Hak Penarikan Persetujuan:</strong> Menarik persetujuan yang telah diberikan sebelumnya</li>
              </ul>
              <p className="text-foreground/90 leading-relaxed">
                Untuk menggunakan hak-hak tersebut, silakan hubungi kami melalui <a href="mailto:admin@clev.io" className="text-primary hover:underline">admin@clev.io</a>.
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
                8. Batasan Usia
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Layanan Clevio AI Staff tidak ditujukan untuk individu di bawah usia 18 tahun. Kami tidak dengan sengaja mengumpulkan atau memproses data pribadi dari anak-anak atau remaja di bawah usia tersebut.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Jika kami mengetahui bahwa kami telah mengumpulkan data dari individu di bawah 18 tahun tanpa verifikasi persetujuan orang tua yang sah, kami akan mengambil langkah-langkah untuk menghapus data tersebut dari sistem kami.
              </p>
            </section>

            {/* Section 9 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
                9. Penggunaan Cookie dan Teknologi Pelacakan
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Platform kami dapat menggunakan cookie dan teknologi serupa untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-4">
                <li>Memelihara sesi login Anda</li>
                <li>Menyimpan preferensi pengguna</li>
                <li>Menganalisis penggunaan platform untuk peningkatan layanan</li>
                <li>Memastikan keamanan platform</li>
              </ul>
              <p className="text-foreground/90 leading-relaxed">
                Anda dapat mengatur browser Anda untuk menolak cookie, namun hal ini dapat mempengaruhi fungsionalitas layanan kami.
              </p>
            </section>

            {/* Section 10 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
                10. Perubahan Kebijakan
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk mencerminkan perubahan dalam praktik kami, teknologi, persyaratan hukum, atau faktor lainnya.
              </p>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Perubahan material akan diberitahukan melalui:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-4">
                <li>Pemberitahuan di platform kami</li>
                <li>Email ke alamat yang terdaftar</li>
                <li>Pembaruan tanggal &quot;Terakhir Diperbarui&quot; di bagian atas dokumen ini</li>
              </ul>
              <p className="text-foreground/90 leading-relaxed">
                Penggunaan layanan kami setelah perubahan berlaku menunjukkan penerimaan Anda terhadap kebijakan yang diperbarui.
              </p>
            </section>

            {/* Section 11 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
                11. Hubungi Kami
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Jika Anda memiliki pertanyaan, kekhawatiran, atau permintaan terkait Kebijakan Privasi ini atau praktik perlindungan data kami, silakan hubungi kami:
              </p>
              <div className="bg-surface p-6 rounded-xl border border-border">
                <div className="space-y-3">
                  <p className="font-semibold text-foreground">PT. Clevio</p>
                  <div className="flex items-start gap-3 text-foreground/90">
                    <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email:</p>
                      <a href="mailto:admin@clev.io" className="text-primary hover:underline">admin@clev.io</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-foreground/90">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Alamat:</p>
                      <p>Bukit Golf Cibubur, Riverside 1 Blok A7/25, Gunung Putri, Bojong Nangka, Kec. Gn. Putri, Kabupaten Bogor, Jawa Barat 16963</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 12 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
                12. Yurisdiksi dan Hukum yang Berlaku
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Kebijakan Privasi ini diatur dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap perselisihan yang timbul dari atau sehubungan dengan kebijakan ini akan diselesaikan melalui yurisdiksi pengadilan Indonesia yang berwenang.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Saat ini, layanan kami ditujukan untuk pengguna di Indonesia. Jika di kemudian hari kami melayani wilayah lain, kebijakan ini dapat diperbarui untuk mencakup persyaratan privasi tambahan yang berlaku.
              </p>
            </section>

          </div>

          {/* Footer Notice */}
          <div className="mt-12 p-6 bg-primary/5 rounded-xl border border-primary/20 text-center">
            <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
            <p className="text-foreground font-medium mb-2">
              Komitmen Kami untuk Privasi Anda
            </p>
            <p className="text-sm text-muted-foreground">
              PT. Clevio berkomitmen untuk mematuhi standar perlindungan data tertinggi dan persyaratan 
              WhatsApp Business Platform untuk memastikan keamanan dan privasi data Anda.
            </p>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-surface py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">PT. Clevio</span>
            </div>
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © {new Date().getFullYear()} PT. Clevio. Seluruh hak cipta dilindungi.
            </p>
            <div className="flex items-center gap-4">
              <Link 
                href="/" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Beranda
              </Link>
              <Link 
                href="/privacy-policy" 
                className="text-sm text-primary font-medium"
              >
                Kebijakan Privasi
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
