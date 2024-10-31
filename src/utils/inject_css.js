import styleInject from "style-inject";

export default function injectCss(css) {
  styleInject(css, { insertAt: "top" });
}
