import classnames from 'classnames'
import { ITab } from 'src/types/WIndow'

export const Tab: React.FC<ITab> = ({ name, icon, selected }) => {
  return (
    <div
      className={classnames(
        'flex h-12 cursor-pointer items-center justify-center transition-all duration-150 first-of-type:rounded-bl-2xl last-of-type:rounded-br-2xl',
        {
          'w-44 bg-[#282828] px-6 hover:opacity-70': !selected,
          'z-10 !h-14 max-w-[240px] rounded-b-2xl bg-[#2c2c2c] px-8 opacity-100':
            selected
        }
      )}>
      <img src={icon} draggable={false} className='select-none' />
      <span className='ml-4 select-none truncate text-center text-white'>
        {name}
      </span>
    </div>
  )
}
