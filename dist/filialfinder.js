import { e as exportChapeau } from "./export_chapeau-CsPk7c8y.js";
let getMapOptions = () => {
  return {
    zoom: 15,
    center: new google.maps.LatLng(51.8822652, 8.5058202),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
};
let getIcon = () => {
  return {
    url: "https://cdn.prod.website-files.com/60d5998f051d878a160147f3/60d5a34ef2a5ad2788d45830_baeckereischumacher_300_180-300x180.png",
    anchor: new google.maps.Point(40, 45.25),
    scaledSize: new google.maps.Size(80, 90.5)
  };
};
let gmarkers = {};
let map;
let locationMarker;
if (sessionStorage.getItem("c-accept_gm") === "true") {
  loadFilialfinder();
}
function loadFilialfinder() {
  const scriptTag = document.createElement("script");
  scriptTag.setAttribute(
    "src",
    "https://maps.googleapis.com/maps/api/js?key=&amp"
  );
  scriptTag.setAttribute("async", true);
  scriptTag.addEventListener("load", initializeMap);
  document.body.appendChild(scriptTag);
  sessionStorage.setItem("c-accept_gm", true);
}
function initializeMap() {
  function createMarker(latlng, html) {
    const marker = new google.maps.Marker({
      position: latlng,
      icon: getIcon(),
      map
    });
    marker.addListener("click", () => {
      infoWindow.setContent(html);
      infoWindow.open(map, marker);
    });
    return marker;
  }
  map = new google.maps.Map(
    document.querySelector('[ff-element="map"]'),
    getMapOptions()
  );
  const infoWindow = new google.maps.InfoWindow();
  Array.from(
    document.querySelectorAll('[ff-element="list"] > [ff-element="item"]')
  ).forEach((item) => {
    const slug = item.querySelector('[ff-element="slug"]').innerText;
    const lat = item.querySelector('[ff-element="lat"]').innerText;
    const long = item.querySelector('[ff-element="long"]').innerText;
    const infoHTML = item.querySelector('[ff-element="info"]').outerHTML;
    gmarkers[slug] = createMarker(new google.maps.LatLng(lat, long), infoHTML);
  });
  Array.from(document.querySelectorAll('[ff-element="request"]')).forEach(
    (requestBtn) => {
      requestBtn.addEventListener("click", requestLocation);
    }
  );
  Array.from(document.querySelectorAll('[ff-element="show"]')).forEach(
    (showBtn) => {
      showBtn.addEventListener("click", showItem);
    }
  );
}
function showItem(event) {
  const btn = event.currentTarget;
  const item = btn.closest('[ff-element="item"]');
  if (item) {
    const slug = item.querySelector('[ff-element="slug"]').innerText;
    google.maps.event.trigger(gmarkers[slug], "click");
    document.querySelector('[ff-element="map"]').scrollIntoView({ behavior: "smooth", block: "center" });
  }
}
function requestLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(handlePosition, handleError);
    document.querySelector('[ff-element="loading"]').style.display = "block";
  } else {
    alert("Die Standortermittlung wird von diesem Browser nicht unterstützt.");
  }
}
function handlePosition(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  displayPosition(lat, long);
  sortByPosition(lat, long);
  document.querySelector('[ff-element="loading"]').style.display = "none";
}
function handleError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("Die Berechtigung zur Standortermittlung wurde nicht erteilt.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Standort ist momentan nicht verfügbar.");
      break;
    case error.TIMEOUT:
      alert("Zeitüberschreitung bei Standortermittlung.");
      break;
    case error.UNKNOWN_ERROR:
      alert("Ein unbekannter Fehler ist aufgetreten.");
      break;
  }
  document.querySelector('[ff-element="loading"]').style.display = "none";
}
function displayPosition(lat, long) {
  const latlong = new google.maps.LatLng(lat, long);
  map.panTo(latlong);
  map.setZoom(15);
  if (locationMarker) {
    locationMarker.setMap(null);
  }
  locationMarker = new google.maps.Marker({
    position: latlong,
    map
  });
  const infoWindow = new google.maps.InfoWindow({
    content: "Dein aktueller Standort"
  });
  locationMarker.addListener("click", () => {
    infoWindow.open(map, locationMarker);
  });
}
function sortByPosition(userLat, userLong) {
  function compare(left, right) {
    const leftLat = left.querySelector('[ff-element="lat"]').innerText;
    const leftLong = left.querySelector('[ff-element="long"]').innerText;
    const rightLat = right.querySelector('[ff-element="lat"]').innerText;
    const rightLong = right.querySelector('[ff-element="long"]').innerText;
    const leftDistance = computeDistance(userLat, userLong, leftLat, leftLong);
    const rightDistance = computeDistance(
      userLat,
      userLong,
      rightLat,
      rightLong
    );
    return leftDistance < rightDistance ? -1 : 1;
  }
  let list = document.querySelectorAll(
    '[ff-element="list"] > [ff-element="item"]'
  );
  list = Array.from(list);
  list.sort(compare);
  for (const item of list) {
    item.parentElement.appendChild(item);
  }
}
function computeDistance(lat1, long1, lat2, long2) {
  const R = 6371e3;
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (long2 - long1) * Math.PI / 180;
  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
}
function setMapOptions(getMapOptionsCallback) {
  getMapOptions = getMapOptionsCallback;
}
function setIcon(getIconCallback) {
  getIcon = getIconCallback;
}
exportChapeau({
  loadFilialfinder,
  setMapOptions,
  setIcon
});
//# sourceMappingURL=filialfinder.js.map
