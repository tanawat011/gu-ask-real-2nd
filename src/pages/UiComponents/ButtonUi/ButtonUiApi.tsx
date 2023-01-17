import tw from 'twin.macro'

import { Title } from 'components/PageUiComponent'
import { TableCommon } from 'components/Table'

import { ButtonApiColumns, ButtonApiData } from './data'

const TwContainer = tw.div`mb-8`

export const ButtonUiApi = () => {
  return (
    <TwContainer>
      <Title title='API' />

      <TableCommon columns={ButtonApiColumns} data={ButtonApiData} />
    </TwContainer>
  )
}
