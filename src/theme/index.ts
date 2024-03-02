// theme/index.js
import { extendTheme } from "@chakra-ui/react";

// Import fonts
import "@fontsource/inter"; // Defaults to weight 400
import "@fontsource/inter/500.css";

import "@fontsource/exo"; // Defaults to weight 400
import "@fontsource/exo/500.css";
import "@fontsource/exo/600.css";

// Global style overrides
import styles from "./styles";

// Custom colors
import colors from "./foundations/colors";

// Layer styles
import layerStyles from "./foundations/layerStyles";

const overrides = {
  styles,
  colors,
  layerStyles,
};

export default extendTheme(overrides);
