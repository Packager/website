/** @jsx jsx */
import { jsx } from "theme-ui";

import * as styles from "./styles";

export const FullPageContainer = ({ children }) => {
  return <div sx={styles.container}>{children}</div>;
};
