import type { ButtonGroupProps } from './ButtonGroup'
import type { TwColor, TwColorLevel, TwShapeObject, WithRequired } from 'types'

import colors from 'tailwindcss/colors'
import tw, { css, styled } from 'twin.macro'

const twShapeGroup: TwShapeObject = {
  square: tw``,
  rounded: tw`rounded-md`,
  circle: tw`rounded-full`,
}

const twShape: TwShapeObject = {
  square: tw``,
  rounded: tw`first:rounded-l-md! last:rounded-r-md!`,
  circle: tw`first:rounded-l-full! last:rounded-r-full!`,
}

const twShapeVertical: TwShapeObject = {
  square: tw``,
  rounded: tw`first:rounded-t-md! last:rounded-b-md!`,
  circle: tw`first:rounded-t-full! last:rounded-b-full!`,
}

type TwButtonGroupProps = Pick<
  ButtonGroupProps,
  'shape' | 'vertical' | 'color'
> & {
  isShadow?: boolean
  isLoading?: boolean
  colorTheme: TwColor
  colorLevel: TwColorLevel
}

export const TwButtonGroup = styled.div(
  ({
    color,
    colorLevel,
    colorTheme,
    shape,
    vertical,
    isShadow,
    isLoading,
  }: WithRequired<TwButtonGroupProps, 'shape'>) => {
    const [_color, _level] = (color?.split('-') as [TwColor, TwColorLevel]) || [
      colorTheme,
      colorLevel,
    ]

    const shadowColor = colors[_color][_level]

    return [
      tw`flex`,
      vertical && tw`w-fit flex-col`,
      isShadow && [
        twShapeGroup[shape],
        tw`shadow-md`,
        css`
          --tw-shadow-color: ${shadowColor};
          --tw-shadow: var(--tw-shadow-colored);
          ${!isLoading &&
          `
            &:hover {
              --tw-shadow-color: ${shadowColor}cc;
            }
            &:active {
              --tw-shadow-color: ${shadowColor}b3;
            }
          `}
        `,
      ],
      css`
        & > * {
          ${tw`rounded-none!`}
          ${vertical ? twShapeVertical[shape] : twShape[shape]}
          ${isShadow && tw`shadow-none`}
        }
      `,
    ]
  },
)
