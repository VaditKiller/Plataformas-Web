const slendermanUrl = "../expediente_slenderman_latam/code.html";
const jeffUrl = "../expediente_jeff_the_killer_latam/code.html";
const smileDogUrl = "../expediente_smile_dog_latam/code.html";
const benDrownedUrl = "../expediente_ben_drowned_latam/code.html";

const archives = [
  {
    name: "Slenderman",
    category: "Entidad",
    risk: "Alto",
    origin: "Foros, 2009",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0PHHsurPGz_EU78nvBErB_FZ-LGjPHcjSx_eZ6bRk-6LoDq36dHBeutGHNb2Rx6ZMUGG5DZQw_P6CIQ6pVsRycY_VEUclI7bIsWftYFnUPf3-8QDNDRGwOgDCB02b2k3nxE4Df6jlTpFai_45tRA7P-Kt1nfUY9W7MimQsqSpWfpiK0Dc53rQOW6BcVeDi5Zre8KD1C019LwPjdfE7E3i_roQcw3vs_f_gcSasbW6o89z3x3HwgVxA-X-voaXBSReczr3cwY0ebyW",
    summary: "La figura sin rostro que acecha bosques, fotos antiguas y grabaciones defectuosas.",
    symptoms: ["Paranoia", "Interferencia visual", "Desapariciones"],
    detail: "Slenderman funciona como categoria principal y expediente completo. Desde esta ficha puedes leer un resumen, marcarlo como revisado o abrir la pagina dedicada.",
    featured: true,
    url: slendermanUrl
  },
  {
    name: "Jeff the Killer",
    category: "Asesino",
    risk: "Medio",
    origin: "Relatos virales",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCo8ZLBakLhEIu4Iwp5_4dPP9BPNytJEZKHWwB_VMcG-7ae5i0v5JI0BViFbScOi8p5DwpiKLU3yylnrGxfqcTQ8eiUGCU-MUyO2hDFCTAqxyJaLbc8HnLZSqteoDAbwSJevnfAWCc83Z4BVoZrlUMGYTXx2TRUtcOL1_Z3pSpH4JeBmFQqJMQ5EG62eeHewoOKyJredA4p9YevTaIFgUCnnlm0ig3A7M_Lu80TLeZyh5ld2mJlC3dJmjocvPXIMErArYlcTVZnzIFr",
    summary: "Una sonrisa imposible y una frase que convirtio la hora de dormir en amenaza.",
    symptoms: ["Insomnio", "Vigilancia nocturna", "Obsesion"],
    detail: "Su expediente mezcla transformacion, violencia urbana y miedo domestico. Es una de las leyendas mas reconocibles del archivo.",
    url: jeffUrl
  },
  {
    name: "Smile Dog",
    category: "Imagen maldita",
    risk: "Alto",
    origin: "smile.jpg",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfHmgMHoKfgEzLpcJ7E2pdw0ghup-4yFi5NQA_8gVowWPCAbzrQcNzD9mKvWsGhWzuKDz1_jWpZ2Mx2FerxCNQox9RWziOXl_yRP36fn4sD45U-dcavniiTN9-hHV6QtGMYZEIKUnAoChNj0UcRDk8bfEgd4eaSa5hFC371a3iU7zGDMwcvcbxejOKNOuaSCgHVCAovjbD7r1mHER6CdOgmoFFFZ3if5WVzwUFOy_eFIuH08BvLaF9ggXM95zoqoGylOnC_0QIL3-7",
    summary: "Un archivo que pide ser compartido y convierte al lector en parte de la cadena.",
    symptoms: ["Pesadillas", "Compulsion", "Ansiedad"],
    detail: "La historia de Smile Dog vive en la transmision: mirar, copiar, reenviar y dejar que otra persona cargue con la imagen.",
    url: smileDogUrl
  },
  {
    name: "Ben Drowned",
    category: "Videojuego maldito",
    risk: "Alto",
    origin: "Cartucho de Majora's Mask",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCt7Ei7FBvzjhQqxVC1d89rntq9TmhpH_ziL366Y65l6Iaglizo61HaRFVx0afKKNrTjW5MVwAZ2TQw_ImoCbF4vIR40J-tLRJzDW0ciD24pRLntWB3jp9z8sE-1-YlMXRM4P_rd3C6RV1keibVZGObudOB2uaPjjqqJvZXRSNtUoaKCAt4HPaDPVcoJGq91zZaf77xIjFXOAvBuvQEzum5xvkmgUqCTnCpk5B11X53ptyYcJNbxD6xGjPTi4-XVbvTL0yDQLkqYGaV",
    summary: "Un cartucho usado, una partida guardada con un nombre imposible y un juego que parece recordar al jugador.",
    symptoms: ["Glitches", "Texto alterado", "Sensacion de vigilancia"],
    detail: "Su expediente se centra en el terror de archivo, los errores del juego y la idea de que una partida guardada pueda mirarte de vuelta.",
    url: benDrownedUrl
  }
];

const state = {
  query: "",
  filter: "Todas",
  saved: loadStories(),
  likes: Number(localStorage.getItem("mc_likes") || 0)
};

const cardsGrid = document.querySelector("#cardsGrid");
const filters = document.querySelector("#filters");
const searchInput = document.querySelector("#searchInput");
const detailModal = document.querySelector("#detailModal");
const loginModal = document.querySelector("#loginModal");

function loadStories() {
  try {
    return JSON.parse(localStorage.getItem("mc_stories") || "[]");
  } catch {
    return [];
  }
}

function saveStories() {
  localStorage.setItem("mc_stories", JSON.stringify(state.saved));
}

function renderStats() {
  document.querySelector("#archiveCount").textContent = archives.length;
  document.querySelector("#highRiskCount").textContent = archives.filter(item => item.risk === "Alto").length;
  document.querySelector("#savedCount").textContent = state.saved.length;
}

function renderFilters() {
  const categories = ["Todas", ...new Set(archives.map(item => item.category))];
  filters.innerHTML = categories.map(category => (
    `<button class="chip ${category === state.filter ? "active" : ""}" data-filter="${category}" type="button">${category}</button>`
  )).join("");
}

function archiveMatches(item) {
  const text = [
    item.name,
    item.category,
    item.risk,
    item.origin,
    item.summary,
    item.symptoms.join(" ")
  ].join(" ").toLowerCase();

  const queryOk = text.includes(state.query.trim().toLowerCase());
  const filterOk = state.filter === "Todas" || item.category === state.filter;
  return queryOk && filterOk;
}

function renderCards() {
  const visible = archives.filter(archiveMatches);
  cardsGrid.innerHTML = visible.map(item => {
    const index = archives.indexOf(item);
    const mainLink = item.url ? `<a class="ghost-btn" href="${item.url}">Expediente principal</a>` : "";

    return `
      <article class="card ${item.featured ? "featured-card" : ""}">
        <div class="card-image" style="background-image:url('${item.image}')"></div>
        <div class="card-body">
          <div class="meta mono">
            <span>${item.category}</span>
            <span>Riesgo ${item.risk}</span>
            <span>${item.origin}</span>
          </div>
          <h3 class="serif">${item.name}</h3>
          <p>${item.summary}</p>
          <div class="card-actions">
            <button class="primary-btn" data-open="${index}" type="button">Vista rapida</button>
            ${mainLink}
          </div>
        </div>
      </article>
    `;
  }).join("");

  document.querySelector("#emptyState").style.display = visible.length ? "none" : "block";
}

function openArchive(index) {
  const item = archives[index];
  document.querySelector("#modalLabel").textContent = `${item.category} · Riesgo ${item.risk}`;
  document.querySelector("#modalBody").innerHTML = `
    <div class="modal-image" style="background-image:url('${item.image}')"></div>
    <h2 class="serif">${item.name}</h2>
    <p>${item.detail}</p>
    <div class="meta mono">${item.symptoms.map(symptom => `<span>${symptom}</span>`).join("")}</div>
    <div class="button-row">
      <button class="primary-btn" id="markRead" type="button">Marcar revisado</button>
      ${item.url ? `<a class="ghost-btn" href="${item.url}">Abrir expediente completo</a>` : ""}
    </div>
  `;
  detailModal.showModal();

  document.querySelector("#markRead").addEventListener("click", event => {
    event.currentTarget.textContent = "Revisado en esta sesion";
  });
}

function openVideo(title, time) {
  document.querySelector("#modalLabel").textContent = "Reproductor";
  document.querySelector("#modalBody").innerHTML = `
    <h2 class="serif">${title}</h2>
    <div class="modal-image" style="display:grid;place-items:center;background:linear-gradient(45deg,#050606,#1b2424)">
      <span class="mono" style="color:var(--cyan)">Simulacion de video · ${time}</span>
    </div>
    <p>Este visor ya funciona con JavaScript. Puedes reemplazar la simulacion por un video real cuando tengas el archivo.</p>
  `;
  detailModal.showModal();
}

function renderSavedStories() {
  const list = document.querySelector("#savedList");
  if (!state.saved.length) {
    list.innerHTML = `<div class="saved-item">Aun no hay relatos guardados.</div>`;
    return;
  }

  list.innerHTML = state.saved.slice(-3).reverse().map(item => `
    <div class="saved-item">
      <strong>${item.title}</strong><br>
      <span class="mono" style="font-size:.66rem">${item.email} · ${item.date}</span>
    </div>
  `).join("");
}

document.querySelector("#menuBtn").addEventListener("click", () => {
  document.querySelector("#drawer").classList.toggle("open");
  document.body.classList.toggle("drawer-open");
});

document.querySelector("#drawer").addEventListener("click", event => {
  if (!event.target.closest("a")) return;
  document.querySelector("#drawer").classList.remove("open");
  document.body.classList.remove("drawer-open");
});

document.querySelector("#searchBtn").addEventListener("click", () => {
  document.querySelector("#categorias").scrollIntoView({ behavior: "smooth" });
  setTimeout(() => searchInput.focus(), 350);
});

searchInput.addEventListener("input", event => {
  state.query = event.target.value;
  renderCards();
});

filters.addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  state.filter = button.dataset.filter;
  renderFilters();
  renderCards();
});

cardsGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-open]");
  if (button) openArchive(Number(button.dataset.open));
});

document.querySelector("#randomBtn").addEventListener("click", () => {
  openArchive(Math.floor(Math.random() * archives.length));
});

document.querySelector("#openSlenderQuick").addEventListener("click", () => {
  openArchive(archives.findIndex(item => item.name === "Slenderman"));
});

document.querySelectorAll(".media-card").forEach(card => {
  card.addEventListener("click", () => openVideo(card.dataset.video, card.dataset.time));
});

document.querySelector("#closeModal").addEventListener("click", () => detailModal.close());
document.querySelector("#closeLogin").addEventListener("click", () => loginModal.close());

document.querySelector("#loginBtn").addEventListener("click", () => loginModal.showModal());

document.querySelector("#loginForm").addEventListener("submit", event => {
  event.preventDefault();
  const alias = document.querySelector("#aliasInput").value.trim() || "Investigador";
  document.querySelector("#loginStatus").textContent = `Acceso concedido: ${alias}`;
  document.querySelector("#loginBtn").textContent = alias;
});

document.querySelector("#storyForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  const status = document.querySelector("#formStatus");

  if (!form.checkValidity()) {
    status.textContent = "Completa titulo, correo valido y un relato de al menos 20 caracteres.";
    return;
  }

  const data = new FormData(form);
  state.saved.push({
    title: data.get("title").trim(),
    email: data.get("email").trim(),
    story: data.get("story").trim(),
    date: new Date().toLocaleString("es-BO", { dateStyle: "short", timeStyle: "short" })
  });

  saveStories();
  form.reset();
  status.textContent = "Relato guardado correctamente.";
  renderSavedStories();
  renderStats();
});

document.querySelector("#likeBtn").addEventListener("click", event => {
  state.likes += 1;
  localStorage.setItem("mc_likes", String(state.likes));
  event.currentTarget.textContent = `Me gusta el horror (${state.likes})`;
});

renderStats();
renderFilters();
renderCards();
renderSavedStories();
