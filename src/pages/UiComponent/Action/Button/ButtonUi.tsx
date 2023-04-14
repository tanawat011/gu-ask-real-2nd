import { useUiDisplayLayoutContext } from 'hooks/UiDisplayLayout'

import { containerId, menuItems, buttonApiTableData } from './ButtonUi.data'
import { ButtonUiBlock } from './ButtonUiBlock'
import { ButtonUiColor } from './ButtonUiColor'
import { ButtonUiDisabled } from './ButtonUiDisabled'
import { ButtonUiIcon } from './ButtonUiIcon'
import { ButtonUiLoading } from './ButtonUiLoading'
import { ButtonUiShape } from './ButtonUiShape'
import { ButtonUiSize } from './ButtonUiSize'
import { ButtonUiVariant } from './ButtonUiVariant'
import { ButtonUiWithIcon } from './ButtonUiWithIcon'

export const ButtonUi = () => {
  useUiDisplayLayoutContext({
    title: 'Button',
    description: 'Button is used to triggers an action or event click',
    containerId,
    apiId: menuItems.api.id,
    apiName: menuItems.api.name,
    apiData: buttonApiTableData as never,
    menuItems: menuItems,
  })

  return (
    <>
      <ButtonUiVariant {...menuItems.variant} />
      <ButtonUiColor {...menuItems.color} />
      <ButtonUiSize {...menuItems.size} />
      <ButtonUiShape {...menuItems.shape} />
      <ButtonUiDisabled {...menuItems.disabled} />
      <ButtonUiIcon {...menuItems.icon} />
      <ButtonUiWithIcon {...menuItems.withIcon} />
      <ButtonUiLoading {...menuItems.loading} />
      <ButtonUiBlock {...menuItems.block} />
    </>
  )
}
