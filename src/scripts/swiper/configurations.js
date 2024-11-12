export const swiperConfigurations = {
  /** @returns {import("swiper/types").SwiperOptions} */
  auto: ({ pagination, prev, next }) => {
    return {
      slidesPerView: "auto",
      pagination: {
        el: pagination,
        clickable: true,
        type: "bullets",
      },
      navigation: {
        prevEl: prev,
        nextEl: next,
      },
    };
  },
};
