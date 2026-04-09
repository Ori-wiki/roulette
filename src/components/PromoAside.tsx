export function PromoAside() {
  return (
    <aside className='w-full min-w-0 self-start rounded-none bg-[#f6f6f6] px-6 pb-4 text-[#1E2025] shadow-[0_18px_40px_rgba(0,0,0,0.22)] min-[768px]:self-center'>
      <span className='inline-flex h-5 items-center bg-[#FF0633] px-2 py-3 font-alumni font-normal text-[20px] uppercase leading-none text-white'>
        Доступен
      </span>
      <h3 className='mt-1 font-alumni font-semibold text-[32px] uppercase leading-none text-[#1E2025]'>
        Расскажи о Hiro
      </h3>
      <p className='mt-2 font-alumni text-[20px] leading-[0.98] text-[#2E3139]'>
        Просто напиши пост или статью о нас в крупном канале или на своей
        странице в соцсетях со ссылкой на нас.
      </p>
      <p className='mt-0.5 font-alumni text-[20px] leading-[0.98] text-[#2E3139]'>
        Пришли ссылку на пост или статью, и мы начислим тебе от 15 до 90 дней
        VPN бесплатно!
      </p>
      <p className='mt-0.5 font-alumni text-[20px] leading-[0.98] text-[#2E3139]'>
        Чем больше охват, тем длиннее подарок!
      </p>
      <button
        className='mt-3 flex h-10 w-full items-center justify-center rounded-full bg-[#FF0633] px-4 py-2 font-alumni font-medium text-[24px] uppercase leading-none text-white transition-colors duration-200 hover:bg-[#ff2d55] cursor-pointer'
        type='button'
      >
        Отправить ссылки
      </button>
    </aside>
  );
}
