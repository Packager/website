/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment, useState, useEffect } from "react";

import { Controlled as ReactCodeMirror } from "react-codemirror2";

import { Files } from "../Files";
import * as styles from "./styles";
import { options as languageOptions, getFileLang } from "../utils";

// Weird fix for CodeMirror in SSR mode.
if (typeof navigator !== "undefined") {
  require("codemirror/lib/codemirror.css");
  require("../theme.css");
  require("codemirror/mode/javascript/javascript");
  require("codemirror/mode/jsx/jsx");
  require("codemirror/mode/vue/vue");
  require("codemirror/mode/xml/xml");
  require("codemirror/mode/stylus/stylus");
  require("codemirror/mode/css/css");
  require("codemirror/mode/sass/sass");
  require("codemirror/mode/coffeescript/coffeescript");
}

const defaultOptions = {
  lineNumbers: true,
  tabSize: 2,
  theme: "packager"
};

const CodeEditorWrapper = ({ children }) => (
  <div sx={styles.wrapper}>{children}</div>
);

let timeoutDebounce;
export const CodeEditor = ({
  files,
  onUpdateFile,
  onAddFile,
  instantRefresh = false
}) => {
  const [editor, setEditor] = useState(null);
  const [currentFile, setCurrentFile] = useState(files[1]);
  const [currentLang, setCurrentLang] = useState(null);

  useEffect(() => {
    const lang = getFileLang(currentFile);
    setCurrentLang(lang);
  }, [currentFile]);

  useEffect(() => {
    if (editor) {
      editor.setOption("mode", languageOptions[currentLang].mode);
    }
  }, [currentLang]);

  function onFileSelect(file) {
    if (file.path !== currentFile.path) {
      setCurrentFile(file);
    }
  }

  function updateCurrentFile(code) {
    setCurrentFile({ ...currentFile, code });
  }

  function _onUpdateFile(editor, data, value) {
    updateCurrentFile(value);
    clearTimeout(timeoutDebounce);
    timeoutDebounce = setTimeout(
      () => {
        onUpdateFile({ ...currentFile, code: value });
      },
      instantRefresh ? 0 : 600
    );
  }

  function _onAddFile(file) {
    onAddFile(file);
    setCurrentFile(file);
  }

  return (
    <CodeEditorWrapper>
      <Files
        files={files}
        currentFile={currentFile}
        onFileSelect={onFileSelect}
        onAddFile={_onAddFile}
      />
      <ReactCodeMirror
        sx={styles.editor}
        value={currentFile.code}
        options={defaultOptions}
        onBeforeChange={_onUpdateFile}
        editorDidMount={cmEditor => setEditor(cmEditor)}
      />
    </CodeEditorWrapper>
  );
};
