/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment, useState } from "react";

import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript.js";

import { Controlled as ReactCodeMirror } from "react-codemirror2";

import * as styles from "./styles";

const defaultOptions = {
  lineNumbers: true
};

export const CodeMirror = ({ code, updateCode }) => (
  <ReactCodeMirror
    sx={styles.wrapper}
    value={code}
    options={defaultOptions}
    onBeforeChange={(editor, data, value) => updateCode(value)}
  />
);
