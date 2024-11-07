import { exportChapeau } from "../utils/export_chapeau.js";
import { onReady } from "../utils/on_ready.js";
import { exportGlobal } from "../utils/export_global.js";

function getSwiper(name) {
  const element = document.querySelector(`[c-swiper="${name}"]`);
  return element.swiper ?? null;
}

async function configureSwiper(name, options) {
  if (!window.Swiper) {
    await loadSwiper();
  }

  const element = document.querySelector(`[c-swiper="${name}"]`);
  if (element.swiper) {
    element.swiper.destroy();
  }

  return new Swiper(element, options);
}

onReady(() => {
  if (document.querySelector("[c-swiper]")) {
    loadSwiper();
  }
});

async function loadSwiper() {
  await import("../dependencies/swiper.js").then(exportGlobal);
}

exportChapeau({
  getSwiper,
  configureSwiper,
});
