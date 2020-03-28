/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment, useState, useEffect } from "react";
import * as styles from "./styles";
import { baseFiles } from "../utils";

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

function setActiveState(types) {
  let url = null;
  if (typeof window !== "undefined") {
    url = new URL(window.location.href);
    if (!url.searchParams.has("example")) {
      return types[0];
    }
  }

  const type = url ? url.searchParams.get("example").toLowerCase() : "";

  if (types.includes(type)) {
    return type;
  } else {
    return types[0];
  }
}

const ExampleSelector = ({ handleOnChange }) => {
  const types = Object.keys(baseFiles);
  const [active, setActive] = useState(setActiveState(types));

  useEffect(() => {
    handleOnChange(baseFiles[active].files);
  }, [active]);

  return (
    types.length && (
      <select
        sx={styles.exampleSelect}
        value={active}
        onChange={({ target }) => setActive(target.value)}
      >
        {types.map((type, index) => (
          <option key={index} value={type}>
            {baseFiles[type].title}
          </option>
        ))}
      </select>
    )
  );
};

export const Options = ({
  handleInstantRefreshChange,
  handleExampleSelectorChange
}) => (
  <div sx={styles.container}>
    <ExampleSelector handleOnChange={handleExampleSelectorChange} />
    <InstantRefresh handleOnChange={handleInstantRefreshChange} />
  </div>
);
