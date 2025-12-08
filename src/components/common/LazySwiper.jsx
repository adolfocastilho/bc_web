import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Swiper components only when needed
const SwiperCore = dynamic(
    () => import('swiper/react').then(mod => mod.Swiper),
    { ssr: false }
);

const SwiperSlideCore = dynamic(
    () => import('swiper/react').then(mod => mod.SwiperSlide),
    { ssr: false }
);

/**
 * LazySwiper - A wrapper that only loads Swiper when the component is in viewport
 * This reduces initial JavaScript evaluation time significantly
 */
export default function LazySwiper({
    children,
    fallback = null,
    rootMargin = '200px',
    ...swiperProps
}) {
    const [isInView, setIsInView] = useState(false);
    const [SwiperComponents, setSwiperComponents] = useState(null);
    const containerRef = useRef(null);

    // Intersection Observer to detect when component enters viewport
    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin, threshold: 0 }
        );

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [rootMargin]);

    // Load Swiper modules when in view
    useEffect(() => {
        if (!isInView) return;

        const loadSwiper = async () => {
            const [swiperReact, swiperModules] = await Promise.all([
                import('swiper/react'),
                import('swiper')
            ]);

            setSwiperComponents({
                Swiper: swiperReact.Swiper,
                SwiperSlide: swiperReact.SwiperSlide,
                modules: swiperModules
            });
        };

        loadSwiper();
    }, [isInView]);

    // Show fallback/skeleton while loading
    if (!isInView || !SwiperComponents) {
        return (
            <div ref={containerRef} style={{ minHeight: '200px' }}>
                {fallback || (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '200px',
                        background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                        backgroundSize: '200% 100%',
                        animation: 'shimmer 1.5s infinite',
                        borderRadius: '8px'
                    }}>
                        <style jsx>{`
              @keyframes shimmer {
                0% { background-position: 200% 0; }
                100% { background-position: -200% 0; }
              }
            `}</style>
                    </div>
                )}
            </div>
        );
    }

    const { Swiper, SwiperSlide, modules } = SwiperComponents;

    // Render the actual Swiper with children
    return (
        <Swiper {...swiperProps}>
            {children}
        </Swiper>
    );
}

// Export the SwiperSlide component for use with LazySwiper
export function LazySwiperSlide(props) {
    // This is a placeholder that will be replaced when Swiper loads
    return <div {...props} />;
}
