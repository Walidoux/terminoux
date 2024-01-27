import { useRef } from 'react'
import { ITab } from 'src/types/WIndow'
import { FiPlus } from 'react-icons/fi'

import { Tab } from './Tab'

export const Tabs: React.FC = () => {
  const openedTabs: ITab[] = [
    { icon: './icons/unknown.svg', name: 'New window', selected: true },
    {
      icon: './icons/unknown.svg',
      name: 'Nodejs installation',
      selected: false
    },
    { icon: '/icons/unknown.svg', name: 'Updating deps', selected: false },
    { icon: '/icons/unknown.svg', name: 'Updating deps', selected: false }
  ]

  const sectionElement = useRef<HTMLElement>(null)

  const handleWheelListener = (
    event: React.WheelEvent
  ): React.WheelEventHandler<HTMLElement> | undefined => {
    if (sectionElement.current != null) {
      sectionElement.current.scrollLeft += event.deltaY * 2
    } else return undefined
  }

  const handleAddTab = (): void => {}

  return (
    <section
      className='custom-scrollbar flex h-14 overflow-x-auto overflow-y-hidden'
      onWheel={handleWheelListener}
      ref={sectionElement}>
      {openedTabs.map((tab, index) => (
        <Tab key={index} {...tab} />
      ))}

      <FiPlus
        onClick={handleAddTab}
        className='h-[50px] w-[50px] cursor-pointer p-3 hover:opacity-80'
        color='white'
      />
    </section>
  )
}
