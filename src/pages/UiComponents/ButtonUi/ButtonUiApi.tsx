import tw from 'twin.macro'

import { Title } from 'components/PageUiComponent'
import { TableCommon } from 'components/Table'
import { componentApiGuideColumns } from 'data'

import { buttonApiTableData, menuList } from './data'

const TwContainer = tw.div`mb-8`

export const ButtonUiApi = () => {
  return (
    <TwContainer id={menuList.api.id}>
      <Title title={menuList.api.name} />

      <TableCommon
        columns={componentApiGuideColumns}
        data={buttonApiTableData}
      />
    </TwContainer>
  )
}
