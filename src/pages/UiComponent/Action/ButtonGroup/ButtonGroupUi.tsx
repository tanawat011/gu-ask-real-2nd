import { useUiDisplayLayoutContext } from 'hooks/UiDisplayLayout'

import {
  menuItems,
  containerId,
  componentApiTableData,
} from './ButtonGroupUi.data'
import { ButtonGroupUiBasic } from './ButtonGroupUiBasic'
import { ButtonGroupUiBlock } from './ButtonGroupUiBlock'
import { ButtonGroupUiColor } from './ButtonGroupUiColor'
import { ButtonGroupUiDisabled } from './ButtonGroupUiDisabled'
import { ButtonGroupUiLoading } from './ButtonGroupUiLoading'
import { ButtonGroupUiShape } from './ButtonGroupUiShape'
import { ButtonGroupUiSize } from './ButtonGroupUiSize'
import { ButtonGroupUiVertical } from './ButtonGroupUiVertical'

export const ButtonGroupUi = () => {
  useUiDisplayLayoutContext({
    title: 'Button Group',
    description:
      'The button group can be used to group related buttons together.',
    containerId,
    apiId: menuItems.api.id,
    apiName: menuItems.api.name,
    apiData: componentApiTableData as never,
    menuItems: menuItems,
  })

  return (
    <>
      <ButtonGroupUiBasic {...menuItems.basic} />
      <ButtonGroupUiColor {...menuItems.color} />
      <ButtonGroupUiSize {...menuItems.size} />
      <ButtonGroupUiShape {...menuItems.shape} />
      <ButtonGroupUiDisabled {...menuItems.disabled} />
      <ButtonGroupUiLoading {...menuItems.loading} />
      <ButtonGroupUiBlock {...menuItems.block} />
      <ButtonGroupUiVertical {...menuItems.vertical} />
    </>
  )
}
