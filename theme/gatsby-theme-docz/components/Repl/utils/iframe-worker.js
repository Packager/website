export default `
  if (!window.packager) {
    var packager = new Packager();
    var domCopy = Object.assign(document, {});
  } else {
    packager = new Packager();
    domCopy = Object.assign(document, {});
  }

  packager.registerPlugin(coffeescriptPlugin);
  packager.registerPlugin(commonjsPlugin);
  packager.registerPlugin(cssPlugin);
  packager.registerPlugin(jsonPlugin);
  packager.registerPlugin(lessPlugin);
  packager.registerPlugin(sassPlugin);
  packager.registerPlugin(stylusPlugin);
  packager.registerPlugin(sveltePlugin);
  packager.registerPlugin(typescriptPlugin);
  packager.registerPlugin(vuePlugin);

  function updateDom (files) {
    const index = getIndex(files);
    if (!index) {
        console.error(
            'Could not find an index.html or app.html in your public folder.'
        );
        return;
    }

    reAddDom();

    const domParser = new DOMParser();
    const parsedHtml = domParser.parseFromString(index.code, 'text/html');

    document.body.innerHTML = '';
    document.body.insertAdjacentHTML(
        'afterbegin', 
        parsedHtml.body.innerHTML
    );
  } 

  function getIndex (files) {
    return files.find(file => {
      if (file.path === '/index.html' || file.path === '/app.html') {
        return file;
      }
    });
  }

  function reAddDom () {
    if (document.body == null) {
      const newDoc = document.implementation.createHTMLDocument();
      document.write(newDoc);
      document.body.innerHTML = domCopy.body.innerHTML;
    }
  }

  window.addEventListener('message', async ({ data: files }) => {
    if (files && files.length) {
      try {
        const bundle = await packager.bundle(files);
        updateDom(files);
        eval(bundle.code);
      } catch (e) {
        console.error(e);
      }
    }
  });
`;
