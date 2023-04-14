import { useUiDisplayLayoutContext } from 'hooks/UiDisplayLayout'

import { menuItems, containerId, buttonApiTableData } from './TextInputUi.data'
import { TextInputUiBasic } from './TextInputUiBasic'

export const TextInputUi = () => {
  useUiDisplayLayoutContext({
    title: 'Text Input',
    description: 'Text input is used to get user input',
    containerId,
    apiId: menuItems.api.id,
    apiName: menuItems.api.name,
    apiData: buttonApiTableData as never,
    menuItems: menuItems,
  })

  return (
    <>
      <TextInputUiBasic {...menuItems.variant} />
    </>
  )
}
