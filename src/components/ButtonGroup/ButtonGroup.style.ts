import type { ButtonGroupProps } from './ButtonGroup'
import type { TwShapeObject, WithRequired } from 'types'

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

type TwButtonGroupProps = WithRequired<
  Pick<ButtonGroupProps, 'shape' | 'vertical'> & {
    isShadow?: boolean
    isLoading?: boolean
    hexColor: string
  },
  'shape'
>

export const TwButtonGroup = styled.div<TwButtonGroupProps>(
  ({ hexColor, shape, vertical, isShadow, isLoading }) => {
    const shadowColor = hexColor
    const shadowColorOpacity = hexColor + '80'

    return [
      tw`flex`,
      vertical && tw`w-fit flex-col`,
      isShadow && [
        twShapeGroup[shape],
        tw`shadow-md`,
        css`
          --tw-shadow: var(--tw-shadow-colored);

          ${isLoading &&
          `
            --tw-shadow-color: ${shadowColorOpacity};
          `}

          ${!isLoading &&
          `
            --tw-shadow-color: ${shadowColor};
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
