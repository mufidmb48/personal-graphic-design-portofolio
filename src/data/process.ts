import { ProcessStep } from '../types';

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Memahami (Brief)',
    shortDesc: 'Pendalaman tujuan komunikasi, target audiens, dan konteks penggunaan.',
    detailedDesc: 'Setiap proyek diawali dengan penyelarasan menyeluruh: siapa target audiensnya, pesan utama apa yang wajib ditonjolkan, dan spesifikasi teknis apa yang harus dipenuhi.',
    deliverable: 'Creative Brief & Penyelarasan Sasaran'
  },
  {
    number: '02',
    title: 'Riset & Moodboard',
    shortDesc: 'Eksplorasi arah visual, referensi industri, dan sketsa komposisi.',
    detailedDesc: 'Menganalisis tolak ukur industri terkait, menyusun moodboard referensi warna dan gaya, serta membuat sketsa tata letak awal sebelum melangkah ke eksekusi digital.',
    deliverable: 'Moodboard & Arah Visual Terpilih'
  },
  {
    number: '03',
    title: 'Desain & Eksekusi',
    shortDesc: 'Pengembangan sistem visual dengan hierarki tipografi yang disiplin.',
    detailedDesc: 'Menerjemahkan konsep terpilih ke dalam grafis digital berkualitas: pemilihan font, struktur grid modular, proporsi warna seimbang, dan ruang negatif yang bernapas.',
    deliverable: 'Draf Desain Lengkap & Pratinjau'
  },
  {
    number: '04',
    title: 'Penyempurnaan',
    shortDesc: 'Uji kontras keterbacaan, penyesuaian detail mikro, dan masukan klien.',
    detailedDesc: 'Meninjau draf bersama, mengoreksi kerning huruf, menguji kenyamanan baca pada layar ponsel, dan melakukan revisi terarah sesuai kesepakatan.',
    deliverable: 'Aset Visual Matang & Terkalibrasi'
  },
  {
    number: '05',
    title: 'Serah Terima (Final)',
    shortDesc: 'Penyusunan berkas master produksi rapi untuk cetak maupun digital.',
    detailedDesc: 'Menyerahkan arsip berkas final dengan penamaan layer terorganisir (AI, PSD, PDF siap cetak dengan margin bleed, SVG, dan PNG transparan) beserta catatan teknis penggunaan.',
    deliverable: 'Berkas Master Siap Cetak & Digital'
  }
];
