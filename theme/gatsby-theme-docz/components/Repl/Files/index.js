/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";

import * as styles from "./styles";
import { options } from "../utils";

export const Files = ({ currentFile, files, onFileSelect, onAddFile }) => {
  const extensions = Object.keys(options);

  function isValidName(name) {
    const ext = name.split(".").pop();
    return extensions.includes(ext);
  }

  function askForFileName() {
    const name = prompt(`Provide a file name without the forward-slash (/)`);
    if (Boolean(name)) {
      if (isValidName(name)) {
        const isEntry = files.length === 0;
        onAddFile({
          name,
          path: `/${name}`,
          code: "",
          entry: isEntry
        });
      } else {
        alert(`Only these extensions are supported: ${extensions.join(", ")}`);
      }
    }
  }

  return (
    <div sx={styles.filesWrapper}>
      {files &&
        files.map(file => {
          return (
            <div
              key={file.path}
              onClick={() => onFileSelect(file)}
              sx={
                currentFile && currentFile.path === file.path
                  ? styles.fileActive
                  : styles.file
              }
            >
              {file.name}
            </div>
          );
        })}
      <div sx={styles.fileAdd} onClick={askForFileName}>
        +
      </div>
    </div>
  );
};
