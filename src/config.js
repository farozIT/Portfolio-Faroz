/* =====================================================================
   CONFIG — SEMUA DATA PROFIL ADA DI SINI
   ===================================================================== */
export const CONFIG = {
  name: "AHMAD FARROS SABILLAH",
  role: "Video editor — style .exe",
  status: "Open commission",
  avatar: "/images/587287065_17919341073220112_6776170849672574104_n.jpg",
  bio: "seorang content creator yang lagi merintis dan juga jago entertaiment dan ngedit ala ala exe xixi salken semua.",
  skills: ["Premiere Pro", "After Effects", "CapCut", "Style .exe"],
  socials: {
    tiktok:    { url: "https://www.tiktok.com/@farozsabillah" },
    instagram: { url: "https://www.instagram.com/farozsabillah/" },
    discord:   { url: "https://discord.com/users/723016020817608814" }
  },
  experience: {
    about: "Sudah 4 tahun lebih terjun di dunia video editing, fokus di style .exe untuk konten short & long-form. Terbiasa kerja sama beberapa kreator dengan deadline yang jelas dan hasil yang konsisten.",
    stats: [
      { value: "4+", label: "Tahun editing" },
      { value: "3+", label: "Kreator kolaborasi" },
      { value: "7",  label: "Hari kerja max" }
    ]
  },
  projectsHeading: "Projek yang aku buat"
};

/* =====================================================================
   PROYEK — INI BAGIAN YANG PALING SERING KAMU UPDATE

   CARA NAMBAH PROYEK BARU:
   - Taruh file .mp4 ke folder public/videos/ lalu tulis: { link: "/videos/namafile.mp4" }
   - Atau pakai link TikTok/IG/YouTube langsung
   - Judul otomatis diambil dari nama file (underscore → spasi, title case)
   - Bisa juga tulis manual: { title: "Judul Custom", link: "/videos/xxx.mp4" }
   ===================================================================== */

export const PROJECTS_VIDEO = [
  { link: "/videos/videoplayback.mp4" },
  { link: "/videos/SaveClip.App_AQMUp6Xmrlpv_TU0KNk04MlJ6U0Cfir8ryhWZfvf3cD5Qq0rUcvTZrlK49fTPJHrIfuA_EaCzx4Idw_oSt0Mpcbf.mp4" },
  { link: "/videos/SaveClip.App_AQP_qm67xQwACL70A5Glkm72rzmBJ4MhDlVL_HsPn9i-cAPlDl51dka-UnjlxoVXy_u0EFB13Z3PZJfu_ujUBRSjR4Wahh0kEQdaqUU.mp4" },
  { link: "/videos/SaveClip.App_AQPpeVPURA6xLYb4f3ldjIBK0x2aQJs7tMBlngRdwbikM_7xUBvw5Wz_6gr6EG0bwsp-W8XVDpYzbEn5H0jn-H8VScQGV69d1K2dvgk (1).mp4" },
  { link: "/videos/SaveClip.App_AQMVF61XdwYxByx27Z8dBo4CXhHUI-hL74LmPceHuwxHzM_cDl8zf6_rRkUEArmE8__Jt-2L0j1hhxT5RuWTv4BYmmnYw2IRSedS6wM.mp4" },
];

export const PROJECTS_THUMBNAIL = [
  { title: "Wielino", image: "/images/SaveClip.App_589196459_17921436108220112_2823571289660198279_n.jpg" },
  { title: "FarozSabil", image: "/images/SaveClip.App_608281415_17844462966642999_3584002246719614111_n.jpg" },
  { title: "Ayarikapi", image: "/images/SaveClip.App_719210228_17859266850642999_1612259838915794546_n.jpg" },
  { title: "Ayarikapi", image: "/images/SaveClip.App_763479539_17864674875642999_7788735169367748673_n.jpg" },
  { title: "Wielino", image: "/images/641746047_1561256428264794_5847872806662439561_n.jpg" },
  { title: "Inaanim", image: "/images/INAA.png" }
];
