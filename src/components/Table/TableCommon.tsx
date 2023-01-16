type Columns<T> = {
  key: keyof T
  label: string
}

type TwTableCommonProps<T> = {
  columns: Columns<T>[]
  data: T[]
}

export const TableCommon = <T,>({ columns, data }: TwTableCommonProps<T>) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, i) => (
            <th key={i}>{column.label}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {columns.map((column, j) => (
              <td key={j}>{row[column.key as never]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
