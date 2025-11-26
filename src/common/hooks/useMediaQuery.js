import { useState, useEffect } from 'react';

/**
 * Custom hook for media query matching
 * @param {string} query - CSS media query string (e.g., "(min-width: 992px)")
 * @returns {boolean} - Whether the media query matches
 * 
 * @example
 * const isDesktop = useMediaQuery("(min-width: 992px)");
 * const isMobile = useMediaQuery("(max-width: 767px)");
 */
export const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        media.addEventListener('change', listener);
        return () => media.removeEventListener('change', listener);
    }, [matches, query]);

    return matches;
};
