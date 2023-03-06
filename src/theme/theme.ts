import { DefaultTheme } from "styled-components";
type TypographyType = {
  font: string;
  weight: number;
  size: string;
  lineHeight: string;
};
type ColorType = {
  [index: string]: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    Gray: ColorType;
    Green: ColorType;
    Blue: ColorType;
    Red: ColorType;
    typography: {
      Heading0: TypographyType;
      Heading1: TypographyType;
      Heading2: TypographyType;
      Heading3: TypographyType;
      Subtitle: TypographyType;
      Body1: TypographyType;
      Body2: TypographyType;
      Button1: TypographyType;
      Button2: TypographyType;
      Caption1: TypographyType;
      Caption2: TypographyType;
      Uppercase: TypographyType;
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
  typography: {
    Heading0: {
      font: "Poppins",
      weight: 600,
      size: "40px",
      lineHeight: "48px",
    },
    Heading1: {
      font: "Poppins",
      weight: 600,
      size: "32px",
      lineHeight: "40px",
    },
    Heading2: {
      font: "Poppins",
      weight: 600,
      size: "28px",
      lineHeight: "40px",
    },
    Heading3: {
      font: "Poppins",
      weight: 500,
      size: "18px",
      lineHeight: "24px",
    },
    Subtitle: {
      font: "Open Sans",
      weight: 400,
      size: "20px",
      lineHeight: "28px",
    },
    Body1: {
      font: "Open Sans",
      weight: 400,
      size: "16px",
      lineHeight: "24px",
    },
    Body2: {
      font: "Open Sans",
      weight: 400,
      size: "14px",
      lineHeight: "20px",
    },
    Button1: {
      font: "Poppins",
      weight: 600,
      size: "16px",
      lineHeight: "24px",
    },
    Button2: {
      font: "Poppins",
      weight: 500,
      size: "16px",
      lineHeight: "24px",
    },
    Caption1: {
      font: "Open Sans",
      weight: 600,
      size: "14px",
      lineHeight: "20px",
    },
    Caption2: {
      font: "Open Sans",
      weight: 600,
      size: "12px",
      lineHeight: "16px",
    },
    Uppercase: {
      font: "Open Sans",
      weight: 700,
      size: "12px",
      lineHeight: "16px",
    },
  },
};
