import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface ScrollToTopOptions {
  behavior?: ScrollBehavior;
  smooth?: boolean;
  instant?: boolean;
}

/**
 * Custom hook that scrolls to top whenever the route changes
 * @param options - Optional scroll behavior configuration
 */
export const useScrollToTop = (options: ScrollToTopOptions = {}) => {
  const { pathname } = useLocation();
  const { behavior = "smooth", smooth = true, instant = false } = options;

  useEffect(() => {
    // Determine scroll behavior
    const scrollBehavior: ScrollBehavior = instant
      ? "auto"
      : smooth
      ? "smooth"
      : behavior;

    // Scroll to top when pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: scrollBehavior,
    });
  }, [pathname, behavior, smooth, instant]);
};

/**
 * Alternative hook for instant scroll to top (no animation)
 */
export const useScrollToTopInstant = () => {
  useScrollToTop({ instant: true });
};

/**
 * Alternative hook for smooth scroll to top
 */
export const useScrollToTopSmooth = () => {
  useScrollToTop({ smooth: true });
};
