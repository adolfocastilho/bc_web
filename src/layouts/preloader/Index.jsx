const CursorModule = () => {
    return (
        <>
            {/* preloader */}
            <div className="mil-preloader-frame" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 99999,
                backgroundColor: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 1
            }}>
                <div className="mil-preloader-content" style={{
                    transform: "scale(1)",
                    opacity: "1",
                    textAlign: 'center'
                }}>
                    <div className="mil-preloader">
                        <div className="mil-circ-1"></div>
                        <div className="mil-circ-2"></div>
                        <div className="mil-circ-3"></div>
                        <div className="mil-circ-4"></div>
                    </div>
                    <div className="mil-upper">Loading</div>
                </div>
            </div>
            {/* preloader end */}
        </>
    );
};
export default CursorModule;