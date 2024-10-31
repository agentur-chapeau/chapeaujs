import { exportChapeau } from "../utils/export_chapeau";

const videoHTML = `
    <iframe class="c-video__iframe" style="display: none" frameborder="0" allow="fullscreen"></iframe>
    <img class="c-video__thumbnail">
    <div class="c-video__overlay">
        <a href="#" class="c-video__button w-button">Video laden</a>
        <span class="c-video__text">
        Das Video wird von YouTube eingebettet.<br>
        Es gelten die
        <a class="c-video__link" href="https://policies.google.com/privacy?hl=de"
            target="_blank">Datenschutzerklärungen</a>
        von Google.
        </span>
    </div>
`;

function getIdFromUrl(urlString) {
  const url = new URL(urlString);
  let videoId = url.searchParams.get("v"); // Full URL
  if (!videoId) {
    videoId = url.pathname.split("/").slice(-1); // Short URL
  }

  return videoId;
}
/** @param {HTMLElement} $el */
function createVideo($el) {
  $el.classList.add("c-video");
  $el.innerHTML = videoHTML;

  const $iframe = $el.querySelector(".c-video .c-video__iframe");
  const $thumbnail = $el.querySelector(".c-video .c-video__thumbnail");
  const $overlay = $el.querySelector(".c-video .c-video__overlay");
  const $link = $el.querySelector(".c-video .c-video__link");

  const url = $el.dataset.url;
  const videoId = getIdFromUrl(url);

  const hasThumbnail = $el.dataset.thumbnail != null;
  if (hasThumbnail) {
    $thumbnail.src = $el.dataset.thumbnail;
  } else {
    $thumbnail.src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    // Check if maxresredefault thumbnail is available
    $thumbnail.addEventListener("load", () => {
      if ($thumbnail.naturalHeight <= 90) {
        // Fallback image from YT is 120x90
        $thumbnail.src = `http://img.youtube.com/vi/${videoId}/sddefault.jpg`; // Standard thumbnail
      }
    });
  }

  $overlay.addEventListener("click", () => Chapeau.loadVideos());
  $link.addEventListener("click", (e) => e.stopPropagation());

  // Remove padding-top if webflow yt-embed
  if ($el.classList.contains("w-embed-youtubevideo")) {
    $el.style.paddingTop = null;
  }

  function load() {
    const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;

    $iframe.src = embedUrl;

    $iframe.style.display = null;
    $thumbnail.style.display = "none";
    $overlay.style.display = "none";
  }

  return {
    load,
  };
}

// Convert all embedded YT-Elements
Array.from(
  document.querySelectorAll(
    ".w-richtext-figure-type-video > div, .w-embed-youtubevideo",
  ),
).forEach((el) => {
  const url = el.querySelector("iframe").src;
  el.setAttribute("c-video", "");
  el.setAttribute("data-url", url);
});

const videos = Array.from(document.querySelectorAll("[c-video]")).map(
  createVideo,
);

function loadVideos() {
  videos.forEach((video) => video.load());
  sessionStorage.setItem("c-accept_yt", true);
}

const accept = sessionStorage.getItem("c-accept_yt");
if (accept == "true") {
  loadVideos();
}

// Exports
exportChapeau({
  loadVideos,
});
