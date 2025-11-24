import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const useExitConfirmation = (shouldConfirm: boolean = true) => {
  const [showExitModal, setShowExitModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!shouldConfirm) return;

    // Push a dummy state to history to intercept the back button
    // This creates a "trap" so the first back button press stays in the app
    window.history.pushState(null, '', window.location.pathname);

    const handlePopState = (event: PopStateEvent) => {
      // Prevent default back action (browser already did it, we just react)
      event.preventDefault();
      
      // Show the modal
      setShowExitModal(true);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [shouldConfirm, location.pathname]);

  const handleCancelExit = () => {
    setShowExitModal(false);
    // Restore the trap by pushing state again
    window.history.pushState(null, '', window.location.pathname);
  };

  const handleConfirmExit = () => {
    setShowExitModal(false);
    // Go back twice: once for the trap we pushed, and once to actually exit
    // Wait, popstate already took us back once (removing the trap).
    // So we just need to go back one more time to exit.
    navigate(-1); 
  };

  return {
    showExitModal,
    handleCancelExit,
    handleConfirmExit
  };
};
