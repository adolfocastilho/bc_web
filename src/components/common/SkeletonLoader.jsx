const SkeletonLoader = ({ height = "400px", className = "" }) => {
    return (
        <>
            <div className={`mil-skeleton ${className}`} style={{
                width: '100%',
                height: height,
                backgroundColor: '#f0f0f0',
                borderRadius: '10px',
                animation: 'pulse 1.5s infinite ease-in-out'
            }}>
            </div>
            <style jsx global>{`
                @keyframes pulse {
                    0% { opacity: 0.6; }
                    50% { opacity: 1; }
                    100% { opacity: 0.6; }
                }
            `}</style>
        </>
    );
};

export default SkeletonLoader;
