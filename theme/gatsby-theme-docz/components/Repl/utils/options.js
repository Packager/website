const js = {
  mode: { name: "javascript", json: true, typescript: true }
};
const jsx = { mode: { name: "jsx" } };
const tsx = { mode: { name: "typescript-jsx" } };
const vue = { mode: { name: "vue" } };
const html = { mode: { name: "xml", htmlMode: true } };
const svelte = { mode: { name: "handlebars", base: "text/html" } };
const styl = { mode: { name: "styl" } };
const scss = { mode: { name: "scss" } };
const sass = { mode: { name: "sass" } };
const less = { mode: { name: "less" } };
const css = { mode: { name: "css" } };
const coffee = { mode: { name: "coffeescript" } };

export default {
  js,
  jsx: jsx,
  ts: js,
  tsx: jsx,
  vue,
  html,
  svelte,
  styl,
  scss,
  sass,
  less,
  css,
  coffee
};
