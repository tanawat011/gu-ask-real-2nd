import type { ComponentApiGuideData } from 'types'

import React from 'react'

import tw from 'twin.macro'

import { Title } from 'components/PageUiComponent'
import { TableCommon } from 'components/Table'
import { componentApiGuideColumns } from 'data'

const TwContainer = tw.div`mb-8`

export type UiDisplayTableApiProps = {
  apiId: string
  apiName: string
  apiData: ComponentApiGuideData<unknown>[]
}

export const UiDisplayTableApi: React.FC<UiDisplayTableApiProps> = (props) => {
  return (
    <TwContainer id={props.apiId}>
      <Title title={props.apiName} />

      <TableCommon columns={componentApiGuideColumns} data={props.apiData} />
    </TwContainer>
  )
}
