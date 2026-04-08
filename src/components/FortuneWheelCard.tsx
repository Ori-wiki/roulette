import cardImage from '../assets/card_img.png';
import miniGiftImage from '../assets/mini_gift.png';
import vectorIcon from '../assets/Vector.svg';
import { RewardCard } from './RewardCard';
import { rewardCards } from './main-data';

export function FortuneWheelCard() {
  const rouletteCards = [
    rewardCards[rewardCards.length - 1],
    ...rewardCards,
    rewardCards[0],
  ];

  const currentDay = 3;
  const progressLeadOffset = 'clamp(12px, 3vw, 16px)';

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

        <div className='mt-4 -mx-4 overflow-hidden min-[768px]:-mx-6'>
          <div className='flex w-max -translate-x-15.75 flex-nowrap gap-1.5 px-4 min-[768px]:px-6'>
            {rouletteCards.map((card, index) => (
              <RewardCard
                key={`${card.title}-${card.value}-${index}`}
                {...card}
              />
            ))}
          </div>
        </div>

        <button
          className='my-4 flex h-9 w-full items-center justify-center gap-2 rounded-full bg-[#FF0633] px-4 font-alumni text-[24px] uppercase leading-none text-[#FDFDFD] transition-colors duration-200 hover:bg-[#ff2d55] cursor-pointer min-[768px]:h-10'
          type='button'
        >
          <span>Испытать удачу</span>
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

        <div className='relative mt-3 flex items-center justify-between rounded-[10px] border border-[#2E3139] bg-[#1d2026] px-4 py-2 min-[768px]:pr-4 min-[768px]:pl-8'>
          <div
            className='absolute left-0 top-1/2 h-4.5 -translate-y-1/2 bg-[#FF0633]'
            style={{
              width: `calc(((100% - ${progressLeadOffset}) / 7) * ${currentDay} + ${progressLeadOffset})`,
            }}
          />
          {['1', '2', '3', '4', '5', '6'].map((day) => (
            <div
              key={day}
              className='relative flex min-w-7 items-center justify-center min-[768px]:min-w-8'
            >
              <span className='relative z-10 font-alumni text-[30px] font-semibold leading-none min-[768px]:text-[44px]'>
                {day}
              </span>
            </div>
          ))}

          <div className='relative flex min-w-7 items-center justify-center min-[768px]:min-w-8'>
            <img
              src={miniGiftImage}
              alt='Подарок за 7 день'
              className='h-8 w-8 object-contain min-[768px]:h-10 min-[768px]:w-10'
            />
            <span className='absolute inset-0 flex items-center justify-center font-alumni text-[28px] font-semibold leading-none text-[#F6F2EA] min-[768px]:text-[40px]'>
              7
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}
