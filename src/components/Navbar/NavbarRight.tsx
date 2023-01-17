import type { LocalSettingState } from 'recoils/atoms'

import { US } from 'country-flag-icons/react/3x2'
import tw from 'twin.macro'

import { IconBell, IconGear } from 'components/Icons'
import { useLocalSetting } from 'hooks/useLocalSetting'
import { defaultLocalSetting } from 'recoils/atoms'

const TwIconProfile = tw.div`h-8 w-8 rounded-full bg-cadet-grey dark:bg-red-500`

const TwNavbarRight = tw.div`flex w-full items-center justify-end`
const TwNavbarItem = tw.div`mx-1 cursor-pointer p-2 hover:(rounded-full bg-black bg-opacity-40)`

const TwWrapIcon = tw.div`flex h-6 w-6 items-center justify-center`

const TwNavbarProfileContainer = tw.div`ml-3 flex cursor-pointer items-center pr-3`
const TwNavbarProfileWrap = tw.div`ml-2 flex select-none flex-col`
const TwNavbarProfileRole = tw.span`text-xs`
const TwNavbarProfileName = tw.span`font-bold text-sm`

export const NavbarRight = () => {
  const [, setLocalSetting] = useLocalSetting()

  const setDarkMode = () => {
    const _defaultLocalSetting = JSON.stringify(defaultLocalSetting)
    const oldLocalSetting = JSON.parse(
      localStorage.getItem('setting') || _defaultLocalSetting,
    ) as LocalSettingState

    const mode = oldLocalSetting.theme.mode

    oldLocalSetting.theme.mode = mode === 'light' ? 'dark' : 'light'

    setLocalSetting(oldLocalSetting)
    localStorage.setItem('setting', JSON.stringify(oldLocalSetting))
  }

  const setTheme = () => {
    const _defaultLocalSetting = JSON.stringify(defaultLocalSetting)
    const oldLocalSetting = JSON.parse(
      localStorage.getItem('setting') || _defaultLocalSetting,
    ) as LocalSettingState

    const _color = oldLocalSetting.theme.color

    oldLocalSetting.theme.color = _color === 'emerald' ? 'indigo' : 'emerald'

    setLocalSetting(oldLocalSetting)
    localStorage.setItem('setting', JSON.stringify(oldLocalSetting))
  }

  return (
    <TwNavbarRight>
      <TwNavbarItem className='select-none' onClick={setTheme}>
        Toggle Theme(Temp)
      </TwNavbarItem>

      <TwNavbarItem className='select-none' onClick={setDarkMode}>
        Toggle Mode(Temp)
      </TwNavbarItem>

      <TwNavbarItem>
        <US className='h-6 w-6' />
      </TwNavbarItem>

      <TwNavbarItem>
        <TwWrapIcon>
          <IconBell size='lg' />
        </TwWrapIcon>
      </TwNavbarItem>

      <TwNavbarItem>
        <TwWrapIcon>
          <IconGear size='lg' />
        </TwWrapIcon>
      </TwNavbarItem>

      <TwNavbarProfileContainer>
        <TwIconProfile />
        <TwNavbarProfileWrap>
          <TwNavbarProfileRole>Admin</TwNavbarProfileRole>

          <TwNavbarProfileName>Tanawat P</TwNavbarProfileName>
        </TwNavbarProfileWrap>
      </TwNavbarProfileContainer>
    </TwNavbarRight>
  )
}
