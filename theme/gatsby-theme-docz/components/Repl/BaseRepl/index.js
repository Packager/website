/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment, useState } from "react";
import * as styles from "./styles";

export const BaseRepl = ({ children }) => (
  <div sx={styles.container}>{children}</div>
);
