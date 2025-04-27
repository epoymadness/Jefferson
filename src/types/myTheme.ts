import { ReactNode } from "react";

export type theme = "light" | "dark" | "system";

export type customTheme = {
  light: () => void;
  dark: () => void;
  system: () => void;
};

export type navigationType = {
  display: string;
  projectClick: () => void;
  socialMediaClick: () => void;
  aboutClick: () => void;
  light: () => void;
  dark: () => void;
  system: () => void;
};

export type graphicTypes = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};
