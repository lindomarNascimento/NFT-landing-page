export const theme = {
  colors: {
    white: "#ffffff",
    lightWhite: "#cccccc",
    orange: "#FF5B50",
    black: "#000000",
    lightBlack: "#0E0E0E",
    grey: "#252525",
    lightGrey: "#5A5757",
  },
  font: {
    default: "Montserrat, sans-serif",
  },
  fontSize: {
    0: `0px`,
    8: `0.5rem`,
    12: `0.75rem`,
    11: `0.688rem`,
    13: `0.813rem`,
    14: `0.875rem`,
    15: `0.938rem`,
    16: `1rem`,
    18: `1.125rem`,
    20: `1.25rem`,
    22: `1.375rem`,
    24: `1.5rem`,
    27: `1.688rem`,
    30: `1.875rem`,
    32: `2rem`,
    36: `2.25rem`,
    45: `2.813rem`,
    50: `3.125rem`,
    64: `4rem`,
  },
  responsive: {
    notebook: 1240,
    tablet: 780,
    mobile: 480,
  },
};

export function containerCenter() {
  return `
    width: 100%;
    max-width: 1270px;
    margin: 0px auto`;
}

export function flex($justify = "flex-start", $align = "center") {
  return `
    display: flex;
    justify-content: ${$justify};
    align-items: ${$align}`;
}
