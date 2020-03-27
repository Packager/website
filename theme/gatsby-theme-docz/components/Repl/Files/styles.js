const inactive = "#a9a9a9";
const active = "#000000";

export const filesWrapper = {
  display: "flex",
  borderBottom: "1px solid #eee",
  overflow: "scroll"
};

export const file = {
  color: inactive,
  p: "10px",
  position: "relative"
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
  fontSize: "28px",
  fontWeight: "bold",
  px: "5px",
  color: inactive,
  cursor: "pointer",
  "&:hover": {
    color: active
  }
};
