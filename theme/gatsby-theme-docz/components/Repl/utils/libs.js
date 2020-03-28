const ROOT = "https://cdn.jsdelivr.net/npm";

const cacheBusting = Date.now();

export default {
  packager: `${ROOT}/packager@latest/dist/index.browser.js?${cacheBusting}`,
  coffeescript: `${ROOT}/packager-plugin-coffeescript@latest/dist/index.browser.js?${cacheBusting}`,
  commonjs: `${ROOT}/packager-plugin-commonjs@latest/dist/index.browser.js?${cacheBusting}`,
  css: `${ROOT}/packager-plugin-css@latest/dist/index.browser.js?${cacheBusting}`,
  json: `${ROOT}/packager-plugin-json@latest/dist/index.browser.js?${cacheBusting}`,
  less: `${ROOT}/packager-plugin-less@latest/dist/index.browser.js?${cacheBusting}`,
  sass: `${ROOT}/packager-plugin-sass@latest/dist/index.browser.js?${cacheBusting}`,
  stylus: `${ROOT}/packager-plugin-stylus@latest/dist/index.browser.js?${cacheBusting}`,
  svelte: `${ROOT}/packager-plugin-svelte@latest/dist/index.browser.js?${cacheBusting}`,
  ts: `${ROOT}/packager-plugin-typescript@latest/dist/index.browser.js?${cacheBusting}`,
  vue: `${ROOT}/packager-plugin-vue@latest/dist/index.browser.js?${cacheBusting}`
};
