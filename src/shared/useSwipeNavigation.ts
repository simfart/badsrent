import { useSwipeable } from 'react-swipeable';

interface SwipeConfig {
  onNext: () => void;
  onPrev: () => void;
  trackMouse?: boolean;
}

export const useSwipeNavigation = ({
  onNext,
  onPrev,
  trackMouse = true,
}: SwipeConfig) => {
  return useSwipeable({
    onSwipedLeft: onNext,
    onSwipedRight: onPrev,
    trackMouse,
    touchEventOptions: { passive: false },
  });
};
