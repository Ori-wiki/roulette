import cardImage from '../assets/card_img.png';
import vectorIcon from '../assets/Vector.svg';
import { FortuneWheelProgress } from './FortuneWheelProgress';
import { RewardCard } from './RewardCard';
import {
  CARD_HEIGHT,
  CARD_STEP,
  CARD_WIDTH,
  SPIN_DURATION_MS,
  useFortuneWheel,
} from './useFortuneWheel';

export function FortuneWheelCard() {
  const { reelCards, activeIndex, isSpinning, shouldAnimate, handleSpin } =
    useFortuneWheel();
  const currentDay = 1;

  return (
    <div className='w-full min-w-0'>
      <article className='rounded-lg border-2 border-[#2E3139] bg-[#1E2025] p-4 min-[768px]:p-6'>
        <div className='flex items-start justify-between gap-4'>
          <div>
            <h3 className='font-alumni font-semibold text-[32px] uppercase leading-none'>
              Колесо фортуны
            </h3>
            <p className='mt-2 max-w-62.5 font-alumni text-[20px] leading-none uppercase text-[#C3C2BD]'>
              Испытайте удачу раз в день и выигрывайте бонусы для VPN!
            </p>
          </div>
          <img
            src={cardImage}
            alt='Иконка карточки'
            className='block h-14 w-14 object-contain min-[768px]:h-18 min-[768px]:w-18'
          />
        </div>

        <div className='relative mt-4 -mx-4 pb-7 min-[768px]:-mx-6'>
          <div className='overflow-hidden'>
            <div
              className='flex w-max flex-nowrap gap-1.5'
              style={{
                marginLeft: '50%',
                transform: `translateX(-${
                  activeIndex * CARD_STEP + CARD_WIDTH / 2
                }px)`,
                transition: shouldAnimate
                  ? `transform ${SPIN_DURATION_MS}ms cubic-bezier(0.16, 1, 0.3, 1)`
                  : 'none',
              }}
            >
              {reelCards.map(({ reelIndex, ...card }) => (
                <RewardCard
                  key={`${card.title}-${card.value}-${reelIndex}`}
                  {...card}
                  active={!isSpinning && reelIndex === activeIndex}
                />
              ))}
            </div>
          </div>

          <div
            className='pointer-events-none absolute left-1/2 top-0 z-10 -translate-x-1/2 rounded-[10px] border-2 border-[#FF0633] shadow-[0_0_0_1px_rgba(255,6,51,0.5)]'
            style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
          />
          <div className='pointer-events-none absolute bottom-0 left-1/2 z-10 h-0 w-0 -translate-x-1/2 border-x-12 border-t-28 border-x-transparent border-t-[#FF0633]' />
        </div>

        <button
          className='my-4 flex h-9 w-full items-center justify-center gap-2 rounded-full bg-[#FF0633] px-4 font-alumni text-[24px] uppercase leading-none text-[#FDFDFD] transition-colors duration-200 hover:bg-[#ff2d55] disabled:cursor-default disabled:opacity-80 min-[768px]:h-10'
          type='button'
          onClick={handleSpin}
          disabled={isSpinning}
        >
          <span>{isSpinning ? 'Крутится...' : 'Испытать удачу'}</span>
          <img
            src={vectorIcon}
            alt='Подарок'
            className='h-3.5 w-3.5 shrink-0'
          />
        </button>

        <p className='font-alumni text-[20px] leading-[0.98] text-[#C3C2BD]'>
          Крути колесо 7 дней подряд без пропусков и получи на 7-й день
          гарантированный 1 день подписки!
        </p>

        <FortuneWheelProgress currentDay={currentDay} />
      </article>
    </div>
  );
}
