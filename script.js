// ====================================
// DATA NOVEL
// ====================================

const novels = [
  {
    id: 1,
    title: "Dilan 1990",
    author: "Pidi Baiq",
    genre: "Romance",
    year: 2014,
    description:
      "Kisah cinta remaja di Bandung pada era 1990-an, melalui pertemuan Dilan dan Milea serta kenangan yang membekas."
  },
  {
    id: 2,
    title: "Bumi",
    author: "Tere Liye",
    genre: "Fantasy",
    year: 2014,
    description:
      "Petualangan Raib, Seli, dan Ali di dunia paralel yang penuh kekuatan istimewa, bahaya, dan persahabatan."
  },
  {
    id: 3,
    title: "Laut Bercerita",
    author: "Leila S. Chudori",
    genre: "Drama",
    year: 2017,
    description:
      "Kisah Biru Laut dan aktivis yang hilang pada masa Orde Baru, serta keluarga yang terus menunggu kehadiran mereka."
  },
  {
    id: 4,
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    genre: "Drama",
    year: 2005,
    description:
      "Perjuangan sepuluh siswa sekolah Muhammadiyah di Belitung untuk terus belajar di tengah keterbatasan."
  },
  {
    id: 5,
    title: "Perahu Kertas",
    author: "Dee Lestari",
    genre: "Romance",
    year: 2009,
    description:
      "Kugy dan Keenan dipertemukan oleh seni, persahabatan, impian, dan cinta dalam perjalanan mencari arah hidup."
  },
  {
    id: 6,
    title: "5 cm",
    author: "Donny Dhirgantoro",
    genre: "Adventure",
    year: 2005,
    description:
      "Lima sahabat menjalani pendakian Semeru yang menguji ketahanan, impian, dan persahabatan mereka."
  },
  {
    id: 7,
    title: "Hujan",
    author: "Tere Liye",
    genre: "Romance",
    year: 2016,
    description:
      "Kisah Lail dan Esok tentang cinta, kehilangan, kenangan, serta harapan di tengah perubahan dunia."
  },
  {
    id: 8,
    title: "Mariposa",
    author: "Luluk HF",
    genre: "Romance",
    year: 2018,
    description:
      "Cerita cinta remaja tentang rasa penasaran, perbedaan karakter, dan usaha memahami perasaan."
  },
  {
    id: 9,
    title: "Negeri 5 Menara",
    author: "Ahmad Fuadi",
    genre: "Drama",
    year: 2009,
    description:
      "Alif dan teman-temannya menjalani kehidupan di pesantren sambil merawat persahabatan dan mimpi menjangkau dunia."
  },
  {
    id: 10,
    title: "Aroma Karsa",
    author: "Dee Lestari",
    genre: "Mystery",
    year: 2018,
    description:
      "Pencarian yang mempertemukan jejak aroma, rahasia masa lalu, dan usaha mengungkap jati diri."
  },
  {
    id: 11,
    title: "Dear Nathan",
    author: "Erisca Febriani",
    genre: "Romance",
    year: 2016,
    description:
      "Kisah Salma dan Nathan tentang cinta remaja, keluarga, dan penerimaan diri."
  },
  {
    id: 12,
    title: "Rembulan Tenggelam di Wajahmu",
    author: "Tere Liye",
    genre: "Drama",
    year: 2013,
    description:
      "Sebuah cerita tentang perjalanan hidup, pilihan, dan pertanyaan mengenai makna berbagai peristiwa."
  },
  {
    id: 13,
    title: "Pulang",
    author: "Tere Liye",
    genre: "Drama",
    year: 2015,
    description:
      "Cerita tentang perjalanan menemukan makna pulang di tengah konflik, kesetiaan, dan kehilangan."
  },
  {
    id: 14,
    title: "Tentang Kamu",
    author: "Tere Liye",
    genre: "Romance",
    year: 2016,
    description:
      "Perjalanan menelusuri sebuah kehidupan melalui kenangan, perjuangan, cinta, dan kehilangan."
  },
  {
    id: 15,
    title: "Danur",
    author: "Risa Saraswati",
    genre: "Mystery",
    year: 2011,
    description:
      "Pengalaman Risa bersama sosok-sosok tak kasatmata yang membawa kisah dari masa lalu."
  },
  {
    id: 16,
    title: "The Architecture of Love",
    author: "Ika Natassa",
    genre: "Romance",
    year: 2016,
    description:
      "Pertemuan di New York yang membuka perjalanan tentang cinta, kesendirian, dan pemulihan."
  },
  {
    id: 17,
    title: "Negeri Para Bedebah",
    author: "Tere Liye",
    genre: "Drama",
    year: 2012,
    description:
      "Kisah ketegangan di dunia bisnis dan keuangan yang penuh ambisi, persaingan, serta dilema moral."
  },
  {
    id: 18,
    title: "Bintang",
    author: "Tere Liye",
    genre: "Fantasy",
    year: 2017,
    description:
      "Petualangan dunia paralel berlanjut dengan konflik yang semakin besar dan tantangan bagi para tokohnya."
  }
];

// ====================================
// KANDIDAT COVER YANG SUDAH DIHUBUNGKAN
// ====================================

const coverSources = {
  1: {
    googleId: "U_-BBAAAQBAJ",
    isbns: ["9786027870413", "9786027870864"]
  },
  5: {
    googleId: "kiqSCwAAQBAJ",
    isbns: ["9786022910954", "9789791227780"]
  },
  6: {
    isbns: ["9786020521169", "9797591514"]
  },
  8: {
    isbns: ["9786025508615"]
  },
  9: {
    isbns: ["9789792248616"]
  },
  10: {
    isbns: ["9786022914631"]
  },
  11: {
    isbns: ["9786026940612"]
  },
  15: {
    googleId: "n8H-cfnn440C",
    isbns: ["6022200199"]
  }
};

// ====================================
// ELEMEN DAN STATE
// ====================================

const $ = (id) => document.getElementById(id);

const CACHE_KEY = "novelspace-cover-cache-v6";
const CACHE_DURATION = 30 * 24 * 60 * 60 * 1000;

let activeSearch = "";
let activeGenre = "all";
let selectedNovel = null;
let previousFocus = null;
let modalVersion = 0;
let coverCache = {};

const coverJobs = new Map();

// Dua antrean: satu buku yang lambat tidak menahan semuanya.
const coverLanes = [
  Promise.resolve(),
  Promise.resolve()
];

let nextLane = 0;

// API metadata tetap dipanggil bergiliran.
let metadataQueue = Promise.resolve();

try {
  const saved = JSON.parse(localStorage.getItem(CACHE_KEY));

  if (
    saved &&
    typeof saved === "object" &&
    !Array.isArray(saved)
  ) {
    coverCache = saved;
  }
} catch {
  coverCache = {};
}

function saveCache() {
  try {
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify(coverCache)
    );
  } catch {
    // Tidak menghalangi website jika penyimpanan diblokir.
  }
}

function wait(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

function normalizeText(text) {
  return String(text || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

function createTextElement(tag, className, text) {
  const element = document.createElement(tag);

  element.className = className;
  element.textContent = text;

  return element;
}

// ====================================
// REQUEST DATA DAN PEMERIKSAAN GAMBAR
// ====================================

async function requestJSON(url) {
  const controller = new AbortController();

  const timer = setTimeout(() => {
    controller.abort();
  }, 8000);

  try {
    const response = await fetch(url, {
      signal: controller.signal
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

function fetchJSON(url) {
  const job = metadataQueue.then(() => requestJSON(url));

  metadataQueue = job
    .catch(() => null)
    .then(() => wait(1500));

  return job;
}

function checkImage(url) {
  return new Promise((resolve) => {
    const image = new Image();
    let finished = false;

    const timer = setTimeout(() => {
      finish(false);
    }, 6000);

    function finish(success) {
      if (finished) return;

      finished = true;
      clearTimeout(timer);

      image.onload = null;
      image.onerror = null;

      resolve(success ? url : null);
    }

    image.onload = () => {
      finish(
        image.naturalWidth > 40 &&
        image.naturalHeight > 60
      );
    };

    image.onerror = () => {
      finish(false);
    };

    image.src = url;
  });
}

function rememberCover(novel, url) {
  coverCache[novel.id] = {
    url,
    savedAt: Date.now()
  };

  saveCache();

  return url;
}

// ====================================
// CACHE DARI VERSI SEBELUMNYA
// ====================================

function getPreviousCover(novel) {
  const keys = [
    "novelspace-covers-v5",
    "novelspace-covers-v4",
    "novelspace-cover-cache-v2",
    "novelspace-cover-cache-v1"
  ];

  for (const key of keys) {
    try {
      const data = JSON.parse(localStorage.getItem(key));
      const saved = data?.[novel.id];

      const url =
        typeof saved === "string"
          ? saved
          : saved?.url;

      if (
        typeof url === "string" &&
        url.startsWith("https://")
      ) {
        return url;
      }
    } catch {
      // Coba cache berikutnya.
    }
  }

  return null;
}

// ====================================
// PENCOCOKAN JUDUL DAN PENULIS
// ====================================

function titleMatches(novel, title) {
  const wanted = normalizeText(novel.title);
  const found = normalizeText(title);

  if (wanted === "dilan1990") {
    return (
      found.includes("dilan") &&
      found.includes("1990") &&
      !found.includes("komik")
    );
  }

  if (wanted === "danur") {
    return (
      found === "danur" ||
      found.startsWith("danurkarenamerekajugaada")
    );
  }

  return (
    found === wanted ||
    found === wanted + "sebuahnovel"
  );
}

function authorMatches(novel, authors) {
  const wanted = normalizeText(novel.author);

  return (authors || []).some((author) => {
    const found = normalizeText(author);

    if (found === wanted) {
      return true;
    }

    if (wanted === "deelestari") {
      return found === "dee" || found === "dewilestari";
    }

    if (wanted === "ahmadfuadi") {
      return found === "afuadi";
    }

    return false;
  });
}

// ====================================
// PENCARI COVER
// ====================================

async function findDirectCover(novel) {
  const source = coverSources[novel.id];

  if (!source) {
    return null;
  }

  if (source.googleId) {
    const url =
      "https://books.google.com/books/content?" +
      new URLSearchParams({
        id: source.googleId,
        printsec: "frontcover",
        img: "1",
        zoom: "1",
        source: "gbs_api"
      });

    const valid = await checkImage(url);

    if (valid) {
      return valid;
    }
  }

  for (const isbn of source.isbns || []) {
    const url =
      `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg?default=false`;

    const valid = await checkImage(url);

    if (valid) {
      return valid;
    }

    await wait(1500);
  }

  return null;
}

async function findGoogleCover(novel) {
  const parameters = new URLSearchParams({
    q: `intitle:"${novel.title}" inauthor:"${novel.author}"`,
    maxResults: "10"
  });

  const data = await fetchJSON(
    `https://www.googleapis.com/books/v1/volumes?${parameters}`
  );

  for (const book of data?.items || []) {
    const info = book.volumeInfo || {};

    if (!titleMatches(novel, info.title)) {
      continue;
    }

    if (!authorMatches(novel, info.authors)) {
      continue;
    }

    const rawURL =
      info.imageLinks?.thumbnail ||
      info.imageLinks?.smallThumbnail;

    if (!rawURL) {
      continue;
    }

    const url = rawURL.replace(/^http:/, "https:");
    const valid = await checkImage(url);

    if (valid) {
      return valid;
    }
  }

  return null;
}

async function findLibraryCover(novel) {
  const parameters = new URLSearchParams({
    title: novel.title,
    author: novel.author,
    fields: "title,author_name,cover_i",
    limit: "8"
  });

  const data = await fetchJSON(
    `https://openlibrary.org/search.json?${parameters}`
  );

  for (const book of data?.docs || []) {
    if (!book.cover_i) {
      continue;
    }

    if (!titleMatches(novel, book.title)) {
      continue;
    }

    if (!authorMatches(novel, book.author_name)) {
      continue;
    }

    const url =
      `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg?default=false`;

    const valid = await checkImage(url);

    if (valid) {
      return valid;
    }
  }

  return null;
}

async function resolveCover(novel) {
  const saved = coverCache[novel.id];

  if (
    saved?.url &&
    Date.now() - saved.savedAt < CACHE_DURATION
  ) {
    const valid = await checkImage(saved.url);

    if (valid) {
      return valid;
    }
  }

  // Pertahankan gambar yang sebelumnya sudah pernah tersimpan.
  const previous = getPreviousCover(novel);

  if (previous && previous !== saved?.url) {
    const valid = await checkImage(previous);

    if (valid) {
      return rememberCover(novel, valid);
    }
  }

  // Gunakan kandidat cover langsung dan ISBN terlebih dahulu.
  let url = await findDirectCover(novel);

  if (!url) {
    url = await findGoogleCover(novel);
  }

  if (!url) {
    url = await findLibraryCover(novel);
  }

  if (url) {
    return rememberCover(novel, url);
  }

  delete coverCache[novel.id];
  saveCache();

  return null;
}

function getCover(novel) {
  if (coverJobs.has(novel.id)) {
    return coverJobs.get(novel.id);
  }

  const lane = nextLane;
  nextLane = (nextLane + 1) % coverLanes.length;

  const job = coverLanes[lane]
    .then(() => resolveCover(novel))
    .catch(() => null);

  coverJobs.set(novel.id, job);

  coverLanes[lane] = job.then(() => wait(1500));

  return job;
}

// ====================================
// CARD NOVEL
// ====================================

function createNovelCard(novel, index) {
  const card = document.createElement("article");

  card.className = "novel-card";
  card.tabIndex = 0;

  card.style.animationDelay =
    `${Math.min(index * 35, 350)}ms`;

  card.setAttribute("role", "button");

  card.setAttribute(
    "aria-label",
    `Lihat detail ${novel.title}`
  );

  const coverWrap = document.createElement("div");
  coverWrap.className = "cover-wrap";

  const fallback = document.createElement("div");
  fallback.className = "cover-fallback";

  const status = createTextElement(
    "small",
    "",
    "Sedang mencari sampul..."
  );

  fallback.append(
    createTextElement("span", "", novel.title),
    createTextElement("small", "", novel.author),
    status
  );

  const image = new Image();

  image.alt = `Sampul ${novel.title} — ${novel.author}`;
  image.style.opacity = "0";

  let hasLoaded = false;

  image.onload = () => {
    hasLoaded = true;
    image.style.opacity = "1";
    fallback.classList.add("hidden");
  };

  image.onerror = () => {
    hasLoaded = false;
    image.style.opacity = "0";
    fallback.classList.remove("hidden");
    status.textContent = "Sampul belum tersedia";
  };

  coverWrap.append(image, fallback);

  const details = document.createElement("div");
  details.className = "card-details";

  details.append(
    createTextElement(
      "span",
      "card-genre",
      novel.genre
    ),
    createTextElement(
      "h3",
      "card-title",
      novel.title
    ),
    createTextElement(
      "p",
      "card-author",
      novel.author
    ),
    createTextElement(
      "p",
      "card-year",
      `Tahun: ${novel.year}`
    )
  );

  card.append(
    coverWrap,
    details,
    createTextElement(
      "span",
      "card-view",
      "Lihat detail"
    )
  );

  card.addEventListener("click", () => {
    openModal(novel);
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal(novel);
    }
  });

  // Gambar lama langsung dicoba tanpa menunggu antrean.
  const initialURL =
    coverCache[novel.id]?.url ||
    getPreviousCover(novel);

  if (initialURL) {
    image.src = initialURL;
  }

  getCover(novel).then((url) => {
    if (url) {
      if (image.getAttribute("src") !== url) {
        image.src = url;
      }
    } else if (!hasLoaded) {
      status.textContent = "Sampul belum tersedia";
    }
  });

  return card;
}

// ====================================
// PENCARIAN DAN FILTER
// ====================================

function renderNovels() {
  const keyword = normalizeText(activeSearch);

  const filtered = novels.filter((novel) => {
    const genreMatches =
      activeGenre === "all" ||
      novel.genre === activeGenre;

    const searchMatches =
      !keyword ||
      normalizeText(novel.title).includes(keyword) ||
      normalizeText(novel.author).includes(keyword);

    return genreMatches && searchMatches;
  });

  $("novelGrid").replaceChildren(
    ...filtered.map(createNovelCard)
  );

  $("emptyState").classList.toggle(
    "hidden",
    filtered.length > 0
  );

  $("resultCount").textContent =
    `Menampilkan ${filtered.length} novel`;

  document.querySelectorAll(".genre-btn").forEach((button) => {
    const active =
      button.dataset.genre === activeGenre;

    button.classList.toggle("active", active);

    button.setAttribute(
      "aria-pressed",
      String(active)
    );
  });
}

function runSearch() {
  activeSearch = $("searchInput").value;
  renderNovels();
}

// ====================================
// MODAL DETAIL
// ====================================

function showModalFallback(novel) {
  $("modalCover").classList.add("hidden");

  $("modalCoverFallback").classList.remove("hidden");

  $("modalFallbackTitle").textContent = novel.title;
  $("modalFallbackAuthor").textContent = novel.author;
}

function openModal(novel) {
  const version = ++modalVersion;

  previousFocus = document.activeElement;
  selectedNovel = novel;

  $("modalTitle").textContent = novel.title;
  $("modalGenre").textContent = novel.genre;
  $("modalAuthor").textContent = novel.author;
  $("modalYear").textContent = `Tahun: ${novel.year}`;
  $("modalDescription").textContent = novel.description;

  const image = $("modalCover");

  image.onload = null;
  image.onerror = null;
  image.removeAttribute("src");
  image.alt = `Sampul ${novel.title}`;

  showModalFallback(novel);

  image.onload = () => {
    if (version !== modalVersion) {
      return;
    }

    image.classList.remove("hidden");
    $("modalCoverFallback").classList.add("hidden");
  };

  image.onerror = () => {
    if (version === modalVersion) {
      showModalFallback(novel);
    }
  };

  const initialURL =
    coverCache[novel.id]?.url ||
    getPreviousCover(novel);

  if (initialURL) {
    image.src = initialURL;
  }

  getCover(novel).then((url) => {
    if (
      !url ||
      version !== modalVersion ||
      selectedNovel?.id !== novel.id
    ) {
      return;
    }

    if (image.getAttribute("src") !== url) {
      image.src = url;
    }
  });

  $("modalOverlay").classList.remove("hidden");

  requestAnimationFrame(() => {
    if (version === modalVersion) {
      $("modalOverlay").classList.add("visible");
    }
  });

  document.body.style.overflow = "hidden";
  $("modalClose").focus();
}

function closeModal() {
  ++modalVersion;
  selectedNovel = null;

  $("modalOverlay").classList.remove("visible");
  $("modalOverlay").classList.add("hidden");

  document.body.style.overflow = "";

  if (previousFocus?.isConnected) {
    previousFocus.focus();
  }
}

// ====================================
// NAVIGASI
// ====================================

function closeMenu() {
  $("menuToggle").classList.remove("open");
  $("navMenu").classList.remove("open");

  $("menuToggle").setAttribute(
    "aria-expanded",
    "false"
  );
}

function updateNavigation() {
  $("navbar").classList.toggle(
    "scrolled",
    window.scrollY > 20
  );

  let currentSection = "home";

  ["home", "explore", "about"].forEach((id) => {
    const section = $(id);

    if (
      section &&
      window.scrollY + 160 >= section.offsetTop
    ) {
      currentSection = id;
    }
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${currentSection}`
    );
  });
}

// ====================================
// JALANKAN WEBSITE
// ====================================

function init() {
  $("year").textContent = new Date().getFullYear();

  $("searchInput").addEventListener(
    "input",
    runSearch
  );

  $("searchInput").addEventListener(
    "keydown",
    (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        runSearch();
      }
    }
  );

  $("searchButton").addEventListener(
    "click",
    runSearch
  );

  $("clearSearch").addEventListener(
    "click",
    () => {
      $("searchInput").value = "";
      runSearch();
      $("searchInput").focus();
    }
  );

  $("resetSearch").addEventListener(
    "click",
    () => {
      activeGenre = "all";
      $("searchInput").value = "";
      runSearch();
      $("searchInput").focus();
    }
  );

  $("genreFilter").addEventListener(
    "click",
    (event) => {
      const button = event.target.closest(".genre-btn");

      if (!button) {
        return;
      }

      activeGenre = button.dataset.genre;
      renderNovels();
    }
  );

  $("modalClose").addEventListener(
    "click",
    closeModal
  );

  $("modalOverlay").addEventListener(
    "click",
    (event) => {
      if (event.target === $("modalOverlay")) {
        closeModal();
      }
    }
  );

  document.addEventListener("keydown", (event) => {
    if (!selectedNovel) {
      return;
    }

    if (event.key === "Escape") {
      closeModal();
    }

    // Modal ini hanya memiliki satu tombol interaktif.
    if (event.key === "Tab") {
      event.preventDefault();
      $("modalClose").focus();
    }
  });

  $("menuToggle").setAttribute(
    "aria-expanded",
    "false"
  );

  $("menuToggle").addEventListener(
    "click",
    () => {
      const isOpen =
        $("navMenu").classList.toggle("open");

      $("menuToggle").classList.toggle(
        "open",
        isOpen
      );

      $("menuToggle").setAttribute(
        "aria-expanded",
        String(isOpen)
      );
    }
  );

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener(
    "scroll",
    updateNavigation,
    { passive: true }
  );

  updateNavigation();
  renderNovels();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

// Ganti cover Perahu Kertas saja.
const perahuKertasCover =
  "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/d13a7e29-cdef-5cf4-879e-476a25d753c9/07676fd7-6487-5f6a-a0c5-9abe31665db9.jpg";

function replacePerahuKertasCover() {
  const novel = novels.find((item) => item.id === 5);

  if (!novel) return;

  // Pakai gambar pilihan ini, bukan hasil pencarian otomatis.
  coverCache[5] = {
    url: perahuKertasCover,
    savedAt: Date.now()
  };

  saveCache();

  coverJobs.set(
    5,
    Promise.resolve(perahuKertasCover)
  );

  renderNovels();

  if (selectedNovel?.id === 5) {
    const image = document.getElementById("modalCover");

    image.onload = () => {
      image.classList.remove("hidden");

      document
        .getElementById("modalCoverFallback")
        .classList.add("hidden");
    };

    image.src = perahuKertasCover;
  }
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    replacePerahuKertasCover
  );
} else {
  replacePerahuKertasCover();
}

// ========================================
// COVER LANGSUNG UNTUK EMPAT NOVEL
// ========================================

const fixedNovelCovers = {
  // 5 cm
  6: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/3bef631e-b4bc-5cd6-9d31-6f1960f5d791/93e98831-d278-5b3e-8482-db89ad3d150f.jpg",

  // Mariposa
  8: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/d08f3735-f3fc-5bb1-88cc-931d69915397/91f81948-d504-55e8-8f6a-82e82228f477.jpg",

  // Aroma Karsa
  10: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/896a6f07-333d-5039-9134-df86b1e5bb38/19fff8e5-c8d2-5bcc-b34c-43e2ef28b80a.jpg",

  // Dear Nathan
  11: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/8d272bb7-a5e8-5b77-a2b9-c580bbc07ca8/dc034406-89b5-5a86-8d5a-c3dc2d4f0f42.jpg"
};

// Simpan fungsi pencari lama untuk novel lainnya.
const originalGetNovelCover = getCover;

// Empat novel ini memakai URL di atas secara langsung.
getCover = function (novel) {
  const fixedURL = fixedNovelCovers[novel.id];

  if (fixedURL) {
    return Promise.resolve(fixedURL);
  }

  return originalGetNovelCover(novel);
};

function applyFixedNovelCovers() {
  Object.entries(fixedNovelCovers).forEach(([id, url]) => {
    coverCache[id] = {
      url: url,
      savedAt: Date.now()
    };

    coverJobs.set(
      Number(id),
      Promise.resolve(url)
    );
  });

  saveCache();
  renderNovels();

  // Perbarui juga gambar jika detail novel sedang terbuka.
  if (selectedNovel && fixedNovelCovers[selectedNovel.id]) {
    const image = document.getElementById("modalCover");
    const fallback =
      document.getElementById("modalCoverFallback");

    image.onload = () => {
      image.classList.remove("hidden");
      fallback.classList.add("hidden");
    };

    image.onerror = () => {
      image.classList.add("hidden");
      fallback.classList.remove("hidden");
    };

    image.src = fixedNovelCovers[selectedNovel.id];
  }
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    applyFixedNovelCovers
  );
} else {
  applyFixedNovelCovers();
}

// Ganti sampul The Architecture of Love.
const architectureLoveCover =
  "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/0b09442c-999f-5705-976b-721d53dc18f3/93e98831-d278-5b3e-8482-db89ad3d150f.jpg";

// Pertahankan fungsi cover yang sudah ada.
const getCoverBeforeArchitectureFix = getCover;

getCover = function (novel) {
  if (novel.id === 16) {
    return Promise.resolve(architectureLoveCover);
  }

  return getCoverBeforeArchitectureFix(novel);
};

function applyArchitectureLoveCover() {
  coverCache[16] = {
    url: architectureLoveCover,
    savedAt: Date.now()
  };

  coverJobs.set(
    16,
    Promise.resolve(architectureLoveCover)
  );

  saveCache();
  renderNovels();

  // Perbarui juga sampul jika detail buku sedang terbuka.
  if (selectedNovel?.id === 16) {
    const image = document.getElementById("modalCover");
    const fallback =
      document.getElementById("modalCoverFallback");

    image.onload = () => {
      image.classList.remove("hidden");
      fallback.classList.add("hidden");
    };

    image.onerror = () => {
      image.classList.add("hidden");
      fallback.classList.remove("hidden");
    };

    image.src = architectureLoveCover;
  }
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    applyArchitectureLoveCover
  );
} else {
  applyArchitectureLoveCover();
}

// Sampul pengganti Perahu Kertas.
function updatePerahuKertasCover() {
  const newCover =
    "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/3eeca82b-e269-5f60-bcbe-054e46108de3/ea1d9fec-e3e1-5917-88a0-06425c92bd4b.jpg";

  const previousGetCover = getCover;

  getCover = function (novel) {
    if (novel.id === 5) {
      return Promise.resolve(newCover);
    }

    return previousGetCover(novel);
  };

  coverCache[5] = {
    url: newCover,
    savedAt: Date.now()
  };

  coverJobs.set(5, Promise.resolve(newCover));

  saveCache();
  renderNovels();
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    updatePerahuKertasCover
  );
} else {
  updatePerahuKertasCover();
}

// Ganti sampul Mariposa.
function updateMariposaCover() {
  const newMariposaCover =
    "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/c56e44e0-5c7c-5d58-8f7e-cb78de78403e/dc034406-89b5-5a86-8d5a-c3dc2d4f0f42.jpg";

  const previousCoverFunction = getCover;

  getCover = function (novel) {
    if (novel.id === 8) {
      return Promise.resolve(newMariposaCover);
    }

    return previousCoverFunction(novel);
  };

  coverCache[8] = {
    url: newMariposaCover,
    savedAt: Date.now()
  };

  coverJobs.set(
    8,
    Promise.resolve(newMariposaCover)
  );

  saveCache();
  renderNovels();

  if (selectedNovel?.id === 8) {
    const image = document.getElementById("modalCover");
    const fallback =
      document.getElementById("modalCoverFallback");

    image.onload = () => {
      image.classList.remove("hidden");
      fallback.classList.add("hidden");
    };

    image.onerror = () => {
      image.classList.add("hidden");
      fallback.classList.remove("hidden");
    };

    image.src = newMariposaCover;
  }
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    updateMariposaCover
  );
} else {
  updateMariposaCover();
}

// ===============================================
// TAMBAHAN 24 NOVEL — HANYA MUNCUL SAAT DICARI
// ===============================================

(function addSearchOnlyNovels() {
  // Tahun yang belum dimasukkan ditampilkan sebagai "—".
  // Genre di sini merupakan pengelompokan katalog NovelSpace.

  const extraNovels = [
    {
      id: 19,
      title: "Bulan",
      author: "Tere Liye",
      genre: "Fantasy",
      year: 2015,
      description:
        "Salah satu novel dalam rangkaian petualangan dunia paralel karya Tere Liye."
    },
    {
      id: 20,
      title: "Matahari",
      author: "Tere Liye",
      genre: "Fantasy",
      year: "—",
      description:
        "Bagian dari rangkaian novel dunia paralel karya Tere Liye, untuk pembaca yang ingin melanjutkan penjelajahan setelah Bumi dan Bulan."
    },
    {
      id: 21,
      title: "Komet",
      author: "Tere Liye",
      genre: "Fantasy",
      year: 2018,
      description:
        "Novel fantasi dalam rangkaian dunia paralel karya Tere Liye."
    },
    {
      id: 22,
      title: "Komet Minor",
      author: "Tere Liye",
      genre: "Fantasy",
      year: 2019,
      description:
        "Bagian lanjutan rangkaian dunia paralel karya Tere Liye, setelah Komet."
    },
    {
      id: 23,
      title: "Selena",
      author: "Tere Liye",
      genre: "Fantasy",
      year: 2020,
      description:
        "Pilihan lain dari rangkaian novel fantasi dunia paralel karya Tere Liye."
    },
    {
      id: 24,
      title: "Nebula",
      author: "Tere Liye",
      genre: "Fantasy",
      year: 2020,
      description:
        "Novel dalam rangkaian dunia paralel karya Tere Liye yang dapat dijelajahi bersama Selena."
    },
    {
      id: 25,
      title: "Si Putih",
      author: "Tere Liye",
      genre: "Fantasy",
      year: 2021,
      description:
        "Salah satu judul dalam rangkaian novel fantasi dunia paralel karya Tere Liye."
    },
    {
      id: 26,
      title: "Lumpu",
      author: "Tere Liye",
      genre: "Fantasy",
      year: 2021,
      description:
        "Pilihan bacaan dalam rangkaian petualangan dunia paralel karya Tere Liye."
    },
    {
      id: 27,
      title: "Bibi Gill",
      author: "Tere Liye",
      genre: "Fantasy",
      year: 2022,
      description:
        "Novel fantasi karya Tere Liye yang menjadi bagian dari rangkaian dunia paralel."
    },
    {
      id: 28,
      title: "Rindu",
      author: "Tere Liye",
      genre: "Drama",
      year: 2014,
      description:
        "Novel karya Tere Liye dengan latar perjalanan dan perenungan kehidupan."
    },
    {
      id: 29,
      title: "Supernova 1: Kesatria, Putri, dan Bintang Jatuh",
      author: "Dee Lestari",
      genre: "Drama",
      year: 2001,
      description:
        "Buku pertama seri Supernova karya Dee Lestari. Awal untuk pembaca yang ingin mengikuti rangkaian enam bukunya."
    },
    {
      id: 30,
      title: "Supernova 2: Akar",
      author: "Dee Lestari",
      genre: "Drama",
      year: 2002,
      description:
        "Buku kedua dalam seri Supernova karya Dee Lestari."
    },
    {
      id: 31,
      title: "Supernova 3: Petir",
      author: "Dee Lestari",
      genre: "Drama",
      year: 2004,
      description:
        "Buku ketiga dalam seri Supernova karya Dee Lestari."
    },
    {
      id: 32,
      title: "Supernova 4: Partikel",
      author: "Dee Lestari",
      genre: "Adventure",
      year: 2012,
      description:
        "Buku keempat dalam seri Supernova karya Dee Lestari."
    },
    {
      id: 33,
      title: "Supernova 5: Gelombang",
      author: "Dee Lestari",
      genre: "Drama",
      year: 2014,
      description:
        "Buku kelima dalam seri Supernova karya Dee Lestari."
    },
    {
      id: 34,
      title: "Supernova 6: Inteligensi Embun Pagi",
      author: "Dee Lestari",
      genre: "Drama",
      year: 2016,
      description:
        "Buku keenam sekaligus penutup rangkaian Supernova karya Dee Lestari."
    },
    {
      id: 35,
      title: "Sang Pemimpi",
      author: "Andrea Hirata",
      genre: "Drama",
      year: 2006,
      description:
        "Bagian kedua Tetralogi Laskar Pelangi karya Andrea Hirata."
    },
    {
      id: 36,
      title: "Edensor",
      author: "Andrea Hirata",
      genre: "Adventure",
      year: 2007,
      description:
        "Bagian ketiga Tetralogi Laskar Pelangi karya Andrea Hirata."
    },
    {
      id: 37,
      title: "Maryamah Karpov",
      author: "Andrea Hirata",
      genre: "Drama",
      year: 2008,
      description:
        "Bagian keempat Tetralogi Laskar Pelangi karya Andrea Hirata."
    },
    {
      id: 38,
      title: "Padang Bulan",
      author: "Andrea Hirata",
      genre: "Drama",
      year: 2010,
      description:
        "Novel karya Andrea Hirata, pilihan tambahan untuk pembaca yang ingin menjelajahi karya lain di luar Tetralogi Laskar Pelangi."
    },
    {
      id: 39,
      title: "Cinta di Dalam Gelas",
      author: "Andrea Hirata",
      genre: "Drama",
      year: 2010,
      description:
        "Novel karya Andrea Hirata yang dapat dijelajahi bersama Padang Bulan."
    },
    {
      id: 40,
      title: "Sebelas Patriot",
      author: "Andrea Hirata",
      genre: "Drama",
      year: 2011,
      description:
        "Salah satu novel karya Andrea Hirata dalam koleksi tambahan NovelSpace."
    },
    {
      id: 41,
      title: "Ayah",
      author: "Andrea Hirata",
      genre: "Drama",
      year: 2015,
      description:
        "Novel karya Andrea Hirata, tersedia sebagai pilihan bacaan tambahan melalui pencarian."
    },
    {
      id: 42,
      title: "Sirkus Pohon",
      author: "Andrea Hirata",
      genre: "Drama",
      year: 2017,
      description:
        "Pilihan novel lain karya Andrea Hirata untuk memperluas penjelajahan bacaan."
    }
  ];

  // Hanya 18 novel awal yang tampil tanpa pencarian.
  const homeNovelIds = new Set(
    Array.from({ length: 18 }, (_, index) => index + 1)
  );

  // Hindari ID ganda.
  extraNovels.forEach((novel) => {
    const alreadyExists = novels.some((item) => {
      return item.id === novel.id;
    });

    if (!alreadyExists) {
      novels.push(novel);
    }
  });

  // Kandidat ID buku langsung untuk beberapa judul Supernova.
  // Novel lainnya tetap memakai pencari cover yang sudah ada.
  if (typeof coverSources !== "undefined") {
    coverSources[29] = {
      googleId: "Wt2OCwAAQBAJ",
      isbns: []
    };

    coverSources[31] = {
      googleId: "f92OCwAAQBAJ",
      isbns: []
    };

    coverSources[33] = {
      googleId: "yd2OCwAAQBAJ",
      isbns: []
    };

    coverSources[34] = {
      googleId: "wwCPCwAAQBAJ",
      isbns: []
    };
  }

  // Menyesuaikan pencocokan judul seri Supernova.
  const previousTitleMatches = titleMatches;

  titleMatches = function (novel, foundTitle) {
    if (novel.id >= 29 && novel.id <= 34) {
      const removeSeriesPrefix = (title) => {
        return normalizeText(
          String(title || "")
            .replace(/^supernova\s*\d*\s*[:\-]?\s*/i, "")
        );
      };

      const expected = removeSeriesPrefix(novel.title);
      const found = removeSeriesPrefix(foundTitle);

      return expected === found;
    }

    return previousTitleMatches(novel, foundTitle);
  };

  // Ganti renderer: tanpa pencarian hanya buku awal;
  // dengan pencarian seluruh koleksi ikut diperiksa.
  renderNovels = function () {
    const keyword = normalizeText(activeSearch);
    const isSearching = keyword.length > 0;

    const filteredNovels = novels.filter((novel) => {
      const allowedToAppear =
        isSearching || homeNovelIds.has(novel.id);

      const matchesGenre =
        activeGenre === "all" ||
        novel.genre === activeGenre;

      const matchesSearch =
        !isSearching ||
        normalizeText(novel.title).includes(keyword) ||
        normalizeText(novel.author).includes(keyword);

      return (
        allowedToAppear &&
        matchesGenre &&
        matchesSearch
      );
    });

    const grid = document.getElementById("novelGrid");
    const empty = document.getElementById("emptyState");
    const counter = document.getElementById("resultCount");

    grid.replaceChildren(
      ...filteredNovels.map(createNovelCard)
    );

    empty.classList.toggle(
      "hidden",
      filteredNovels.length > 0
    );

    counter.textContent = isSearching
      ? `${filteredNovels.length} novel ditemukan`
      : `Menampilkan ${filteredNovels.length} novel pilihan`;

    document.querySelectorAll(".genre-btn").forEach((button) => {
      const active =
        button.dataset.genre === activeGenre;

      button.classList.toggle("active", active);

      button.setAttribute(
        "aria-pressed",
        String(active)
      );
    });
  };

  function refreshExpandedCatalogue() {
    renderNovels();
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      refreshExpandedCatalogue
    );
  } else {
    refreshExpandedCatalogue();
  }
})();


// =============================================
// SAMPUL UNTUK LIMA BUKU TAMBAHAN
// =============================================

(function installFiveBookCovers() {
  const selectedCovers = {
    // Nebula — Tere Liye
    // Sumber gambar: halaman buku Gramedia Pustaka Utama.
    24: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/e2c74fdc-e137-554a-ad84-e9fb63366276/954130d0-d0da-59e6-8e5d-20e75cb9e02d.jpg",

    // Supernova 2: Akar — Dee Lestari
    // Sumber gambar: Mizanstore, edisi republish 2025.
    30: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/c958053b-9003-5573-ba5a-edd64e9e1c00/972f6008-9cea-58cb-9bf1-f38c58d13157.jpg",

    // Supernova 4: Partikel — Dee Lestari
    // Sumber gambar: Mizanstore.
    32: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/12c7eeaa-0d33-5492-adee-dee7dd15f5b0/972f6008-9cea-58cb-9bf1-f38c58d13157.jpg",

    // Padang Bulan — Andrea Hirata
    // Sumber gambar: Gramedia.
    38: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/88dfcb29-2411-542f-ad5a-10e5aac37f7b/93e98831-d278-5b3e-8482-db89ad3d150f.jpg",

    // Ayah — Andrea Hirata
    // Sumber gambar: Mizanstore.
    41: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/3ef3ab54-03f7-55d2-96e4-dc0e59721ff7/972f6008-9cea-58cb-9bf1-f38c58d13157.jpg"
  };

  // Pertahankan semua penggantian sampul sebelumnya.
  const previousGetCover = getCover;

  getCover = function (novel) {
    const fixedCover = selectedCovers[novel.id];

    if (fixedCover) {
      return Promise.resolve(fixedCover);
    }

    return previousGetCover(novel);
  };

  function applySelectedCovers() {
    Object.entries(selectedCovers).forEach(([id, url]) => {
      coverCache[id] = {
        url: url,
        savedAt: Date.now()
      };

      coverJobs.set(
        Number(id),
        Promise.resolve(url)
      );
    });

    saveCache();

    // Memakai renderer yang sudah menyembunyikan buku tambahan.
    renderNovels();

    // Perbarui juga jika detail salah satu buku sedang terbuka.
    if (!selectedNovel) return;

    const modalURL = selectedCovers[selectedNovel.id];

    if (!modalURL) return;

    const image = document.getElementById("modalCover");
    const fallback =
      document.getElementById("modalCoverFallback");

    image.onload = () => {
      image.classList.remove("hidden");
      fallback.classList.add("hidden");
    };

    image.onerror = () => {
      image.classList.add("hidden");
      fallback.classList.remove("hidden");
    };

    image.src = modalURL;
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      applySelectedCovers
    );
  } else {
    applySelectedCovers();
  }
})();

// Tampilkan Nebula bersama 18 novel awal.
(function showNebulaOnHome() {
  renderNovels = function () {
    const keyword = normalizeText(activeSearch);
    const isSearching = keyword.length > 0;

    const filteredNovels = novels.filter((novel) => {
      // ID 1–18 adalah koleksi awal.
      // ID 24 adalah Nebula.
      const appearsOnHome =
        novel.id <= 18 || novel.id === 24;

      const allowedToAppear =
        isSearching || appearsOnHome;

      const matchesGenre =
        activeGenre === "all" ||
        novel.genre === activeGenre;

      const matchesSearch =
        !isSearching ||
        normalizeText(novel.title).includes(keyword) ||
        normalizeText(novel.author).includes(keyword);

      return (
        allowedToAppear &&
        matchesGenre &&
        matchesSearch
      );
    });

    document.getElementById("novelGrid").replaceChildren(
      ...filteredNovels.map(createNovelCard)
    );

    document.getElementById("emptyState").classList.toggle(
      "hidden",
      filteredNovels.length > 0
    );

    document.getElementById("resultCount").textContent =
      isSearching
        ? `${filteredNovels.length} novel ditemukan`
        : `Menampilkan ${filteredNovels.length} novel pilihan`;

    document.querySelectorAll(".genre-btn").forEach((button) => {
      const active =
        button.dataset.genre === activeGenre;

      button.classList.toggle("active", active);

      button.setAttribute(
        "aria-pressed",
        String(active)
      );
    });
  };

  function refreshHomeCatalogue() {
    // Sesuaikan angka koleksi di hero.
    const collectionCount =
      document.querySelector(".hero-stats .stat strong");

    if (collectionCount) {
      collectionCount.textContent = "19";
    }

    renderNovels();
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      refreshHomeCatalogue
    );
  } else {
    refreshHomeCatalogue();
  }
})();  


// ===============================================
// BUKU TAMBAHAN IKUT TAMPIL SAAT GENRE DIPILIH
// ===============================================

(function enableFullGenreCatalogue() {
  renderNovels = function () {
    const keyword = normalizeText(activeSearch);

    const isSearching = keyword.length > 0;
    const isFilteringGenre = activeGenre !== "all";

    const filteredNovels = novels.filter((novel) => {
      // Tampilan awal: 18 buku pertama + Nebula.
      const appearsOnHome =
        novel.id <= 18 || novel.id === 24;

      // Seluruh koleksi boleh muncul saat mencari
      // atau ketika genre tertentu dipilih.
      const allowedToAppear =
        appearsOnHome ||
        isSearching ||
        isFilteringGenre;

      const matchesGenre =
        activeGenre === "all" ||
        novel.genre === activeGenre;

      const matchesSearch =
        !isSearching ||
        normalizeText(novel.title).includes(keyword) ||
        normalizeText(novel.author).includes(keyword);

      return (
        allowedToAppear &&
        matchesGenre &&
        matchesSearch
      );
    });

    // Tampilkan kartu buku yang sesuai.
    document.getElementById("novelGrid").replaceChildren(
      ...filteredNovels.map(createNovelCard)
    );

    // Tampilkan pesan jika tidak ada hasil.
    document.getElementById("emptyState").classList.toggle(
      "hidden",
      filteredNovels.length > 0
    );

    // Perbarui keterangan jumlah buku.
    const resultCount = document.getElementById("resultCount");

    if (isSearching) {
      resultCount.textContent =
        `${filteredNovels.length} novel ditemukan`;
    } else if (isFilteringGenre) {
      resultCount.textContent =
        `${filteredNovels.length} novel dalam genre ${activeGenre}`;
    } else {
      resultCount.textContent =
        `Menampilkan ${filteredNovels.length} novel pilihan`;
    }

    // Perbarui tombol genre yang aktif.
    document.querySelectorAll(".genre-btn").forEach((button) => {
      const active =
        button.dataset.genre === activeGenre;

      button.classList.toggle("active", active);

      button.setAttribute(
        "aria-pressed",
        String(active)
      );
    });
  };

  function refreshGenreCatalogue() {
    renderNovels();
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      refreshGenreCatalogue
    );
  } else {
    refreshGenreCatalogue();
  }
})(); 

// ================================================
// GANTI SAMPUL ANDREA HIRATA DAN SELURUH SUPERNOVA
// ================================================

(function replaceAndreaAndSupernovaCovers() {
  const replacementCovers = {
    // Edensor — Andrea Hirata
    // Halaman sumber: Gramedia.
    36: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/febb15cd-d7af-564a-bf85-f4ca53ed7d3e/93e98831-d278-5b3e-8482-db89ad3d150f.jpg",

    // Maryamah Karpov — Andrea Hirata
    // Halaman sumber: Amazon, edisi Mimpi-mimpi Lintang.
    37: "https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6ebc21804c2d5ef76260df724dad24c38f386965c26072a22f42441e5ed04b9aa7317c7e0bc0fafa6e66d9ff42eaf371f42ffa12dcac08353e8050ff86aac2de00",

    // Sebelas Patriot — Andrea Hirata
    // Halaman sumber: penerbit PTS, edisi Malaysia.
    40: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/0610a4db-5fb0-5436-a163-65c16a2b2aaa/9ab72708-f112-5f01-b047-9d773424e091.jpg",

    // Supernova 1: Kesatria, Putri, dan Bintang Jatuh
    // Halaman sumber: Mizanstore, edisi republish.
    29: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/001f1c16-506f-52c4-8765-964183b684c0/972f6008-9cea-58cb-9bf1-f38c58d13157.jpg",

    // Supernova 2: Akar
    // Halaman sumber: Mizanstore, edisi republish 2025.
    30: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/c958053b-9003-5573-ba5a-edd64e9e1c00/972f6008-9cea-58cb-9bf1-f38c58d13157.jpg",

    // Supernova 3: Petir
    // Halaman sumber: Mizanstore.
    31: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/b9fb6b23-01e1-5f15-b18b-1cf06f229637/972f6008-9cea-58cb-9bf1-f38c58d13157.jpg",

    // Supernova 4: Partikel
    // Halaman sumber: Mizanstore.
    32: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/12c7eeaa-0d33-5492-adee-dee7dd15f5b0/972f6008-9cea-58cb-9bf1-f38c58d13157.jpg",

    // Supernova 5: Gelombang
    // Halaman sumber: Mizanstore, edisi republish 2025.
    33: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/c68b0630-80c3-5fe3-9574-d9703a26ef96/972f6008-9cea-58cb-9bf1-f38c58d13157.jpg",

    // Supernova 6: Inteligensi Embun Pagi
    // Halaman sumber: BukuKita.
    34: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/5bc28a3a-d2a8-5fc0-a9b2-696b08273351/dc034406-89b5-5a86-8d5a-c3dc2d4f0f42.jpg"
  };

  // Pertahankan penggantian sampul buku lain.
  const previousCoverFunction = getCover;

  getCover = function (novel) {
    const selectedURL = replacementCovers[novel.id];

    if (selectedURL) {
      return Promise.resolve(selectedURL);
    }

    return previousCoverFunction(novel);
  };

  // Pertahankan fungsi pembuat kartu sebelumnya.
  const previousCardFunction = createNovelCard;

  createNovelCard = function (novel, index) {
    const card = previousCardFunction(novel, index);
    const selectedURL = replacementCovers[novel.id];

    if (!selectedURL) {
      return card;
    }

    const image = card.querySelector(".cover-wrap img");

    if (image) {
      // Tampilkan seluruh sampul, bukan memotongnya.
      image.style.objectFit = "contain";
      image.style.backgroundColor = "#111318";
      image.style.padding = "8px";

      image.src = selectedURL;
    }

    return card;
  };

  function applyReplacementCovers() {
    Object.entries(replacementCovers).forEach(([id, url]) => {
      coverCache[id] = {
        url: url,
        savedAt: Date.now()
      };

      coverJobs.set(
        Number(id),
        Promise.resolve(url)
      );
    });

    saveCache();

    // Tetap menggunakan aturan halaman awal,
    // pencarian, dan filter genre yang sudah dipasang.
    renderNovels();

    if (!selectedNovel) {
      return;
    }

    const selectedURL =
      replacementCovers[selectedNovel.id];

    if (!selectedURL) {
      return;
    }

    const image = document.getElementById("modalCover");
    const fallback =
      document.getElementById("modalCoverFallback");

    image.onload = () => {
      image.classList.remove("hidden");
      fallback.classList.add("hidden");
    };

    image.onerror = () => {
      image.classList.add("hidden");
      fallback.classList.remove("hidden");
    };

    image.src = selectedURL;
  }

  // Pastikan sampul detail juga tidak terpotong.
  const previousOpenModal = openModal;

  openModal = function (novel) {
    const image = document.getElementById("modalCover");

    // Reset gaya agar tidak memengaruhi buku lainnya.
    image.style.objectFit = "";
    image.style.padding = "";
    image.style.backgroundColor = "";

    previousOpenModal(novel);

    if (replacementCovers[novel.id]) {
      image.style.objectFit = "contain";
      image.style.padding = "8px";
      image.style.backgroundColor = "#111318";
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      applyReplacementCovers
    );
  } else {
    applyReplacementCovers();
  }
})();