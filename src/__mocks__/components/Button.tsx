// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

export const Button = ({ onClick, size, ...more }) => {
  Object.entries(more).forEach(([key, value]) => {
    if (typeof more[key] === 'boolean') {
      more[key] = `${value}`
    }
  })

  return (
    <button
      data-testid='button'
      {...(size && { 'data-size': size })}
      onClick={onClick}
      {...more}
    >
      Button
    </button>
  )
}
