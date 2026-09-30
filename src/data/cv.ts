export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  note?: string;
  responsibilities: {
    category?: string;
    points: string[];
  }[];
}

export interface OrganizationExperience {
  role: string;
  organization: string;
  period: string;
  points: string[];
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  major: string;
  period: string;
  gpa: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export const cvData = {
  personalInfo: {
    fullName: 'Mufid Muhammad Baihaqi',
    degree: 'S.Hum.',
    brandName: 'MXT',
    title: 'Graphic Designer, Public Relations & Creative Media Specialist',
    location: 'Sumedang, Jawa Barat, Indonesia',
    phone: '083198512127',
    formattedPhone: '+62 831-9851-2127',
    email: 'mufidmb085@gmail.com',
    photoUrl: '/mufid-pas-foto.jpg',
    summary: 'Lulusan Sarjana Humaniora dari Universitas Islam Negeri Sunan Gunung Djati Bandung dengan pengalaman kerja sebagai Staf Administrasi, Public Relations, dan Social Media Specialist di dua kantor legislatif secara bersamaan. Terampil dalam tata kelola administrasi perkantoran, hubungan konstituen, pengolahan data riset, serta pembuatan konten multimedia (desain grafis, fotografi, videografi, dan editing reels). Berpengalaman dalam manajemen proyek mandiri serta memiliki rekam jejak kepemimpinan aktif di organisasi kemahasiswaan.'
  },

  education: {
    institution: 'Universitas Islam Negeri Sunan Gunung Djati Bandung',
    location: 'Bandung, Jawa Barat',
    degree: 'Sarjana Humaniora (S.Hum.)',
    major: 'Sejarah Peradaban Islam',
    period: 'September 2019 – Agustus 2024',
    gpa: '3.55 / 4.00'
  } as Education,

  workExperiences: [
    {
      role: 'Staf Administrasi & Media Kreatif',
      company: 'Kantor Legislatif Dr. H. Cucun Ahmad Syamsurijal, M.A.P.',
      period: 'Agustus 2024 – Juli 2026',
      note: 'Bekerja secara bersamaan dengan Kantor Legislatif Humaira Zahrotun Noor, S.IP.',
      responsibilities: [
        {
          category: 'Manajemen Administrasi Perkantoran',
          points: [
            'Mengelola penyusunan agenda harian, pendataan dokumen resmi, serta pengarsipan surat masuk dan keluar kantor legislatif secara terstruktur.'
          ]
        },
        {
          category: 'Public Relations & Hubungan Konstituen',
          points: [
            'Menjadi pintu utama komunikasi dengan konstituen dan masyarakat umum, menampung aspirasi, serta memfasilitasi kebutuhan penyampaian informasi publik secara komunikatif dan responsif.'
          ]
        },
        {
          category: 'Social Media & Content Management',
          points: [
            'Merancang visual poster dan spanduk kegiatan resmi dengan estetika formal sesuai identitas kelembagaan.',
            'Mengambil dokumentasi foto dan video (coverage) langsung di lapangan saat kunjungan kerja dan acara publik.',
            'Memproduksi dan mengedit konten video pendek (Reels highlight) untuk meningkatkan engagement serta transparansi kegiatan legislatif.',
            'Mengelola publikasi foto kegiatan secara berkala di kanal media sosial resmi.'
          ]
        }
      ]
    },
    {
      role: 'Staf Administrasi & Media Kreatif',
      company: 'Kantor Legislatif Humaira Zahrotun Noor, S.IP.',
      period: 'Agustus 2024 – Juli 2026',
      note: 'Bekerja secara bersamaan dengan Kantor Legislatif Dr. H. Cucun Ahmad Syamsurijal, M.A.P.',
      responsibilities: [
        {
          category: 'Administrasi & Operasional',
          points: [
            'Mengkoordinasikan alur administrasi internal, penyusunan laporan kegiatan berkala, dan penataan berkas kerja legislatif.'
          ]
        },
        {
          category: 'Komunikasi Publik',
          points: [
            'Membangun citra positif melalui pelayanan informasi yang ramah dan profesional kepada konstituen serta pemangku kepentingan daerah.'
          ]
        },
        {
          category: 'Produksi Digital & Dokumentasi',
          points: [
            'Menyusun materi desain komunikasi visual (poster informasi, spanduk acara, dan grafis media sosial).',
            'Menjadi videografer dan fotografer utama pada seluruh rangkaian agenda publik dan kelembagaan.',
            'Mengedit video reels ringkasan kegiatan dengan alur cerita yang informatif dan menarik bagi audiens publik.'
          ]
        }
      ]
    },
    {
      role: 'Freelance Academic Editor & Proofreader',
      company: 'Self-Employed',
      period: 'September 2019 – Desember 2022',
      responsibilities: [
        {
          category: 'Pengolahan & Analisis Data',
          points: [
            'Menganalisis dan mengolah data penelitian (kualitatif maupun kuantitatif) serta menyajikannya ke dalam bentuk tabel, grafik, dan interpretasi narasi yang terstruktur.'
          ]
        },
        {
          category: 'Editing & Proofreading',
          points: [
            'Memeriksa dan menyempurnakan tata bahasa, EYD/PUEBI, struktur kalimat, serta kerapian format pengutipan akademis (seperti APA, MLA, Harvard) pada berbagai karya tulis ilmiah.'
          ]
        },
        {
          category: 'Manajemen Waktu & Klien',
          points: [
            'Mengelola puluhan proyek independen secara simultan dengan menjaga tingkat akurasi tinggi, ketelitian detail, serta kepatuhan ketat terhadap deadline.'
          ]
        }
      ]
    }
  ] as WorkExperience[],

  organizations: [
    {
      role: 'Anggota Pengembangan Aparatur Organisasi (PAO)',
      organization: 'DEMA Fakultas Adab dan Humaniora UIN SGD Bandung',
      period: '2022 – 2023',
      points: [
        'Menyusun program kerja kaderisasi, pengembangan kapasitas anggota, dan pengawasan dinamika organisasi di tingkat fakultas.'
      ]
    },
    {
      role: 'Sekretaris Umum',
      organization: 'HMJ Sejarah Peradaban Islam UIN SGD Bandung',
      period: '2021 – 2022',
      points: [
        'Bertanggung jawab penuh atas tata kelola administrasi internal, penyusunan proposal, Laporan Pertanggungjawaban (LPJ), serta pengarsipan berkas resmi organisasi.',
        'Mengkoordinasikan komunikasi dan alur kerja antar-divisi untuk memastikan keberlangsungan seluruh program kerja jurusan.'
      ]
    },
    {
      role: 'Anggota Divisi Media & Pers',
      organization: 'HMJ Sejarah Peradaban Islam UIN SGD Bandung',
      period: '2020 – 2021',
      points: [
        'Memproduksi materi publikasi digital, mengelola kanal media sosial organisasi, serta mendokumentasikan kegiatan akademik dan kemahasiswaan.'
      ]
    }
  ] as OrganizationExperience[],

  skills: [
    {
      category: 'Media Sosial & Kreatif',
      items: [
        'Graphic Design (Poster, Spanduk/Banner)',
        'Video Editing (Reels / Shorts)',
        'Fotografi & Videografi Lapangan',
        'Social Media Management',
        'Content Planning & Storytelling'
      ]
    },
    {
      category: 'Administrasi & Riset Data',
      items: [
        'Administrasi Perkantoran & Kesekretariatan',
        'Manajemen Arsip & Persuratan Resmi',
        'Penyusunan LPJ & Proposal',
        'Data Entry & Processing',
        'Analisis Data Kualitatif & Kuantitatif'
      ]
    },
    {
      category: 'Humas & Komunikasi',
      items: [
        'Public Relations & Media Relations',
        'Hubungan Konstituen (Constituent Relations)',
        'Komunikasi Publik & Pelayanan Informasi',
        'Proofreading & Editorial Standar EYD/PUEBI'
      ]
    },
    {
      category: 'Perangkat Lunak / Software',
      items: [
        'Adobe Photoshop',
        'Adobe Illustrator',
        'Adobe Premiere',
        'Figma',
        'CorelDraw',
        'CapCut',
        'Canva',
        'Microsoft Office (Word, Excel, PowerPoint)',
        'Google Workspace'
      ]
    }
  ] as SkillGroup[]
};
