import type { IconProp } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ICON_LIST } from 'configs/fontAwesomeIcon'
import { camelToKebab } from 'utils/string'

import { Container, TwWrapIcon, WrapContainer } from './IconFa.styled'

export const IconFa = () => {
  const allIcons = ICON_LIST.map((icon) => icon.iconName)

  return (
    <WrapContainer>
      <Container>
        {allIcons.map((key) => {
          return (
            <TwWrapIcon key={`font-awesome-icon-${key}`}>
              <FontAwesomeIcon
                icon={camelToKebab(key) as keyof IconProp}
                size='3x'
              />

              <div className='text-xs'>{key}</div>
            </TwWrapIcon>
          )
        })}
      </Container>
    </WrapContainer>
  )
}
