// global.js

import { globalCss } from "./stiches.config";

export const globalStyles = globalCss({
  "html, body, #root": {
    height: "100%",
    width: "100%",
  },
  body: {
    fontFamily: "system-ui",
    margin: 0,
  },
  "*,*:after,*:before": {
    boxSizing: "border-box",
  },
});
