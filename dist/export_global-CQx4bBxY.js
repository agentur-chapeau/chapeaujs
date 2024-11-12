function onReady(callback) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback);
  } else {
    callback();
  }
}
const exportGlobal = (module) => Object.assign(globalThis, module);
export {
  exportGlobal as e,
  onReady as o
};
//# sourceMappingURL=export_global-CQx4bBxY.js.map
