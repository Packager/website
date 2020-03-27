/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment, useState, useRef } from "react";

import { BaseRepl } from "./BaseRepl";
import { CodePreview } from "./CodePreview";
import { CodeEditor } from "./CodeEditor";
import { libs, baseFiles } from "./utils";

export const Repl = () => {
  const [files, setFiles] = useState(baseFiles.svelte);
  const iframe = useRef(null);
  const [instantRefresh, setInstantRefresh] = useState(false);

  function handleFileUpdate(file) {
    setFiles(
      files.map(f => {
        if (f.path === file.path) {
          return file;
        }
        return f;
      })
    );
  }

  function handleAddFile(file) {
    setFiles([...files, file]);
  }

  function handleInstantRefreshChange(isInstant) {
    setInstantRefresh(isInstant);
  }

  return (
    <BaseRepl>
      <CodeEditor
        files={files}
        onUpdateFile={handleFileUpdate}
        onAddFile={handleAddFile}
        instantRefresh={instantRefresh}
      />
      <CodePreview
        ref={iframe}
        libs={libs}
        files={files}
        onInstantRefreshChange={handleInstantRefreshChange}
      />
    </BaseRepl>
  );
};
