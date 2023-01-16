// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

export const Button = ({ onClick }) => {
  return (
    <button data-testid='button' onClick={onClick}>
      Button
    </button>
  )
}
