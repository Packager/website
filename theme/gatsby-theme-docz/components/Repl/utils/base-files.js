export default [
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
