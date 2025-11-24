import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const useExitConfirmation = (shouldConfirm: boolean = true) => {
  const [showExitModal, setShowExitModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!shouldConfirm) return;

    console.log('useExitConfirmation: mounted/updated', location.pathname);

    // Only push the trap if we are not already in it
    // We use a specific state identifier
    if (window.history.state?.type !== 'exit-trap') {
      console.log('useExitConfirmation: Pushing exit trap');
      window.history.pushState({ type: 'exit-trap' }, '', window.location.pathname);
    }

    const handlePopState = (event: PopStateEvent) => {
      console.log('useExitConfirmation: popstate detected', event.state);
      // If the user pressed back, they are leaving the trap state.
      // We show the modal.
      event.preventDefault();
      setShowExitModal(true);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      console.log('useExitConfirmation: cleanup');
      window.removeEventListener('popstate', handlePopState);
    };
  }, [shouldConfirm, location.pathname]);

  const handleCancelExit = () => {
    console.log('useExitConfirmation: Cancel exit, restoring trap');
    setShowExitModal(false);
    // Restore the trap
    window.history.pushState({ type: 'exit-trap' }, '', window.location.pathname);
  };

  const handleConfirmExit = () => {
    console.log('useExitConfirmation: Confirm exit');
    setShowExitModal(false);
    // We are currently at the "pre-trap" state (because popstate happened).
    // To exit, we need to go back one more time.
    navigate(-1);
  };

  return {
    showExitModal,
    handleCancelExit,
    handleConfirmExit
  };
};
