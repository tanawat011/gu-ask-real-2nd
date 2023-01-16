// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

export const ComponentDisplay = ({ code, component }) => {
  return (
    <div data-testid='component-display'>
      {component}
      {code}
    </div>
  )
}
