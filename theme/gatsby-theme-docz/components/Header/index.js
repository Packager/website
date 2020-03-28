/** @jsx jsx */
import { jsx, Box, Flex } from "theme-ui";
import { useConfig, useCurrentDoc } from "docz";

import * as styles from "./styles";
import { Edit, Menu, Github, Tag } from "../Icons";
import { Logo } from "../Logo";

export const Header = props => {
  const { onOpen, isFull = false } = props;
  const {
    repository,
    themeConfig: { showMarkdownEditButton }
  } = useConfig();
  const { edit = true, ...doc } = useCurrentDoc();

  return (
    <div sx={isFull ? styles.wrapperFull : styles.wrapper} data-testid="header">
      <Box sx={styles.menuIcon}>
        <button sx={styles.menuButton} onClick={onOpen}>
          <Menu size={25} />
        </button>
      </Box>
      <div sx={styles.innerContainer}>
        <Logo />
        <Flex>
          {repository && (
            <Box sx={{ mr: 2 }}>
              <a
                href={repository}
                sx={styles.headerButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={15} />
              </a>
            </Box>
          )}
          <Box sx={styles.versionTag}>
            <Tag size={15} sx={styles.versionTagIcon} /> v0.1.8 | Pre-Alpha
          </Box>
        </Flex>
        {showMarkdownEditButton && edit && doc.link && (
          <a
            sx={styles.editButton}
            href={doc.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Edit width={14} />
            <Box sx={{ pl: 2 }}>Edit page</Box>
          </a>
        )}
      </div>
    </div>
  );
};
