/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";

import * as styles from "./styles";

export const Files = ({ currentFile, files, onFileSelect, onAddFile }) => {
  function askForFileName() {
    const name = prompt(`Provide a file name without the forward-slash (/)`);

    if (Boolean(name)) {
      onAddFile({
        name,
        path: `/${name}`,
        code: ""
      });
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
                currentFile.path === file.path ? styles.fileActive : styles.file
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
