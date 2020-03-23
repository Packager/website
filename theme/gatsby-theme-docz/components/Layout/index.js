/** @jsx jsx */
import { useRef, useState, Fragment } from "react";
import { jsx, Layout as BaseLayout, Main } from "theme-ui";
import { Global } from "@emotion/core";

import global from "~theme/global";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { MainContainer } from "../MainContainer";
import { FullPageContainer } from "../FullPageContainer";
import * as styles from "./styles";

export const Layout = ({ children, ctx }) => {
  const [open, setOpen] = useState(false);
  const nav = useRef();
  const { full: isFullpage = false } = ctx.frontmatter;

  return (
    <Fragment>
      {!isFullpage && (
        <BaseLayout sx={styles.base} data-testid="layout">
          <Global styles={global} />
          <Main sx={styles.main}>
            <Header onOpen={() => setOpen(s => !s)} />
            <div sx={styles.wrapper}>
              <Sidebar
                ref={nav}
                open={open}
                onFocus={() => setOpen(true)}
                onBlur={() => setOpen(false)}
                onClick={() => setOpen(false)}
              />
              <MainContainer data-testid="main-container">
                {children}
              </MainContainer>
            </div>
          </Main>
        </BaseLayout>
      )}
      {isFullpage && (
        <Fragment>
          <Global styles={global} />
          <Main sx={styles.mainFull}>
            <Header isFull={true} onOpen={() => setOpen(s => !s)} />
          </Main>
          <FullPageContainer>{children}</FullPageContainer>
        </Fragment>
      )}
    </Fragment>
  );
};
