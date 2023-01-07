import tw, { styled } from 'twin.macro'

const TwIconWrap = styled.i`
  width: 0;
  height: 0;
  border: 7px solid transparent;
  border-top: 7px solid;
  border-right: 7px solid;
`
const TwIcon = tw(TwIconWrap)`text-black -rotate-[135deg]`

type IconCaretLeftProps = {
  className?: string
}

export const IconCaretLeft: React.FC<IconCaretLeftProps> = ({ className }) => {
  return <TwIcon className={className} />
}
