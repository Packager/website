/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment, useState, useRef } from "react";

import { BaseRepl } from "./BaseRepl";
import { CodePreview } from "./CodePreview";
import { CodeMirror as CodeEditor } from "./CodeMirror";
import { libs, baseFiles } from "./utils";

export const Repl = () => {
  const [code, setCode] = useState(baseFiles[1].code);
  const [files, setFiles] = useState(baseFiles);
  const iframe = useRef(null);

  const updateCode = value => setCode(value);

  const updateFiles = () => {
    const tempFiles = baseFiles.map(f => {
      if (f.path === "/app.js") {
        return { ...f, code };
      }
      return f;
    });

    setFiles(tempFiles);
  };

  return (
    <BaseRepl>
      <button onClick={updateFiles}>Update Code!</button>
      <CodeEditor code={code} updateCode={updateCode} />
      <CodePreview ref={iframe} libs={libs} files={files} />
    </BaseRepl>
  );
};
