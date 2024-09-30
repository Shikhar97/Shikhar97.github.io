import { DarkModeSwitch } from "react-toggle-dark-mode";
import React from "react";
import { DARK_COLORS, LIGHT_COLORS } from "theme";
import Cookie from "js-cookie";
import { useTheme } from "@/context/ThemeContext";

interface Props extends React.ComponentProps<"div"> {
  initialTheme: string;
}

const ThemeToggle = ({ children, initialTheme, ...delegated }: Props) => {
  const [theme, setTheme] = React.useState(initialTheme);
  const { setTheme: setThemeContext } = useTheme();

  function handleClick() {
    const nextTheme = theme === "light" ? "dark" : "light";

    // 1 — Change the state variable, for the sun/moon icon
    setTheme(nextTheme);
    setThemeContext(nextTheme);

    // 2 — Update the cookie, for the user's next visit
    Cookie.set("color-theme", nextTheme, {
      expires: 1000,
    });

    // 3 — Update the DOM to present the new colors
    const root = document.documentElement;
    const colors = nextTheme === "light" ? LIGHT_COLORS : DARK_COLORS;

    // 3.1 — Edit the data-attribute, so that we can apply CSS
    // conditionally based on the theme.
    root.setAttribute("data-color-theme", nextTheme);

    // 3.2 — Swap out the actual colors on the <html> tag.
    //       We do this by iterating over each CSS variable
    //       and setting it as a new inline style.
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }


  return (
    <DarkModeSwitch
      style={{
        marginLeft: "auto",
        alignSelf: "center",
        marginRight: "1em"
    }}
      checked={theme === "dark"}
      onChange={handleClick}
      size={30}
    />
  );
};

export default ThemeToggle;
