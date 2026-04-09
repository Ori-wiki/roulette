import { useEffect, useMemo, useRef, useState } from 'react';
import { rewardCards } from './main-data';

export const CARD_WIDTH = 120;
export const CARD_HEIGHT = 208;
export const CARD_GAP = 6;
export const CARD_STEP = CARD_WIDTH + CARD_GAP;
export const SPIN_DURATION_MS = 2400;

const REPEAT_COUNT = 15;
const MIDDLE_REPEAT = Math.floor(REPEAT_COUNT / 2);
const INITIAL_CARD_INDEX = 2;
const INITIAL_ACTIVE_INDEX =
  MIDDLE_REPEAT * rewardCards.length + INITIAL_CARD_INDEX;

export function useFortuneWheel() {
  const reelCards = useMemo(
    () =>
      Array.from({ length: REPEAT_COUNT }, (_, repeatIndex) =>
        rewardCards.map((card, cardIndex) => ({
          ...card,
          reelIndex: repeatIndex * rewardCards.length + cardIndex,
        })),
      ).flat(),
    [],
  );

  const [activeIndex, setActiveIndex] = useState(INITIAL_ACTIVE_INDEX);
  const [isSpinning, setIsSpinning] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const spinTimeoutRef = useRef<number | null>(null);
  const resetTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (spinTimeoutRef.current !== null) {
        window.clearTimeout(spinTimeoutRef.current);
      }

      if (resetTimeoutRef.current !== null) {
        window.clearTimeout(resetTimeoutRef.current);
      }
    };
  }, []);

  function handleSpin() {
    if (isSpinning) {
      return;
    }

    const extraCycles =
      rewardCards.length * (2 + Math.floor(Math.random() * 2));
    const randomOffset = Math.floor(Math.random() * rewardCards.length);

    setIsSpinning(true);
    setShouldAnimate(true);
    setActiveIndex((currentIndex) => currentIndex + extraCycles + randomOffset);

    spinTimeoutRef.current = window.setTimeout(() => {
      setShouldAnimate(false);
      setActiveIndex((currentIndex) => {
        const normalizedIndex =
          ((currentIndex % rewardCards.length) + rewardCards.length) %
          rewardCards.length;

        return MIDDLE_REPEAT * rewardCards.length + normalizedIndex;
      });
      setIsSpinning(false);

      resetTimeoutRef.current = window.setTimeout(() => {
        setShouldAnimate(true);
      }, 40);
    }, SPIN_DURATION_MS);
  }

  return {
    reelCards,
    activeIndex,
    isSpinning,
    shouldAnimate,
    handleSpin,
  };
}
