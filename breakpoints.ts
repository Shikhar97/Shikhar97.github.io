const BREAKPOINTS = { tablet: 768, desktop: 1024, largeDesktop: 1280 };

const MIN_TABLET = `(min-width: ${BREAKPOINTS.tablet}px)`;
const MIN_DESKTOP = `(min-width: ${BREAKPOINTS.desktop}px)`;
const MIN_LARGE_DESKTOP = `(min-width: ${BREAKPOINTS.largeDesktop}px)`;

export const MIN_WIDTH = {
  tablet: MIN_TABLET,
  desktop: MIN_DESKTOP,
  largeDesktop: MIN_LARGE_DESKTOP,
};

export const QUERIES = {
  tabletAndUp: `@media ${MIN_TABLET}`,
  desktopAndUp: `@media ${MIN_DESKTOP}`,
  largeDesktopAndUp: `@media ${MIN_LARGE_DESKTOP}`,
};

export default BREAKPOINTS;
