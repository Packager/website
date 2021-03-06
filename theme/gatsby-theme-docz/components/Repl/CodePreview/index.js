/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { Fragment, useState, useEffect } from "react";
import * as styles from "./styles";

import iframeCode from "../utils/iframe-worker";

import { Options } from "../Options";

export const CodePreview = React.forwardRef(
  ({ libs, files, onInstantRefreshChange, onPreviewChanged }, ref) => {
    const [activeLibs, setActiveLibs] = useState(libs);
    const [loaded, setLoaded] = useState(false);

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
        if (!loaded) {
          await updateIframeLibs(libs);
          setup();
          setLoaded(true);
        } else {
          updateFiles(files);
        }
      })();
    }, [loaded]);

    useEffect(() => {
      if (ref.current) {
        updateFiles(files);
      }
    }, [files]);

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

    function removeStyles() {
      if (!ref.current) return;
      const document = ref.current.contentWindow.document;
      document
        .querySelectorAll(`style[data-src][type="text/css"]`)
        .forEach(s => s.remove());
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
      const pkgDocument = document.querySelector(`script[packager-code]`);
      const tag = document.createElement("script");

      pkgDocument && pkgDocument.remove();

      tag.setAttribute("packager-code", "");
      tag.appendChild(document.createTextNode(iframeCode));
      document.head.appendChild(tag);
    }

    function handleInstantRefreshChange({ target }) {
      onInstantRefreshChange(target.checked);
    }

    function handleExampleSelectorChange(files) {
      onPreviewChanged({ files });
      removeStyles();
    }

    return (
      <div sx={styles.container}>
        <Options
          handleInstantRefreshChange={handleInstantRefreshChange}
          handleExampleSelectorChange={handleExampleSelectorChange}
        />
        <iframe sx={styles.iframe} ref={ref} />
      </div>
    );
  }
);
