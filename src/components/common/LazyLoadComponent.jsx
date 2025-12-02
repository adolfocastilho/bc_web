import { useState, useEffect, useRef } from 'react';

const LazyLoadComponent = ({ children, threshold = 0.1, rootMargin = '200px' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold,
                rootMargin
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold, rootMargin]);

    return (
        <div ref={ref} style={{ minHeight: '100px' }}>
            {isVisible ? children : null}
        </div>
    );
};

export default LazyLoadComponent;
