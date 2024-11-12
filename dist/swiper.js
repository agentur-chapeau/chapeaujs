import { e as exportChapeau } from "./export_chapeau-CsPk7c8y.js";
import { o as onReady, e as exportGlobal } from "./export_global-CQx4bBxY.js";
const swiperConfigurations = {
  /** @returns {import("swiper/types").SwiperOptions} */
  auto: ({ pagination, prev, next }) => {
    return {
      slidesPerView: "auto",
      pagination: {
        el: pagination,
        clickable: true,
        type: "bullets"
      },
      navigation: {
        prevEl: prev,
        nextEl: next
      }
    };
  }
};
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
  var _a;
  const swiperElements = document.querySelectorAll("[c-swiper]");
  for (const swiperEl of swiperElements) {
    const name = swiperEl.attributes.getNamedItem("c-swiper").value;
    const elementType = ((_a = swiperEl.attributes.getNamedItem("c-swiper-element")) == null ? void 0 : _a.value) ?? "wrapper";
    swipers[name] = {
      ...swipers[name] ?? {},
      [elementType]: swiperEl
    };
  }
  console.log(swipers);
  for (const [swiperName, swiper] of Object.entries(swipers)) {
    const configurationName = swiper.wrapper.dataset.configuration;
    if (!configurationName) continue;
    let configuration = swiperConfigurations[configurationName];
    if (!configuration) {
      console.error(
        `Swiper Configuration with name "${configurationName}" not found!`
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
  await import("./swiper-CB_SkkcR.js").then(exportGlobal);
}
exportChapeau({
  getSwiper,
  configureSwiper,
  swipers
});
//# sourceMappingURL=swiper.js.map
