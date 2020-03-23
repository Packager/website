/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { Fragment, useState, useEffect } from "react";
import * as styles from "./styles";

import iframeCode from "../utils/iframe-worker";

export const CodePreview = React.forwardRef(({ libs, files }, ref) => {
  const [activeLibs, setActiveLibs] = useState(libs);
  const [loaded] = useState(true);

  useEffect(() => {
    if (Object.keys(activeLibs).length !== Object.keys(libs).length) {
      (async () => {
        setActiveLibs(libs);
        await updateIframeLibs(libs);
      })();
    }
  }, [libs]);

  useEffect(() => {
    (async () => {
      await updateIframeLibs(libs);
      setup();
      updateFiles(files);
    })();
  }, [loaded]);

  useEffect(() => {
    if (ref.current) {
      updateFiles(files);
    }
  }, [files, loaded]);

  async function updateIframeLibs(libs) {
    if (!ref.current) return;
    const document = ref.current.contentWindow.document;

    const documentLibs = Array.from(
      document.querySelectorAll(`script[data-packager-libs]`)
    );

    for (const name in libs) {
      const url = libs[name];
      const foundScript = documentLibs.find(l => l.src === url);

      if (!foundScript) {
        await loadScript(name, url, document);
      }
    }
  }

  function loadScript(name, url, document) {
    return new Promise(resolve => {
      const script = document.createElement("script");
      script.src = url;
      script.onload = resolve;
      script.setAttribute("data-packager-libs", "");
      document.head.appendChild(script);
    });
  }

  function updateFiles(files) {
    if (!ref.current) return;
    ref.current.contentWindow.postMessage(files);
  }

  function setup() {
    if (!ref.current) return;
    const document = ref.current.contentWindow.document;
    document.querySelectorAll(`script[packager-code]`).remove();
    const tag = document.createElement("script");

    tag.setAttribute("packager-code", "");
    tag.appendChild(document.createTextNode(iframeCode));
    document.head.appendChild(tag);
  }

  return (
    <div sx={styles.container}>
      <iframe sx={styles.iframe} ref={ref} />
    </div>
  );
});
