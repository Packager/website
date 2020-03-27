/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment, useState } from "react";
import * as styles from "./styles";

const InstantRefresh = ({ handleOnChange }) => (
  <label htmlFor="instant">
    <input
      id="instant"
      name="instant"
      type="checkbox"
      onChange={handleOnChange}
    />
    Instant Refresh?
  </label>
);

export const Options = ({ handleInstantRefreshChange }) => (
  <div sx={styles.container}>
    <InstantRefresh handleOnChange={handleInstantRefreshChange} />
  </div>
);
