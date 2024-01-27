interface IField {
  bg_color: string
  text_color: string
}

export const Field: React.FC<IField> = ({ bg_color, text_color }) => {
  return (
    <div className='relative mt-8 flex w-fit items-center justify-center rounded-l-full bg-[#364ea6] py-1 pl-5 pr-3 text-white'>
      <img
        src='/icons/terminal.svg'
        draggable={false}
        className='mr-3 select-none'
      />
      walidoux
      <div className='absolute -right-6 h-0 w-0 border-t-[16.99px] border-l-[25px] border-b-[16.99px] border-t-transparent border-l-[#364ea6] border-b-transparent' />
    </div>
  )
}
