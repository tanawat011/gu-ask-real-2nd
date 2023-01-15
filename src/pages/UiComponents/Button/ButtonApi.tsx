import tw from 'twin.macro'

import { Title } from 'components/PageUiComponent'
import { Table } from 'components/Table'

import { ButtonApiColumns, ButtonApiData } from './data'

const TwContainer = tw.div`mb-8`

export const ButtonApi = () => {
  return (
    <TwContainer>
      <Title title='API' />

      <Table columns={ButtonApiColumns} data={ButtonApiData} />
    </TwContainer>
  )
}
