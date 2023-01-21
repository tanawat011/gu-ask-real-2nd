import tw, { styled } from 'twin.macro'

import { BG_THEME, BORDER_THEME, TEXT_THEME } from 'constants/twTheme'

type Columns<T> = {
  key: keyof T
  label: string
}

type TwTableCommonProps<T> = {
  columns: Columns<T>[]
  data: T[]
}

const TwTable = tw.table`w-full`

const TwThead = styled.thead(() => [BG_THEME.TABLE_HEAD])
const TwTheadTh = styled.th(() => [
  TEXT_THEME.TABLE_HEAD,
  tw`px-6 py-3 text-left font-semibold text-xs`,
])

const TwTbody = tw.tbody``
const TwTr = styled.tr(() => [
  [BG_THEME.TABLE_BODY, BG_THEME.TABLE_ROW, BORDER_THEME.BASE],
  tw`border-t`,
])
const TwTd = styled.td(() => [
  TEXT_THEME.TABLE_BODY,
  tw`px-6 py-4 font-semibold text-sm leading-6`,
])

export const TableCommon = <T,>({ columns, data }: TwTableCommonProps<T>) => {
  return (
    <TwTable>
      <TwThead>
        <tr>
          {columns.map((column, i) => (
            <TwTheadTh key={i}>{column.label}</TwTheadTh>
          ))}
        </tr>
      </TwThead>

      <TwTbody>
        {data.map((row, i) => (
          <TwTr key={i}>
            {columns.map((column, j) => (
              <TwTd key={j}>{row[column.key as never]}</TwTd>
            ))}
          </TwTr>
        ))}
      </TwTbody>
    </TwTable>
  )
}
