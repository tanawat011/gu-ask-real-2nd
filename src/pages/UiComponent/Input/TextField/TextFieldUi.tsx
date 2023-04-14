import { useUiDisplayLayoutContext } from 'hooks/UiDisplayLayout'

import { menuItems, containerId, buttonApiTableData } from './TextFieldUi.data'
import { TextFieldUiBlock } from './TextFieldUiBlock'
import { TextFieldUiColor } from './TextFieldUiColor'
import { TextFieldUiDisabled } from './TextFieldUiDisabled'
import { TextFieldUiError } from './TextFieldUiError'
import { TextFieldUiForceColor } from './TextFieldUiForceColor'
import { TextFieldUiLabel } from './TextFieldUiLabel'
import { TextFieldUiRequired } from './TextFieldUiRequired'
import { TextFieldUiShape } from './TextFieldUiShape'
import { TextFieldUiSize } from './TextFieldUiSize'
import { TextFieldUiVariant } from './TextFieldUiVariant'
import { TextFieldUiWidth } from './TextFieldUiWidth'

export const TextFieldUi = () => {
  useUiDisplayLayoutContext({
    title: 'Text Field',
    description: 'Text field is used to get user input',
    containerId,
    apiId: menuItems.api.id,
    apiName: menuItems.api.name,
    apiData: buttonApiTableData as never,
    menuItems: menuItems,
  })

  return (
    <>
      <TextFieldUiVariant {...menuItems.variant} />
      <TextFieldUiSize {...menuItems.size} />
      <TextFieldUiShape {...menuItems.shape} />
      <TextFieldUiLabel {...menuItems.label} />
      <TextFieldUiError {...menuItems.error} />
      <TextFieldUiDisabled {...menuItems.disabled} />
      <TextFieldUiRequired {...menuItems.required} />
      <TextFieldUiWidth {...menuItems.width} />
      <TextFieldUiBlock {...menuItems.block} />
      <TextFieldUiColor {...menuItems.color} />
      <TextFieldUiForceColor {...menuItems.forceColor} />
    </>
  )
}
