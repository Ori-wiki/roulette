import closeIcon from '../assets/close.svg';
import { FortuneWheelCard } from './FortuneWheelCard';
import { PromoAside } from './PromoAside';
import { QuestActionCard } from './QuestActionCard';
import { questCards } from './main-data';

export function Main() {
  return (
    <main>
      <section className='pt-2 min-[768px]:pt-4'>
        <h1 className='text-center font-kelly text-[64px] uppercase leading-none text-[#f6f2ea]'>
          Аккаунт
        </h1>

        <div className='mt-5 flex items-center justify-between'>
          <h2 className='font-kelly text-[44px] leading-none text-[#f6f2ea]'>
            Квесты
          </h2>
          <button
            className='inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-[#f6f2ea] transition-colors duration-200 hover:bg-white/6'
            type='button'
            aria-label='Закрыть раздел'
          >
            <img
              src={closeIcon}
              alt='Закрыть'
              className='h-11 w-11 min-[768px]:h-6 min-[768px]:w-6'
            />
          </button>
        </div>

        <div className='mt-4 grid items-start gap-4 min-[700px]:grid-cols-2'>
          <FortuneWheelCard />
          <PromoAside />
        </div>

        <div className='mt-4 grid grid-cols-1 gap-3 min-[700px]:grid-cols-2 min-[1180px]:grid-cols-3'>
          {questCards.map((card, index) => (
            <QuestActionCard key={card.title} index={index} {...card} />
          ))}
        </div>
      </section>
    </main>
  );
}
