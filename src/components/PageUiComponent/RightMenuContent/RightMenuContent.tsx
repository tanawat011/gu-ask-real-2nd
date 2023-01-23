import React from 'react'

import { Link } from 'react-scroll'
import tw, { css, styled } from 'twin.macro'

import { Title } from 'components/PageUiComponent'
import { TEXT_THEME } from 'constants/twTheme'

type RightMenuContentProps = {
  title: string
  menuList: {
    title: string
  }[]
}

const TwUl = styled.ul(() => [TEXT_THEME.DETAIL, tw`grid gap-2`])
const TwLink = styled(Link)(() => [
  tw`cursor-pointer select-none hover:(font-semibold text-gray-900) dark:hover:text-gray-50`,
  css`
    &.active {
      ${tw`font-semibold text-gray-900 dark:text-gray-50`}
    }
  `,
])

export const RightMenuContent: React.FC<RightMenuContentProps> = ({
  title,
  menuList,
}) => {
  return (
    <>
      <Title size='xs' title={title} />

      <TwUl>
        {menuList.map((item, index) => {
          const { title: text } = item

          const id = text.replaceAll(' ', '-').toLowerCase()

          return (
            <li key={`${index}`}>
              <TwLink
                activeClass='active'
                to={id}
                spy={true}
                isDynamic
                containerId='main-layout'
                offset={-16}
              >
                {text}
              </TwLink>
            </li>
          )
        })}
      </TwUl>
    </>
  )
}
