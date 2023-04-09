import type { IconProp } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import tw, { styled } from 'twin.macro'

import { ICON_LIST } from 'configs/fontAwesomeIcon'
import { BORDER_THEME } from 'constants/twTheme'
import { camelToKebab } from 'utils/string'

const TwWrapIcon = styled.div(() => [
  BORDER_THEME.BASE,
  tw`flex h-24 w-24 items-center justify-center rounded-lg border`,
])

export const IconFa = () => {
  const allIcons = ICON_LIST.map((icon) => icon.iconName)

  return (
    <div className='flex items-center justify-between p-6'>
      {allIcons.map((key) => {
        return (
          <TwWrapIcon key={`font-awesome-icon-${key}`}>
            <FontAwesomeIcon
              icon={camelToKebab(key) as keyof IconProp}
              size='3x'
            />
          </TwWrapIcon>
        )
      })}
    </div>
  )
}
