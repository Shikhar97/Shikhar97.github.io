type Theme = {
  colors: {
    primary: string;
    primaryHover: string;
    text: {
      regular: string;
      light: string;
      dark: string;
    };
    background: {
      blur: string;
      regular: string;
      dark: string;
      light: string;
    };
    footer: string;
  };
};

export const DARK_THEME: Theme = {
  colors: {
    primary: "hsl(44, 100%, 69%)",
    primaryHover: "hsl(44, 100%, 69%, 0.9)",
    text: {
      regular: "hsl(0, 0%, 100%)",
      light: "hsla(0, 0%, 100%, 0.6)",
      dark: "hsl(44, 100%, 69%)",
    },
    background: {
      blur: "hsl(214, 36%, 24%, 0.75)",
      regular: "hsl(214, 36%, 24%)",
      dark: "hsl(214, 36%, 18%)",
      light: "hsl(214, 36%, 28%)",
    },
    footer: "hsl(214, 36%, 12%)",
  },
};

export const DARK_COLORS = {
  "--color-primary": "hsl(44, 100%, 69%)",
  "--color-primary-hover": "hsl(44, 100%, 69%, 0.9)",
  "--color-text-regular": "hsl(0, 0%, 100%)",
  "--color-text-light": "hsla(0, 0%, 100%, 0.6)",
  "--color-text-dark": "hsl(44, 100%, 69%)",
  "--color-background-light": "hsl(214, 36%, 24%)",
  "--color-background-regular": "hsl(214, 36%, 24%)",
  "--color-background-dark": "hsl(214, 36%, 18%)",
  "--color-background-blur": "hsl(214, 36%, 24%, 0.75)",
  "--color-footer": "hsl(214, 36%, 12%)",
};

export const LIGHT_THEME: Theme = {
  colors: {
    primary: "hsl(202, 92%, 38%)",
    primaryHover: "hsla(202, 92%, 38%, 0.9)",
    text: {
      regular: "hsl(0, 0%, 0%)",
      light: "hsl(202, 20%, 60%)",
      dark: "hsl(202, 92%, 38%)",
    },
    background: {
      blur: "hsla(0, 0%, 100%, 0.75)",
      regular: "hsl(0, 0%, 100%)",
      dark: "hsl(202, 42%, 91%)",
      light: "hsl(202, 42%, 100%)",
    },
    footer: "hsl(0, 0%, 88%)",
  },
};

export const LIGHT_COLORS = {
  "--color-primary": "hsl(202, 92%, 38%)",
  "--color-primary-hover": "hsla(202, 92%, 38%, 0.9)",
  "--color-text-regular": "hsl(0, 0%, 0%)",
  "--color-text-light": "hsl(202, 20%, 60%)",
  "--color-text-dark": "hsl(202, 92%, 38%)",
  "--color-background-light": "hsl(0, 0%, 100%)",
  "--color-background-regular": "hsl(0, 0%, 100%)",
  "--color-background-dark": "hsl(202, 42%, 91%)",
  "--color-background-blur": "hsla(0, 0%, 100%, 0.75)",
  "--color-footer": "hsl(202, 42%, 12%)",
};

export default Theme;
