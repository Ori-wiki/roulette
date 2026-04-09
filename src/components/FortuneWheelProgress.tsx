import miniGiftImage from '../assets/mini_gift.png';

type FortuneWheelProgressProps = {
  currentDay: number;
};

const PROGRESS_LEAD_OFFSET = 'clamp(12px, 3vw, 16px)';
const DAYS = ['1', '2', '3', '4', '5', '6'];

export function FortuneWheelProgress({
  currentDay,
}: FortuneWheelProgressProps) {
  return (
    <div className='relative mt-3 flex items-center justify-between rounded-[10px] border border-[#2E3139] bg-[#1d2026] px-4 py-2 min-[768px]:pr-4 min-[768px]:pl-8'>
      <div
        className='absolute left-0 top-1/2 h-4.5 -translate-y-1/2 bg-[#FF0633]'
        style={{
          width: `calc(((100% - ${PROGRESS_LEAD_OFFSET}) / 7) * ${currentDay} + ${PROGRESS_LEAD_OFFSET})`,
        }}
      />
      {DAYS.map((day) => (
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
  );
}
