import { exportChapeau } from "../../utils/export_chapeau.js";
import { onReady } from "../../utils/on_ready.js";
import { exportGlobal } from "../../utils/export_global.js";
import { swiperConfigurations } from "./configurations.js";

const swipers = {};

function getSwiper(name) {
  const element = document.querySelector(`[c-swiper="${name}"]`);
  return element.swiper ?? null;
}

async function configureSwiper(name, options) {
  if (!window.Swiper) {
    await loadSwiper();
  }

  const element = swipers[name].wrapper;
  if (element.swiper) {
    element.swiper.destroy();
  }

  return new Swiper(element, options);
}

onReady(async () => {
  const swiperElements = document.querySelectorAll("[c-swiper]");
  for (const swiperEl of swiperElements) {
    const name = swiperEl.attributes.getNamedItem("c-swiper").value;
    const elementType =
      swiperEl.attributes.getNamedItem("c-swiper-element")?.value ?? "wrapper";

    swipers[name] = {
      ...(swipers[name] ?? {}),
      [elementType]: swiperEl,
    };
  }

  console.log(swipers);
  for (const [swiperName, swiper] of Object.entries(swipers)) {
    const configurationName = swiper.wrapper.dataset.configuration;
    if (!configurationName) continue;

    let configuration = swiperConfigurations[configurationName];
    if (!configuration) {
      console.error(
        `Swiper Configuration with name "${configurationName}" not found!`,
      );
      continue;
    }

    if (configuration instanceof Function) {
      configuration = configuration(swiper);
    }

    await configureSwiper(swiperName, configuration);
  }
});

async function loadSwiper() {
  await import("../../dependencies/swiper.js").then(exportGlobal);
}

exportChapeau({
  getSwiper,
  configureSwiper,
  swipers,
});
