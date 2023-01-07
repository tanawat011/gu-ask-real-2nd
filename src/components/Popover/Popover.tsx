import { IconCaretLeft } from 'components/Icons'

type PopoverProps = {
  text?: string
  children?: React.ReactNode
}

export const Popover: React.FC<PopoverProps> = ({ children, text }) => {
  return (
    <div className='popover-content hidden absolute left-full top-1/2 -translate-y-1/2 z-10'>
      {children || (
        <div className='relative'>
          <IconCaretLeft className='absolute left-1 top-1/2 -translate-y-1/2' />

          <div className='bg-black ml-2 text-white p-2 rounded-lg shadow-lg mb-2'>{text}</div>
        </div>
      )}
    </div>
  )
}
