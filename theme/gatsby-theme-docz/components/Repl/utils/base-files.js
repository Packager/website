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
  <h1>Hello World</h1>,
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
  <h1>Hello World from Vue!</h1>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style>
  h1 {
   color: red; 
  }
</style>`
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
    code: `<h1>Hello from Svelte!</h1>`
  }
];

export default {
  react,
  vue,
  svelte
};
