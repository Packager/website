/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment, useState, useRef } from "react";

import { BaseRepl } from "./BaseRepl";
import { CodePreview } from "./CodePreview";
import { CodeEditor } from "./CodeEditor";
import { libs, baseFiles } from "./utils";

export const Repl = () => {
  // const url = new URL(location.href);
  const [files, setFiles] = useState([]);
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

  function handlePreviewChange({ files }) {
    setFiles(files);
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
        onPreviewChanged={handlePreviewChange}
        onInstantRefreshChange={handleInstantRefreshChange}
      />
    </BaseRepl>
  );
};
