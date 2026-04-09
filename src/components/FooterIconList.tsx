type FooterIconListItem = {
  label: string;
  icon: string;
};

type FooterIconListProps = {
  title: string;
  items: readonly FooterIconListItem[];
};

export function FooterIconList({ title, items }: FooterIconListProps) {
  return (
    <div>
      <h3 className='font-alumni text-[24px] font-semibold uppercase leading-none text-[#C3C2BD]'>
        {title}
      </h3>
      <ul className='mt-5 space-y-4 min-[768px]:mt-6 min-[768px]:space-y-5'>
        {items.map((item) => (
          <li key={item.label}>
            <a
              href='#'
              className='inline-flex items-center gap-3 font-kelly text-[20px] leading-none no-underline transition-colors duration-200 hover:text-white min-[768px]:gap-4'
            >
              <img
                src={item.icon}
                alt=''
                className='h-5 w-5 shrink-0 object-contain min-[768px]:h-6 min-[768px]:w-6'
              />
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
