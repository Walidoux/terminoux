import { FiHome } from 'react-icons/fi'

export const TerminalField: React.FC = () => {
  return (
    <article className='mt-8 flex'>
      <div className='relative z-[3] flex w-fit items-center justify-center rounded-l-full bg-[#364ea6] py-1 pl-5 pr-3 text-white'>
        <img src='/icons/terminal.svg' draggable={false} className='mr-3 select-none' />
        walidoux
        <div className='absolute -right-5 h-0 w-0 border-t-[16.99px] border-l-[20px] border-b-[16.99px] border-t-transparent border-l-[#364ea6] border-b-transparent' />
      </div>

      <div className='relative -left-2 z-[2] flex w-fit items-center justify-center rounded-l-full bg-[#2F2F2F] pl-10 pr-3 text-white'>
        <FiHome className='mr-3' />
        ~
        <div className='absolute -right-5 h-0 w-0 border-t-[16.99px] border-l-[20px] border-b-[16.99px] border-t-transparent border-l-[#2F2F2F] border-b-transparent' />
      </div>

      <div className='relative -left-4 z-[1] flex w-fit items-center justify-center rounded-full bg-[#252525] pl-10 pr-6 text-white/30'>
        <img src='/icons/git_branch.svg' draggable={false} className='mr-3 select-none' />
        main
      </div>
    </article>
  )
}
