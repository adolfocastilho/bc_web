const Loading = () => {
    return (
        <div className="mil-center mil-p-90-90">
            <div className="mil-spinner-frame">
                <div className="mil-spinner"></div>
            </div>
            <style jsx>{`
                .mil-spinner-frame {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 100px;
                }
                .mil-spinner {
                    width: 40px;
                    height: 40px;
                    border: 4px solid rgba(0, 0, 0, 0.1);
                    border-left-color: #FF9800;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default Loading;
