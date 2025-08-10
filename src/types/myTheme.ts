export type theme = "light" | "dark" | "system";

export type customTheme = {
  light: () => void;
  dark: () => void;
  system: () => void;
};

export type projectType = {
  title: string;
  description: string;
  link: string;
};
