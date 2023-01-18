import tw, { styled } from 'twin.macro'

import { DARK_THEME, LIGHT_THEME } from 'constants/twTheme'

type Columns<T> = {
  key: keyof T
  label: string
}

type TwTableCommonProps<T> = {
  columns: Columns<T>[]
  data: T[]
}

const TwTable = tw.table`w-full`

const TwThead = styled.thead(() => [
  [DARK_THEME.TABLE.HEADER.BG_COLOR],
  [LIGHT_THEME.TABLE.HEADER.BG_COLOR],
])
const TwTheadTh = styled.th(() => [
  [DARK_THEME.TABLE.HEADER.HEAD.TEXT_COLOR],
  [LIGHT_THEME.TABLE.HEADER.HEAD.TEXT_COLOR],
  tw`px-6 py-3 text-left font-semibold text-xs`,
])

const TwTbody = tw.tbody``
const TwTr = styled.tr(() => [
  [
    DARK_THEME.TABLE.BODY.ROW.BG_COLOR,
    DARK_THEME.TABLE.BODY.ROW.BORDER_COLOR,
    DARK_THEME.TABLE.BODY.ROW.HOVER.BG_COLOR,
  ],
  [
    LIGHT_THEME.TABLE.BODY.ROW.BG_COLOR,
    LIGHT_THEME.TABLE.BODY.ROW.BORDER_COLOR,
    LIGHT_THEME.TABLE.BODY.ROW.HOVER.BG_COLOR,
  ],
  tw`border-t`,
])
const TwTd = styled.td(() => [
  [DARK_THEME.TABLE.BODY.DATA.TEXT_COLOR],
  [LIGHT_THEME.TABLE.BODY.DATA.TEXT_COLOR],
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
