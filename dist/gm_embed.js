import { e as exportChapeau } from "./export_chapeau-CsPk7c8y.js";
const mapHTML = `
  <iframe class="c-map__iframe" style="display: none" frameborder="0" allow="fullscreen" referrerpolicy="no-referrer-when-downgrade" loading="lazy"></iframe>
  <div class="c-map__overlay">
      <a href="#" class="c-map__button w-button">Karte laden</a>
      <p class="c-map__text">
      Die Karte wird von Google Maps eingebettet.<br>
      Es gelten die
      <a class="c-map__link" href="https://policies.google.com/privacy?hl=de"
          target="_blank">Datenschutzerklärungen</a>
      von Google.
      </p>
  </div>
`;
function createMap($el) {
  $el.classList.add("c-map");
  $el.innerHTML = mapHTML;
  const $iframe = $el.querySelector(".c-map .c-map__iframe");
  const $overlay = $el.querySelector(".c-map .c-map__overlay");
  const $link = $el.querySelector(".c-map .c-map__link");
  const url = $el.dataset.url;
  $overlay.addEventListener("click", () => Chapeau.loadMaps());
  $link.addEventListener("click", (e) => e.stopPropagation());
  function load() {
    $iframe.src = url;
    $iframe.style.display = null;
    $overlay.style.display = "none";
  }
  return {
    load
  };
}
Array.from(document.querySelectorAll('[c-map="iframe"]')).forEach((el) => {
  const url = el.querySelector("iframe").src;
  el.setAttribute("data-url", url);
});
const maps = Array.from(document.querySelectorAll("[c-map]")).map(createMap);
function loadMaps() {
  maps.forEach((map) => map.load());
  sessionStorage.setItem("c-accept_gm", true);
}
const accept = sessionStorage.getItem("c-accept_gm");
if (accept == "true") {
  loadMaps();
}
exportChapeau({
  loadMaps
});
//# sourceMappingURL=gm_embed.js.map
