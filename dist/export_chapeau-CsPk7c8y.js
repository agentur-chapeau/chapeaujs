function exportChapeau(object) {
  const Chapeau = window.Chapeau || {};
  Object.assign(Chapeau, object);
  window.Chapeau = Chapeau;
  return Chapeau;
}
export {
  exportChapeau as e
};
//# sourceMappingURL=export_chapeau-CsPk7c8y.js.map
