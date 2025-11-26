import { useEffect } from 'react';
import { createPortal } from 'react-dom';

/**
 * Reusable modal component using React Portal
 * Supports image lightbox and video player variants
 * 
 * @param {Object} props
 * @param {boolean} props.isOpen - Controls modal visibility
 * @param {Function} props.onClose - Callback when modal closes
 * @param {React.ReactNode} props.children - Modal content
 * @param {('image'|'video')} props.variant - Modal type for styling
 * @param {boolean} props.mounted - Client-side mounting flag
 */
const Modal = ({ isOpen, onClose, children, variant = 'image', mounted = true }) => {
    // Handle ESC key to close modal
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';

            return () => {
                document.removeEventListener('keydown', handleEscape);
                document.body.style.overflow = '';
            };
        }
    }, [isOpen, onClose]);

    if (!mounted || !isOpen) return null;

    return createPortal(
        <div
            className="mil-modal-overlay"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label="Modal"
        >
            <div
                className={`mil-modal-content mil-modal-${variant}`}
                onClick={(e) => e.stopPropagation()}
            >
                {children}

                <button
                    onClick={onClose}
                    className="mil-modal-close"
                    aria-label="Fechar modal"
                    type="button"
                >
                    &times;
                </button>
            </div>
        </div>,
        document.body
    );
};

export default Modal;
