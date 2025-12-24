"use client";

import { FileText, Mail, MapPin, Calendar, ArrowLeft, Shield, AlertTriangle, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function TermsOfServicePage() {
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
              <FileText className="h-5 w-5 text-primary" />
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
              <FileText className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Dokumen Resmi</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Syarat dan Ketentuan Layanan
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Ketentuan yang mengatur penggunaan platform Clevio AI Staff
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
                  <p className="text-sm text-muted-foreground">Kontak Layanan</p>
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

          {/* Important Notice */}
          <div className="mb-12 p-6 bg-warning/10 rounded-xl border border-warning/30">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-warning flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Penting untuk Dibaca</h3>
                <p className="text-sm text-foreground/80">
                  Dengan mengakses atau menggunakan layanan Clevio AI Staff, Anda menyatakan telah membaca, 
                  memahami, dan menyetujui untuk terikat dengan Syarat dan Ketentuan ini. Jika Anda tidak 
                  menyetujui ketentuan ini, mohon untuk tidak menggunakan layanan kami.
                </p>
              </div>
            </div>
          </div>

          {/* Terms Sections */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            
            {/* Section 1 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
                1. Definisi
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Dalam Syarat dan Ketentuan ini, istilah-istilah berikut memiliki arti sebagai berikut:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/90">
                <li><strong>&quot;Kami&quot;</strong>, <strong>&quot;Perusahaan&quot;</strong>, atau <strong>&quot;Clevio&quot;</strong> mengacu pada PT. Clevio, termasuk anak perusahaan dan afiliasinya.</li>
                <li><strong>&quot;Platform&quot;</strong> atau <strong>&quot;Layanan&quot;</strong> mengacu pada Clevio AI Staff, termasuk website, aplikasi, dan seluruh fitur yang disediakan.</li>
                <li><strong>&quot;Pengguna&quot;</strong> atau <strong>&quot;Anda&quot;</strong> mengacu pada individu atau entitas bisnis yang mengakses atau menggunakan Layanan.</li>
                <li><strong>&quot;AI Agent&quot;</strong> mengacu pada asisten kecerdasan buatan yang dikonfigurasi melalui Platform untuk mengautomasi percakapan.</li>
                <li><strong>&quot;Konten&quot;</strong> mengacu pada teks, gambar, data, atau materi lain yang diunggah, dibuat, atau diproses melalui Platform.</li>
                <li><strong>&quot;WhatsApp Business Platform&quot;</strong> mengacu pada layanan WhatsApp Business API yang dioperasikan oleh Meta Platforms, Inc.</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
                2. Penerimaan Ketentuan
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Dengan membuat akun, mengakses, atau menggunakan Platform Clevio AI Staff, Anda menyatakan bahwa:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-4">
                <li>Anda berusia minimal 18 tahun atau memiliki kapasitas hukum untuk menyetujui perjanjian ini</li>
                <li>Anda memiliki wewenang untuk mewakili entitas bisnis (jika mendaftar atas nama perusahaan)</li>
                <li>Anda telah membaca dan memahami Syarat dan Ketentuan ini beserta Kebijakan Privasi kami</li>
                <li>Anda setuju untuk mematuhi semua ketentuan yang berlaku dalam penggunaan Layanan</li>
              </ul>
              <p className="text-foreground/90 leading-relaxed">
                Jika Anda tidak menyetujui ketentuan ini, Anda tidak diperkenankan untuk menggunakan Layanan kami.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
                3. Deskripsi Layanan
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Clevio AI Staff adalah platform manajemen AI Agent yang menyediakan:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-4">
                <li>Pembuatan dan konfigurasi AI Agent untuk automasi percakapan</li>
                <li>Integrasi dengan WhatsApp Business Platform untuk layanan pelanggan otomatis</li>
                <li>Pengelolaan knowledge base dan dokumen untuk respons AI yang akurat</li>
                <li>Dashboard analitik dan monitoring performa AI Agent</li>
                <li>Integrasi dengan layanan pihak ketiga (Google Workspace, dll.)</li>
              </ul>
              <p className="text-foreground/90 leading-relaxed">
                Kami berhak untuk mengubah, memodifikasi, atau menghentikan fitur tertentu dari Layanan kapan saja dengan atau tanpa pemberitahuan sebelumnya.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
                4. Akun Pengguna
              </h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">4.1 Pendaftaran Akun</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Untuk menggunakan Layanan, Anda harus membuat akun dengan memberikan informasi yang akurat, lengkap, dan terkini. Anda bertanggung jawab untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-4">
                <li>Menjaga kerahasiaan kredensial akun Anda</li>
                <li>Memperbarui informasi akun jika terjadi perubahan</li>
                <li>Seluruh aktivitas yang terjadi di bawah akun Anda</li>
                <li>Segera memberitahu kami jika terjadi akses tidak sah ke akun Anda</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3">4.2 Keamanan Akun</h3>
              <p className="text-foreground/90 leading-relaxed">
                Kami tidak bertanggung jawab atas kerugian yang timbul akibat penggunaan kredensial akun Anda oleh pihak ketiga, baik dengan atau tanpa sepengetahuan Anda, kecuali disebabkan oleh kelalaian kami.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
                5. Paket Layanan dan Pembayaran
              </h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">5.1 Paket Berlangganan</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Layanan kami tersedia dalam berbagai paket berlangganan dengan fitur dan batasan yang berbeda. Detail paket dan harga dapat dilihat di halaman pricing kami.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3">5.2 Pembayaran</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-4">
                <li>Pembayaran harus dilakukan sesuai dengan metode yang tersedia di Platform</li>
                <li>Semua harga yang tercantum sudah termasuk pajak yang berlaku (kecuali dinyatakan lain)</li>
                <li>Pembayaran bersifat non-refundable kecuali ditentukan lain dalam kebijakan pengembalian</li>
                <li>Kegagalan pembayaran dapat mengakibatkan penghentian atau pembatasan akses ke Layanan</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3">5.3 Uji Coba Gratis (Trial)</h3>
              <p className="text-foreground/90 leading-relaxed">
                Kami dapat menawarkan periode uji coba gratis dengan batasan tertentu. Setelah periode uji coba berakhir, Anda harus berlangganan paket berbayar untuk melanjutkan penggunaan Layanan.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
                6. Penggunaan yang Diperbolehkan
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Anda setuju untuk menggunakan Layanan hanya untuk tujuan yang sah dan sesuai dengan ketentuan ini. Penggunaan yang diperbolehkan meliputi:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/90">
                <li>Mengautomasi komunikasi pelanggan yang sah dan sesuai hukum</li>
                <li>Menyediakan layanan pelanggan dan dukungan melalui AI Agent</li>
                <li>Mengelola dan merespons pertanyaan bisnis secara otomatis</li>
                <li>Menggunakan fitur integrasi untuk keperluan bisnis yang wajar</li>
                <li>Mengunggah konten yang Anda miliki hak untuk menggunakannya</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
                7. Penggunaan yang Dilarang
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Anda dilarang keras untuk menggunakan Layanan untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-4">
                <li>Kegiatan ilegal atau yang melanggar hukum Republik Indonesia</li>
                <li>Mengirim spam, pesan massal yang tidak diminta, atau konten promosi yang melanggar kebijakan WhatsApp</li>
                <li>Menyebarkan malware, virus, atau kode berbahaya lainnya</li>
                <li>Melakukan penipuan, phishing, atau aktivitas yang menyesatkan</li>
                <li>Melanggar hak kekayaan intelektual pihak lain</li>
                <li>Mengumpulkan data pribadi tanpa persetujuan yang sah</li>
                <li>Menyebarkan konten yang melanggar hukum, menghasut, atau menyinggung SARA</li>
                <li>Mencoba mengakses sistem atau data secara tidak sah</li>
                <li>Mengganggu operasi normal Platform atau infrastruktur kami</li>
                <li>Menjual kembali atau menyewakan akses ke Layanan tanpa izin tertulis</li>
              </ul>
              <p className="text-foreground/90 leading-relaxed">
                Pelanggaran terhadap ketentuan ini dapat mengakibatkan penghentian akun secara permanen tanpa pengembalian dana.
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
                8. Kepatuhan WhatsApp Business Platform
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Sebagai pengguna integrasi WhatsApp, Anda wajib mematuhi:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-4">
                <li>WhatsApp Business Policy dan Commerce Policy dari Meta</li>
                <li>Ketentuan penggunaan WhatsApp Business Platform</li>
                <li>Batasan pengiriman pesan dan template yang ditetapkan WhatsApp</li>
                <li>Persyaratan verifikasi bisnis dari Meta</li>
              </ul>
              <p className="text-foreground/90 leading-relaxed">
                Kami tidak bertanggung jawab atas penghentian atau pembatasan akses WhatsApp yang disebabkan oleh pelanggaran Anda terhadap kebijakan Meta.
              </p>
            </section>

            {/* Section 9 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
                9. Hak Kekayaan Intelektual
              </h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">9.1 Hak Kami</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Seluruh hak kekayaan intelektual atas Platform, termasuk namun tidak terbatas pada kode sumber, desain, logo, merek dagang, dan dokumentasi, adalah milik PT. Clevio atau pemberi lisensi kami. Anda tidak diperkenankan untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-4">
                <li>Menyalin, memodifikasi, atau mendistribusikan bagian apapun dari Platform</li>
                <li>Melakukan reverse engineering atau dekompilasi perangkat lunak</li>
                <li>Menggunakan merek dagang kami tanpa izin tertulis</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3">9.2 Konten Pengguna</h3>
              <p className="text-foreground/90 leading-relaxed">
                Anda tetap memiliki hak atas konten yang Anda unggah ke Platform. Dengan mengunggah konten, Anda memberikan kami lisensi non-eksklusif untuk memproses konten tersebut guna menyediakan Layanan kepada Anda.
              </p>
            </section>

            {/* Section 10 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
                10. Batasan Tanggung Jawab
              </h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">10.1 Layanan &quot;Sebagaimana Adanya&quot;</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Layanan disediakan &quot;sebagaimana adanya&quot; dan &quot;sebagaimana tersedia&quot; tanpa jaminan apapun, baik tersurat maupun tersirat, termasuk jaminan kelayakan untuk tujuan tertentu atau non-pelanggaran.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3">10.2 Batasan Tanggung Jawab</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Sejauh diizinkan oleh hukum yang berlaku, kami tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-4">
                <li>Kerugian tidak langsung, insidental, khusus, atau konsekuensial</li>
                <li>Kehilangan keuntungan, data, atau peluang bisnis</li>
                <li>Gangguan atau ketidaktersediaan Layanan sementara</li>
                <li>Akurasi atau kualitas respons yang dihasilkan oleh AI Agent</li>
                <li>Tindakan atau kelalaian pihak ketiga, termasuk Meta/WhatsApp</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3">10.3 Batas Maksimum Tanggung Jawab</h3>
              <p className="text-foreground/90 leading-relaxed">
                Total tanggung jawab kami kepada Anda tidak akan melebihi jumlah yang Anda bayarkan kepada kami dalam 12 bulan terakhir sebelum klaim timbul.
              </p>
            </section>

            {/* Section 11 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
                11. Ganti Rugi
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Anda setuju untuk membela, mengganti rugi, dan membebaskan PT. Clevio, direktur, karyawan, dan afiliasinya dari setiap klaim, kerugian, atau tuntutan yang timbul dari:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/90">
                <li>Penggunaan Layanan oleh Anda yang melanggar ketentuan ini</li>
                <li>Pelanggaran hukum atau hak pihak ketiga oleh Anda</li>
                <li>Konten yang Anda unggah atau proses melalui Platform</li>
                <li>Aktivitas yang dilakukan melalui akun Anda</li>
              </ul>
            </section>

            {/* Section 12 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
                12. Penghentian Layanan
              </h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">12.1 Penghentian oleh Pengguna</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Anda dapat menghentikan penggunaan Layanan kapan saja dengan menutup akun Anda melalui dashboard atau menghubungi tim dukungan kami.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3">12.2 Penghentian oleh Kami</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Kami berhak untuk menangguhkan atau menghentikan akses Anda ke Layanan jika:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-4">
                <li>Anda melanggar Syarat dan Ketentuan ini</li>
                <li>Pembayaran Anda gagal atau tertunggak</li>
                <li>Kami menerima keluhan valid atau perintah hukum</li>
                <li>Kami mendeteksi aktivitas yang mencurigakan atau berbahaya</li>
                <li>Demi kepentingan keamanan sistem atau pengguna lain</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3">12.3 Akibat Penghentian</h3>
              <p className="text-foreground/90 leading-relaxed">
                Setelah penghentian, akses Anda ke Layanan akan dihentikan dan data Anda dapat dihapus sesuai dengan Kebijakan Privasi kami. Ketentuan mengenai batasan tanggung jawab, ganti rugi, dan penyelesaian sengketa tetap berlaku setelah penghentian.
              </p>
            </section>

            {/* Section 13 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
                13. Perubahan Ketentuan
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Kami dapat memperbarui Syarat dan Ketentuan ini dari waktu ke waktu. Perubahan material akan diberitahukan melalui:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-4">
                <li>Email ke alamat yang terdaftar di akun Anda</li>
                <li>Notifikasi di dalam Platform</li>
                <li>Pembaruan tanggal &quot;Terakhir Diperbarui&quot;</li>
              </ul>
              <p className="text-foreground/90 leading-relaxed">
                Penggunaan Layanan setelah perubahan berlaku menunjukkan penerimaan Anda terhadap ketentuan yang diperbarui. Jika Anda tidak menyetujui perubahan, silakan hentikan penggunaan Layanan.
              </p>
            </section>

            {/* Section 14 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
                14. Penyelesaian Sengketa
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Setiap sengketa yang timbul dari atau sehubungan dengan Syarat dan Ketentuan ini akan diselesaikan dengan cara berikut:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-4">
                <li><strong>Musyawarah:</strong> Para pihak akan terlebih dahulu berupaya menyelesaikan sengketa secara musyawarah mufakat dalam waktu 30 hari.</li>
                <li><strong>Mediasi:</strong> Jika musyawarah tidak berhasil, sengketa akan diselesaikan melalui mediasi.</li>
                <li><strong>Pengadilan:</strong> Jika mediasi gagal, sengketa akan diselesaikan melalui Pengadilan Negeri Jakarta Selatan.</li>
              </ul>
            </section>

            {/* Section 15 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
                15. Hukum yang Berlaku
              </h2>
              <p className="text-foreground/90 leading-relaxed">
                Syarat dan Ketentuan ini diatur dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap tindakan hukum yang timbul dari ketentuan ini akan tunduk pada yurisdiksi eksklusif pengadilan Indonesia yang berwenang.
              </p>
            </section>

            {/* Section 16 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
                16. Ketentuan Umum
              </h2>
              <ul className="list-disc list-inside space-y-2 text-foreground/90">
                <li><strong>Keterpisahan:</strong> Jika ada ketentuan dalam dokumen ini yang dinyatakan tidak sah, ketentuan lainnya tetap berlaku penuh.</li>
                <li><strong>Pengalihan:</strong> Anda tidak dapat mengalihkan hak atau kewajiban Anda berdasarkan ketentuan ini tanpa persetujuan tertulis dari kami.</li>
                <li><strong>Keseluruhan Perjanjian:</strong> Syarat dan Ketentuan ini, bersama dengan Kebijakan Privasi, merupakan keseluruhan perjanjian antara Anda dan kami.</li>
                <li><strong>Pengesampingan:</strong> Kegagalan kami untuk menegakkan ketentuan apapun tidak berarti pengesampingan hak kami untuk menegakkannya di kemudian hari.</li>
                <li><strong>Force Majeure:</strong> Kami tidak bertanggung jawab atas kegagalan atau keterlambatan akibat keadaan di luar kendali kami yang wajar.</li>
              </ul>
            </section>

            {/* Section 17 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
                17. Hubungi Kami
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Jika Anda memiliki pertanyaan atau memerlukan klarifikasi mengenai Syarat dan Ketentuan ini, silakan hubungi kami:
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

          </div>

          {/* Footer Notice */}
          <div className="mt-12 p-6 bg-success/10 rounded-xl border border-success/30 text-center">
            <CheckCircle className="h-8 w-8 text-success mx-auto mb-3" />
            <p className="text-foreground font-medium mb-2">
              Terima Kasih atas Kepercayaan Anda
            </p>
            <p className="text-sm text-muted-foreground">
              Dengan menggunakan Clevio AI Staff, Anda membantu bisnis Anda berkembang dengan teknologi AI yang aman dan terpercaya.
            </p>
          </div>

          {/* Related Links */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link 
              href="/privacy-policy"
              className="inline-flex items-center gap-2 px-4 py-2 bg-surface rounded-lg border border-border text-foreground hover:bg-surface-strong transition-colors"
            >
              <Shield className="h-4 w-4" />
              <span>Kebijakan Privasi</span>
            </Link>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-surface py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
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
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Kebijakan Privasi
              </Link>
              <Link 
                href="/terms-of-service" 
                className="text-sm text-primary font-medium"
              >
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
