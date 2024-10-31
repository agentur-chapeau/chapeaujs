export function exportChapeau(object) {
  const Chapeau = window.Chapeau || {};

  Object.assign(Chapeau, object);

  window.Chapeau = Chapeau;
  return Chapeau;
}
