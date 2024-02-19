import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face {
	font-family: 'Plus Jakarta Sans';
	font-style: normal;
	font-weight: 100 900;
	font-display: swap;
	src: url("fonts/Plus Jakarta Sans Variable.woff2") format('woff2');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}


html{
	max-width: 100%;
    overflow: hidden;
	scroll-behavior: smooth !important;

	@media(prefers-reduced-motion){
		scroll-behavior: auto !important;
	}

    --color-sticky-top: hsl(54, 65%, 68%);	
	--color-sticky-content: hsl(54, 84%, 71%);	

	--color-dark-primary: hsl(44, 100%, 69%);
	--color-dark-primary-hover: hsl(44, 100%, 69%, 0.9);
	--color-dark-text-regular: hsl(0, 0%, 100%);
	--color-dark-text-light: hsla(0, 0%, 100%, 0.6);
	--color-dark-text-dark: hsl(44, 100%, 69%);
	--color-dark-background-regular: hsl(214, 36%, 24%);
	--color-dark-background-dark: hsl(214, 36%, 18%);
    --color-dark-background-blur: hsl(214, 36%, 24%, 0.75);
	--color-dark-background-light: hsl(214, 36%, 28%);
	--color-footer: hsl(214, 36%, 12%);
	--transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);

    --color--light-dark-primary: hsl(202, 92%, 38%);
    --color--light-dark-primary-hover: hsla(202, 92%, 38%, 0.9);
    --color--light-dark-text-regular: hsl(0, 0%, 0%);
    --color--light-dark-text-light:  hsl(202, 20%, 60%);
    --color--light-dark-text-dark: hsl(202, 92%, 38%);
    --color--light-dark-background-regular: hsl(0, 0%, 100%);
    --color--light-dark-background-dark: hsl(202, 42%, 91%);
    --color--light-dark-background-blur: hsla(0, 0%, 100%, 0.75);
    --color--light-dark-background-light:  hsl(202, 42%, 100%);
    --color--light-footer: hsl(0, 0%, 88%);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
}


body {
	font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
	"Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-weight: 800;
	margin-left: auto;
    margin-right: auto;
	width: 100%;
    overflow: hidden;

    background-color: var(--color-dark-background-regular);
	color: var(--color-dark-text-regular);
}

.App {
    overflow-x: hidden;
} 

`;

export default GlobalStyles;
