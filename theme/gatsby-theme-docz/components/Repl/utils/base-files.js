const react = [
  {
    name: "index.html",
    path: "/index.html",
    code: "<div id='app'></div>"
  },
  {
    name: "app.js",
    path: "/app.js",
    entry: true,
    code: `import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello World from React</h1>,
  document.getElementById('app')
);
`
  }
];

const vue = [
  {
    name: "index.html",
    path: "/index.html",
    code: "<div id='app'></div>"
  },
  {
    name: "app.js",
    path: "/app.js",
    entry: true,
    code: `import Vue from 'vue';
import App from './App.vue';

new Vue({
  el: '#app',
  render: h => h(App)
});
`
  },
  {
    name: "App.vue",
    path: "/App.vue",
    code: `<template>
  <h1>Hello World from Vue</h1>
</template>
<script>
export default {
  name: 'app'
}
</script>`
  }
];

const svelte = [
  {
    name: "index.html",
    path: "/index.html",
    code: "<div id='app'></div>"
  },
  {
    name: "app.js",
    path: "/app.js",
    entry: true,
    code: `import App from './App.svelte';

new App({
  target: document.getElementById('app')
});
`
  },
  {
    name: "App.svelte",
    path: "/App.svelte",
    code: `<h1>Hello World from Svelte</h1>`
  }
];

const typescript = [
  {
    name: "index.html",
    path: "/index.html",
    code: "<h1 id='app'></h1>"
  },
  {
    name: "app.ts",
    path: "/app.ts",
    entry: true,
    code: `import greeting from './greeting';
document.getElementById('app').innerHTML = greeting('World');`
  },
  {
    name: "greeting.ts",
    path: "/greeting.ts",
    entry: true,
    code: `export default function (name: string): string {
  return 'Hello ' + name + ' from TypeScript';
}`
  }
];

const simple = [
  {
    name: "index.html",
    path: "/index.html",
    code: "<h1>Hello World ❤️</h1>"
  },
  {
    name: "app.js",
    path: "/app.js",
    entry: true,
    code: `const greeting = '';`
  }
];

export default {
  react: {
    title: "React",
    files: react
  },
  vue: {
    title: "Vue",
    files: vue
  },
  svelte: {
    title: "Svelte",
    files: svelte
  },
  typescript: {
    title: "TypeScript",
    files: typescript
  },
  simple: {
    title: "Simple",
    files: simple
  }
};
