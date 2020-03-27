const inactive = "#a9a9a9";
const active = "#000000";

export const filesWrapper = {
  display: "flex",
  borderBottom: "1px solid #dcd8d8",
  overflow: "scroll",
  minHeight: "43px"
};

export const file = {
  color: inactive,
  p: "10px",
  position: "relative",
  height: "42px"
};

export const fileActive = {
  ...file,
  color: active,
  "&:after": {
    content: "''",
    display: "block",
    position: "absolute",
    width: "100%",
    height: "3px",
    background: "black",
    bottom: "0",
    left: "0"
  }
};

export const fileAdd = {
  fontSize: "24px",
  px: "10px",
  color: inactive,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  pt: "3px",
  "&:hover": {
    color: active
  }
};
