import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    Gray: {
      100: string;
      75: string;
      50: string;
      25: string;
      15: string;
      10: string;
      5: string;
      0: string;
    };
    Green: {
      100: string;
      75: string;
      25: string;
      5: string;
    };
    Blue: {
      100: string;
      75: string;
      5: string;
    };
    Red: {
      100: string;
      75: string;
      5: string;
    };
  }
}

export const theme: DefaultTheme = {
  Gray: {
    100: "#162219",
    75: "#464B53",
    50: "#6D7178",
    25: "#A9B1BC",
    15: "#D1D5DB",
    10: "#E9EAEC",
    5: "#FAFAFA",
    0: "#FFF",
  },
  Green: {
    100: "#067950",
    75: "#00AD6F",
    25: "#C3E0D4",
    5: "#E4F1EC",
  },
  Blue: {
    100: "#1A49B2",
    75: "#2563EB",
    5: "#EFF6FF",
  },
  Red: {
    100: "#A82424",
    75: "#DC2626",
    5: "#FEF2F2",
  },
};
